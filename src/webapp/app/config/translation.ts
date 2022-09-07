import { setLocale } from 'app/shared/reducers/locale';

// TranslatorContext.setDefaultLocale('en');
// TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  ar: { name: 'العربية', rtl: true },
  en: { name: 'English' },
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;

export const registerLocale = store => {
  store.dispatch(setLocale(sessionStorage.getItem('locale')));
};
