import { MenuItem } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { classNames } from "../../utils/classNames";

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
    <MenuItem as={Fragment}>
      {({ focus, ...passthroughProps }) => {
        const Element = href ? "a" : "button";

        return (
          <div
            className={classNames(
              focus ? "bg-purple-200 dark:bg-zinc-700" : "",
              "block px-4 py-2 text-sm w-full text-left cursor-pointer",
              className,
            )}
          >
            <Element
              {...(href && { href })}
              {...(onClick && { onClick })}
              {...passthroughProps}
              className="cursor-pointer"
            >
              {children}
            </Element>
          </div>
        );
      }}
    </MenuItem>
  );
}
