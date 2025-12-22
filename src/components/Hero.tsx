"use client"

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';

const Hero = () => {
  const slides = [
    { type: 'video', src: '/assets/img/videohome.mp4' },
    { type: 'image', src: '/assets/img/banner-exemplo.jpg' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      <div className="absolute top-0 left-0 w-full z-50">
         <Header />
      </div>

      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-surface/50 mix-blend-multiply z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/80 z-10"></div>

             {slide.type === 'video' ? (
               <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                 <source src={slide.src} type="video/mp4" />
               </video>
             ) : (
               <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-background" style={{ backgroundImage: `url(${slide.src})` }}></div>
             )}
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-brand-primary text-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-brand-primary text-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-brand-primary w-8' : 'bg-foreground/50 hover:bg-foreground'}`} />
          ))}
      </div>
    </div>
  );
};

export default Hero;