"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900"
        >
          Synboom
        </Link>

        {/* Desktop Navigation */}
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

        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button variant="default">Get in Touch</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full border-b border-slate-200 bg-white shadow-lg px-4 py-6 space-y-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/about"
              className="text-base font-medium text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" className="w-full mt-4">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
