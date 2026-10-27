"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/src/components/ui/Button";
import {
  Sparkles,
  CheckCircle2,
  Loader2,
  Send,
  ArrowLeft,
  Smartphone,
  Star,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export default function FeedbackPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    testerEmail: "",
    brandName: "",
    businessType: "Solo Tailor / Freelance Designer",
    deviceTested: "Android mobile phone",
    ratingMeasurements: 5,
    ratingCustomOrders: 5,
    ratingInventory: 5,
    financialInsights:
      "Extremely helpful, gives me a clear view of my finances",
    invoicing: "Yes, it was quick and looked professional",
    featureFeedback: "",
    frustratingPart: "",
    encounteredCrashes: "No, the app ran perfectly smooth",
    crashDescription: "",
    subscriptionLikelihood:
      "Yes, absolutely! It’s a game-changer for my business.",
    pricingThoughts: "",
    magicFeature: "",
    npsScore: 10,
    openToFollowUp: "Yes, I'd love to chat!",
    whatsAppNumber: "",
    generalFeedback: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const submission = new FormData();
    submission.append("access_key", "3e922913-6dd3-4630-b3ac-c54ed5264eb8");
    submission.append(
      "subject",
      `Specs Beta Feedback: ${formData.brandName || formData.testerEmail}`,
    );
    submission.append("from_name", "Specs Beta Feedback Portal");
    submission.append("email", formData.testerEmail);
    submission.append("name", formData.brandName || "Anonymous Tester");

    // Format all questions clearly in message body for email and spreadsheet columns
    submission.append("Email", formData.testerEmail);
    submission.append("Brand / Name", formData.brandName);
    submission.append("Business Type", formData.businessType);
    submission.append("Device Tested", formData.deviceTested);
    submission.append(
      "Rating: Measurements (1-5)",
      formData.ratingMeasurements.toString(),
    );
    submission.append(
      "Rating: Custom Orders (1-5)",
      formData.ratingCustomOrders.toString(),
    );
    submission.append(
      "Rating: Inventory & Storefront (1-5)",
      formData.ratingInventory.toString(),
    );
    submission.append("Financial Insights Feature", formData.financialInsights);
    submission.append("Invoicing Feature", formData.invoicing);
    submission.append(
      "Feature Feedback / Suggestions",
      formData.featureFeedback || "N/A",
    );
    submission.append(
      "Most Frustrating Roadblock",
      formData.frustratingPart || "None",
    );
    submission.append("Crashes or Freezing", formData.encounteredCrashes);
    submission.append("Crash Details", formData.crashDescription || "N/A");
    submission.append("Subscription Intent", formData.subscriptionLikelihood);
    submission.append("Pricing Thoughts", formData.pricingThoughts || "N/A");
    submission.append("Magic Feature Request", formData.magicFeature || "N/A");
    submission.append(
      "Recommendation Score (1-10)",
      formData.npsScore.toString(),
    );
    submission.append("Open to Follow-up Call", formData.openToFollowUp);
    submission.append("WhatsApp Number", formData.whatsAppNumber || "N/A");
    submission.append(
      "General Feedback / Encouragement",
      formData.generalFeedback || "N/A",
    );

    // Also submit in background directly to Google Form so it populates your Google Sheet for free!
    try {
      const googleFormData = new URLSearchParams();
      // 1. Name
      googleFormData.append(
        "entry.667609029",
        formData.brandName || formData.testerEmail,
      );
      // 2. Business type
      googleFormData.append("entry.1684582149", formData.businessType);
      // 3. Device
      googleFormData.append("entry.1946820972", formData.deviceTested);
      // 4. Measurements
      googleFormData.append(
        "entry.806407215",
        formData.ratingMeasurements.toString(),
      );
      // 5. Custom Orders
      googleFormData.append(
        "entry.521712248",
        formData.ratingCustomOrders.toString(),
      );
      // 6. Inventory
      googleFormData.append(
        "entry.1055244239",
        formData.ratingInventory.toString(),
      );
      // 7. Financial Insights
      googleFormData.append("entry.177395626", formData.financialInsights);
      // 8. Invoicing
      googleFormData.append("entry.383750675", formData.invoicing);
      // 9. Feature feedback
      if (formData.featureFeedback) {
        googleFormData.append("entry.1722519275", formData.featureFeedback);
      }
      // 10. Frustrating part
      if (formData.frustratingPart) {
        googleFormData.append("entry.652015153", formData.frustratingPart);
      }
      // 11. Crashes
      googleFormData.append("entry.1526161635", formData.encounteredCrashes);
      // 12. Crash details
      if (formData.crashDescription) {
        googleFormData.append("entry.2014901963", formData.crashDescription);
      }
      // 13. Subscription intent
      googleFormData.append("entry.985858047", formData.subscriptionLikelihood);
      // 14. Pricing
      if (formData.pricingThoughts) {
        googleFormData.append("entry.563737530", formData.pricingThoughts);
      }
      // 15. Magic feature
      if (formData.magicFeature) {
        googleFormData.append("entry.1795801438", formData.magicFeature);
      }
      // 16. NPS
      googleFormData.append("entry.1692532543", formData.npsScore.toString());
      // 17. Follow up call
      googleFormData.append("entry.1302979049", formData.openToFollowUp);
      // 18. WhatsApp number
      if (formData.whatsAppNumber) {
        googleFormData.append("entry.1849406568", formData.whatsAppNumber);
      }
      // 19. Final thoughts
      if (formData.generalFeedback) {
        googleFormData.append("entry.403777868", formData.generalFeedback);
      }

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSepC_RfLCqHeMRcVpwoBpZkizWwYoDnI-Nkw3T2EYJAEQ6kuw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: googleFormData.toString(),
        },
      );
    } catch {
      // Non-blocking: even if no-cors is blocked or network drops, Web3Forms email still succeeds
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submission,
      });

      const res = await response.json();
      if (res.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(res.message || "Failed to submit feedback. Please try again.");
      }
    } catch {
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
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
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Header Banner */}
      <section className="bg-[#000066] text-white py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000066] via-[#000044] to-[#990000]/20 opacity-80" />
        <div className="container relative z-10 mx-auto max-w-3xl text-center space-y-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Specs Ecosystem
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-200 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Beta Testing Feedback
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Help Shape{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Specs
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Your hands-on insights help us craft the ultimate digital assistant
            for bespoke fashion and tailoring studios.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-300/40 text-amber-200 px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-inner">
            <span>🎁</span>
            <span>
              <strong>Tester Perk:</strong> Receive{" "}
              <strong>2 Months FREE</strong> on the Specs Business Plan when we
              officially launch!
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-3xl px-4 -mt-8 relative z-20">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200 shadow-xl text-center space-y-6"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#000066]">
                Thank You for Your Feedback!
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                We have received your responses. Your insights will directly
                influence upcoming releases of Specs.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-900 max-w-md mx-auto text-sm space-y-1">
              <p className="font-bold">🎉 Your Launch Reward is Locked In</p>
              <p className="text-xs text-amber-800 leading-relaxed">
                We&apos;ve registered <strong>{formData.testerEmail}</strong>.
                When Specs officially launches on Google Play, your 2 free
                months on the Business Plan will be waiting for you!
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  className="w-full sm:w-auto px-8 py-5 rounded-full font-semibold"
                >
                  Back to Products
                </Button>
              </Link>
              <Link href="/" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-5 rounded-full font-semibold"
                >
                  Go to Homepage
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Tester Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-lg shadow-slate-900/5 space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-[#990000]">
                  Section 1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000066] mt-1">
                  Let&apos;s Get to Know You
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  A little bit about you and your studio.
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.testerEmail}
                  onChange={(e) => handleChange("testerEmail", e.target.value)}
                  placeholder="name@fashionhouse.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Used to link your 2 free months of Specs Business Plan on
                  launch.
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  1. Your Name / Brand Name{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => handleChange("brandName", e.target.value)}
                  placeholder="e.g. Samuel K. / Elegance Couture"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  2. How would you describe your fashion business?
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    "Solo Tailor / Freelance Designer",
                    "Small Workshop (2-5 team members)",
                    "Medium/Large Fashion House (6+ team members)",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange("businessType", option)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm text-left font-medium transition-all ${
                        formData.businessType === option
                          ? "border-[#000066] bg-blue-50 text-[#000066] ring-2 ring-[#000066]/20 font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  3. Which device did you primarily use to test Specs?
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    "Android mobile phone",
                    "Android Tablet",
                    "I used both",
                  ].map((device) => (
                    <button
                      key={device}
                      type="button"
                      onClick={() => handleChange("deviceTested", device)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm text-center font-medium transition-all ${
                        formData.deviceTested === device
                          ? "border-[#000066] bg-blue-50 text-[#000066] ring-2 ring-[#000066]/20 font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {device}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 2: Testing Core Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-lg shadow-slate-900/5 space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-[#990000]">
                  Section 2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000066] mt-1">
                  Testing the Core Features
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  How easy and useful you found the app modules.
                </p>
              </div>

              {/* Rating 4 */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    4. Adding Customer Profiles & Measurements
                  </label>
                  <span className="text-xs font-semibold text-[#000066]">
                    {formData.ratingMeasurements} / 5
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  How easy was it to create a new client and record body
                  measurements?
                </p>
                <div className="flex items-center gap-2 pt-1">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      type="button"
                      onClick={() => handleChange("ratingMeasurements", score)}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                        formData.ratingMeasurements >= score
                          ? "border-[#990000] bg-red-50 text-[#990000]"
                          : "border-slate-200 text-slate-400 hover:border-slate-300"
                      }`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating 5 */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    5. Custom Orders & Production Pipeline
                  </label>
                  <span className="text-xs font-semibold text-[#000066]">
                    {formData.ratingCustomOrders} / 5
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Moving orders through Draft, Cutting, Sewing, Fitting, and
                  Completed stages.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      type="button"
                      onClick={() => handleChange("ratingCustomOrders", score)}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                        formData.ratingCustomOrders >= score
                          ? "border-[#990000] bg-red-50 text-[#990000]"
                          : "border-slate-200 text-slate-400 hover:border-slate-300"
                      }`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating 6 */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    6. Inventory & Storefront
                  </label>
                  <span className="text-xs font-semibold text-[#000066]">
                    {formData.ratingInventory} / 5
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Adding fabrics/materials to inventory and displaying
                  storefront items.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      type="button"
                      onClick={() => handleChange("ratingInventory", score)}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                        formData.ratingInventory >= score
                          ? "border-[#990000] bg-red-50 text-[#990000]"
                          : "border-slate-200 text-slate-400 hover:border-slate-300"
                      }`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q 7 */}
              <div className="pt-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  7. Expenses & Financial Insights Dashboard
                </label>
                <div className="space-y-2">
                  {[
                    "Extremely helpful, gives me a clear view of my finances",
                    "Good, but needs a few improvements",
                    "I didn't really use this feature",
                    "I prefer calculating finances outside of the app",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange("financialInsights", option)}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left font-medium transition-all ${
                        formData.financialInsights === option
                          ? "border-[#000066] bg-blue-50 text-[#000066] font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q 8 */}
              <div className="pt-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  8. Invoicing Generation & Sharing
                </label>
                <div className="space-y-2">
                  {[
                    "Yes, it was quick and looked professional",
                    "Yes, but the invoice needs more customization/options",
                    "No, I ran into an error",
                    "No, I didn't try this feature",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange("invoicing", option)}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left font-medium transition-all ${
                        formData.invoicing === option
                          ? "border-[#000066] bg-blue-50 text-[#000066] font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q 9 */}
              <div className="pt-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  9. Specific feature feedback
                </label>
                <textarea
                  rows={3}
                  value={formData.featureFeedback}
                  onChange={(e) =>
                    handleChange("featureFeedback", e.target.value)
                  }
                  placeholder="e.g. Something missing in measurements, or a detail you wish the invoice had..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
              </div>
            </motion.div>

            {/* Section 3: Performance & Usability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-lg shadow-slate-900/5 space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-[#990000]">
                  Section 3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000066] mt-1">
                  App Performance & Usability
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Let us know about roadblocks or bugs encountered.
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  10. What was the most FRUSTRATING part of using Specs?
                </label>
                <textarea
                  rows={3}
                  value={formData.frustratingPart}
                  onChange={(e) =>
                    handleChange("frustratingPart", e.target.value)
                  }
                  placeholder="Please be honest! Did something break? Was a button hard to find?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  11. Did you experience any crashes, screen freezing, or slow
                  loading times?
                </label>
                <div className="space-y-2">
                  {[
                    "No, the app ran perfectly smooth",
                    "Yes, just a few minor glitches",
                    "Yes, it was frequently slow or buggy",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange("encounteredCrashes", option)}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left font-medium transition-all ${
                        formData.encounteredCrashes === option
                          ? "border-[#000066] bg-blue-50 text-[#000066] font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {formData.encounteredCrashes !==
                "No, the app ran perfectly smooth" && (
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    12. What were you trying to do when it happened?
                  </label>
                  <input
                    type="text"
                    value={formData.crashDescription}
                    onChange={(e) =>
                      handleChange("crashDescription", e.target.value)
                    }
                    placeholder="e.g. Tapping on save order, or uploading an image"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                  />
                </div>
              )}
            </motion.div>

            {/* Section 4: Pricing & Final Thoughts */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-lg shadow-slate-900/5 space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-[#990000]">
                  Section 4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000066] mt-1">
                  Pricing & Recommendation
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Helping us craft a fair, high-value subscription model.
                </p>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  13. Would you subscribe to Specs once officially launched?
                </label>
                <div className="space-y-2">
                  {[
                    "Yes, absolutely! It’s a game-changer for my business.",
                    "Maybe, if certain features are improved or added.",
                    "No, I probably wouldn't subscribe.",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        handleChange("subscriptionLikelihood", option)
                      }
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left font-medium transition-all ${
                        formData.subscriptionLikelihood === option
                          ? "border-[#000066] bg-blue-50 text-[#000066] font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  14. How do you feel about the Standard & Business subscription
                  pricing?
                </label>
                <input
                  type="text"
                  value={formData.pricingThoughts}
                  onChange={(e) =>
                    handleChange("pricingThoughts", e.target.value)
                  }
                  placeholder="Fair, too high, or good value for money?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  15. If you could add ONE &quot;magic feature&quot; to Specs
                  right now, what would it be?
                </label>
                <input
                  type="text"
                  value={formData.magicFeature}
                  onChange={(e) => handleChange("magicFeature", e.target.value)}
                  placeholder="e.g. AI measurement auto-calibration, WhatsApp client notifications..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
              </div>

              {/* NPS */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    16. How likely are you to recommend Specs to other
                    designers?
                  </label>
                  <span className="text-xs font-semibold text-[#000066]">
                    {formData.npsScore} / 10
                  </span>
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handleChange("npsScore", num)}
                      className={`py-2 rounded-lg border text-xs sm:text-sm font-bold transition-all ${
                        formData.npsScore === num
                          ? "bg-[#000066] text-white border-[#000066]"
                          : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 px-1">
                  <span>1 - Not Likely</span>
                  <span>10 - Extremely Likely</span>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  17. Would you be open to a quick 10-minute follow-up
                  chat/call?
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["Yes, I'd love to chat!", "No, thank you."].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleChange("openToFollowUp", opt)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        formData.openToFollowUp === opt
                          ? "border-[#000066] bg-blue-50 text-[#000066] font-semibold"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {formData.openToFollowUp.startsWith("Yes") && (
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    18. Please provide your WhatsApp number
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsAppNumber}
                    onChange={(e) =>
                      handleChange("whatsAppNumber", e.target.value)
                    }
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  19. Any final thoughts, encouragement, or general feedback?
                </label>
                <textarea
                  rows={3}
                  value={formData.generalFeedback}
                  onChange={(e) =>
                    handleChange("generalFeedback", e.target.value)
                  }
                  placeholder="Share any thoughts with the dev team..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000066] text-sm text-slate-900"
                />
              </div>
            </motion.div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs sm:text-sm text-center">
                {error}
              </div>
            )}

            {/* Submit CTA */}
            <div className="text-center pt-2">
              <Button
                type="submit"
                disabled={loading}
                variant="brandRed"
                className="w-full sm:w-auto min-w-[280px] py-6 px-10 text-base font-bold rounded-full shadow-xl shadow-[#990000]/25 flex items-center justify-center gap-2 mx-auto hover:-translate-y-0.5 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Responses...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit & Claim Reward
                  </>
                )}
              </Button>
              <p className="text-xs text-slate-400 mt-3">
                Your responses are submitted securely to Synboom Limited.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
