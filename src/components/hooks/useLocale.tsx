import { useEffect, useState } from "react";

export enum LOCALE {
  PT = "pt",
  EN = "en",
}

export function useLocale() {
  const [locale, setLocale] = useState<LOCALE>(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("locale"))
      return localStorage.getItem("locale") as LOCALE;
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
