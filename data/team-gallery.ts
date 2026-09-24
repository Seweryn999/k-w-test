import type { StaticImageData } from "next/image";

import zespol1 from "@/assets/images/zespol1.webp";
import zespol2 from "@/assets/images/zespol2.webp";
import zespol3 from "@/assets/images/zespol3.webp";
import zespol4 from "@/assets/images/zespol4.webp";
import zespol5 from "@/assets/images/zespol5.webp";

export type TeamBannerPhoto = {
  src: StaticImageData;
  alt: string;
  /**
   * Punkt kadru (CSS `object-position`) w banerze. Baner bywa szerszy niż
   * zdjęcie 3:2 (laptop, monitor 16:9, telefon w poziomie), więc `cover`
   * odcina pas z góry i z dołu — ta wartość decyduje, ile z której strony.
   * Druga liczba ma być na tyle mała, żeby najwyżej położona głowa została
   * w kadrze nawet na ultrapanoramicznym ekranie. Domyślnie `50% 20%`.
   */
  position?: string;
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
    // Najwyżej ze wszystkich — głowa stojącej w tyle zaczyna się ok. 8% od góry.
    position: "50% 10%",
  },
  {
    src: zespol2,
    alt: "Roześmiany zespół salonu Krystian Wojewoda Hair Design wygłupia się podczas sesji zdjęciowej",
    // Głowy od ok. 16% wysokości.
    position: "50% 30%",
  },
  {
    src: zespol3,
    alt: "Zespół salonu Krystian Wojewoda Hair Design w dżinsach i jasnych koszulach na tle białej ściany",
    // Głowy od ok. 15% wysokości.
    position: "50% 25%",
  },
  {
    src: zespol4,
    alt: "Zespół salonu Krystian Wojewoda Hair Design w czarnych koszulach i dżinsach stoi w jednym rzędzie",
    // Głowy od ok. 15% wysokości.
    position: "50% 25%",
  },
  {
    src: zespol5,
    alt: "Zespół salonu Krystian Wojewoda Hair Design w czarnych strojach na luzie w jasnym studiu",
    // Blondynka w tyle z ręką nad głową — ok. 11% od góry.
    position: "50% 15%",
  },
];
