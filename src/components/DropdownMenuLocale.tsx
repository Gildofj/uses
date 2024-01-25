import Flag from "react-flagkit";
import { IoFlag } from "react-icons/io5/index.js";
import { useEffect, useState } from "react";

import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";

enum LOCALE {
  PT = "pt",
  EN = "en",
}

export default function DropdownMenuLocale() {
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

  return (
    <DropdownMenu iconButton={<IoFlag className="w-5 h-5" />} className="w-14">
      <DropdownMenuItem onClick={() => selectLocale(LOCALE.PT)}>
        <Flag country="BR" />
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => selectLocale(LOCALE.EN)}>
        <Flag country="US" />
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
