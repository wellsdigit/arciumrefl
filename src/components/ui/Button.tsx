import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "relative group overflow-hidden rounded px-6 py-3 font-medium transition-all duration-300",
        variant === "primary" && "bg-[#6c44fc] text-white hover:bg-[#5833cc] shadow-md",
        variant === "secondary" && "bg-transparent text-[#6c44fc] border border-[#6c44fc] hover:bg-[#6c44fc]/5",
        variant === "outline" && "border border-neutral-300 hover:border-neutral-400 bg-transparent text-neutral-800",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}
