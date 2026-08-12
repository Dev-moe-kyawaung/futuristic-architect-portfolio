const i18n = {
  en: {
    heroTitle: 'Senior Mobile App Architect',
    heroSubtitle: 'Building production-grade Android experiences with Jetpack Compose, Clean Architecture & CI/CD',
    exploreWork: 'Explore My Work',
    skillsTitle: 'Skills Matrix',
    roadmapTitle: 'Android Roadmap',
    composeTitle: 'Compose UI Gallery',
    architectureTitle: 'Architecture Lab',
    performanceTitle: 'Performance Benchmarks',
    cicdTitle: 'CI/CD Pipelines',
  },
  mm: {
    heroTitle: 'အဆင့်မြင့် မိုဘိုင်းအပ်လက်ထက်တစ်ဦး',
    heroSubtitle: 'Jetpack Compose, Clean Architecture နှင့် CI/CD တို့ဖြင့် ထုတ်လုပ်ရေးအဆင့် Android အတွေ့အကြုံများကို တည်ဆောက်ခြင်း',
    exploreWork: 'ကျွန်ုပ်၏ လုပ်ငန်းများကို လေ့လာပါ',
    skillsTitle: 'ကျွမ်းကျင်မှု မက်ထရစ်',
    roadmapTitle: 'Android လမ်းညွှန်',
    composeTitle: 'Compose UI ပြခန်း',
    architectureTitle: 'တည်ဆောက်ပုံ လက်တွေ့ခန်း',
    performanceTitle: 'စွမ်းဆောင်ရည် စံနှုန်းများ',
    cicdTitle: 'CI/CD ပိုက်လိုင်းများ',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

export function t(key) {
  return i18n[currentLang][key] || key;
}

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

export function getLanguage() {
  return currentLang;
}
