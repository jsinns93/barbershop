
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/assets/logo.png" 
        alt="Premiere Cut" 
        className="h-10 w-auto object-contain"
      />
      <span className="font-serif text-xl font-bold tracking-wide text-brand-navy">Premiere Cut</span>
    </div>
  );
};
