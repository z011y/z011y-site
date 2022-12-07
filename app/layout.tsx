import type { ReactNode } from "react";
import Script from "next/script";

import "app/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const INIT_THEME_SCRIPT = `(() => {
  const storedTheme = localStorage.getItem("theme");
  const currentTheme = storedTheme
    ? storedTheme
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  localStorage.setItem("theme", currentTheme);
})()`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          id="init-theme"
          dangerouslySetInnerHTML={{
            __html: INIT_THEME_SCRIPT,
          }}
        />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
