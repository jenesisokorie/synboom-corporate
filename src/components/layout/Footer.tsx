import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/50 pt-16 pb-8">
      {/* Changed to max-w-5xl to match your page layouts perfectly */}
      <div className="container mx-auto max-w-5xl px-4">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 border-b border-slate-200 pb-16">
          {/* Brand & Identity Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-0 hover:opacity-90 transition-opacity w-fit"
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

            <p className="text-sm text-slate-500 leading-relaxed pr-4">
              Building specialized digital infrastructure and mobile products
              for emerging industries.
            </p>

            {/* Corporate Trust Badge */}
            <div className="inline-block px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-500 shadow-sm">
              Incorporated under CAMA (CAC, Nigeria)
              <strong className="text-[#000066] mt-0.5 block tracking-wide">
                RC: 9283940
              </strong>
            </div>
          </div>

          {/* Legal & Compliance Column */}
          <div>
            <h3 className="text-xs font-bold text-[#000066] uppercase tracking-wider mb-6">
              Legal & Compliance
            </h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#000066] transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#000066] transition-colors inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold text-[#000066] uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a
                  href="mailto:support@synboomlimited.com"
                  className="hover:text-[#000066] transition-colors"
                >
                  support@synboomlimited.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347019162233"
                  className="hover:text-[#000066] transition-colors"
                >
                  +234 (0) 701 916 2233
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarters Column */}
          <div>
            <h3 className="text-xs font-bold text-[#000066] uppercase tracking-wider mb-6">
              Headquarters
            </h3>
            <address className="text-sm text-slate-500 not-italic leading-relaxed">
              20, School Road,
              <br />
              Owerri, Imo State,
              <br />
              Nigeria
            </address>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Synboom Limited. All rights
            reserved.
          </p>

          {/* Social Media Links - Hover utilizes the Red brand color */}
          <div className="flex items-center gap-3">
            <SocialLink
              href="https://facebook.com/synboomlimited"
              ariaLabel="Synboom Limited on Facebook"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/synboomlimited"
              ariaLabel="Synboom Limited on X (Twitter)"
            >
              <TwitterIcon />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/synboomlimited"
              ariaLabel="Synboom Limited on Instagram"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/synboomlimited"
              ariaLabel="Synboom Limited on LinkedIn"
            >
              <LinkedinIcon />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Component for Social Icons ---
function SocialLink({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#990000] hover:border-[#990000] hover:shadow-sm transition-all hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

// --- Inline SVG Icon Components ---
function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
