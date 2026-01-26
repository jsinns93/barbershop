
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BRANDING } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-paper/95 backdrop-blur-sm py-4 border-b border-brand-navy/5 shadow-sm' : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-8 lg:px-12 flex justify-between items-center">
        <a href="#home" className="hover:opacity-70 transition-opacity">
          <Logo />
        </a>
        
        <nav className="hidden lg:flex items-center gap-12">
          {['Services', 'Gallery', 'Location'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-navy hover:text-brand-accent transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-navy transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={BRANDING.reservationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-navy text-white px-8 py-3 rounded-none text-[10px] tracking-[0.2em] font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            BOOK AN APPOINTMENT
          </a>
        </nav>
        
        <a 
          href={BRANDING.reservationLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="lg:hidden bg-brand-navy text-white px-5 py-2.5 text-[10px] tracking-widest font-bold"
        >
          BOOK
        </a>
      </div>
    </header>
  );
};
