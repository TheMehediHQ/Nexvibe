
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const baseStyles =
  "relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden text-sm sm:text-base font-semibold rounded-2xl cursor-pointer group/btn transition-all duration-300 border-2";

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary: `
    text-white 
    border-none
    bg-gradient-to-r 
      from-[#4EF0FF] 
      via-[#3FA2FF] 
      to-[#1A3BFF]
    shadow-[0_0_18px_rgba(78,240,255,0.25)]
    hover:bg-gradient-to-r 
      hover:from-[#6AFBFF] 
      hover:via-[#4A9CFF] 
      hover:to-[#2D6BFF]
    hover:shadow-[0_0_38px_rgba(78,240,255,0.55)]
    backdrop-blur-[2px]
  `,
  secondary: `
    text-[#4ba3f5] 
    bg-transparent
    border-1
    border-[#4ba3f5]!
    hover:bg-[#2461F5]!
    hover:text-white
  `,
};

export default function Button({
  variant,
  children,
  className,
  onClick,
  href,
  target,
  rel,
  disabled,
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      {/* Aurora Hover Fill Layer */}
      <span className="absolute left-0 block w-full h-0 transition-all bg-blue-700/40 opacity-100 group-hover/btn:h-full top-1/2 group-hover/btn:top-0 duration-400 ease pointer-events-none" />

      {/* Button Content: Text + Animated Arrow with proper spacing */}
      <span className="relative z-10 inline-flex items-center justify-center">
        <span>{children}</span>

        {/* Sliding Arrow with dedicated 12px spacing */}
        <span className="inline-flex items-center justify-center overflow-hidden transition-all duration-300 w-0 opacity-0 translate-x-2 group-hover/btn:w-4 group-hover/btn:ml-3 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 pointer-events-none">
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </span>
    </>
  );

  const classNameMerged = cn(
    baseStyles,
    variantStyles[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classNameMerged}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNameMerged}
    >
      {content}
    </button>
  );
}
