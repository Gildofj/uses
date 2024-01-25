import { ui, defaultLocale } from "./ui";

export function getUrlLocale(url: URL) {
  const [, , locale] = url.pathname.split("/");
  if (locale in ui) return locale as keyof typeof ui;
  return defaultLocale;
}

export function useTranslate(locale: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]) {
    return ui[locale][key] || ui[defaultLocale][key];
  };
}
