import { Menu } from "@headlessui/react";
import type { ReactNode } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function DropdownMenuItem({
  href,
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <>
          {onClick && (
            <button
              onClick={onClick}
              className={classNames(
                active ? "bg-purple-200 dark:bg-zinc-700" : "",
                "block px-4 py-2 text-sm",
                className,
              )}
            >
              {children}
            </button>
          )}
          {href && (
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
        </>
      )}
    </Menu.Item>
  );
}
