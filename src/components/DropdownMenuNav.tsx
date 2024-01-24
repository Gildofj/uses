import { IoLogoGithub, IoMenu } from "react-icons/io5/index.js";
import DropdownMenu from "./_UI/DropdownMenu";
import DropdownMenuItem from "./_UI/DropdownMenuItem";
import { PORTFOLIO_URL, REPO_URL } from "../consts";

export default function DropdownMenuNav() {
  return (
    <DropdownMenu iconButton={<IoMenu className="h-5 w-5" />}>
      <DropdownMenuItem className="md:hidden" href="/uses/">
        Home
      </DropdownMenuItem>
      <DropdownMenuItem className="md:hidden" href={PORTFOLIO_URL}>
        Sobre
      </DropdownMenuItem>
      <DropdownMenuItem
        className="inline-flex md:hidden items-center gap-2 w-full"
        href={REPO_URL}
      >
        <IoLogoGithub /> Código
      </DropdownMenuItem>
      <div className="px-3 py-2 uppercase font-bold text-xs">Categories</div>
      <DropdownMenuItem href="/uses/categories/computacao">
        Computação
      </DropdownMenuItem>
      <DropdownMenuItem href="/uses/categories/desk">Desk</DropdownMenuItem>
    </DropdownMenu>
  );
}
