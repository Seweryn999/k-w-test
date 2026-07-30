import { FAQ, FALLBACK_ANSWER, SMALL_TALK, type FaqEntry } from "@/data/chatbot-faq";
import { team } from "@/data/team";
import { mainPrices } from "@/data/pricing";

const DIACRITICS: Record<string, string> = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => DIACRITICS[char] ?? char)
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Crude stemmer: strips common Polish inflectional endings down to a min length. */
function stem(word: string): string {
  if (word.length <= 4) return word;

  const endings = [
    "iami",
    "iemu",
    "ego",
    "emu",
    "ami",
    "ach",
    "owi",
    "ów",
    "om",
    "iej",
    "imi",
    "ymi",
    "ie",
    "ia",
    "ą",
    "ę",
    "y",
    "i",
    "a",
    "e",
  ];

  for (const ending of endings) {
    if (word.length - ending.length >= 4 && word.endsWith(ending)) {
      return word.slice(0, -ending.length);
    }
  }

  return word;
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter(Boolean)
    .map(stem);
}

function levenshtein(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  return dp[a.length][b.length];
}

function scoreEntry(entry: FaqEntry, messageTokens: string[]): number {
  let score = 0;

  for (const keyword of entry.keywords) {
    const keywordTokens = tokenize(keyword);

    if (keywordTokens.length > 1) {
      const allWordsPresent = keywordTokens.every((kw) =>
        messageTokens.includes(kw),
      );
      if (allWordsPresent) {
        score += keywordTokens.length * 2;
      }
      continue;
    }

    const single = keywordTokens[0];
    if (!single) continue;

    if (messageTokens.includes(single)) {
      score += 2;
      continue;
    }

    const fuzzyMatch = messageTokens.some(
      (token) =>
        single.length >= 4 &&
        token.length >= 4 &&
        levenshtein(token, single) <= 1,
    );

    if (fuzzyMatch) {
      score += 1;
    }
  }

  return score;
}

function bestMatch(entries: FaqEntry[], messageTokens: string[]): {
  entry: FaqEntry | null;
  score: number;
} {
  let bestEntry: FaqEntry | null = null;
  let bestScore = 0;

  for (const entry of entries) {
    const score = scoreEntry(entry, messageTokens);
    // On a tie, prefer the later (more specific) entry over the generic one.
    if (score > 0 && score >= bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return { entry: bestEntry, score: bestScore };
}

function resolveAnswer(entry: FaqEntry): string {
  return typeof entry.answer === "function" ? entry.answer() : entry.answer;
}

/** One entry per team member, generated from the same data used on the Zespół page. */
const TEAM_ENTRIES: FaqEntry[] = team.map((member) => ({
  keywords: [member.name, member.nickname, ...(member.extraKeywords ?? [])],
  answer: () => {
    const intro = `${member.name} ("${member.nickname}") – ${member.role}.`;
    return member.bio ? `${intro} ${member.bio}` : intro;
  },
}));

/**
 * One entry per price-list row whose service name has at least two meaningful
 * words, generated from the same data used on the Cennik page. Single-word
 * services (e.g. "Modelowanie", "Broda") are left to the general FAQ entries.
 */
const PRICE_ENTRIES: FaqEntry[] = mainPrices
  .map((row) => {
    const cleanedService = row.service.replace(/[*<>]/g, "").trim();
    return { cleanedService, row };
  })
  .filter(({ cleanedService }) => tokenize(cleanedService).length > 1)
  .map(({ cleanedService, row }) => ({
    keywords: [cleanedService],
    answer: `${cleanedService}: ${row.standard} zł (Standard) / ${row.vip} zł (VIP).`,
  }));

const ALL_FAQ: FaqEntry[] = [...FAQ, ...PRICE_ENTRIES, ...TEAM_ENTRIES];

export function getChatbotReply(message: string): string {
  const messageTokens = tokenize(message);

  const smallTalk = bestMatch(SMALL_TALK, messageTokens);
  const faq = bestMatch(ALL_FAQ, messageTokens);

  if (smallTalk.score > 0 && smallTalk.score >= faq.score) {
    return resolveAnswer(smallTalk.entry!);
  }

  if (faq.score > 0) {
    return resolveAnswer(faq.entry!);
  }

  return FALLBACK_ANSWER;
}
