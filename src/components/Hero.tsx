"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mapeamento dos 4 Banners solicitados
  const slides = [
    { 
      id: 'inst',
      type: 'video', 
      src: '/assets/img/institucional_video.mp4', 
      alt: 'Institucional' 
    },
    { 
      id: 'secops',
      type: 'image', 
      src: '/assets/img/banner_msecops.jpeg', 
      alt: 'SecOps NetSecurity' 
    },
    { 
      id: 'parceiros',
      type: 'image', 
      src: '/assets/img/banner_parceiro.jpeg', 
      alt: 'Ecossistema de Parceiros',
      move: true // Flag para ativar o efeito de movimento
    },
    { 
      id: 'carreira',
      type: 'image', 
      src: '/assets/img/banner_carreira.jpeg', 
      alt: 'Carreiras' 
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Tempo de transição: 8 segundos por slide
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden group bg-coal">

      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0">
             {/* Overlay mais escuro para garantir leitura do menu/texto se houver */}
             <div className="absolute inset-0 bg-oxford/20 mix-blend-multiply z-10 pointer-events-none"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-black/60 z-10 pointer-events-none"></div>

             {slide.type === 'video' ? (
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               >
                 <source src={slide.src} type="video/mp4" />
               </video>
             ) : (
               <div className="relative w-full h-full overflow-hidden">
                   <Image 
                     src={slide.src} 
                     alt={slide.alt || "Banner NetSecurity"}
                     fill
                     priority={index === 0}
                     className={`object-cover transition-transform duration-[10000ms] ease-linear ${
                        // Se for o slide de parceiros e estiver ativo, aplica o zoom lento (Ken Burns)
                        slide.move && index === currentSlide ? 'scale-110' : 'scale-100'
                     }`}
                     quality={90}
                   />
               </div>
             )}
          </div>
        </div>
      ))}

      {/* Setas de Navegação */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-sienna text-eggshell rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-sienna text-eggshell rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      {/* Indicadores (Bolinhas) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)} 
                className={`h-3 rounded-full transition-all duration-300 border border-white/20 shadow-lg ${idx === currentSlide ? 'bg-sienna w-8' : 'bg-eggshell/50 w-3 hover:bg-eggshell'}`} 
              />
          ))}
      </div>
    </div>
  );
};

export default Hero;