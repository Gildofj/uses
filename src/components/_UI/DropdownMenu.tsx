import { Menu, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownMenuProps {
  iconButton: ReactNode;
  className?: string;
  children: ReactNode[];
}

export default function DropdownMenu({
  iconButton,
  className,
  children,
}: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div
        className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-purple-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
        aria-label="menu"
      >
        <Menu.Button>{iconButton}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 sclae-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            "absolute right-0 z-10 mt-2 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-purple-50 dark:bg-zinc-800 shadow-xl ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700",
            className || "",
          )}
        >
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
