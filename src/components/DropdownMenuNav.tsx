import { IoLogoGithub, IoMenu } from "react-icons/io5/index.js";
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
    <DropdownMenu iconButton={<IoMenu className="h-5 w-5" />} className="w-56">
      <DropdownMenuItem className="lg:hidden" href={`/uses/${locale}`}>
        {t("nav.home")}
      </DropdownMenuItem>
      <DropdownMenuItem className="lg:hidden" href={PORTFOLIO_URL}>
        {t("nav.about")}
      </DropdownMenuItem>
      <DropdownMenuItem
        className="inline-flex md:hidden items-center gap-2 w-full"
        href={REPO_URL}
      >
        <IoLogoGithub /> {t("nav.source")}
      </DropdownMenuItem>
      <div className="px-3 py-2 uppercase font-bold text-xs">
        {t("nav.categories")}
      </div>
      <DropdownMenuItem href={`/uses/${locale}/categories/computacao`}>
        {t("nav.computing")}
      </DropdownMenuItem>
      <DropdownMenuItem href={`/uses/${locale}/categories/desk`}>
        {t("nav.desk")}
      </DropdownMenuItem>
      <div className="px-3 py-2 uppercase font-bold text-xs">
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
