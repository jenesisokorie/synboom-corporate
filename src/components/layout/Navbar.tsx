import Link from "next/link";
import { Button } from "@/src/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900"
        >
          Synboom
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <Link href="/contact">
            <Button variant="default">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
