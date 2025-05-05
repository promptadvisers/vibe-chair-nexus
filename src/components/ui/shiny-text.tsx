
import React from 'react';
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, className = "" }) => (
  <span className={cn("relative overflow-hidden inline-block", className)}>
    {text}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine opacity-50 pointer-events-none"></span>
  </span>
);

export { ShinyText };
