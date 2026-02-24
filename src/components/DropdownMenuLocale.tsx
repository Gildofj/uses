import Flag from "react-flagkit";
import { FlagIcon } from "@phosphor-icons/react";

import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";
import { COUNTRY_FLAG, LOCALE, useLocale } from "./hooks/useLocale";

export default function DropdownMenuLocale() {
  const { locale, selectLocale } = useLocale();

  return (
    <DropdownMenu
      iconButton={
        <Flag
          className="block h-10 w-10 cursor-pointer rounded-xl object-cover transition-all duration-500 ease-[ease] max-[1200px]:hidden"
          country={locale === LOCALE.PT ? "BR" : "US"}
        />
      }
      className="w-14 !p-0 bg-transparent border-none !shadow-none focus:ring-0 focus:outline-none focus:ring-offset-0 hover:bg-transparent"
      buttonClassName="!p-0 bg-transparent border-none !shadow-none focus:ring-0 focus:outline-none focus:ring-offset-0 hover:bg-transparent"
    >
      {Object.values(LOCALE)
        .filter(loc => loc !== locale)
        .map(loc => (
          <DropdownMenuItem
            key={loc}
            onClick={() => selectLocale(loc)}
            className="flex items-center justify-center !p-0 !pb-2 bg-transparent"
          >
            <Flag
              country={COUNTRY_FLAG[loc]}
              className="block h-10 w-10 cursor-pointer rounded-xl object-cover transition-all duration-500 ease-[ease] max-[1200px]:hidden"
            />
          </DropdownMenuItem>
        ))}
    </DropdownMenu>
  );
}
