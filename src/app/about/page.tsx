"use client";

import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Code,
  Layers,
  Zap,
  Briefcase,
} from "lucide-react";

export default function About() {
  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="py-24 px-4 container mx-auto max-w-5xl font-sans">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-3xl mb-16"
      >
        <div className="w-16 h-1.5 bg-[#990000] rounded-full mb-6"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000066] mb-6 tracking-tight">
          About Synboom Limited
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Synboom Limited is a technology studio and holding company dedicated
          to building specialized digital infrastructure and mobile products for
          emerging industries. We focus on modernizing fragmented workflows
          across African SMEs, private commercial businesses, and
          technology-driven startups through intuitive, offline-first software
          solutions.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Governance & Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#990000]" />
              </div>
              <h2 className="text-2xl font-bold text-[#000066]">
                Corporate Status & Governance
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Synboom Limited is officially incorporated under the Companies and
              Allied Matters Act (CAMA) by the Corporate Affairs Commission
              (CAC) in Nigeria{" "}
              <strong className="text-[#000066]"> (RC: 9283940)</strong>. We
              maintain strict internal governance structures covering
              intellectual property ownership, revenue-based licensing models,
              internal financial controls, and regulatory compliance.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Target className="w-6 h-6 text-[#990000]" />
              </div>
              <h2 className="text-2xl font-bold text-[#000066]">
                Our Venture Philosophy
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                We believe that the next wave of productivity requires deeply
                specialized, bespoke tools rather than generic software. Our
                approach is to identify industries with high fragmentation and
                complex physical workflows—such as bespoke tailoring and fashion
                design—and engineer dedicated digital environments to streamline
                them.
              </p>
              <p>
                By functioning as a holding company, Synboom provides a robust
                central foundation for data security, unified authentication,
                and core infrastructure, allowing our subsidiary products to
                scale rapidly and operate reliably in challenging connectivity
                environments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Services Section */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-[#000066] mb-8 text-center">
            Core Services & Capabilities
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
            Our technology capabilities span the entire software lifecycle.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#000066]/30 transition-all group">
              <Code className="w-8 h-8 text-[#990000] mb-5 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-xl font-bold text-[#000066] mb-3">
                Development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Custom Software, Mobile Applications (Android / Cross‑Platform),
                and Web Applications.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#000066]/30 transition-all group">
              <Layers className="w-8 h-8 text-[#990000] mb-5 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-xl font-bold text-[#000066] mb-3">
                Architecture
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Platform Architecture, System Design, Backend Design, and Secure
                Database Structuring.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#000066]/30 transition-all group">
              <Zap className="w-8 h-8 text-[#990000] mb-5 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-xl font-bold text-[#000066] mb-3">Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Business Process Automation, API Development & Integration,
                Role-Based Access Systems, and Subscription System Design.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Business Model & Leadership */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 pt-16">
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[#000066] mb-4">
              Business Model
            </h2>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
              We develop both proprietary internal products and client-specific
              solutions. Our operations are driven by custom development
              engagements, platform licensing models, revenue-sharing technology
              partnerships, and ongoing maintenance agreements.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[#000066] mb-4">
              Leadership & Vision
            </h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#000066] to-[#990000]"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-red-50 rounded-full">
                  <Briefcase className="w-6 h-6 text-[#990000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#000066]">
                    Jenesis Okorie
                  </h3>
                  <p className="text-sm font-semibold text-[#990000]">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Jenesis is a technology entrepreneur and creative brand
                strategist with deep expertise in software system design and
                operational workflow optimization. He leads Synboom Limited’s
                product architecture, system design, and strategic technology
                direction.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our vision is to become the premier digital infrastructure
                provider for specialized mobile professionals. Starting with our
                flagship product,{" "}
                <strong className="text-[#000066]">Specs</strong>, we are
                building a connected ecosystem that bridges the gap between
                physical craftsmanship and modern digital commerce.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
