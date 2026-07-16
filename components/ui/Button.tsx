import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const baseStyles =
  "relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium rounded-2xl border-2 cursor-pointer group/btn transition-colors duration-300";

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary:
    "text-white bg-[var(--primary)] border-primary",
  secondary:
    "text-[var(--primary)] bg-transparent border-[var(--primary)] hover:bg-blue-600/10 hover:text-white",
};

export default function Button({
  variant,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-blue-700 opacity-100 group-hover/btn:h-full top-1/2 group-hover/btn:top-0 duration-400 ease" />
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover/btn:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="relative text-[1rem] group-hover/btn:pr-4 transition-all duration-400">
        {children}
      </span>
    </button>
  );
}
