import { useEffect, useState } from "react";

export enum LOCALE {
  PT = "pt",
  EN = "en",
}

export function useLocale() {
  const [locale, setLocale] = useState<LOCALE>(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("locale")) {
      const currentLocale = localStorage.getItem("locale");

      if (currentLocale === LOCALE.PT || currentLocale === LOCALE.EN)
        return currentLocale as LOCALE;

      if (currentLocale === "pt-BR") return LOCALE.PT;
      if (currentLocale === "en-US") return LOCALE.EN;
    }
    return LOCALE.PT;
  });

  useEffect(() => {
    if (!window.location.pathname.includes(locale)) {
      const slug = window.location.pathname;
      if (slug.split(LOCALE.PT).length > 1)
        window.location.pathname = "/uses/" + locale + slug.split(LOCALE.PT)[1];
      if (slug.split(LOCALE.EN).length > 1)
        window.location.pathname = "/uses/" + locale + slug.split(LOCALE.EN)[1];
    }
  }, [locale]);

  const selectLocale = (locale: LOCALE) => {
    localStorage.setItem("locale", locale);
    setLocale(locale);
  };

  return { locale, selectLocale };
}
