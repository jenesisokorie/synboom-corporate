"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import { ArrowRight, Smartphone, Ruler, Database, Cloud } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#000066] text-white py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000066] via-[#000044] to-[#990000]/20 opacity-80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container relative z-10 mx-auto max-w-5xl text-center space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Building Infrastructure for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Emerging Workflows
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Synboom Limited is a technology studio and holding company
            engineering specialized digital infrastructure, B2B SaaS, and mobile
            platforms.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-4">
            <Link href="/about">
              <Button className="bg-[#990000] hover:bg-[#7a0000] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#990000]/20 transition-all hover:-translate-y-0.5">
                Discover Our Vision
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Corporate Identity Strip */}
      <section className="border-b border-slate-200 bg-white py-12 px-4 relative z-20 -mt-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100"
        >
          <motion.div variants={fadeInUp} className="p-4 space-y-3 group">
            <h3 className="font-bold text-[#000066] text-lg group-hover:text-[#990000] transition-colors">
              B2B SaaS
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Enterprise-grade tools built for specialized, high-demand
              industries.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-4 space-y-3 group">
            <h3 className="font-bold text-[#000066] text-lg group-hover:text-[#990000] transition-colors">
              Mobile Workflow
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Offline-first operating systems powering mobile professionals
              globally.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-4 space-y-3 group">
            <h3 className="font-bold text-[#000066] text-lg group-hover:text-[#990000] transition-colors">
              Digital Commerce
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Scalable infrastructure powering deeply connected client portals.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Spotlight: Specs */}
      <section className="py-24 px-4 bg-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="text-xs font-bold tracking-widest text-[#990000] uppercase flex items-center gap-2">
              <span className="w-8 h-px bg-[#990000]"></span> Flagship
              Subsidiary
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000066] mt-4">
              Specs
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl text-lg leading-relaxed">
              A mobile-first operating system and workspace platform engineered
              for bespoke tailors and fashion designers.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-12 shadow-sm grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-5 group"
              >
                <div className="p-3.5 bg-slate-50 rounded-xl text-slate-400 border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                  <Ruler className="w-6 h-6 group-hover:text-[#990000] transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Measurement Vault
                  </h4>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                    Secure, standardized client measurement storage and
                    historical tracking.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-5 group"
              >
                <div className="p-3.5 bg-slate-50 rounded-xl text-slate-400 border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                  <Database className="w-6 h-6 group-hover:text-[#990000] transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Hybrid Offline-First
                  </h4>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                    Local data synchronization allowing seamless workspace
                    operation without connectivity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-5 group"
              >
                <div className="p-3.5 bg-slate-50 rounded-xl text-slate-400 border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                  <Cloud className="w-6 h-6 group-hover:text-[#990000] transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Connected Portals
                  </h4>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                    Direct digital touchpoints for client moodboards, approvals,
                    and progress tracking.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto py-6 font-semibold"
                  >
                    Explore the Specs Ecosystem{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image & CTA Box Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="flex flex-col gap-6"
            >
              <Image
                src="/specs-about.jpg"
                alt="Specs App Dashboard Workflow"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg border border-slate-200 object-cover"
                priority
              />

              <div className="bg-gradient-to-br from-[#000066] to-[#000033] rounded-2xl p-8 flex flex-col justify-center text-center space-y-6 text-white relative overflow-hidden shadow-2xl shadow-[#000066]/20 border border-[#000066]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#990000] blur-[80px] opacity-40 rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Coming to Google Play
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Join the exclusive waitlist for our upcoming beta release.
                  </p>
                </div>
                <Link href="/contact" className="relative z-10">
                  <Button className="w-full py-6 font-semibold bg-white text-[#000066] hover:bg-slate-100 hover:text-[#990000] flex items-center justify-center gap-2 transition-all shadow-lg">
                    Request Beta Access <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline / Upcoming Projects */}
      <section className="py-24 px-4 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-5xl text-center space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000066]">
              The Innovation Pipeline
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Synboom Limited continuously prototypes and develops proprietary
              software solutions. Our upcoming subsidiaries will expand our
              footprint into new verticals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Daybook */}
            <motion.div
              variants={fadeInUp}
              className="p-8 border border-slate-200 rounded-2xl bg-white text-left flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-[#000066]/30 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#000066]/10 text-[#000066] text-xs font-bold tracking-wide rounded-full">
                  MVP in Development
                </span>
              </div>
              <h3 className="font-extrabold text-[#000066] text-xl group-hover:text-[#990000] transition-colors">
                Daybook
              </h3>
              <p className="text-sm text-slate-500 flex-grow leading-relaxed">
                A native Android application enabling real-time income, expense
                tracking, and profit visibility tailored for small business
                owners.
              </p>
            </motion.div>

            {/* Solar-Ops */}
            <motion.div
              variants={fadeInUp}
              className="p-8 border border-slate-200 rounded-2xl bg-white text-left flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-[#990000]/30 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#990000]/10 text-[#990000] text-xs font-bold tracking-wide rounded-full">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-extrabold text-[#000066] text-xl group-hover:text-[#990000] transition-colors">
                Solar-Ops
              </h3>
              <p className="text-sm text-slate-500 flex-grow leading-relaxed">
                A full-scale business management system engineered to handle
                operations, installations, sales, purchase, CRM, and everything
                related to solar energy business.
              </p>
            </motion.div>

            {/* Fitness BMS */}
            <motion.div
              variants={fadeInUp}
              className="p-8 border border-slate-200 rounded-2xl bg-white text-left flex flex-col gap-4 shadow-sm hover:shadow-xl hover:border-[#990000]/30 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#990000]/10 text-[#990000] text-xs font-bold tracking-wide rounded-full">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-extrabold text-[#000066] text-xl group-hover:text-[#990000] transition-colors">
                Fitness BMS
              </h3>
              <p className="text-sm text-slate-500 flex-grow leading-relaxed">
                A full-scale business management system engineered to handle
                operations, memberships, and everything gym and fitness related.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
