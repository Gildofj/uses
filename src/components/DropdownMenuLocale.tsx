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
    if (!window.location.pathname.includes(locale))
      window.location.pathname = "/uses/" + locale + "/";
  }, [locale]);

  const selectLocale = (lang: LOCALE) => {
    localStorage.setItem("locale", lang);
    setLocale(lang);
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
