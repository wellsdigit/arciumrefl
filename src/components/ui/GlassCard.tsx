import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glowColor?: "primary" | "amber" | "none";
}

export function GlassCard({ children, className, glowColor = "none", ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-8 relative overflow-hidden transition-all duration-500",
        glowColor === "primary" && "hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:border-purple-500/30",
        glowColor === "amber" && "hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:border-amber-500/30",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      {glowColor === "primary" && (
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
      )}
      {glowColor === "amber" && (
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
      )}
    </div>
  );
}
