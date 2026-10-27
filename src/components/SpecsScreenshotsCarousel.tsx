"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Smartphone,
} from "lucide-react";

export const SPECS_SCREENSHOTS = [
  {
    src: "/SpecsScreenshots/Screenshot_20261027-160142.png",
    title: "Business Workspace Dashboard",
    desc: "Real-time overview of active bespoke orders, pending revenue, retail items, and expense tracking.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154525.png",
    title: "New Customer Registration",
    desc: "Capturing client contact information, phone, email, and linking them to your cloud-protected client hub.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154533.png",
    title: "Body Measurement Vault",
    desc: "Comprehensive sizing specs across Men, Women, Children, and Infants with Fractions (Inches) and CM support.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154542.png",
    title: "Measurement Sizing Pad",
    desc: "Fast, specialized numeric keypad tailored for entering neck, shoulder, sleeve, chest, and outseam specs.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155559.png",
    title: "Bespoke Order Creation",
    desc: "Attach clients, due dates, design sketches, and assign specific tailors to each bespoke order.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155710.png",
    title: "Fabrics, Sourcing & Pricing",
    desc: "Track client-supplied fabrics, internal studio materials, total bills, and upfront deposit payments.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155734.png",
    title: "Production Pipeline Board",
    desc: "Track active jobs moving across Draft, Cutting, Sewing, Fitting, and Final Delivery stages.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155748.png",
    title: "Order Task & Status Manager",
    desc: "Granular control over internal production tasks, cutting status, sewing checkpoints, and delivery dates.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155808.png",
    title: "Client Profile & Order History",
    desc: "Unified view of client's total paid amount, unpaid balances, saved measurements, and active orders.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155917.png",
    title: "Invoices & Specs Specs Tab",
    desc: "Quick access to all generated invoices, payment receipts, and historic measurement archives.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155825.png",
    title: "Professional Invoice Generator",
    desc: "Branded PDF invoices with studio details, itemized breakdown, subtotal, deposits, and outstanding balance.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155007.png",
    title: "Fabric & Inventory Catalog",
    desc: "Log fabrics, ready-to-wear pieces, accessories, cost prices, and retail selling rates.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155034.png",
    title: "POS Checkout & Store Orders",
    desc: "Manage retail walk-ins with instant cart subtotal, shipping fees, partial/full payment, and pickup status.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154747.png",
    title: "Financial Insights & Profit Visibility",
    desc: "Real-time analytics for gross revenue, tied-up inventory value, outstanding receivables, and net profit.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154734.png",
    title: "OPEX Expense Ledger",
    desc: "Track operational expenditures including logistics, fuel, fabric sourcing, workshop maintenance, and utilities.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155945.png",
    title: "Direct Client Messaging",
    desc: "In-app real-time communication with clients for fitting updates, style inspirations, and delivery notices.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-160029.png",
    title: "Fitting & Deadline Reminders",
    desc: "Automated schedule reminders for order deadlines and fitting sessions to prevent production delays.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155051.png",
    title: "Global Designer Directory",
    desc: "Discover fashion ateliers, explore studios by city or country, and establish professional design contracts.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155115.png",
    title: "Verified Atelier Brand Profile",
    desc: "Showcase signature bespoke collections, portfolio lookbooks, and studio location to verified clients.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154648.png",
    title: "Business & Team Settings",
    desc: "Manage brand logo, unique @username, phone, official email, and multi-user workshop team permissions.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154842.png",
    title: "Subscription & Scaling Plans",
    desc: "Standard and Business tiers supporting solo tailors up to high-volume multi-seat fashion houses.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154512.png",
    title: "Designer Workspace Hub",
    desc: "Central security, profile preferences, and role switcher between Fashion Designer Mode and Client Hub.",
  },
];

interface AndroidPhoneFrameProps {
  src: string;
  alt: string;
  title?: string;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
}

export function AndroidPhoneFrame({
  src,
  alt,
  title,
  priority = false,
  className = "",
  onClick,
}: AndroidPhoneFrameProps) {
  return (
    <div
      onClick={onClick}
      className={`relative mx-auto cursor-pointer group transition-transform duration-300 select-none ${className}`}
    >
      {/* Outer Phone Hardware Chassis - Tight bezel, flush buttons */}
      <div className="relative rounded-[26px] sm:rounded-[30px] p-[5px] bg-[#1a1c22] shadow-[0_18px_45px_-12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Physical hardware buttons directly flush against the bezel */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-[#2d3139] rounded-l-sm" />
        <div className="absolute -left-[3px] top-32 w-[3px] h-8 bg-[#2d3139] rounded-l-sm" />
        <div className="absolute -right-[3px] top-24 w-[3px] h-11 bg-[#2d3139] rounded-r-sm" />

        {/* Clean Screen Display - Edge-to-edge showing pure screenshot content */}
        <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-black aspect-[720/1576] w-full">
          <Image
            src={src}
            alt={alt}
            width={720}
            height={1576}
            priority={priority}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg">
              <Maximize2 className="w-3.5 h-3.5 text-[#000066]" /> View Screen
            </span>
          </div>
        </div>
      </div>

      {title && (
        <p className="text-center text-xs font-semibold text-slate-700 mt-2.5 truncate px-1">
          {title}
        </p>
      )}
    </div>
  );
}

export function SpecsScreenshotsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triple array for seamless infinite looping
  const infiniteScreenshots = [
    ...SPECS_SCREENSHOTS,
    ...SPECS_SCREENSHOTS,
    ...SPECS_SCREENSHOTS,
  ];

  // Auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8;

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Navigate lightbox modal
  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % SPECS_SCREENSHOTS.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + SPECS_SCREENSHOTS.length) % SPECS_SCREENSHOTS.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="w-full relative overflow-hidden py-2">
      {/* Scroll Marquee Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex items-center gap-5 md:gap-7 overflow-x-auto no-scrollbar scroll-smooth py-4 px-4 cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {infiniteScreenshots.map((item, idx) => {
          const originalIndex = idx % SPECS_SCREENSHOTS.length;
          return (
            <div
              key={idx}
              className="flex-shrink-0 w-[145px] sm:w-[175px] md:w-[200px]"
            >
              <AndroidPhoneFrame
                src={item.src}
                alt={item.title}
                title={item.title}
                onClick={() => setSelectedIndex(originalIndex)}
              />
            </div>
          );
        })}
      </div>

      {/* Floating Instructions Pill */}
      <div className="text-center mt-2">
        <span className="inline-flex items-center gap-2 text-xs text-slate-500 bg-white/80 border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
          <span>👈</span> Drag to scroll horizontally • Tap any phone to inspect in fullscreen <span>👉</span>
        </span>
      </div>

      {/* Interactive Swipeable / Focus Phone Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Body: Mobile = column (info on top, phone below); Desktop = row (phone on left, info beside it) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 my-auto py-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-0 right-0 md:-top-10 md:-right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20"
                aria-label="Close viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Chevrons (Desktop - Floating at Screen Edges) */}
              <button
                onClick={handlePrev}
                className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md transition-all shadow-xl z-20"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                onClick={handleNext}
                className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md transition-all shadow-xl z-20"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Mobile Info Bar (Rendered on top for mobile view) */}
              <div className="md:hidden w-full text-center text-white space-y-1.5 pt-6 px-2">
                <div className="flex items-center justify-center gap-2">
                  <h4 className="text-base font-bold text-white">
                    {SPECS_SCREENSHOTS[selectedIndex].title}
                  </h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 text-slate-300 font-medium">
                    {selectedIndex + 1} / {SPECS_SCREENSHOTS.length}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                  {SPECS_SCREENSHOTS[selectedIndex].desc}
                </p>
              </div>

              {/* Swipeable Phone Frame (Sized to fit viewport without bottom cut-off) */}
              <motion.div
                key={selectedIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 40;
                  if (offset.x < -swipeThreshold || velocity.x < -300) {
                    handleNext();
                  } else if (offset.x > swipeThreshold || velocity.x > 300) {
                    handlePrev();
                  }
                }}
                className="w-[210px] sm:w-[240px] md:w-[260px] lg:w-[280px] max-h-[75vh] cursor-grab active:cursor-grabbing flex-shrink-0"
              >
                <AndroidPhoneFrame
                  src={SPECS_SCREENSHOTS[selectedIndex].src}
                  alt={SPECS_SCREENSHOTS[selectedIndex].title}
                  priority
                />
              </motion.div>

              {/* Desktop Details Panel (Beside the phone on desktop) */}
              <div className="hidden md:flex flex-col text-left text-white space-y-4 max-w-sm lg:max-w-md bg-white/5 border border-white/10 backdrop-blur-md p-6 lg:p-8 rounded-3xl shadow-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-200 uppercase bg-white/10 px-3.5 py-1 rounded-full w-fit border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#990000] animate-pulse"></span>
                  Specs Android OS Screen
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <h4 className="text-xl lg:text-2xl font-extrabold text-white">
                      {SPECS_SCREENSHOTS[selectedIndex].title}
                    </h4>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/15 text-slate-200 font-bold shrink-0">
                      {selectedIndex + 1} of {SPECS_SCREENSHOTS.length}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
                    {SPECS_SCREENSHOTS[selectedIndex].desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Use arrow keys or click buttons to navigate
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Previous"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Next"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Bottom Navigation Controls */}
              <div className="md:hidden flex items-center justify-center gap-4 pt-1 text-white">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 text-xs text-white/80 hover:text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <span className="text-[11px] text-slate-400">Swipe to flip</span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 text-xs text-white/80 hover:text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
