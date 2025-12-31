import { MenuItem } from "@headlessui/react";
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
    <MenuItem
      as="div"
      {...(href && { href })}
      {...(onClick && { onClick })}
      className={classNames(
        "block px-4 py-2 text-sm w-full text-left cursor-pointer",
        className,
      )}
    >
      {({ focus, ...passthroughProps }) => {
        const Element = href ? "a" : "button";

        return (
          <Element
            {...passthroughProps}
            className={classNames(
              focus ? "bg-purple-200 dark:bg-zinc-700" : "",
              className,
            )}
          >
            {children}
          </Element>
        );
      }}
    </MenuItem>
  );
}
