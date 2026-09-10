import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pl";

interface Translations {
  playNow: string;
  home: string;
  games: string;
  categories: string;
  welcomeTo: string;
  experienceUltimate: string;
  whereEvery: string;
  instantAccess: string;
  exploreCategories: string;
  exploreDesc: string;
  actionTitle: string;
  puzzleTitle: string;
  top10Title: string;
  arcadeTitle: string;
  action: string;
  puzzle: string;
  top10: string;
  arcade: string;
  moreGames: string;
  journeyStarts: string;
  discoverEndless: string;
  jumpInto: string;
  joinCommunity: string;
  letsPlay: string;
  playAnytime: string;
  gamingHub: string;
  allRights: string;
  gameCategories: string;
  allGames: string;
  top10Games: string;
  easyToPlay: string;
  playBtn: string;
  back: string;
  playConquer: string;
  exploreEpic: string;
  thrilling: string;
  featuredGames: string;
  popularPicks: string;
  allGamesHeading: string;
  premiumGames: string;
  premiumGamesLabel: string;
  premium: string;
}

const translations: Record<Lang, Translations> = {
  en: {
    playNow: "Play Now",
    home: "Home",
    games: "Games",
    categories: "Categories",
    welcomeTo: "Welcome to Global 1 Gaming",
    experienceUltimate: "Exper<b>i</b>ence the ultimate <br /> gaming platf<b>o</b>rm",
    whereEvery: "Where every game is an adventure waiting to be conquered",
    instantAccess: "Global 1 Gaming brings you instant access to hundreds of games across all genres, from action-packed shooters to brain-teasing puzzles",
    exploreCategories: "Explore Gaming Categories",
    exploreDesc: "Dive into our diverse collection of games spanning multiple genres. From intense action to relaxing puzzles, find your perfect gaming experience.",
    actionTitle: "Acti<b>o</b>n",
    puzzleTitle: "Puzz<b>l</b>e",
    top10Title: "Top <b>1</b>0 Games",
    arcadeTitle: "Arca<b>d</b>e",
    action: "Experience heart-pounding action games with intense combat, epic battles, and adrenaline-pumping gameplay.",
    puzzle: "Challenge your mind with brain-teasing puzzles, strategic thinking, and mind-bending challenges.",
    top10: "Discover our most popular and trending games loved by players worldwide.",
    arcade: "Enjoy classic arcade fun with retro-inspired games, endless entertainment, and nostalgic vibes.",
    moreGames: "M<b>o</b>re ga<b>m</b>es",
    journeyStarts: "your gaming journey starts here",
    discoverEndless: "disc<b>o</b>ver <br /> endless g<b>a</b>mes",
    jumpInto: "Jump into thrilling gameplay with instant access to top-rated games. Challenge yourself, compete globally, and dominate the leaderboards.",
    joinCommunity: "Join Our Community",
    letsPlay: "let&#39;s pl<b>a</b>y and <br /> conquer <br /> t<b>o</b>gether.",
    playAnytime: "Play Anytime, Anywhere",
    gamingHub: "Your Gaming Hub Awaits",
    gameCategories: "G<b>a</b>me Categories",
    allGames: "All Games",
    top10Games: "Top 10 Games",
    easyToPlay: "Easy to Play",
    playBtn: "Play",
    back: "Back",
    playConquer: "Play & Conquer",
    exploreEpic: "Expl<b>o</b>re Epic <br /> G<b>a</b>mes",
    thrilling: "Dive into our collection of thrilling adventures",
    featuredGames: "Feat<b>u</b>red Games",
    popularPicks: "Pop<b>u</b>lar Picks",
    allGamesHeading: "<b>A</b>ll Games",
    premiumGames: "Premi<b>u</b>m Games",
    premiumGamesLabel: "Premium Games",
    premium: "Unlock exclusive premium games with iconic characters, cinematic adventures, and top-quality gameplay.",
    allRights: "©Global 1 Gaming 2026. All rights reserved",
  },
  pl: {
    playNow: "Graj Teraz",
    home: "Strona główna",
    games: "Gry",
    categories: "Kategorie",
    welcomeTo: "Witamy w Global 1 Gaming",
    experienceUltimate: "Dośw<b>i</b>adcz najlepszej <br /> platformy gami<b>n</b>gowej",
    whereEvery: "Gdzie każda gra to przygoda czekająca na podbój",
    instantAccess: "Global 1 Gaming daje Ci natychmiastowy dostęp do setek gier we wszystkich gatunkach, od dynamicznych strzelanek po łamigłówki.",
    exploreCategories: "Odkryj Kategorie Gier",
    exploreDesc: "Zanurz się w naszej różnorodnej kolekcji gier obejmującej wiele gatunków. Od intensywnej akcji po relaksujące łamigłówki — znajdź idealne doświadczenie.",
    actionTitle: "Akc<b>j</b>a",
    puzzleTitle: "Łamigł<b>ó</b>wki",
    top10Title: "Top <b>1</b>0 Gier",
    arcadeTitle: "Arca<b>d</b>e",
    action: "Przeżyj emocjonujące gry akcji z intensywną walką, epickimi bitwami i adrenalina.",
    puzzle: "Wyzwij swój umysł łamigłówkami, myśleniem strategicznym i trudnymi zadaniami.",
    top10: "Odkryj nasze najpopularniejsze i najmodniejsze gry uwielbiane przez graczy na całym świecie.",
    arcade: "Ciesz się klasyczną zabawą arcade z grami inspirowanymi retro i nostalgią.",
    moreGames: "Więc<b>e</b>j gi<b>e</b>r",
    journeyStarts: "twoja przygoda z grami zaczyna się tutaj",
    discoverEndless: "odk<b>r</b>yj <br /> nieskończone g<b>r</b>y",
    jumpInto: "Wejdź w ekscytującą rozgrywkę z natychmiastowym dostępem do najwyżej ocenianych gier. Rzuć sobie wyzwanie, rywalizuj globalnie i zdominuj rankingi.",
    joinCommunity: "Dołącz do Naszej Społeczności",
    letsPlay: "zagrajmy i <br /> zwycięż<b>a</b>jmy <br /> raz<b>e</b>m.",
    playAnytime: "Graj Kiedykolwiek, Gdziekolwiek",
    gamingHub: "Twój Hub Gier Czeka",
    gameCategories: "Kat<b>e</b>gorie Gier",
    allGames: "Wszystkie Gry",
    top10Games: "Top 10 Gier",
    easyToPlay: "Łatwe do Gry",
    playBtn: "Graj",
    back: "Wstecz",
    playConquer: "Graj i Zwyciężaj",
    exploreEpic: "Odk<b>r</b>yj Epickie <br /> G<b>r</b>y",
    thrilling: "Zanurz się w naszej kolekcji emocjonujących przygód",
    featuredGames: "Wyróżni<b>o</b>ne Gry",
    popularPicks: "Popular<b>n</b>e Wybory",
    allGamesHeading: "<b>W</b>szystkie Gry",
    premiumGames: "Gry Premi<b>u</b>m",
    premiumGamesLabel: "Gry Premium",
    premium: "Odblokuj ekskluzywne gry premium z kultowymi postaciami, kinowymi przygodami i najwyższą jakością rozgrywki.",
    allRights: "©Global 1 Gaming 2026. Wszelkie prawa zastrzeżone",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div dir="ltr">{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
