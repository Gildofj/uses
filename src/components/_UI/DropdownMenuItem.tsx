import { Menu } from "@headlessui/react";
import type { ReactNode } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function DropdownMenuItem({
  href,
  children,
  className = "",
}: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? "bg-purple-200 dark:bg-zinc-700" : "",
            "block px-4 py-2 text-sm",
            className,
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}
