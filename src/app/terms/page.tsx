"use client";

import { motion, Variants } from "framer-motion";
import {
  Scale,
  FileText,
  Smartphone,
  Users,
  CreditCard,
  Cloud,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function TermsOfService() {
  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-24 px-4 container mx-auto max-w-4xl font-sans">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <div className="w-16 h-1.5 bg-[#990000] rounded-full mb-6"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000066] mb-4 tracking-tight">
          Master Terms of Service
        </h1>
        <div className="flex items-center gap-2 text-sm font-semibold text-[#990000] bg-red-50 w-fit px-3 py-1.5 rounded-full mb-6">
          <FileText className="w-4 h-4" />
          Effective Date: September 7, 2026
        </div>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          These Master Terms of Service (&quot;Terms&quot;) govern your access
          to and use of websites, applications, and services operated by Synboom
          Limited (&quot;Synboom&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;).
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Part 1: General Corporate Terms */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
            <div className="p-3 bg-slate-50 rounded-xl">
              <Scale className="w-6 h-6 text-[#000066]" />
            </div>
            <h2 className="text-2xl font-bold text-[#000066]">
              Part 1: General Corporate Terms
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#990000]" /> 1.1
                Acceptance of Terms
              </h3>
              <p className="text-slate-600 leading-relaxed ml-7">
                By creating an account, accessing, or using any Synboom Limited
                service, you agree to be bound by these Terms. If you do not
                agree, you may not use our platforms.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-2">
                <Users className="w-5 h-5 text-[#990000]" /> 1.2 User Conduct &
                Intellectual Property
              </h3>
              <p className="text-slate-600 leading-relaxed ml-7">
                You retain all rights to the designs, measurements, and content
                you upload. You agree not to upload harmful code, harass other
                users, or use our platforms for unlawful activities. All
                underlying software, platforms, and branding remain the
                intellectual property of Synboom Limited. We reserve the right
                to suspend or terminate accounts violating these terms.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-2">
                <AlertTriangle className="w-5 h-5 text-[#990000]" /> 1.3
                Limitation of Liability
              </h3>
              <p className="text-slate-600 leading-relaxed ml-7">
                To the maximum extent permitted by law, Synboom Limited shall
                not be liable for any indirect, incidental, or consequential
                damages resulting from the use or inability to use our services,
                including production delays, measurement errors, or lost
                profits.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Part 2: Product-Specific Terms (Specs) */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden"
        >
          {/* Subtle brand accent line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#990000]"></div>

          <div className="mb-8 border-b border-slate-100 pb-6">
            <h2 className="text-2xl font-bold text-[#000066] mb-2">
              Part 2: Product-Specific Terms
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              The following clauses apply specifically to users of the
              designated software products.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-[#990000]" />
              <h3 className="text-xl font-bold text-[#000066]">
                Module A: Specs (Fashion Business Management)
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                  <Users className="w-5 h-5 text-[#000066]" /> A.1 Account Roles
                </h4>
                <p className="text-slate-600 mb-3 ml-7">
                  Specs provides functionalities based on your selected base
                  role:
                </p>
                <ul className="space-y-3 ml-7">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#990000] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">Client Mode:</strong>{" "}
                      Intended for individuals seeking custom fashion services.
                      Clients may use the core directory and communication tools
                      free of charge.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#990000] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">Designer Mode:</strong>{" "}
                      Intended for fashion professionals managing workspaces,
                      orders, and production pipelines.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                  <CreditCard className="w-5 h-5 text-[#000066]" /> A.2
                  Subscriptions and Billing
                </h4>
                <p className="text-slate-600 mb-3 ml-7">
                  While the app functions offline for all users, Designers
                  require an active subscription for cloud synchronization and
                  advanced business features.
                </p>
                <ul className="space-y-3 ml-7 mb-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#000066] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">Free Tier:</strong>{" "}
                      Limited to offline, local-only usage.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#000066] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">Standard Tier:</strong>{" "}
                      Enables cloud backup and synchronization for solo
                      designers.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#000066] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">
                        Business & Team Seat Tiers:
                      </strong>{" "}
                      Enables multi-designer workspaces, advanced team
                      synchronization, and assigned tailoring roles.
                    </p>
                  </li>
                </ul>
                <p className="text-sm font-medium text-slate-500 ml-7 bg-white inline-block px-3 py-1.5 rounded border border-slate-200">
                  All subscription payments are non-refundable unless required
                  by applicable law.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                  <Cloud className="w-5 h-5 text-[#000066]" /> A.3 Data
                  Synchronization (Syncore Engine)
                </h4>
                <p className="text-slate-600 leading-relaxed ml-7">
                  Our offline-first sync engine requires a stable internet
                  connection and an active subscription (for Designers) to push
                  data to the cloud. Synboom Limited is not liable for data loss
                  occurring due to app deletion while the device is in an
                  unsynced, offline state.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                  <RefreshCw className="w-5 h-5 text-[#000066]" /> A.4 Role
                  Switching Limitations
                </h4>
                <p className="text-slate-600 leading-relaxed ml-7">
                  If you operate as a Designer, you cannot switch your base role
                  back to a Client while you maintain active workspace
                  connections with customers. You must first sever these
                  connections and downgrade any active Business profiles to
                  maintain data integrity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
