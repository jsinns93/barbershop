
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-24 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/assets/logo.png" 
        alt="Premiere Cut" 
        className="h-24 w-auto object-contain"
      />
    </div>
  );
};
