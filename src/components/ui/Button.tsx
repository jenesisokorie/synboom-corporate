import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "brandRed";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Added transition-all for smoother hover states and active:scale-[0.98] for a premium click feel.
          // Changed the focus ring to your brand Navy.
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000066]/50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 active:scale-[0.98]",

          // Upgraded to Deep Navy
          variant === "default" &&
            "bg-[#000066] text-white hover:bg-[#000044] shadow-sm hover:shadow",

          // Outline now subtly nods to the brand color on hover
          variant === "outline" &&
            "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900 hover:text-[#000066] hover:border-[#000066]/30",

          // Ghost subtly shifts to brand text on hover
          variant === "ghost" &&
            "bg-transparent hover:bg-slate-100 text-slate-900 hover:text-[#000066]",

          // Added a new variant specifically for your Deep Red accent
          variant === "brandRed" &&
            "bg-[#990000] text-white hover:bg-[#7a0000] shadow-sm hover:shadow",

          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
