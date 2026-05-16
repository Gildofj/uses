import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { classNames } from "../../utils/classNames";

interface DropdownMenuProps {
  iconButton: ReactNode;
  buttonClassName?: string;
  className?: string;
  children: ReactNode[];
}

export default function DropdownMenu({
  iconButton,
  buttonClassName,
  className,
  children,
}: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative flex text-left">
      <MenuButton
        className={classNames(
          "inline-flex items-center rounded-2xl border-none p-2 text-sm font-medium shadow-soft-flat hover:shadow-soft-hover focus:shadow-soft-pressed transition-all duration-300 cursor-pointer bg-white dark:bg-zinc-800",
          buttonClassName || "",
        )}
        aria-label="menu"
      >
        {iconButton}
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className={classNames(
            "z-50 mt-2 origin-top-right rounded-3xl border-none bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-soft-flat ring-opacity-5 focus:outline-none p-2 min-w-[200px]",
            className || "",
          )}
        >
          <div className="py-1">{children}</div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
