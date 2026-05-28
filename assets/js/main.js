const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const yearEl = document.getElementById("year");
const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  pl: {
    "meta.title": "BrainAcademy - Ucz sie Pythona przez przygode",
    "meta.description":
      "Ucz sie Pythona krok po kroku z Codie. Rozwiazuj logiczne zagadki, odblokowuj bloki kodu, odkrywaj wyspy i buduj codzienny nawyk kodowania.",
    "menu.toggle": "Otworz menu",
    "lang.group": "Wybierz jezyk",
    "lang.plLabel": "Polski",
    "lang.enLabel": "Angielski",
    "nav.adventure": "Przygoda",
    "nav.islands": "Wyspy",
    "nav.logic": "Logika",
    "nav.screens": "Ekrany",
    "nav.play": "Google Play",
    "hero.eyebrow": "Przygoda z nauka Pythona",
    "hero.title": "Wyrusz w koderska przygode.",
    "hero.lead":
      "Odkrywaj tajemnicze wyspy, rozwiazuj logiczne zagadki i ucz sie Pythona krok po kroku z Codie - twoim towarzyszem.",
    "hero.primaryCta": "Pobierz z Google Play",
    "hero.secondaryCta": "Poznaj wyspy",
    "hero.stat1": "Logiczne zagadki",
    "hero.stat2": "Codzienne misje",
    "hero.stat3": "Odblokowywane wyspy",
    "hero.screensAria": "Zrzuty ekranu aplikacji BrainAcademy",
    "hero.phoneMainAlt": "Ekran zagadki kodowania BrainAcademy",
    "hero.phoneBackAlt": "Ekran przygody z Codie",
    "adventure.eyebrow": "Rozpocznij podroz",
    "adventure.title": "Ucz sie przez odkrywanie, a nie przez wkuwanie.",
    "adventure.lead":
      "BrainAcademy zamienia podstawy Pythona w ciekawa podroz. Kazda misja uczy jednej idei, kazda zagadka trenuje logike, a kazda wyspa przybliza cie do myslenia jak programista.",
    "adventure.card1Title": "Podazaj za Codie",
    "adventure.card1Text":
      "Twoj towarzysz prowadzi cie przez wyzwania, podpowiedzi i male zwyciestwa.",
    "adventure.card2Title": "Rozwiazuj logiczne zagadki",
    "adventure.card2Text":
      "Buduj prawdziwe zrozumienie przez wybieranie, ukladanie i testowanie kodu.",
    "adventure.card3Title": "Odblokuj nowe swiaty",
    "adventure.card3Text": "Odkrywaj mapy, zbieraj postepy i ucz sie krok po kroku.",
    "islands.eyebrow": "Odkrywaj podroz",
    "islands.title": "Odblokuj i eksploruj nowe logiczne wyspy.",
    "islands.lead":
      "Kazda wyspa wprowadza nowa umiejetnosc Pythona. Ucz sie przez odkrywanie, rozwiazuj wyzwania i idz dalej misja po misji.",
    "islands.card1Alt": "Wyspa Pythona",
    "islands.card1Label": "Trenuj pamiec",
    "islands.card2Alt": "Wyspa kodowania",
    "islands.card2Label": "Buduj logike",
    "islands.card3Alt": "Wyspa przygody",
    "islands.card3Label": "Odblokuj nowe umiejetnosci",
    "logic.eyebrow": "Skup sie na logice",
    "logic.title": "Zrozum działanie kodu zamiast zapamietywac sama skladnie.",
    "logic.lead":
      "BrainAcademy zamienia Pythona w male, interaktywne decyzje: układaj logiczne bloki i uruchom rozwiazanie.",
    "logic.feature1": "Interaktywne zagadki kodowania",
    "logic.feature2": "Podstawy Pythona krok po kroku",
    "logic.feature3": "Codzienne serie i postepy",
    "logic.feature4": "Przyjazny towarzysz Codie",
    "screens.eyebrow": "W srodku aplikacji",
    "screens.title": "Przygoda, zagadki i motywacja w jednym miejscu.",
    "screens.cta": "Otworz w Google Play",
    "screens.image1Alt": "Zagadki Pythona",
    "screens.image2Alt": "Codie",
    "screens.image3Alt": "Codzienna motywacja",
    "final.eyebrow": "Gotowy?",
    "final.title": "Rozpocznij swoja przygode z Pythonem juz dzis.",
    "final.lead":
      "Odkrywaj wyspy, rozwiazuj logiczne zagadki i buduj logikę z Codie.",
    "final.cta": "Pobierz z Google Play",
    "footer.copy": "BrainAcademy. Ucz sie Pythona krok po kroku.",
  },
  en: {
    "meta.title": "BrainAcademy - Learn Python by Adventure",
    "meta.description":
      "Learn Python step by step with Codie. Solve logic puzzles, unlock coding blocks, discover islands and build a daily coding habit.",
    "menu.toggle": "Open menu",
    "lang.group": "Choose language",
    "lang.plLabel": "Polish",
    "lang.enLabel": "English",
    "nav.adventure": "Adventure",
    "nav.islands": "Islands",
    "nav.logic": "Logic",
    "nav.screens": "Screens",
    "nav.play": "Google Play",
    "hero.eyebrow": "Python learning adventure",
    "hero.title": "Embark on a coding adventure.",
    "hero.lead":
      "Explore mysterious islands, solve logic puzzles and learn Python step by step with Codie - your friendly coding companion.",
    "hero.primaryCta": "Get it on Google Play",
    "hero.secondaryCta": "Discover the islands",
    "hero.stat1": "Logic puzzles",
    "hero.stat2": "Daily quests",
    "hero.stat3": "Unlockable islands",
    "hero.screensAria": "BrainAcademy app screenshots",
    "hero.phoneMainAlt": "BrainAcademy coding puzzle screen",
    "hero.phoneBackAlt": "Codie adventure screen",
    "adventure.eyebrow": "Start your journey",
    "adventure.title": "Learn by exploring, not by memorizing.",
    "adventure.lead":
      "BrainAcademy turns Python basics into a playful journey. Every quest teaches one idea, every puzzle trains your logic, and every island brings you closer to thinking like a programmer.",
    "adventure.card1Title": "Follow Codie",
    "adventure.card1Text":
      "Your companion guides you through challenges, hints and small wins.",
    "adventure.card2Title": "Solve logic puzzles",
    "adventure.card2Text":
      "Build real understanding by choosing, arranging and testing code.",
    "adventure.card3Title": "Unlock new worlds",
    "adventure.card3Text":
      "Discover maps, collect progress and keep learning one step at a time.",
    "islands.eyebrow": "Explore the journey",
    "islands.title": "Unlock and explore new coding islands.",
    "islands.lead":
      "Every island introduces a new Python skill. Learn through exploration, solve challenges and keep moving forward one quest at a time.",
    "islands.card1Alt": "Python island",
    "islands.card1Label": "Train memory",
    "islands.card2Alt": "Coding island",
    "islands.card2Label": "Build logic",
    "islands.card3Alt": "Adventure island",
    "islands.card3Label": "Unlock Python skills",
    "logic.eyebrow": "Focus on logic",
    "logic.title": "Understand code instead of just memorizing syntax.",
    "logic.lead":
      "BrainAcademy turns Python into small interactive decisions: choose the right line, unlock blocks, run your solution and learn from feedback.",
    "logic.feature1": "Interactive coding puzzles",
    "logic.feature2": "Step-by-step Python basics",
    "logic.feature3": "Daily streaks and progress",
    "logic.feature4": "Friendly companion Codie",
    "screens.eyebrow": "Inside the app",
    "screens.title": "Adventure, puzzles and motivation in one place.",
    "screens.cta": "Open on Google Play",
    "screens.image1Alt": "Python puzzle screen",
    "screens.image2Alt": "Codie screen",
    "screens.image3Alt": "Daily motivation screen",
    "final.eyebrow": "Ready?",
    "final.title": "Begin your Python adventure today.",
    "final.lead":
      "Explore islands, solve logic puzzles and build your coding habit with Codie.",
    "final.cta": "Download on Google Play",
    "footer.copy": "BrainAcademy. Learn Python step by step.",
  },
};

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.pl;
  document.documentElement.lang = language;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const translated = dictionary[key];

    if (!translated) {
      return;
    }

    const attribute = node.dataset.i18nAttr;
    if (attribute) {
      node.setAttribute(attribute, translated);
    } else {
      node.textContent = translated;
    }
  });

  if (dictionary["meta.title"]) {
    document.title = dictionary["meta.title"];
  }

  if (metaDescription && dictionary["meta.description"]) {
    metaDescription.setAttribute("content", dictionary["meta.description"]);
  }

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  try {
    localStorage.setItem("brainacademy-language", language);
  } catch (error) {
    // Ignore storage failures (e.g. private mode restrictions).
  }
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;

    if (selectedLanguage && translations[selectedLanguage]) {
      setLanguage(selectedLanguage);
    }
  });
});

let initialLanguage = "pl";

try {
  const savedLanguage = localStorage.getItem("brainacademy-language");

  if (savedLanguage && translations[savedLanguage]) {
    initialLanguage = savedLanguage;
  }
} catch (error) {
  // Ignore storage failures.
}

setLanguage(initialLanguage);
