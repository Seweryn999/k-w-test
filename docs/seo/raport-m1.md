# Raport z prac SEO — etap M1

**Serwis:** wojewodastudio.pl (Krystian Wojewoda Hair Design, ul. Piotrkowska 293/305, Łódź)
**Gałąź:** `feat/seo-m1` — do przejrzenia i scalenia ręcznie, nie wdrożono na produkcję
**Cel etapu:** przewaga w wynikach Google nad luisse.pl na frazy typu „fryzjer Łódź”
oraz skrócenie drogi klienta do rezerwacji w Booksy

---

## 1. Co zostało zrobione

### Treść

- **Blog został uporządkowany bez zmiany jednego adresu.** Wszystkie trzy
  artykuły zachowały dotychczasowe adresy, więc pozycje wypracowane w Google
  są nienaruszone.
- **Dodanie nowego artykułu to teraz jeden plik z tekstem plus jedna pozycja
  na liście wpisów.** Wcześniej ten sam tytuł, data i opis musiały zostać
  wpisane ręcznie w trzech miejscach, co prędzej czy później kończy się
  rozjazdem — na stronie głównej wisiał już wpis z inną kategorią i innym
  zdjęciem niż na liście bloga.
- **Naprawiony martwy link.** W artykule „Jaka fryzura pasuje do mojej twarzy?”
  przycisk „poprzedni artykuł” prowadził pod nieistniejący adres — klient
  trafiał na stronę błędu.
- **Uzupełnione opisy zdjęć.** Zdjęcia stylistów miały w kodzie wpisane samo
  imię („Aneta”), teraz niosą stanowisko i miasto. To wpływa na widoczność
  w wyszukiwarce grafik Google i na dostępność strony dla osób korzystających
  z czytników ekranu.
- **Tytuły i opisy podstron przepisane pod frazy lokalne** — strona główna
  celuje wprost w „fryzjer Łódź”, blog w „porady fryzjerów z Łodzi”.
- **Korekta cen — wszystkie kwoty na stronie zgodne z cennikiem.** Opis
  w osobnej sekcji poniżej.
- **Nowa sekcja pytań i odpowiedzi na stronie Kontakt** (8 pytań): jak umówić
  wizytę, godziny otwarcia, dojazd, co wchodzi w cenę koloryzacji, koszt
  konsultacji, fryzury ślubne, brak usług barberskich. To pytania, które
  klienci i tak zadają przez telefon, a przy okazji odpowiadają na hasła
  wpisywane w Google.

### Dane strukturalne (to, co Google czyta o firmie)

Dane strukturalne to „metryczka” firmy, której użytkownik nie widzi, ale
która decyduje o tym, jak wygląda wynik wyszukiwania i czy Google w ogóle
rozumie, czym jest ta strona.

- **Wszystkie dane firmy w jednym miejscu.** Adres, telefon, e-mail, godziny
  otwarcia, współrzędne i linki do profili były wcześniej przepisane w sześciu
  różnych plikach. Zmiana godzin otwarcia oznaczała ryzyko, że w jednym miejscu
  zostanie stara wersja — i że Google zobaczy co innego niż klient. Teraz
  aktualizuje się to raz.
- **Rozbudowana wizytówka salonu (HairSalon).** Dotychczas Google dostawał
  podstawowy zestaw. Doszły: współrzędne geograficzne, obszar działania
  (Łódź i województwo łódzkie), pełny opis, e-mail, rok założenia, region
  w adresie, link do wizytówki w Mapach oraz **oznaczenie Booksy jako oficjalnego
  kanału rezerwacji** — Google rozumie teraz, że tę usługę można zarezerwować
  online.
- **Ścieżki nawigacyjne na wszystkich podstronach.** W wynikach wyszukiwania
  zamiast długiego adresu może pojawić się czytelna ścieżka
  „wojewodastudio.pl › Blog › Jak dbać o skórę głowy”. Ścieżka jest też
  widoczna na stronie — Google wymaga, żeby oznaczenie miało pokrycie w treści.
- **Artykuły opisane jako wpisy blogowe** — z autorem, datą publikacji,
  własnym zdjęciem i słowami kluczowymi. Udostępniony link do artykułu pokazuje
  teraz okładkę wpisu, a nie wspólne zdjęcie zespołu.
- **Sekcja pytań i odpowiedzi oznaczona jako FAQ**, co daje szansę na
  rozwinięte wyniki w Google.
- **Dziewięć profili stylistów opisanych jako osoby powiązane z salonem.**
  To podstrony, których konkurencja nie ma — teraz Google rozumie, kogo
  dotyczą i że pracują w tym salonie.

> **Świadoma decyzja:** nie oznaczyliśmy oceny 4,7 i 460 opinii jako danych
> strukturalnych. Google traktuje przepisywanie własnych opinii na własną
> stronę jako próbę zawyżania wyniku i karze za to ręcznie. Gwiazdki
> w wynikach biorą się z wizytówki Google, nie ze strony — dlatego
> w rekomendacjach poniżej kładziemy nacisk na wizytówkę.

### Rezerwacja

- **Jeden, spójny przycisk „Umów wizytę” w całym serwisie**, zawsze prowadzący
  do kalendarza Booksy i zawsze wyglądający tak samo. Wcześniej część
  przycisków o tej samej nazwie prowadziła do formularza kontaktowego, część
  do Booksy, a część do numeru telefonu.
- **Przycisk rezerwacji na stałe w górnym pasku** (na komputerach). Wcześniej
  w menu było hasło „Umów”, które prowadziło na stronę kontaktu — czyli
  o jedno kliknięcie dalej, niż trzeba.
- **Przyklejony pasek rezerwacji na telefonach**, widoczny na każdej
  podstronie bez przewijania: przycisk „Umów wizytę” i przycisk telefonu.
  Większość ruchu lokalnego to telefony, a klient rzadko przewija do stopki.
- **CTA po sekcji usług** na stronie głównej — w momencie, w którym klient
  wie już, czego szuka.
- **CTA na końcu każdego artykułu** — dotąd wpisy kończyły się wyłącznie
  numerem telefonu, bez możliwości rezerwacji online.
- **Profile stylistów i cennik prowadzą prosto do kalendarza.** Wcześniej
  „Umów wizytę” na profilu stylisty prowadziło na stronę kontaktu.
- **Rezerwacja w stopce**, czyli na każdej podstronie serwisu.

### Technika

- **Mapa strony generuje się sama.** Wcześniej była to ręcznie pisana lista
  adresów — każdy nowy artykuł czy nowa osoba w zespole wymagały pamiętania
  o dopisaniu. Teraz buduje się z tych samych danych co strona i niesie daty
  publikacji wpisów.
- **Adres kanoniczny na każdej podstronie** — potwierdzone dla wszystkich
  19 stron. Zabezpiecza przed uznaniem przez Google, że ta sama treść
  występuje pod kilkoma adresami.
- **Naprawiony problem wpływający na szybkość ładowania.** Nagłówek i zdjęcie
  główne artykułów oraz stron Blog i Kontakt trafiały do przeglądarki jako
  przezroczyste i rozmyte, a odsłaniały się dopiero po doładowaniu skryptów.
  Google mierzy szybkość od momentu, w którym treść staje się widoczna —
  sami psuliśmy sobie wynik animacją. Teraz treść nad linią zgięcia pokazuje
  się od razu, animacje zostały tylko w dalszych sekcjach.
- **Animacje respektują systemowe ustawienie ograniczonego ruchu** — wymóg
  dostępności.
- **Godziny otwarcia i pełny adres w stopce na każdej podstronie**, z jawną
  informacją, że w niedzielę salon jest zamknięty (wcześniej brakowało jej
  także na stronie Kontakt).
- Zablokowano indeksowanie technicznego adresu obsługi czatu.
- Usunięto cztery puste pliki, do których nic nie sięgało.
- Chatbot czyta godziny i cennik z tego samego źródła co strona, więc nie
  poda klientowi innych informacji niż te widoczne w serwisie.

### Linkowanie wewnętrzne

- **Kafle bloga na stronie głównej są wreszcie klikalne.** Dotąd wyglądały jak
  linki, ale nimi nie były — strona główna nie przekazywała artykułom żadnej
  siły, a klient klikał w pustkę.
- **Każdy artykuł prowadzi do cennika, zespołu i kontaktu.**
- **Stopka linkuje do wszystkich kluczowych podstron** (cennik, zespół, blog,
  kontakt, dokumenty) z każdego miejsca serwisu.
- **Nawigacja poprzedni/następny między artykułami** wylicza się automatycznie,
  więc nie może już wskazać nieistniejącej strony.

---

## 2. Do potwierdzenia z klientem

| # | Sprawa | Dlaczego to ważne |
|---|--------|-------------------|
| 1 | **Dokładne współrzędne z wizytówki Google** | Wpisaliśmy pozycję przybliżoną z mapy. Warto przepisać dokładne współrzędne z Profilu Firmy w Google, żeby pinezka w danych strukturalnych zgadzała się z tą w Mapach. |
| 2 | **Czy salon ma profil na TikToku lub YouTube?** | Obecnie zgłaszamy Google tylko Instagram, Facebook i Booksy. Każdy dodatkowy potwierdzony profil wzmacnia wiarygodność firmy. |
| 3 | ~~Rozjazd cen na stronie głównej~~ — **rozwiązane**, opis w sekcji „Korekta cen” poniżej. Do potwierdzenia zostaje jedno: **czy kolumna „VIP” w cenniku to nadal aktualna oferta?** Nie jest nigdzie pokazywana klientowi. | Jeśli to program lojalnościowy, warto go opisać na stronie; jeśli relikt, można kolumnę usunąć z danych. |
| 4 | **Czy godziny są nadal aktualne?** | Pn–pt 9:00–21:00, sobota 9:00–15:00, niedziela zamknięte. Muszą być identyczne na stronie, w Google i w Booksy. |
| 5 | **Czy adres e-mail salonkwhd@gmail.com jest właściwy do kontaktu z klientami?** | Widnieje w danych strukturalnych i w stopce. |
| 6 | **Zdjęcie do udostępnień w mediach społecznościowych** | Obecnie wszystkie podstrony (poza artykułami) dzielą jedno zdjęcie zespołu. Warto rozważyć osobne dla cennika i strony kontaktu. |
| 7 | **Dwa nieużywane pliki graficzne w repozytorium** | `background.png` w katalogu głównym i w `assets/images` — łącznie ok. 2,6 MB, do niczego niepodpięte. Zostawione na wypadek, gdyby były potrzebne; do usunięcia po potwierdzeniu. |
| 8 | **Opinie: 460 / ocena 4,7** | Liczby są wpisane na stałe. Warto ustalić, jak często je aktualizujemy — nieaktualna liczba działa na niekorzyść. |

---

## 2a. Korekta cen (poprawka po pierwszym przeglądzie)

### Na czym polegał błąd

Strona główna i chatbot podawały kwoty **wyższe niż obowiązujący cennik**.
Przyczyna była jedna i wspólna dla wszystkich wystąpień: kwoty przepisano
z kolumny **„VIP"** w danych cennika — kolumny, której **strona /cennik
nigdzie nie pokazuje klientowi**. Klient widzi wyłącznie cennik Marioli
i Krystiana oraz cennik pozostałych fryzjerów, a te są tańsze.

W praktyce oznaczało to, że klient trafiający na stronę główną widział cenę
wyższą, niż zapłaciłby w salonie — co zniechęca do rezerwacji, a w skrajnym
przypadku wygląda na wprowadzanie w błąd.

### Co zostało poprawione

**Strona główna, sekcja „Przejrzyste ceny":**

| Usługa | Było | Jest | Skąd wynika |
|--------|------|------|-------------|
| Strzyżenie damskie | od 190 zł | **od 170 zł** | cennik pozostałych fryzjerów |
| Strzyżenie męskie | od 120 zł | **od 100 zł** | cennik pozostałych fryzjerów |
| Balayage / Sombre / Ombre + strzyżenie | od 460 zł | **od 450 zł** | cennik pozostałych fryzjerów |
| Pasemka + strzyżenie | od 360 zł | od 360 zł | bez zmian — kwota była poprawna |

> Balayage nie był wskazany do poprawy w zgłoszeniu, ale zawierał dokładnie
> ten sam błąd (kwota z kolumny VIP, zawyżona o 10 zł). Ponieważ kwoty liczą
> się teraz automatycznie z cennika, poprawił się razem z pozostałymi.

**Chatbot** — pięć odpowiedzi zawierało zawyżone kwoty:

| Odpowiedź na pytanie o… | Było | Jest |
|---|---|---|
| cennik ogólnie | strzyżenie damskie 190–260 zł, farbowanie ze strzyżeniem 440–520 zł, męskie 120–150 zł | **170–260 zł**, **360–520 zł**, **100–150 zł** |
| strzyżenie | damskie 190–260 zł, męskie 120–150 zł | **170–260 zł**, **100–150 zł** |
| koloryzację | „od ok. 130 zł za tonowanie" | **„od 120 zł za tonowanie"** |
| brodę / strzyżenie męskie | męskie 120–150 zł | **100–150 zł** |
| strzyżenie dziecięce | 70–110 zł | bez zmian — kwota była poprawna |

**Dodatkowo:** chatbot cytował dotąd wyłącznie tabelę Marioli i Krystiana, więc
po obniżeniu kwot na stronie głównej odpowiadałby sprzecznie z nią („od 170 zł"
na stronie kontra „220–260 zł" od bota). Teraz mówi wprost, z której tabeli
pochodzi cena i że u pozostałych fryzjerów jest taniej. Model językowy
obsługujący czat dostaje komplet obu cenników, a nie tylko droższego.

### Dlaczego to się już nie powtórzy

Kwoty prezentowane poza cennikiem **nie są już nigdzie wpisywane ręcznie**.
Każda pozycja cennika może zostać oznaczona etykietą usługi, a kwoty „od…"
i widełki wyliczają się z niej automatycznie — **wyłącznie z kolumn, które
klient realnie widzi na stronie**. Zmiana ceny w cenniku aktualizuje w tej
samej chwili stronę główną i wszystkie odpowiedzi chatbota.

Zabezpieczenie działa też w drugą stronę: jeśli ktoś w przyszłości oznaczy
usługę etykietą, dla której nie ma pozycji w cenniku, **budowanie strony
zatrzyma się z błędem** zamiast wypuścić na produkcję kartę usługi bez ceny.

### Co zostało bez zmian (świadomie)

- **Sama treść cennika.** Żadna cena w `data/pricing.ts` nie została ruszona —
  cennik jest źródłem prawdy, więc poprawialiśmy to, co się z nim rozjechało,
  a nie jego samego.
- **Kolumna „VIP".** Zostawiona w danych nietknięta, mimo że nic jej nie
  wyświetla — patrz pytanie 3 w tabeli powyżej.

---

## 3. Rekomendacje poza kodem

Sama strona to najwyżej połowa sprawy w wynikach lokalnych. Poniższe działania
mają na tę chwilę **większy wpływ na pozycję niż cokolwiek, co można jeszcze
zmienić w kodzie**.

**Priorytet 1 — Profil Firmy w Google (dawniej wizytówka)**

To on decyduje o obecności w mapce z trzema wynikami nad organicznymi
linkami — czyli tam, gdzie realnie klikają klienci szukający fryzjera.

- Uzupełnić profil w 100%: wszystkie usługi z cennika jako osobne pozycje,
  opis firmy, atrybuty, obszar działania.
- Wgrywać zdjęcia regularnie — profile z aktualnymi zdjęciami wypadają lepiej.
- **Systematycznie prosić klientów o opinie.** To najsilniejszy pojedynczy
  czynnik w wynikach lokalnych. 460 opinii to bardzo dobra baza; liczy się
  jednak także świeżość — regularny dopływ nowych opinii waży więcej niż
  sama liczba.
- **Odpowiadać na wszystkie opinie**, również te negatywne.
- Korzystać z wpisów (Google Posts) — np. informacja o wolnych terminach.
- Sprawdzić, czy nie istnieje duplikat wizytówki po starej stronie WordPress.

**Priorytet 2 — spójność danych w internecie (NAP)**

Nazwa, adres i telefon muszą brzmieć **identycznie** wszędzie. Rozbieżności
(„ul. Piotrkowska 293/305” kontra „Piotrkowska 293-305”) osłabiają lokalne
pozycjonowanie.

- Zweryfikować i ujednolicić wpisy w: Booksy, Facebook, Instagram, Apple Maps,
  panoramafirm.pl, pkt.pl, Bing Places.
- Dopisać się do katalogów branżowych i lokalnych (Łódź).

**Priorytet 3 — linki zewnętrzne**

- Współpraca z łódzkimi mikroinfluencerkami — metamorfoza w zamian za wpis
  z linkiem.
- Lokalne portale i media („Łódź nasze miasto”, portale dzielnicowe).
- Wpis na stronie kompleksu Ogrody Geyera, jeśli prowadzi listę najemców.
- Sponsoring lokalnych wydarzeń — pokazy fryzjerskie, wydarzenia charytatywne.
- Współpraca z sąsiednimi salonami kosmetycznymi i studiami ślubnymi
  (wzajemne polecenia — usługi ślubne to segment o wysokiej marży, który
  salon już obsługuje).

**Priorytet 4 — treść**

- Blog ma trzy wpisy, wszystkie z lat 2021–2022. **Regularne publikowanie
  ma teraz niski koszt** — dodanie wpisu to jeden plik. Warto celować w frazy,
  których konkurencja nie obsługuje: „balayage Łódź cena”, „metamorfoza włosów
  Łódź”, „fryzjer dla blondynek Łódź”, „fryzury ślubne Łódź”.
- Rozważyć osobne podstrony pod najważniejsze usługi („Koloryzacja Łódź”,
  „Balayage Łódź”, „Fryzury ślubne Łódź”). Obecnie wszystkie usługi mieszkają
  na stronie głównej i w cenniku, przez co żadna nie ma własnego adresu,
  którym mogłaby konkurować. **To najmocniejsza pojedyncza rzecz do zrobienia
  w kolejnym etapie prac.**
- Dodać galerię metamorfoz „przed i po” z opisami — treść unikalna, której
  nikt nie skopiuje.

**Priorytet 5 — pomiar**

- Sprawdzić, czy w Google Search Console zgłoszona jest nowa mapa strony
  (`wojewodastudio.pl/sitemap.xml`).
- Wszystkie przyciski rezerwacji noszą wspólne oznaczenie techniczne, więc
  można je policzyć w jednym miejscu w narzędziach analitycznych — warto
  skonfigurować pomiar kliknięć w „Umów wizytę”, żeby wiedzieć, które miejsce
  na stronie realnie generuje rezerwacje.

---

## 4. Stan techniczny po zmianach

- Kompilacja i sprawdzanie jakości kodu przechodzą bez błędów i ostrzeżeń.
- Wszystkie 19 podstron generuje się statycznie, tak jak wcześniej.
- **Żaden istniejący adres URL nie uległ zmianie** — indeksacja nienaruszona.
- Zmiany podzielone na 9 opisanych kroków w historii repozytorium, gotowe
  do przejrzenia przed scaleniem.
