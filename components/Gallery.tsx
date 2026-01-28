
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-brand-paper overflow-hidden">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="text-brand-accent font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">Our Portfolio</span>
            <h3 className="font-serif text-5xl md:text-8xl font-bold text-brand-navy leading-none">
              The <span className="italic font-light">Premiere Cut</span> <br />Look Book
            </h3>
          </div>
          <div className="lg:col-span-4 lg:text-right">
             <a 
               href="https://www.instagram.com/premiere.cut/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-[10px] font-bold tracking-widest uppercase text-brand-navy hover:text-brand-accent transition-all group border-b border-brand-navy/20 pb-2"
             >
               Explore Instagram <span className="inline-block group-hover:translate-x-2 transition-transform ml-2">→</span>
             </a>
          </div>
        </div>

        {/* Exclusive Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex flex-col gap-10">
            <GalleryItem image={GALLERY_IMAGES[0]} aspect="aspect-[3/4]" />
            <GalleryItem image={GALLERY_IMAGES[1]} aspect="aspect-square" />
          </div>
          <div className="md:col-span-4 flex flex-col gap-10 mt-20">
            <GalleryItem image={GALLERY_IMAGES[2]} aspect="aspect-square" />
            <GalleryItem image={GALLERY_IMAGES[3]} aspect="aspect-[3/4]" />
          </div>
          <div className="md:col-span-4 flex flex-col gap-10">
            <GalleryItem image={GALLERY_IMAGES[4]} aspect="aspect-[3/4]" />
            <GalleryItem image={GALLERY_IMAGES[5]} aspect="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ image, aspect }: { image: any, aspect: string }) => (
  <div className={`group relative ${aspect} overflow-hidden bg-zinc-100 rounded-none cursor-pointer shadow-sm`}>
    <img 
      src={image.url} 
      alt={image.alt}
      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
      <span className="text-white text-[9px] font-black uppercase mb-3 tracking-[0.3em]">{image.category}</span>
      <span className="text-white font-serif text-2xl leading-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">{image.alt}</span>
    </div>
  </div>
);
