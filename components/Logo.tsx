
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/assets/logo.jpeg" 
        alt="Premiere Cut" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};
