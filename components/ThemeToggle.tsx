import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(null);

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
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}
