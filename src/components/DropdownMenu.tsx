import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMenu } from "react-icons/io5/index.js";
import DropdowMenuItem from "./DropdownMenuItem";

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div
        className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-purple-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
        aria-label="menu"
      >
        <Menu.Button>
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-purple-50 dark:bg-zinc-800 shadow-xl ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <div className="py-1">
            <div className="px-3 py-2 uppercase font-bold text-xs">
              Categories
            </div>
            <DropdowMenuItem href="/categories/computador">
              Computing
            </DropdowMenuItem>
            <DropdowMenuItem href="/categories/perifericos">
              Periféricos
            </DropdowMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
