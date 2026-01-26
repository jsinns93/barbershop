
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-28">
          <span className="text-brand-accent font-bold tracking-[0.6em] text-[10px] mb-4 uppercase">The Experience</span>
          <h3 className="font-serif text-5xl md:text-7xl font-bold text-brand-navy italic">Grooming Menu</h3>
          <p className="mt-8 text-brand-accent/60 max-w-lg text-sm tracking-wide">
            Each service is executed with surgical precision and the finest premium products in the industry.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-x-32 gap-y-16 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group flex flex-col transition-all duration-300">
              <div className="flex justify-between items-baseline gap-6 mb-4">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-[10px] font-bold text-brand-navy/30">0{index + 1}</span>
                  <h4 className="text-2xl font-serif font-bold text-brand-navy group-hover:text-brand-accent transition-colors">{service.name}</h4>
                  <div className="flex-1 border-b border-brand-navy/5 border-dashed mb-2"></div>
                </div>
                <span className="text-xl font-serif text-brand-navy font-light italic">{service.price}</span>
              </div>
              <p className="text-brand-accent/50 text-sm italic font-light pl-8 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-40">
           <div className="max-w-4xl mx-auto border-t border-b border-brand-navy/10 py-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div>
                <span className="text-brand-navy font-bold block uppercase tracking-[0.4em] text-[10px] mb-4">Trading Hours</span>
                <p className="font-serif text-4xl text-brand-navy italic leading-none">Monday – Sunday</p>
                <p className="text-brand-accent text-xl mt-2 font-light">09.00 AM — 20.00 PM</p>
              </div>
              <div className="h-20 w-px bg-brand-navy/10 hidden md:block"></div>
              <div className="max-w-xs">
                <p className="text-brand-accent/70 text-sm leading-relaxed italic">
                  "Excellence is not an act, but a habit. We curate the atmosphere for the modern leader."
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
