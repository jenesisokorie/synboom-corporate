import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16 text-slate-600">
      <div className="container mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 text-base">
            Synboom Limited
          </h3>
          <p className="text-sm leading-relaxed">
            Building specialized digital infrastructure and mobile products for
            emerging industries.
          </p>
          <p className="text-xs text-slate-500">
            Incorporated under the Companies and Allied Matters Act (CAMA) by
            the Corporate Affairs Commission (CAC), Nigeria.{" "}
            <strong>RC: 9283940</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 text-base">
            Legal & Compliance
          </h3>
          <ul className="grid gap-3 text-sm">
            <li>
              <Link
                href="/privacy"
                className="hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-slate-900 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 text-base">Contact</h3>
          <ul className="grid gap-3 text-sm">
            <li>support@synboom.com</li>
            <li>+234 (0) 7019162233</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 text-base">
            Headquarters
          </h3>
          <address className="text-sm not-italic leading-relaxed">
            20, School Road,
            <br />
            Owerri, Imo State,
            <br />
            Nigeria
          </address>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 mt-16 pt-8 border-t border-slate-100 text-sm flex justify-center items-center text-center">
        <p>
          &copy; {new Date().getFullYear()} Synboom Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
