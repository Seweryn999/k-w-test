import type { StaticImageData } from "next/image";

import zespol1 from "@/assets/images/zespol1.webp";
import zespol2 from "@/assets/images/zespol2.webp";
import zespol3 from "@/assets/images/zespol3.webp";
import zespol4 from "@/assets/images/zespol4.webp";
import zespol5 from "@/assets/images/zespol5.webp";

export type TeamBannerPhoto = {
  src: StaticImageData;
  alt: string;
};

/**
 * JEDYNE źródło zdjęć do przewijanego banera na /zespol/ — pliki
 * `assets/images/zespol{n}.webp`, rosnąco po numerze.
 *
 * Nowe zdjęcie: wrzuć `zespol6.webp` do assets/images, dodaj import powyżej
 * i jeden wpis na końcu tablicy. Kolejność w tablicy = kolejność slajdów.
 * Importy statyczne (a nie ścieżki z /public) dają wymiary i `placeholder="blur"`.
 */
export const teamBannerPhotos: TeamBannerPhoto[] = [
  {
    src: zespol1,
    alt: "Zespół salonu Krystian Wojewoda Hair Design pozuje na białych podestach w jasnym studiu",
  },
  {
    src: zespol2,
    alt: "Roześmiany zespół salonu Krystian Wojewoda Hair Design wygłupia się podczas sesji zdjęciowej",
  },
  {
    src: zespol3,
    alt: "Zespół salonu Krystian Wojewoda Hair Design w dżinsach i jasnych koszulach na tle białej ściany",
  },
  {
    src: zespol4,
    alt: "Zespół salonu Krystian Wojewoda Hair Design w czarnych koszulach i dżinsach stoi w jednym rzędzie",
  },
  {
    src: zespol5,
    alt: "Zespół salonu Krystian Wojewoda Hair Design w czarnych strojach na luzie w jasnym studiu",
  },
];
