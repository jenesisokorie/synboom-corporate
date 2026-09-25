"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-0 hover:opacity-90 transition-opacity"
        >
          {/* Spinning Circular Icon */}
          <Image
            src="/logo-icon.png"
            alt="Synboom Icon"
            width={36}
            height={36}
            className="animate-[spin_10s_linear_infinite]"
          />
          {/* Horizontal Text Logo */}
          <Image
            src="/synboom-logo.png"
            alt="Synboom Limited"
            width={180}
            height={60}
            className="h-10 w-auto object-contain -ml-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-[#000066] transition-colors"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-slate-600 hover:text-[#000066] transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-slate-600 hover:text-[#000066] transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-600 hover:text-[#000066] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-[#000066] transition-colors"
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
          <nav className="flex flex-col gap-5">
            <Link
              href="/about"
              className="text-base font-medium text-slate-600 hover:text-[#000066]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-base font-medium text-slate-600 hover:text-[#000066]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-base font-medium text-slate-600 hover:text-[#000066]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-slate-600 hover:text-[#000066]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
