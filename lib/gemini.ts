const GEMINI_MODEL = "gemini-2.5-flash";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `Jesteś wirtualnym asystentem salonu fryzjerskiego Krystian Wojewoda Hair Design w Łodzi.
Odpowiadaj w języku, w którym pisze użytkownik. Bądź zwięzły, przyjazny i konkretny.
Korzystaj z poniższych informacji o salonie, gdy są odpowiednie, oraz ze swojej ogólnej wiedzy fryzjerskiej (porady dotyczące pielęgnacji, koloryzacji, doboru fryzury itp.).
Jeśli użytkownik pyta o łączną/sumaryczną cenę kilku usług, policz sumę na podstawie cennika i podaj wynik.
Jeśli nie znasz dokładnej ceny lub szczegółu dotyczącego salonu, zaproponuj kontakt: tel. +48 730 796 861, e-mail salonkwhd@gmail.com lub rezerwację przez Booksy.

Informacje o salonie:
`;

export async function askGemini(
  history: ChatMessage[],
  context: string,
  hint?: string,
): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const contents = history.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));

  const hintBlock = hint
    ? `\n\nPodpowiedź z systemu cennikowego dla ostatniego pytania użytkownika (wykorzystaj ją, jeśli jest trafna, w przeciwnym razie zignoruj):\n${hint}`
    : "";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: `${SYSTEM_PROMPT}${context}${hintBlock}` }],
          },
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 800,
            thinkingConfig: {
              thinkingBudget: 0,
            },
          },
        }),
      },
    );

    if (!res.ok) return null;

    const data = (await res.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return text?.trim() ?? null;
  } catch {
    return null;
  }
}
