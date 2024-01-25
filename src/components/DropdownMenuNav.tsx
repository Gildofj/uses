import { IoLogoGithub, IoMenu } from "react-icons/io5/index.js";
import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";
import { PORTFOLIO_URL, REPO_URL } from "../consts";
import { useTranslate } from "../i18n/utils";

interface DropdownMenuNavProps {
  locale: "pt" | "en";
}

export default function DropdownMenuNav({ locale }: DropdownMenuNavProps) {
  const t = useTranslate(locale);

  return (
    <DropdownMenu iconButton={<IoMenu className="h-5 w-5" />} className="w-56">
      <DropdownMenuItem className="md:hidden" href={`/uses/${locale}`}>
        {t("nav.home")}
      </DropdownMenuItem>
      <DropdownMenuItem className="md:hidden" href={PORTFOLIO_URL}>
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
      <DropdownMenuItem href="/uses/categories/computacao">
        {t("nav.computing")}
      </DropdownMenuItem>
      <DropdownMenuItem href="/uses/categories/desk">
        {t("nav.desk")}
      </DropdownMenuItem>
    </DropdownMenu>
  );
}
