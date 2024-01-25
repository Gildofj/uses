import Flag from "react-flagkit";
import { IoFlag } from "react-icons/io5/index.js";

import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";
import { LOCALE, useLocale } from "./hooks/useLocale";

export default function DropdownMenuLocale() {
  const { selectLocale } = useLocale();
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
