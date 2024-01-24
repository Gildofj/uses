import Flag from "react-flagkit";
import { IoFlag } from "react-icons/io5/index.js";
import { useEffect, useState } from "react";

import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";

enum LOCALE {
  PT_BR = "pt-BR",
  EN_US = "en-US",
}

export default function DropdownMenuLocale() {
  const [locale, setLocale] = useState<LOCALE>(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("locale"))
      return localStorage.getItem("locale") as LOCALE;
    return LOCALE.PT_BR;
  });

  return (
    <DropdownMenu iconButton={<IoFlag className="w-5 h-5" />} className="w-14">
      <DropdownMenuItem onClick={() => setLocale(LOCALE.PT_BR)}>
        <Flag country="BR" />
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setLocale(LOCALE.EN_US)}>
        <Flag country="US" />
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
