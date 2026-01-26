
import React from 'react';
import { Logo } from './Logo';
import { BRANDING } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-brand-navy text-brand-paper pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Text in background */}
      <div className="absolute -top-10 -right-20 font-serif italic text-[15rem] text-white/5 whitespace-nowrap pointer-events-none select-none">
        Premiere Cut
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          
          <div className="lg:col-span-4">
            <div className="brightness-0 invert mb-12 opacity-90">
              <Logo />
            </div>
            <p className="text-white/40 max-w-xs leading-relaxed italic text-sm mb-12 font-light">
              Crafting distinct visual identities for the modern gentleman since 2012. 
              Our sanctuary is defined by privacy, prestige, and unparalleled craftsmanship.
            </p>
            <div className="flex gap-10">
              {[
                { link: BRANDING.socials.instagram, icon: 'Instagram' },
                { link: BRANDING.socials.whatsapp, icon: 'WhatsApp' },
                { link: BRANDING.socials.facebook, icon: 'Facebook' }
              ].map((social) => (
                <a 
                  key={social.icon}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all duration-300 border-b border-transparent hover:border-white pb-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-white/30 font-bold uppercase tracking-[0.4em] text-[9px]">The Flagship</span>
                <span className="font-serif text-3xl italic leading-tight">{BRANDING.location}</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white/30 font-bold uppercase tracking-[0.4em] text-[9px]">Contact Direct</span>
                <a href={`tel:${BRANDING.phone}`} className="font-serif text-3xl hover:text-white/60 transition-colors">{BRANDING.phone}</a>
                <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Priority booking recommended</span>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-white/30 font-bold uppercase tracking-[0.4em] text-[9px]">Residence</span>
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-2xl">Monday — Sunday</span>
                  <span className="text-white font-light text-lg">09.00 — 20.00</span>
                </div>
              </div>
              <div className="mt-auto">
                 <a 
                  href={BRANDING.reservationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-navy px-12 py-5 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-transparent hover:text-white border border-white transition-all duration-500 block text-center"
                >
                  Book Priority Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-white/20">
          <p>© {new Date().getFullYear()} Premiere Cut Group — Registered Hallmark</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white/50 transition-colors">Digital Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Client Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
