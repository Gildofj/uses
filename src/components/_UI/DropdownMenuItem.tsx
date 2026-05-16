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
              focus ? "bg-primary/10 text-primary shadow-soft-pressed" : "",
              "block px-4 py-2 text-sm w-full text-left cursor-pointer rounded-2xl transition-all duration-300",
              className,
            )}
          >
            <Element
              {...(href && { href })}
              {...(onClick && { onClick })}
              {...passthroughProps}
              className={classNames("cursor-pointer block w-full font-medium", className)}
            >
              {children}
            </Element>
          </div>
        );
      }}
    </MenuItem>
  );
}
