import Flag from "react-flagkit";
import { Flag as FlagIcon } from "@phosphor-icons/react";

import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";
import { LOCALE, useLocale } from "./hooks/useLocale";

export default function DropdownMenuLocale() {
  const { selectLocale } = useLocale();
  return (
    <DropdownMenu
      iconButton={<FlagIcon className="w-5 h-5" />}
      className="w-14"
    >
      <DropdownMenuItem onClick={() => selectLocale(LOCALE.PT)}>
        <Flag country="BR" />
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => selectLocale(LOCALE.EN)}>
        <Flag country="US" />
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
