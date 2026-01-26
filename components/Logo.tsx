
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative group">
        <div className="w-10 h-10 border border-brand-navy flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
          <span className="text-brand-navy font-bold text-sm tracking-tighter">PC</span>
        </div>
        <div className="absolute inset-0 border border-brand-navy/20 translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-xl font-black tracking-[0.2em] text-brand-navy uppercase leading-none">Premiere</span>
        <span className="text-[9px] font-bold tracking-[0.6em] text-brand-accent/60 uppercase mt-1">Established 2012</span>
      </div>
    </div>
  );
};
