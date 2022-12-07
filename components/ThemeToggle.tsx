import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

type Theme = "dark" | "light";

export const themeAtom = atom<Theme | null>(null);

export default function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = theme;
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = theme;
    } else {
      setTheme(localStorage.theme || "light");
    }
  }, [theme]);

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-4"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
