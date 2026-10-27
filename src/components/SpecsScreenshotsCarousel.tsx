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
  Sparkles,
} from "lucide-react";

export const SPECS_SCREENSHOTS = [
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154512.png",
    title: "Specs Overview",
    desc: "Clean studio dashboard and active workflows.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154525.png",
    title: "Client Directory",
    desc: "Search, organize, and manage client records instantly.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154533.png",
    title: "Client Profile",
    desc: "Full contact history, active orders, and measurements.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154542.png",
    title: "Body Measurement Vault",
    desc: "Standardized measurements for precise garment construction.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154648.png",
    title: "Measurement Sets",
    desc: "Customizable categories: Traditional, Corporate, Suits.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154734.png",
    title: "Custom Orders",
    desc: "Visual pipeline from Draft to Cutting, Fitting, & Completed.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154747.png",
    title: "Order Detail View",
    desc: "Production notes, target delivery dates, and client specs.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-154842.png",
    title: "Production Status",
    desc: "Keep tailoring teams aligned at every fitting milestone.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155007.png",
    title: "Storefront & Catalog",
    desc: "Showcase signature styles and ready-to-wear collections.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155034.png",
    title: "Product Gallery",
    desc: "High-resolution style catalog with pricing and variations.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155051.png",
    title: "Fabric & Inventory",
    desc: "Keep track of yardage, fabric rolls, and trimming stock.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155115.png",
    title: "Material Allocation",
    desc: "Link fabric bolts directly to ongoing bespoke orders.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155559.png",
    title: "Financial Insights",
    desc: "Real-time visibility into revenue, studio expenses, and profits.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155710.png",
    title: "Expense Tracker",
    desc: "Categorize threads, needles, machine servicing, and bills.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155734.png",
    title: "Professional Invoices",
    desc: "One-tap invoice generation to share via WhatsApp or PDF.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155748.png",
    title: "Invoice Customizer",
    desc: "Add deposits, pending balances, and studio bank accounts.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155808.png",
    title: "Studio Settings",
    desc: "Configure measurement units (inches/cm) and currency.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155825.png",
    title: "Subscription & Billing",
    desc: "Standard & Business tiers designed to scale with your house.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155917.png",
    title: "Cloud Sync Status",
    desc: "Instant local WatermelonDB caching with Supabase sync.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-155945.png",
    title: "Notification Center",
    desc: "Upcoming fitting reminders, deadlines, and delivery alerts.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-160029.png",
    title: "Quick Action Hub",
    desc: "Speed up daily operations with single-tap shortcuts.",
  },
  {
    src: "/SpecsScreenshots/Screenshot_20261027-160142.png",
    title: "Dark & Light Experience",
    desc: "Tailored for low-light cutting rooms and bright workshops.",
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
      {/* Outer Phone Hardware Chasis */}
      <div className="relative rounded-[42px] p-[10px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-black/40">
        {/* Subtle phone volume buttons */}
        <div className="absolute -left-[13px] top-24 w-[3px] h-10 bg-slate-700 rounded-l-md opacity-80" />
        <div className="absolute -left-[13px] top-38 w-[3px] h-10 bg-slate-700 rounded-l-md opacity-80" />
        <div className="absolute -right-[13px] top-28 w-[3px] h-14 bg-slate-700 rounded-r-md opacity-80" />

        {/* Screen Bezel / Container */}
        <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.5] w-full">
          {/* Android Punch Hole Camera */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-20 flex items-center justify-center ring-1 ring-slate-800/80">
            <div className="w-1.5 h-1.5 bg-[#001f3f]/80 rounded-full" />
          </div>

          {/* Android Status Bar */}
          <div className="absolute top-0 inset-x-0 h-6 px-5 flex items-center justify-between text-[9px] font-semibold text-white/70 z-10 pointer-events-none">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Screenshot Image */}
          <Image
            src={src}
            alt={alt}
            width={400}
            height={866}
            priority={priority}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
              <Maximize2 className="w-3.5 h-3.5" /> Tap to Inspect
            </span>
          </div>
        </div>
      </div>

      {title && (
        <p className="text-center text-xs font-semibold text-slate-600 mt-3 truncate px-2">
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

  // Triple screenshots array for perfectly continuous, seamless infinite scrolling
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
    const speed = 0.8; // px per tick

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        // When scrolled past one full set of items, loop back seamlessly
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
    <div className="w-full relative overflow-hidden py-4">
      {/* Scroll Marquee Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-6 px-4 cursor-grab active:cursor-grabbing select-none"
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
              className="flex-shrink-0 w-[210px] sm:w-[240px] md:w-[260px]"
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
      <div className="text-center mt-3">
        <span className="inline-flex items-center gap-2 text-xs text-slate-500 bg-white/80 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
          <span>👈</span> Drag to scroll horizontally • Tap any phone to inspect in fullscreen <span>👉</span>
        </span>
      </div>

      {/* Interactive Swipeable / Focus Phone Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Body with Swipe support */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-sm sm:max-w-md flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 sm:-right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Chevrons (Desktop) */}
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-sm transition-all"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Swipeable Phone Frame */}
              <motion.div
                key={selectedIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 50;
                  if (offset.x < -swipeThreshold || velocity.x < -400) {
                    handleNext();
                  } else if (offset.x > swipeThreshold || velocity.x > 400) {
                    handlePrev();
                  }
                }}
                className="w-[270px] sm:w-[310px] md:w-[330px] cursor-grab active:cursor-grabbing"
              >
                <AndroidPhoneFrame
                  src={SPECS_SCREENSHOTS[selectedIndex].src}
                  alt={SPECS_SCREENSHOTS[selectedIndex].title}
                  priority
                />
              </motion.div>

              {/* Screen Description Bar */}
              <div className="mt-5 text-center text-white space-y-1 px-4 max-w-sm">
                <div className="flex items-center justify-center gap-2">
                  <h4 className="text-lg font-bold text-white">
                    {SPECS_SCREENSHOTS[selectedIndex].title}
                  </h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-slate-300 font-medium">
                    {selectedIndex + 1} / {SPECS_SCREENSHOTS.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {SPECS_SCREENSHOTS[selectedIndex].desc}
                </p>

                {/* Mobile Swipe / Arrow Controls */}
                <div className="flex items-center justify-center gap-4 pt-3">
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

