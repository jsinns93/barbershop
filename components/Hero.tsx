
import React from 'react';
import { BRANDING } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-paper pt-20">
      <div className="container mx-auto px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center relative z-20">
        
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="overflow-hidden">
             <h2 className="text-brand-accent font-bold tracking-[0.5em] text-[10px] md:text-xs mb-8 uppercase animate-fade-in-up">
              Mastering the Art of Grooming
            </h2>
          </div>
          <h1 className="font-serif text-7xl md:text-[7rem] font-bold mb-10 leading-[0.9] text-brand-navy animate-fade-in-up delay-100">
            Exclusive <br />
            <span className="italic font-light tracking-tight text-brand-accent/80">Heritage.</span>
          </h1>
          <p className="text-brand-accent/80 text-lg md:text-xl mb-14 max-w-md leading-relaxed animate-fade-in-up delay-200 border-l border-brand-navy/10 pl-8">
            The ultimate grooming sanctuary for the modern gentleman, situated at <span className="text-brand-navy font-semibold">{BRANDING.location}</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up delay-300">
            <a 
              href={BRANDING.reservationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b-2 border-brand-navy pb-2 text-brand-navy font-black tracking-[0.2em] text-xs hover:text-brand-accent hover:border-brand-accent transition-all duration-300 group"
            >
              RESERVE YOUR CHAIR
              <span className="ml-4 group-hover:ml-6 transition-all inline-block">→</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative h-[50vh] lg:h-[80vh]">
          <div className="absolute inset-0 bg-brand-navy/5 -rotate-2 scale-105 rounded-sm"></div>
          <div 
            className="relative h-full w-full bg-cover bg-center grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 shadow-2xl overflow-hidden"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-paper/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-brand-paper p-8 shadow-xl hidden md:block">
            <span className="font-serif italic text-3xl text-brand-navy">Premiere Cut</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }
      `}</style>
    </section>
  );
};
