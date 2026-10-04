# Raport z prac SEO — etap M2

**Serwis:** wojewodastudio.pl (Krystian Wojewoda Hair Design, ul. Piotrkowska 293/305, Łódź)
**Gałąź:** `feat/seo-m2`. Do przejrzenia i ręcznego scalenia. Nie scalono jej z main i nie wdrożono na produkcję.
**Cel etapu:** wyższe pozycje na frazy „fryzjer Łódź”, „usługa + Łódź” (np. „koloryzacja włosów Łódź”)
oraz „najlepszy fryzjer Łódź” dzięki osobnym stronom usług, powiązanym ze stroną główną
w jedną grupę tematyczną.

---

## 1. Co zostało zrobione

### Strony usług

- **Nowa sekcja „Usługi” pod adresem wojewodastudio.pl/uslugi/** z listą całej oferty.
- **Osiem osobnych stron usług**, każda nastawiona na własną frazę „usługa + Łódź”:
  - Koloryzacja włosów: /uslugi/koloryzacja-wlosow/
  - Balayage, sombre i ombre (z refleksami Airtouch): /uslugi/balayage-ombre-sombre/
  - Pasemka i rozświetlanie: /uslugi/pasemka-rozswietlanie/
  - Strzyżenie damskie: /uslugi/strzyzenie-damskie/
  - Strzyżenie męskie: /uslugi/strzyzenie-meskie/
  - Fryzury ślubne i upięcia: /uslugi/fryzury-slubne/
  - Metamorfoza włosów: /uslugi/metamorfoza-wlosow/
  - Regeneracja i pielęgnacja włosów: /uslugi/regeneracja-wlosow/
- **Każda strona zawiera:**
  - opis usługi z kontekstem salonu przy Piotrkowskiej;
  - ceny pobierane automatycznie z cennika, więc po zmianie cennika zaktualizują się same;
  - 3–4 najczęstsze pytania z odpowiedziami;
  - informację, kto z zespołu specjalizuje się w danej usłudze;
  - przycisk „Umów wizytę” prowadzący do Booksy;
  - linki do powiązanych usług i artykułów na blogu.
- **Google dostaje o każdej usłudze komplet informacji:**
  - czym jest usługa;
  - kto ją wykonuje (salon, z adresem);
  - gdzie (Łódź);
  - w jakich widełkach cenowych.
  - Pytania i odpowiedzi oraz ścieżka „Strona główna › Usługi › Nazwa usługi” mogą pojawić się bezpośrednio w wynikach wyszukiwania.
- **Nie zmieniono żadnego istniejącego adresu ani żadnej ceny.** Wszystkie dotychczasowe strony działają pod tymi samymi adresami.

### Strona główna

- **Sekcja „Usługi fryzjerskie w Łodzi”** pokazuje karty wszystkich ośmiu usług, każdą z ceną „od” i linkiem do jej strony. Wcześniej były tam trzy ogólne kafelki bez linków.
- **Nowa sekcja pytań i odpowiedzi „Szukasz najlepszego fryzjera w Łodzi?”**. Fraza „najlepszy fryzjer w Łodzi” pojawia się w naturalnym pytaniu, bez upychania słów kluczowych.
- **Odświeżony opis strony w Google.** Pojawiają się w nim fryzury ślubne i informacja o pracy od 1996 roku.

### Linkowanie

- **Wszystkie strony łączą się w jedną grupę tematyczną.** Strona główna, cennik, blog i zespół prowadzą do stron usług, a strony usług prowadzą z powrotem do cennika, bloga, zespołu i rezerwacji. Dla Google to sygnał, że salon kompleksowo zna się na danym temacie.
- **„Usługi” w menu głównym i w stopce** na każdej podstronie.
- **Cennik ma listę „Opisy usług”** z linkami do każdej usługi.
- **Każdy artykuł na blogu prowadzi do powiązanych usług**, np. wpis o pielęgnacji skóry głowy prowadzi do regeneracji włosów i strzyżenia męskiego.

### Zespół

- **Każda strona usługi wskazuje specjalistów** i linkuje do ich profili, np.:
  - fryzury ślubne: Aneta i Monika;
  - koloryzacja i metamorfozy: Mariola Śnieg, Romina i Julia.
- Profile stylistów dostają dzięki temu linki z najważniejszych stron oferty, a klient od razu wie, do kogo się zapisać.

### Technika

- **Nowa usługa to jeden plik z treścią.** Nie trzeba ruszać wyglądu ani kodu stron. Mapa strony dla Google, menu kart i powiązania z blogiem aktualizują się same.
- **Wbudowana kontrola błędów.** Literówka w nazwie powiązanego artykułu, stylisty lub pozycji cennika zatrzyma publikację, zamiast wypuścić stronę z martwym linkiem albo bez ceny.
- **Mapa strony (sitemap.xml)** zawiera stronę /uslugi/ i wszystkie strony usług.
- **Nieistniejący adres w sekcji usług zwraca poprawną stronę błędu 404.**
- **Poprawiony nagłówek na tabletach.** Po dodaniu pozycji „Usługi” menu nachodziło na logo przy szerokości ok. 800 px. Teraz tablet dostaje menu mobilne i dolny pasek „Umów wizytę”.
- **Budowanie strony i lint (automatyczna kontrola jakości kodu) przechodzą bez błędów.**

---

## 2. Do zrobienia (TODO)

1. **Akceptacja treści stron usług.** Wszystkie opisy i pytania to szkic przygotowany na podstawie informacji z serwisu. W kodzie są oznaczone `// SZKIC DO WERYFIKACJI`. Przede wszystkim do sprawdzenia:
   - czy lista specjalistów przy każdej usłudze jest aktualna;
   - czym dokładnie jest „Zabieg Enviro” (producent, działanie); opis celowo jest bardzo ogólny.
2. **Nowy cennik od klienta.** Po jego wpisaniu do pliku cennika wszystkie ceny na stronach usług i kartach zaktualizują się same. Przy nowych pozycjach trzeba tylko sprawdzić, czy mają przypisaną usługę.
3. **Zdjęcia do stron usług.** Obecnie strony korzystają z kilku zdjęć, które już były w serwisie (część się powtarza). Potrzebne są własne zdjęcia efektów:
   - koloryzacja, balayage, pasemka;
   - strzyżenie damskie i męskie;
   - upięcie ślubne;
   - metamorfoza „przed i po”;
   - zabieg pielęgnacyjny.

   Realne zdjęcia z salonu to jeden z najmocniejszych sygnałów jakości.
4. **Zdjęcia zespołu.** Uzupełnić brakujące lub nieaktualne portrety (np. Julia ma tylko wersję .webp) i rozważyć zdjęcia stylistów przy pracy do stron usług.
5. **Dane do potwierdzenia:**
   - **Rok 1996** jako rok założenia salonu. Jest używany w danych dla Google i w treściach, a w biografii jest to rok rozpoczęcia praktyk Krystiana.
   - **Liczby opinii.** Sekcja „O salonie” pokazuje 3657 opinii i średnią 5.0 z Booksy wpisane na sztywno, a reszta strony pokazuje 4,7 i 460 opinii z Google. Warto ujednolicić, skąd pochodzą liczby.
   - **Oferta keratynowego prostowania / nanoplastii.** Nie ma jej w cenniku, więc nie powstała osobna strona. Jeśli salon ją oferuje, wystarczy dodać pozycję do cennika i jeden plik usługi.
   - **Współrzędne salonu** (TODO z M1). Przepisać dokładnie z wizytówki Google.

---

## 3. Rekomendacje poza stroną

- **Opinie w Google.** Prosić klientki i klientów o opinię w wizytówce Google, najlepiej z nazwą usługi w treści (np. „balayage u Marioli”). Treść opinii wzmacnia pozycje na frazy „usługa + Łódź”, a liczba i świeżość opinii najmocniej wpływają na „najlepszy fryzjer Łódź” w Mapach. Odpowiadać na każdą opinię.
- **Wizytówka Google (Google Business Profile):**
  - dodać usługi z tymi samymi nazwami co na stronie i podlinkować je do odpowiednich stron /uslugi/...;
  - regularnie publikować zdjęcia efektów i wpisy.
- **Katalogi i spójność NAP.** Nazwa, adres i telefon muszą być identyczne w Booksy, Facebooku, Instagramie, Panoramie Firm, pkt.pl, Zumi, Yelp i lokalnych katalogach łódzkich. Rozjazdy w adresie („Piotrkowska 293/305” vs „293”) osłabiają pozycje lokalne.
- **Linki zewnętrzne do nowych stron usług:**
  - przy współpracach z lokalnymi mediami, blogami ślubnymi i lifestyle’owymi z Łodzi (np. wesela w Łodzi, suknie ślubne, fotografowie) linkować bezpośrednio do /uslugi/fryzury-slubne/, a nie tylko do strony głównej;
  - partnerzy branżowi (makijażystki, fotografowie, salony sukien) mogą polecać salon z linkiem do konkretnej usługi;
  - w opisach na Instagramie i Facebooku przy zdjęciach metamorfoz linkować do /uslugi/metamorfoza-wlosow/ lub odpowiedniej usługi.
- **Blog.** Kolejne artykuły pisać pod konkretne usługi (np. „Balayage czy pasemka — co wybrać?”, „Jak przygotować włosy do ślubu”) i wpisywać je jako powiązane z daną usługą. Link w obie strony pojawi się wtedy automatycznie.
