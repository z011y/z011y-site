import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-1100">
      <div className="flex h-16 w-full items-center justify-between bg-white/50 px-10 backdrop-blur-xl backdrop-saturate-200 dark:bg-black/50">
        <div className="flex gap-4">
          <img src="/icon.svg" alt="logo" width="24" height="24" />
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <nav className="bg-white dark:bg-black">
        <div className="flex h-8 w-full items-center justify-center gap-16 border-t border-gray-200 bg-gradient-to-r from-green/20 via-blue/20 to-purple/20 dark:border-gray-1100">
          <a className="font-mono text-xs uppercase tracking-widest" href="/">
            about
          </a>
          <a className="font-mono text-xs uppercase tracking-widest" href="/">
            career
          </a>
          <a className="font-mono text-xs uppercase tracking-widest" href="/">
            projects
          </a>
          <a className="font-mono text-xs uppercase tracking-widest" href="/">
            skills
          </a>
        </div>
      </nav>
    </header>
  );
}
