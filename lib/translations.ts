export const translations = {
  en: {
    language: "English",
    about: "About",
    projects: "Projects",
    welcome: "Welcome!",
    dev: "Web Developer",
    build: "I build tailor-made digital solutions",
    about1: "About me",
    about2: "Web developer specializing in the creation of websites, web applications, and online stores.",
    about3: "Give your business the showcase it deserves with a custom website.",
    about4: "Expand your business with custom web applications, carefully designed to enhance user experience, maximize search engine optimization, and increase conversion rates.",
    tech: "The technologies I've worked with",
    recent: "Some recent works",
    contact: "Contact",
    home: "Home"
  },
  fr: {
    language: "Français",
    about: "À propos",
    projects: "Projets",
    welcome: "Bienvenue !",
    dev: "Développeur Web",
    build: "Je développe des solutions numériques sur mesure.",
    about1: "À propos",
    about2: "Développeur web, spécialisé dans la création de sites internet, applications web, et boutiques en ligne.",
    about3: "Offrez à votre entreprise la vitrine qu'elle mérite avec un site web sur mesure.",
    about4: "Développez votre activité avec des applications web personnalisées, soigneusement conçues pour améliorer l'expérience utilisateur, maximiser le référencement et accroître les taux de conversion.",
    tech: "Les technologies que j'utilise",
    recent: "Quelques projets récents",
    contact: "Contact",
    home: "Accueil"
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;