import { useEffect, useState } from "react";

const themes = ["light", "dark"];

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
    <div className="inline-flex items-center p-[1px] bg-purple-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = t === theme;
        return (
          <button
            key={t}
            data-checked={checked}
            className="data-[checked]:bg-white cursor-pointer rounded-full"
            onClick={toggleTheme}
          >
            {t}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
