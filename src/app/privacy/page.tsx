"use client";

import { motion, Variants } from "framer-motion";
import {
  Shield,
  Smartphone,
  Cloud,
  Lock,
  Users,
  Mail,
  FileText,
} from "lucide-react";

export default function PrivacyPolicy() {
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
    <div className="py-16 md:py-24 px-4 container mx-auto max-w-4xl font-sans">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-10 md:mb-12"
      >
        <div className="w-12 md:w-16 h-1.5 bg-[#990000] rounded-full mb-6"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000066] mb-4 tracking-tight">
          Master Privacy Policy
        </h1>
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#990000] bg-red-50 w-fit px-3 py-1.5 rounded-full mb-6">
          <FileText className="w-4 h-4 shrink-0" />
          Effective Date: September 7, 2026
        </div>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Welcome to Synboom Limited. We respect your privacy and are committed
          to protecting your personal data. This Master Privacy Policy explains
          how we collect, use, and safeguard your information across our
          corporate website and all subsidiary products and applications.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6 md:space-y-8"
      >
        {/* Part 1: General Corporate Privacy */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 border-b border-slate-100 pb-4 md:pb-6">
            <div className="p-2.5 md:p-3 bg-slate-50 rounded-xl shrink-0">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#000066]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#000066]">
              Part 1: General Corporate Privacy
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                1.1 Information We Collect
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                When you visit the Synboom corporate website or contact us
                directly, we may collect your name, email address, and any
                contents of messages you send us for business and support
                inquiries.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                1.2 Data Retention & Deletion
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                We retain your data as long as necessary for legitimate business
                purposes. You may request account or data deletion at any time
                by contacting support. Upon verified request, your personal data
                will be permanently purged from our active databases.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Part 2: Product-Specific Policies (Specs) */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
        >
          {/* Subtle brand accent line */}
          <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full bg-[#990000]"></div>

          <div className="mb-6 md:mb-8 border-b border-slate-100 pb-4 md:pb-6 ml-2 md:ml-0">
            <h2 className="text-xl md:text-2xl font-bold text-[#000066] mb-2">
              Part 2: Product-Specific Policies
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium">
              The following clauses apply specifically to users of the
              designated software products.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200 mb-6 md:mb-8">
            <div className="flex items-start md:items-center gap-3 mb-5 md:mb-6">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-[#990000] shrink-0 mt-0.5 md:mt-0" />
              <h3 className="text-lg md:text-xl font-bold text-[#000066]">
                Module A: Specs (Fashion Business Management)
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">
                  A.1 Information Collected in Specs
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#990000] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">
                        Account Information:
                      </strong>{" "}
                      Name, email address, username, phone number, and profile
                      picture.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#990000] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">
                        Fashion & Measurement Data:
                      </strong>{" "}
                      Body measurements, design preferences, and order details.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#990000] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">
                        Communication Data:
                      </strong>{" "}
                      Chat messages and media shared between Clients and
                      Designers within the app.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#990000] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">
                        Device Camera & Photos:
                      </strong>{" "}
                      Access is used strictly for uploading garment photos,
                      moodboards, and measurement references upon your explicit
                      request.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="flex items-start md:items-center gap-2 text-base md:text-lg font-bold text-slate-900 mb-3">
                  <Cloud className="w-5 h-5 text-[#000066] shrink-0 mt-0.5 md:mt-0" />
                  <span>A.2 Local Storage & Cloud Syncing</span>
                </h4>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:ml-7">
                  Specs operates on an offline-first architecture powered by the
                  Syncore Engine.
                </p>
                <ul className="space-y-3 md:ml-7">
                  <li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#000066] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">Local Storage:</strong>{" "}
                      Your data is initially stored locally on your device using
                      encrypted databases.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#000066] mt-2 shrink-0"></span>
                    <p>
                      <strong className="text-slate-900">Cloud Sync:</strong> If
                      you are an active subscriber (Standard/Business tier) or a
                      Client, your data is securely synced to our cloud servers
                      to provide cross-device access and backup.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="flex items-start md:items-center gap-2 text-base md:text-lg font-bold text-slate-900 mb-3">
                  <Lock className="w-5 h-5 text-[#000066] shrink-0 mt-0.5 md:mt-0" />
                  <span>A.3 Biometric & Security Data</span>
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed md:ml-7">
                  If you enable Biometric Authentication (TouchID/FaceID) or a
                  Security PIN to lock the app, this data is processed and
                  stored exclusively on your local device. Synboom Limited does
                  not transmit, collect, or store your PINs or biometric
                  signatures on our servers.
                </p>
              </div>

              <div>
                <h4 className="flex items-start md:items-center gap-2 text-base md:text-lg font-bold text-slate-900 mb-3">
                  <Users className="w-5 h-5 text-[#000066] shrink-0 mt-0.5 md:mt-0" />
                  <span>A.4 Data Sharing within Specs</span>
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed md:ml-7">
                  We do not sell your personal data. If you are a Client, your
                  body measurements and order requirements are shared
                  exclusively with the Designer(s) you explicitly connect with.
                  If a Designer downgrades their workspace, client connections
                  may be severed to protect client data integrity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 3: Contact */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#000066] rounded-2xl p-6 md:p-8 text-white text-center shadow-lg"
        >
          <Mail className="w-8 h-8 mx-auto mb-4 text-[#990000]" />
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Questions about your privacy?
          </h2>
          <p className="text-sm md:text-base text-slate-300 mb-6 max-w-xl mx-auto">
            If you have any questions regarding this Privacy Policy or wish to
            exercise your data rights, please reach out to our support team.
          </p>
          <a
            href="mailto:support@synboomlimited.com"
            className="inline-block bg-white text-[#000066] text-sm md:text-base font-bold py-3 px-6 md:px-8 rounded-full hover:bg-slate-100 transition-colors shadow-sm w-full sm:w-auto break-all sm:break-normal"
          >
            support@synboomlimited.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
