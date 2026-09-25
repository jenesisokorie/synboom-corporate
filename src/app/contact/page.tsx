"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3e922913-6dd3-4630-b3ac-c54ed5264eb8");
    formData.append("from_name", "Synboom Website Contact");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(
          "Something went wrong. Please reach out via support@synboomlimited.com.",
        );
      }
    } catch {
      alert(
        "Unable to send inquiry. Please email support@synboomlimited.com directly.",
      );
    } finally {
      setLoading(false);
    }
  }

  // Animation variants for staggered entrance with proper TypeScript types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-24 px-4 container mx-auto max-w-5xl font-sans">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mb-16"
      >
        <div className="w-16 h-1.5 bg-[#990000] rounded-full mb-6"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000066] mb-6 tracking-tight">
          Contact Synboom
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          For corporate inquiries, investment, or application support, reach out
          via our official channels.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information Column - Staggered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex gap-5 items-start group"
          >
            <div className="p-3 bg-red-50 rounded-lg shrink-0 group-hover:bg-[#990000] transition-colors duration-300">
              <Mail className="w-6 h-6 text-[#990000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-lg">Email</h3>
              <a
                href="mailto:support@synboomlimited.com"
                className="text-slate-600 hover:text-[#000066] transition-colors mt-1 block"
              >
                support@synboomlimited.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 items-start group"
          >
            <div className="p-3 bg-red-50 rounded-lg shrink-0 group-hover:bg-[#990000] transition-colors duration-300">
              <Phone className="w-6 h-6 text-[#990000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-lg">Phone</h3>
              <a
                href="tel:+2347019162233"
                className="text-slate-600 hover:text-[#000066] transition-colors mt-1 block"
              >
                +234 (0) 701 916 2233
              </a>
              <p className="text-sm text-slate-500 mt-2 font-medium">
                Available Mon-Fri, 9am - 5pm WAT
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-5 items-start group"
          >
            <div className="p-3 bg-red-50 rounded-lg shrink-0 group-hover:bg-[#990000] transition-colors duration-300">
              <MapPin className="w-6 h-6 text-[#990000] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-lg">
                Headquarters
              </h3>
              <address className="text-slate-600 not-italic mt-1 leading-relaxed">
                20, School Road,
                <br />
                Owerri, Imo State,
                <br />
                Nigeria
              </address>
              <div className="mt-3 inline-block px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-xs text-slate-600 font-medium">
                Registered with CAC
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative"
        >
          {/* Brand Gradient Top Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#000066] to-[#990000]"></div>

          <div className="p-8 lg:p-10">
            <h3 className="font-bold text-2xl text-slate-900 mb-6">
              Send a Direct Inquiry
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800"
              >
                <h4 className="font-semibold text-lg mb-2">Message Sent</h4>
                <p className="text-sm leading-relaxed">
                  Thank you for contacting Synboom Limited. Your inquiry has
                  been routed to our team, and we will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#000066]/20 focus:border-[#000066] outline-none transition-all shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#000066]/20 focus:border-[#000066] outline-none transition-all shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#000066]/20 focus:border-[#000066] outline-none transition-all shadow-sm resize-y"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 text-md font-semibold bg-[#000066] hover:bg-[#000044] text-white transition-colors"
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
