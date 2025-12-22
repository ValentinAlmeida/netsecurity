"use client"

import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
  { year: "1999", title: "Fundação", desc: "Início das operações com foco em consultoria estratégica." },
  { year: "2005", title: "Expansão", desc: "Integração de novas tecnologias e parceria com líderes globais." },
  { year: "2012", title: "Serviços Gerenciados", desc: "Lançamento do portfólio de MSS e monitoramento 24/7." },
  { year: "2018", title: "SecOps & Cloud", desc: "Adoção de arquiteturas em nuvem e operação de segurança avançada." },
  { year: "Hoje", title: "IA & Futuro", desc: "Integração de inteligência artificial para operações preditivas.", highlight: true },
];

const Timeline = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-10 relative">
      
      <div className="absolute top-[84px] left-0 w-full h-1 bg-white/10 rounded-full"></div>
      
      <div 
        className="absolute top-[84px] left-0 h-1 bg-gradient-to-r from-sienna/50 to-sienna rounded-full transition-all duration-[2500ms] ease-out"
        style={{ width: visible ? '100%' : '0%' }}
      ></div>

      <div className="grid grid-cols-5 gap-4 relative z-10">
        {timelineData.map((item, index) => (
          <div key={index} className={`flex flex-col items-center text-center group ${item.highlight ? '-mt-3' : ''}`}>
            
            <span 
              className={`mb-8 text-sm font-bold tracking-wider transition-all duration-500 ${item.highlight ? 'text-mint' : 'text-eggshell/60 group-hover:text-sienna'}`}
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-20px)', transitionDelay: `${index * 200}ms` }}
            >
              {item.year}
            </span>

            <div 
              className={`w-6 h-6 rounded-full border-4 transition-all duration-500 bg-coal relative z-20
                ${item.highlight 
                  ? 'border-mint shadow-[0_0_15px_rgba(172,236,161,0.5)] scale-125' 
                  : 'border-sienna group-hover:shadow-[0_0_10px_rgba(221,110,66,0.4)] group-hover:scale-110'
                }`}
              style={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0, transitionDelay: `${index * 200 + 100}ms` }}
            >
               {item.highlight && <div className="absolute inset-0 rounded-full bg-mint animate-ping opacity-40"></div>}
            </div>

            <div 
               className="mt-12 flex flex-col gap-2 transition-all duration-500 px-2"
               style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: `${index * 200 + 300}ms` }}
            >
              <h3 className={`font-bold text-lg leading-tight ${item.highlight ? 'text-mint' : 'text-eggshell'}`}>{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;