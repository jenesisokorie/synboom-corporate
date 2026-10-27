"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/src/components/ui/Button";
import { DownloadModal } from "@/src/components/ui/DownloadModal";
import { SpecsScreenshotsCarousel } from "@/src/components/SpecsScreenshotsCarousel";
import {
  Scissors,
  Database,
  LineChart,
  Lock,
  Layers,
  Search,
  MessageSquare,
  Smartphone,
  ArrowRight,
  TrendingUp,
  WifiOff,
  Briefcase,
  Download,
  ExternalLink,
} from "lucide-react";

export default function ProductsPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
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

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50">
      {/* Hero Section */}
      <section className="bg-[#000066] text-white pt-20 pb-16 md:pt-28 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000066] via-[#000044] to-[#990000]/20 opacity-80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container relative z-10 mx-auto max-w-5xl text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-red-200 uppercase bg-white/10 px-4 py-1.5 rounded-full mb-2 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#990000] animate-pulse"></span>
            Flagship Ecosystem
          </div>

          {/* Specs Logo in Hero */}
          <div className="flex justify-center items-center">
            <div className="relative p-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/specs-logo.jpg"
                alt="Specs Logo"
                width={130}
                height={130}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-xl shadow-md"
                priority
              />
            </div>
          </div>

          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive, offline-first operating system engineered
            specifically for fashion designers, tailors, and their clientele.
          </p>

          <div className="pt-2 flex flex-col items-center justify-center gap-2.5">
            <Button
              onClick={() => setDownloadModalOpen(true)}
              variant="brandRed"
              className="py-6 px-8 text-base font-bold rounded-full shadow-lg shadow-[#990000]/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Download Specs APK (v1.0.1)
            </Button>
            <a
              href="#testing-feedback"
              className="text-xs text-slate-300 hover:text-white underline underline-offset-4 transition-colors pt-1"
            >
              Scroll down to submit feedback ↓
            </a>
          </div>
        </motion.div>
      </section>

      {/* App Screenshots Gallery Section (Immediately below Hero) */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-100/70 via-slate-50 to-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center mb-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#990000] uppercase bg-red-100/60 px-3.5 py-1.5 rounded-full">
              <Smartphone className="w-3.5 h-3.5 text-[#990000]" />
              Android Interface Preview
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000066]">
              Inside the Specs Mobile OS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Explore live screens from our Android build—from client measurement intake and production pipelines to real-time financial dashboards.
            </p>
          </motion.div>
        </div>

        {/* Endless Marquee Phone Frames + Lightbox Modal */}
        <SpecsScreenshotsCarousel />
      </section>

      {/* The Core Problem & Image Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainerVariants}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold text-[#000066]"
              >
                Solving the Designer&apos;s Dilemma
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 leading-relaxed text-base md:text-lg"
              >
                Historically, bespoke fashion and tailoring have been plagued by
                fragmented data. Designers often juggle paper notebooks for
                measurements, WhatsApp for client communication, and mental math
                for inventory—a fragile system that falls apart as a business
                scales.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 leading-relaxed text-base md:text-lg"
              >
                Specs eliminates the physical notebook. Built on a robust
                architecture utilizing{" "}
                <strong className="text-slate-900">WatermelonDB</strong> for
                local storage and{" "}
                <strong className="text-slate-900">Supabase</strong> for
                real-time cloud synchronization, it bridges the gap between
                chaotic creative processes and streamlined business management.
              </motion.p>
            </motion.div>

            {/* Logo image hidden on mobile, visible on desktop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideInRight}
              className="relative mt-8 lg:mt-0 hidden lg:block"
            >
              <div className="absolute inset-0 bg-[#990000]/10 blur-3xl rounded-full transform scale-90 translate-y-4"></div>
              <Image
                src="/specs-logo.jpg"
                alt="Specs Ecosystem Display"
                width={800}
                height={800}
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-slate-200"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Fashion Designers */}
      <section className="py-16 md:py-20 px-4 bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-10 md:mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000066]">
              For Fashion Designers
            </h2>
            <p className="text-slate-500 mt-3 md:mt-4 text-base md:text-lg">
              The Creative Workspace
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: WifiOff,
                title: "Offline-First Architecture",
                desc: "Full application functionality without an internet connection. Measurements, orders, and inventory are saved locally and automatically synced to the cloud via the Smart Sync engine.",
              },
              {
                icon: Scissors,
                title: "Dynamic Profiles",
                desc: "Customizable, drag-and-drop measurement templates categorized by demographics alongside custom fields to accommodate any unique bespoke requirement.",
              },
              {
                icon: Layers,
                title: "Order & Asset Management",
                desc: "End-to-end tracking for custom and retail orders. Attach local photos, receipts, and design references directly to a client's profile.",
              },
              {
                icon: LineChart,
                title: "Financial Tracking",
                desc: "Built-in tools to monitor fabric stock, log expenses, and generate financial insights to keep the business profitable.",
              },
              {
                icon: Lock,
                title: "Granular Security",
                desc: "App-level biometric locks (TouchID/FaceID) and PIN protection to secure sensitive client data and business financials.",
              },
              {
                icon: Briefcase,
                title: "Tiered Scalability",
                desc: "Options ranging from a free offline-only mode to a Business tier supporting multi-device team synchronization.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-[#990000]/30 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-white w-fit rounded-xl border border-slate-200 mb-4 group-hover:bg-red-50 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#000066] group-hover:text-[#990000] transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Clients */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-10 md:mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000066]">
              For Clients
            </h2>
            <p className="text-slate-500 mt-3 md:mt-4 text-base md:text-lg">
              The Client Hub
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Search,
                title: "Global Designer Directory",
                desc: "A searchable discovery network allowing clients to find workspaces, tailors, and fashion brands locally and globally.",
              },
              {
                icon: Smartphone,
                title: "Live Order Tracking",
                desc: "Real-time visibility into the production stages of custom garments, eliminating the black box of bespoke tailoring.",
              },
              {
                icon: Database,
                title: "Centralized Sizing Specs",
                desc: "A secure vault for personal body profiles, which can be shared digitally with connected designers instantly.",
              },
              {
                icon: MessageSquare,
                title: "Integrated Messaging",
                desc: "Real-time, in-app chat complete with push notifications and media attachments for seamless communication regarding fittings.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-[#990000]/30 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-50 w-fit rounded-xl border border-slate-100 mb-4 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#000066] group-hover:text-[#990000] transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tester Beta Download & Finishing Feedback Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Card 1: Direct Download */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-72 h-36 bg-[#990000]/10 blur-[70px] pointer-events-none rounded-full" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#990000] uppercase bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full">
                <Smartphone className="w-3.5 h-3.5 text-[#990000]" />
                Specs Android Beta (v1.0.1)
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000066] tracking-tight">
                Download Specs for Android
              </h2>

              <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                Experience our offline-first measurement vault and studio management system. Install directly on your Android device and test our latest features.
              </p>

              <div className="pt-2 max-w-md mx-auto">
                <Button
                  onClick={() => setDownloadModalOpen(true)}
                  variant="brandRed"
                  className="w-full py-6 px-8 text-base font-bold rounded-full shadow-lg shadow-[#990000]/25 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Specs APK (v1.0.1)
                </Button>
                <p className="text-xs text-slate-400 mt-2.5">
                  Direct Android APK (.apk) • Free early access • No credit card required
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Finished Testing Feedback */}
          <motion.div
            id="testing-feedback"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#000066] to-[#000044] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-white/10 scroll-mt-24"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#990000] blur-[100px] opacity-30 rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-300/40 text-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <span>🎁</span>
                  <span>Claim 2 Months Free on Launch</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Finished Testing Specs?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Tell us what worked, what needs polish, and what features you&apos;d love to see next. Your feedback directly shapes our official launch release.
                </p>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <Link href="/feedback" className="block w-full">
                  <Button
                    variant="brandRed"
                    className="w-full md:w-auto py-6 px-8 text-sm sm:text-base font-bold rounded-full shadow-lg shadow-[#990000]/40 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Submit Testing Feedback
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Innovation Pipeline (Coming Soon) */}
      <section className="py-20 md:py-24 px-4 bg-[#000066] text-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              The Innovation Pipeline
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Synboom Limited continuously prototypes proprietary software
              solutions. Explore our upcoming subsidiaries expanding into new
              verticals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Daybook */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl hover:bg-white/15 transition-all"
            >
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold tracking-wide rounded-full mb-4 md:mb-5">
                MVP in Development
              </span>
              <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-3">
                Daybook
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                A native Android application enabling real-time income, expense
                tracking, and profit visibility tailored for small business
                owners.
              </p>
            </motion.div>

            {/* Solar-Ops */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl hover:bg-white/15 transition-all"
            >
              <span className="inline-block px-3 py-1 bg-[#990000] text-white text-xs font-bold tracking-wide rounded-full mb-4 md:mb-5">
                Coming Soon
              </span>
              <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-3">
                Solar-Ops
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                A full-scale business management system engineered to handle
                operations, installations, sales, CRM, and inventory for solar
                energy businesses.
              </p>
            </motion.div>

            {/* Fitness BMS */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl hover:bg-white/15 transition-all"
            >
              <span className="inline-block px-3 py-1 bg-[#990000] text-white text-xs font-bold tracking-wide rounded-full mb-4 md:mb-5">
                Coming Soon
              </span>
              <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-3">
                Fitness BMS
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                A full-scale system engineered to handle operations,
                memberships, access control, and everything gym and fitness
                related.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 md:mt-16 text-center"
          >
            <Link href="/contact">
              <Button
                variant="brandRed"
                className="py-6 px-8 md:px-10 text-base md:text-lg font-bold rounded-full shadow-lg shadow-[#990000]/30 flex items-center justify-center gap-2 mx-auto transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Request Early Access{" "}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Download / Email Capture Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
