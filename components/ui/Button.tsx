
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
}

const baseStyles =
  "relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium rounded-2xl cursor-pointer group/btn transition-all duration-300 border-2";

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
}: ButtonProps) {
  const content = (
    <>
      {/* Aurora Hover Fill Layer */}
      <span className="absolute left-0 block w-full h-0 transition-all bg-blue-700/40 opacity-100 group-hover/btn:h-full top-1/2 group-hover/btn:top-0 duration-400 ease" />

      {/* Arrow Slide */}
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover/btn:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>

      {/* Text */}
      <span className="relative text-[1rem] group-hover/btn:pr-4 transition-all duration-400">
        {children}
      </span>
    </>
  );

  const classNameMerged = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classNameMerged}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNameMerged}>
      {content}
    </button>
  );
}
