import { GithubLogoIcon, ListIcon } from "@phosphor-icons/react";
import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";
import { PORTFOLIO_URL, REPO_URL } from "../consts";
import { useTranslate } from "../i18n/utils";
import Flag from "react-flagkit";
import { LOCALE, useLocale } from "./hooks/useLocale";

export default function DropdownMenuNav() {
  const { locale, selectLocale } = useLocale();
  const t = useTranslate(locale);

  return (
    <DropdownMenu
      iconButton={<ListIcon className="h-5 w-5" />}
      className="w-56"
      buttonClassName="w-10 h-10"
    >
      <DropdownMenuItem className="lg:hidden" href={`/${locale}`}>
        {t("nav.home")}
      </DropdownMenuItem>
      <DropdownMenuItem className="lg:hidden" href={PORTFOLIO_URL}>
        {t("nav.about")}
      </DropdownMenuItem>
      <DropdownMenuItem
        className="inline-flex md:hidden items-center gap-2 w-full"
        href={REPO_URL}
      >
        <GithubLogoIcon /> {t("nav.source")}
      </DropdownMenuItem>
      <div className="px-3 py-2 uppercase font-bold text-xs">
        {t("nav.categories")}
      </div>
      <DropdownMenuItem href={`/${locale}/categories/computacao`}>
        {t("nav.computing")}
      </DropdownMenuItem>
      <DropdownMenuItem href={`/${locale}/categories/desk`}>
        {t("nav.desk")}
      </DropdownMenuItem>
      <div className="px-3 py-2 uppercase font-bold text-xs lg:hidden">
        {t("nav.locales")}
      </div>
      <DropdownMenuItem
        onClick={() => selectLocale(LOCALE.PT)}
        className="flex items-center gap-2 lg:hidden"
      >
        <Flag country="BR" /> Português Brasil
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={() => selectLocale(LOCALE.EN)}
        className="flex items-center gap-2 lg:hidden"
      >
        <Flag country="US" /> English USA
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
