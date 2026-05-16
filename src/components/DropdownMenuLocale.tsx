import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";
import { Fragment } from "react";
import { COUNTRY_FLAG, LOCALE, useLocale } from "./hooks/useLocale";

export default function DropdownMenuLocale() {
  const { locale, selectLocale } = useLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const selectedCountry = COUNTRY_FLAG[locale];

  if (!isMounted) return <div className="h-10 w-10" />;

  return (
    <Menu as="div" className="relative flex text-left">
      {({ open }) => (
        <>
          <MenuButton
            as={motion.div}
            className="group relative z-10 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white/50 dark:bg-zinc-900/50 shadow-neu-flat transition-all outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-full w-full p-0.5 transition-transform duration-500 group-hover:scale-110 [&>img]:h-full [&>img]:w-full [&>img]:rounded-lg [&>img]:object-cover">
              <Flag country={selectedCountry} />
            </div>
          </MenuButton>

          <AnimatePresence>
            {open && (
              <MenuItems
                static
                as={Fragment}
                anchor="bottom"
                modal={false}
              >
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="z-50 mt-3 flex flex-col items-center justify-center gap-4 p-4 overflow-visible bg-transparent shadow-none border-none outline-none"
                >
                  {Object.values(LOCALE)
                    .filter((loc) => loc !== locale)
                    .map((loc, i) => {
                      const country = COUNTRY_FLAG[loc];
                      return (
                        <MenuItem key={loc}>
                          {() => (
                            <div className="p-2 overflow-visible">
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/80 dark:bg-zinc-900/80 shadow-neu-flat transition-all outline-none no-scrollbar"
                                style={{ overflow: 'hidden' }}
                                whileHover={{ scale: 1.2, rotate: 8 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => selectLocale(loc)}
                              >
                                <div className="h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:rounded-lg [&>img]:object-cover">
                                  <Flag country={country} role="button" />
                                </div>
                              </motion.div>
                            </div>
                          )}
                        </MenuItem>
                      );
                    })}
                </motion.div>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}
