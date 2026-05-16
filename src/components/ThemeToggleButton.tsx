import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) return "light";
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme"))
      return localStorage.getItem("theme") as string;
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) return "dark";
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLight = theme === "light";

  return isMounted ? (
    <button
      type="button"
      onClick={toggleTheme}
      className={`
        relative flex h-10 w-20 cursor-pointer items-center rounded-2xl p-1 transition-colors duration-500 outline-none overflow-hidden
        ${isLight ? "bg-zinc-200" : "bg-zinc-700"}
      `}
      aria-label="Toggle theme"
    >
      <motion.div 
        initial={false}
        animate={{ 
          x: isLight ? 0 : 40,
          rotate: isLight ? 0 : 360
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          rotate: { duration: 0.5, ease: "easeInOut" }
        }}
        className="flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-neu-flat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.div
              key="light"
              initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <SunIcon size={18} weight="bold" className="text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="dark"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MoonIcon size={18} weight="bold" className="text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  ) : (
    <div className="h-10 w-20" />
  );
}
