import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) return undefined;
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme"))
      return localStorage.getItem("theme");
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

  return isMounted ? (
    <button
      onClick={toggleTheme}
      className={`
        w-20 h-10 flex items-center p-1.5 rounded-3xl cursor-pointer
        ${theme === "light" ? "justify-start bg-purple-200" : "justify-end bg-zinc-600"}
      `}
    >
      <motion.div layout className="rounded-3xl p-2 bg-white">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="light"
              initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <SunIcon size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="dark"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MoonIcon color="#000000" size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  ) : (
    <div />
  );
}
