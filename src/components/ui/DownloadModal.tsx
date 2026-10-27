"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Button } from "./Button";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl?: string;
}

export function DownloadModal({
  isOpen,
  onClose,
  downloadUrl = "https://github.com/jenesisokorie/synboom-corporate/releases/download/v1.0.1/Specs.v1.0.1.apk",
}: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("access_key", "3e922913-6dd3-4630-b3ac-c54ed5264eb8");
    formData.append("subject", "New Specs Beta APK Download Request");
    formData.append("from_name", "Specs Beta Download Portal");
    formData.append("email", email);
    if (name) formData.append("name", name);
    formData.append(
      "message",
      `New tester downloaded Specs v1.0.1 APK!\n\nEmail: ${email}\nName: ${name || "Not provided"}\nTimestamp: ${new Date().toISOString()}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        // Automatically trigger file download
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "Specs.v1.0.1.apk";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setName("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10"
          >
            {/* Header pattern */}
            <div className="bg-[#000066] p-6 text-white relative">
              <button
                onClick={handleReset}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-red-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Specs v1.0.1 Android Beta
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {submitted ? "Download Starting..." : "Get Specs for Android"}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm mt-1">
                Enter your details to receive early tester perks and the direct download.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Perk Banner */}
                  <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                    <span className="text-base">🎁</span>
                    <span>
                      <strong>Tester Reward:</strong> You will receive <strong>2 months free</strong> on the Specs Business Plan when we officially launch!
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="designer@yourbrand.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Brand / Your Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Apex Tailoring Studio"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="brandRed"
                    className="w-full py-5 text-sm font-bold rounded-xl shadow-lg shadow-[#990000]/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating Download Link...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Continue to Download APK
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-center text-slate-400 leading-tight">
                    We will never spam you. By continuing, you agree to receive beta updates and your 2-month launch promo.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Download Triggered!
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      Your download for <strong>Specs v1.0.1 APK</strong> should start automatically in your browser.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
                    <p className="font-semibold text-slate-900">
                      Didn&apos;t start automatically?
                    </p>
                    <a
                      href={downloadUrl}
                      download="Specs.v1.0.1.apk"
                      className="inline-flex items-center gap-1.5 text-[#000066] font-bold underline hover:text-[#990000]"
                    >
                      <Download className="w-3.5 h-3.5" /> Click here to manually download
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://forms.gle/t9vER3USHvmgM3d4A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button
                        variant="default"
                        className="w-full py-5 text-xs md:text-sm font-semibold rounded-xl bg-[#000066] text-white hover:bg-[#000044]"
                      >
                        Leave Feedback for 2 Months Free
                      </Button>
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-slate-600 font-medium"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

