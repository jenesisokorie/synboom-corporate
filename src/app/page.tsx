import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { ArrowRight, Smartphone, Ruler, Database, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Building Infrastructure for Emerging Workflows
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Synboom Limited is a technology studio and holding company
            engineering specialized digital infrastructure, B2B SaaS, and mobile
            platforms.
          </p>
        </div>
      </section>

      {/* Corporate Identity Strip */}
      <section className="border-y border-slate-200 bg-white py-12 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-slate-900">B2B SaaS</h3>
            <p className="text-sm text-slate-600">
              Enterprise-grade tools for specialized industries.
            </p>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-slate-900">Mobile Workflow</h3>
            <p className="text-sm text-slate-600">
              Offline-first operating systems for mobile professionals.
            </p>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-slate-900">Digital Commerce</h3>
            <p className="text-sm text-slate-600">
              Infrastructure powering connected client portals.
            </p>
          </div>
        </div>
      </section>

      {/* Product Spotlight: Specs */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Flagship Subsidiary
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Specs</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">
              A mobile-first operating system and workspace platform engineered
              for bespoke tailors and fashion designers.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                  <Ruler className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Measurement Vault
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Secure, standardized client measurement storage and history.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Hybrid Offline-First
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Local data synchronization allowing seamless operation
                    without connectivity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Connected Portals
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Direct digital touchpoints for client moodboards and
                    progress tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 flex flex-col justify-center text-center space-y-6 h-full text-white">
              <Smartphone className="w-16 h-16 mx-auto text-slate-400" />
              <div>
                <h3 className="text-xl font-bold">Coming to Google Play</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Join the waitlist for our upcoming beta release.
                </p>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-2">
                  Request Beta Access <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline / Upcoming Projects */}
      <section className="py-24 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              The Innovation Pipeline
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Synboom Limited continuously prototypes and develops proprietary
              software solutions. Our upcoming subsidiaries will expand our
              footprint into new verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Daybook */}
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 text-left flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  MVP in Development
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Daybook</h3>
              <p className="text-sm text-slate-600 flex-grow">
                A native Android application enabling real-time income, expense
                tracking, and profit visibility tailored for small business
                owners.
              </p>
            </div>

            {/* Pro Fashion BMS */}
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 text-left flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                Pro Fashion BMS
              </h3>
              <p className="text-sm text-slate-600 flex-grow">
                Expanding on the foundation of Specs, this is a comprehensive,
                enterprise-level business management suite designed specifically
                for the fashion industry.
              </p>
            </div>

            {/* Fitness BMS */}
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 text-left flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Fitness BMS</h3>
              <p className="text-sm text-slate-600 flex-grow">
                A full-scale business management system engineered to handle
                operations, memberships, and everything gym and fitness related.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
