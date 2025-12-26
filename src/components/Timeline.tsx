"use client"

import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
  { 
    year: "1999", 
    title: "Fundação", 
    desc: "Início das operações com foco em consultoria estratégica.",
    icon: "fa-rocket" // Foguete
  },
  { 
    year: "2005", 
    title: "Expansão", 
    desc: "Integração de novas tecnologias e parceria com líderes globais.",
    icon: "fa-chart-line"
  },
  { 
    year: "2012", 
    title: "Serviços Gerenciados", 
    desc: "Lançamento do portfólio de MSS e monitoramento 24/7.",
    icon: "fa-headset"
  },
  { 
    year: "2018", 
    title: "SecOps & Cloud", 
    desc: "Adoção de arquiteturas em nuvem e operação de segurança avançada.",
    icon: "fa-cloud"
  },
  { 
    year: "Hoje", 
    title: "IA & Futuro", 
    desc: "Integração de inteligência artificial para operações preditivas.",
    highlight: true,
    icon: "fa-robot"
  },
];

const Timeline = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setVisible(true); 
          observer.disconnect(); 
        } 
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="py-20 relative w-full">
      
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full z-0"></div>
      
      <div 
        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-sienna via-sienna to-mint -translate-y-1/2 rounded-full transition-all duration-[2500ms] ease-out z-0"
        style={{ width: visible ? '100%' : '0%' }}
      ></div>

      <div className="grid grid-cols-5 relative z-10">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center group relative"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            
            <div 
              className={`mb-6 text-sm font-bold tracking-wider transition-all duration-700
                ${item.highlight ? 'text-mint scale-110' : 'text-eggshell/60 group-hover:text-sienna'}
              `}
              style={{ 
                opacity: visible ? 1 : 0, 
                transform: visible ? 'translateY(0)' : 'translateY(-20px)'
              }}
            >
              {item.year}
            </div>

            <div 
              className={`
                w-16 h-16 rounded-full border-4 bg-coal flex items-center justify-center
                transition-all duration-500 ease-in-out relative z-20 cursor-pointer
                group-hover:scale-[1.5] group-hover:-translate-y-2
                ${item.highlight 
                  ? 'border-mint shadow-[0_0_20px_rgba(172,236,161,0.5)]' 
                  : 'border-sienna group-hover:border-sienna group-hover:shadow-[0_0_30px_rgba(221,110,66,0.6)]'
                }
              `}
              style={{ 
                opacity: visible ? 1 : 0, 
                scale: visible ? 1 : 0,
                transitionDelay: `${index * 150 + 200}ms`
              }}
            >
              {item.highlight && (
                <div className="absolute inset-0 rounded-full bg-mint animate-ping opacity-30"></div>
              )}

              <i className={`fa-solid ${item.icon} text-2xl transition-colors duration-500
                 ${item.highlight ? 'text-mint' : 'text-sienna group-hover:text-white'}
              `}></i>
            </div>

            <div 
              className="mt-8 flex flex-col gap-2 transition-all duration-700 px-2"
              style={{ 
                opacity: visible ? 1 : 0, 
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 150 + 300}ms`
              }}
            >
              <h3 className={`font-bold text-lg leading-tight transition-colors ${item.highlight ? 'text-mint' : 'text-eggshell group-hover:text-sienna'}`}>
                {item.title}
              </h3>
              
              <p className="text-sm text-muted leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;