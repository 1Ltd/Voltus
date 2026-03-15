import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
export default function Header() {
  return (
    <header className="flex justify-between px-6 py-4 items-center">
      <div className="flex items-center gap-4">
        <Link href="/utilities">
          <Logo />
        </Link>
      </div>

      <div className="flex gap-3">
        <ThemeToggle />
        <Favicon />
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 20 H74 L54 55 H74 L54 90 Z" fill="white"/>
    </svg>
  );
};

const Favicon = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 20 H74 L54 55 H74 L54 90 Z" fill="white"/>
    </svg>
  );
};
