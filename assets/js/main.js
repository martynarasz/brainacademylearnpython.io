
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const yearEl = document.getElementById("year");
const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  pl: {
    "meta.title": "CodeBrain - Trenuj logikę programisty",
    "meta.description":
      "Trenuj logikę programisty krok po kroku z Codie. Rozwiązuj logiczne zagadki, odblokowuj bloki kodu, odkrywaj wyspy i trenuj mózg codziennie.",

    "menu.toggle": "Otwórz menu",
    "lang.group": "Wybierz język",
    "lang.plLabel": "Polski",
    "lang.enLabel": "Angielski",

    "nav.adventure": "Przygoda",
    "nav.islands": "Wyspy",
    "nav.logic": "Logika",
    "nav.screens": "Ekrany",
    "nav.play": "Google Play",

    "hero.eyebrow": "Przygoda z nauką Pythona",
    "hero.title": "Wyrusz w koderską przygodę.",
    "hero.lead":
      "Odkrywaj tajemnicze wyspy, rozwiązuj krótkie zadania Python i trenuj logikę z Codie.",
    "hero.primaryCta": "Pobierz z Google Play",
    "hero.secondaryCta": "Poznaj wyspy",
    "hero.stat1": "Logiczne zagadki",
    "hero.stat2": "Codzienne misje",
    "hero.stat3": "Odblokowywane wyspy",
    "hero.screensAria": "Zrzuty ekranu aplikacji CodeBrain",
    "hero.phoneMainAlt": "Ekran zagadki kodowania CodeBrain",
    "hero.phoneBackAlt": "Ekran przygody z Codie",

    "adventure.eyebrow": "Rozpocznij podróż",
    "adventure.title": "Ucz się przez odkrywanie, a nie przez wkuwanie.",
    "adventure.lead":
      "CodeBrain zmienia zasady nauki kodowania: zamiast samej składni trenuj logikę. Każde zadanie rozwija myślenie, a każda wyspa przybliża Cię do myślenia jak programista.",
    "adventure.card1Title": "Podążaj za Codie",
    "adventure.card1Text":
      "Twój towarzysz prowadzi Cię przez wyzwania, podpowiedzi i małe zwycięstwa.",
    "adventure.card2Title": "Rozwiązuj logiczne zagadki",
    "adventure.card2Text":
      "Buduj prawdziwe zrozumienie przez wybieranie, układanie i testowanie kodu.",
    "adventure.card3Title": "Odblokowuj nowe światy",
    "adventure.card3Text":
      "Odkrywaj mapy, zbieraj postępy i ucz się krok po kroku.",

    "islands.eyebrow": "Odkrywaj podróż",
    "islands.title": "Odblokowuj i eksploruj nowe wyspy kodowania.",
    "islands.lead":
      "Każda wyspa wprowadza nową umiejętność Pythona. Ucz się przez odkrywanie, rozwiązuj wyzwania i idź dalej misja po misji.",
    "islands.card1Alt": "Wyspa Pythona",
    "islands.card1Label": "Trenuj pamięć",
    "islands.card2Alt": "Wyspa kodowania",
    "islands.card2Label": "Buduj logikę",
    "islands.card3Alt": "Wyspa przygody",
    "islands.card3Label": "Odblokowuj umiejętności Pythona",

    "logic.eyebrow": "Skup się na logice",
    "logic.title": "Zrozum kod zamiast zapamiętywać samą składnię.",
    "logic.lead":
      "CodeBrain zamienia Pythona w małe, interaktywne decyzje: wybierz poprawną linię, odblokuj bloki i uruchom rozwiązanie.",
    "logic.feature1": "Interaktywne zagadki kodowania",
    "logic.feature2": "Ćwicz logikę z Pythonem krok po kroku",
    "logic.feature3": "Codzienne serie i postępy",
    "logic.feature4": "Codie",

    "screens.eyebrow": "W środku aplikacji",
    "screens.title": "Przygoda, zagadki i motywacja w jednym miejscu.",
    "screens.cta": "Otwórz w Google Play",
    "screens.image1Alt": "Ekran zagadki Pythona",
    "screens.image2Alt": "Ekran Codie",
    "screens.image3Alt": "Ekran codziennej motywacji",

    "final.eyebrow": "Gotowy?",
    "final.title": "Rozpocznij swoją przygodę z Pythonem już dziś.",
    "final.lead":
      "Odkrywaj wyspy, rozwiązuj logiczne zagadki i buduj nawyk kodowania z Codie.",
    "final.cta": "Pobierz z Google Play",

    "footer.copy": "CodeBrain: Myśl jak programista.",
  },

  en: {
    "meta.title": "CodeBrain - Train Programmer Logic",
    "meta.description":
      "Train programmer logic step by step with Codie. Solve logic puzzles, unlock code blocks, discover islands and train your brain every day.",

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
    "hero.title": "Start your coding adventure.",
    "hero.lead":
      "Explore mysterious islands, solve short Python tasks and train your logic with Codie.",
    "hero.primaryCta": "Get it on Google Play",
    "hero.secondaryCta": "Discover the islands",
    "hero.stat1": "Logic puzzles",
    "hero.stat2": "Daily quests",
    "hero.stat3": "Unlockable islands",
    "hero.screensAria": "CodeBrain app screenshots",
    "hero.phoneMainAlt": "CodeBrain coding puzzle screen",
    "hero.phoneBackAlt": "Codie adventure screen",

    "adventure.eyebrow": "Start your journey",
    "adventure.title": "Learn by exploring, not by memorizing.",
    "adventure.lead":
      "CodeBrain changes the way you learn coding: instead of memorizing syntax, you train logic. Every task develops your thinking, and every island brings you closer to thinking like a programmer.",
    "adventure.card1Title": "Follow Codie",
    "adventure.card1Text":
      "Your companion guides you through challenges, hints and small wins.",
    "adventure.card2Title": "Solve logic puzzles",
    "adventure.card2Text":
      "Build real understanding by choosing, arranging and testing code.",
    "adventure.card3Title": "Unlock new worlds",
    "adventure.card3Text":
      "Discover maps, collect progress and learn step by step.",

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
      "CodeBrain turns Python into small interactive decisions: choose the correct line, unlock blocks and run your solution.",
    "logic.feature1": "Interactive coding puzzles",
    "logic.feature2": "Practice logic with Python step by step",
    "logic.feature3": "Daily streaks and progress",
    "logic.feature4": "Codie",

    "screens.eyebrow": "Inside the app",
    "screens.title": "Adventure, puzzles and motivation in one place.",
    "screens.cta": "Open on Google Play",
    "screens.image1Alt": "Python puzzle screen",
    "screens.image2Alt": "Codie screen",
    "screens.image3Alt": "Daily motivation screen",

    "final.eyebrow": "Ready?",
    "final.title": "Start your Python adventure today.",
    "final.lead":
      "Explore islands, solve logic puzzles and build your coding habit with Codie.",
    "final.cta": "Download on Google Play",

    "footer.copy": "CodeBrain: Think like a programmer.",
  },
};

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.en;
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
    localStorage.setItem("codebrain-language", language);
  } catch (error) {
    // Ignore storage failures, for example in private browsing mode.
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

let initialLanguage = "en";

try {
  const savedLanguage = localStorage.getItem("codebrain-language");

  if (savedLanguage && translations[savedLanguage]) {
    initialLanguage = savedLanguage;
  }
} catch (error) {
  // Ignore storage failures.
}

setLanguage(initialLanguage);

