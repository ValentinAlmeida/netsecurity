"use client"

import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
  { 
    year: "1999", 
    title: "Fundação", 
    desc: "Início das operações com foco em consultoria estratégica.",
    yPos: 80 
  },
  { 
    year: "2005", 
    title: "Expansão", 
    desc: "Integração de novas tecnologias e parceria com líderes globais.",
    yPos: 65
  },
  { 
    year: "2012", 
    title: "Serviços Gerenciados", 
    desc: "Lançamento do portfólio de MSS e monitoramento 24/7.",
    yPos: 50
  },
  { 
    year: "2018", 
    title: "SecOps & Cloud", 
    desc: "Adoção de arquiteturas em nuvem e operação de segurança avançada.",
    yPos: 35
  },
  { 
    year: "Hoje", 
    title: "IA & Futuro", 
    desc: "Integração de inteligência artificial para operações preditivas.",
    highlight: true,
    yPos: 15 
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
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const points = timelineData.map((item, i) => {
    const x = 10 + (i * 20);
    return `${x},${item.yPos}`;
  }).join(' ');

  const areaPoints = `10,100 ${points} 90,100`;

  return (
    <div ref={containerRef} className="py-10 relative w-full h-[500px] md:h-[450px]">
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--sienna)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--sienna)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--sienna)" />
            <stop offset="100%" stopColor="var(--mint)" />
          </linearGradient>
        </defs>
        
        <polyline 
          points={areaPoints} 
          fill="url(#chartGradient)" 
          className={`transition-all duration-[2000ms] ease-out origin-bottom ${visible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        />

        <polyline 
          points={points} 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="0.5" 
          vectorEffect="non-scaling-stroke"
          className={`transition-all duration-[2500ms] ease-out delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
          strokeDasharray="1000"
          strokeDashoffset={visible ? 0 : 1000}
        />
      </svg>

      <div className="absolute inset-0 w-full h-full z-10">
        {timelineData.map((item, index) => {
          const leftPos = 10 + (index * 20);
          
          return (
            <div 
              key={index}
              className="absolute transform -translate-x-1/2 flex flex-col items-center group w-40 md:w-48"
              style={{ 
                left: `${leftPos}%`, 
                top: `${item.yPos}%`,
                marginTop: '-12px' 
              }}
            >
              
              <div 
                className={`mb-3 text-sm font-bold transition-all duration-700
                  ${item.highlight ? 'text-mint scale-110' : 'text-eggshell/60 group-hover:text-sienna'}
                `}
                style={{ 
                  opacity: visible ? 1 : 0, 
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {item.year}
              </div>

              <div 
                className={`w-6 h-6 rounded-full border-4 bg-coal transition-all duration-500 relative z-20 cursor-pointer
                  ${item.highlight 
                    ? 'border-mint shadow-[0_0_20px_rgba(172,236,161,0.6)] scale-125' 
                    : 'border-sienna group-hover:scale-125 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(221,110,66,0.6)]'
                  }
                `}
                style={{ 
                  opacity: visible ? 1 : 0, 
                  scale: visible ? (item.highlight ? 1.25 : 1) : 0,
                  transitionDelay: `${index * 150 + 200}ms`
                }}
              >
                {item.highlight && (
                  <div className="absolute inset-0 rounded-full bg-mint animate-ping opacity-50"></div>
                )}
              </div>

              <div 
                className="mt-6 text-center transition-all duration-700"
                style={{ 
                  opacity: visible ? 1 : 0, 
                  transform: visible ? 'translateY(0)' : 'translateY(-20px)',
                  transitionDelay: `${index * 150 + 400}ms`
                }}
              >
                <h3 className={`text-lg font-bold mb-2 leading-tight ${item.highlight ? 'text-mint' : 'text-eggshell'}`}>
                  {item.title}
                </h3>
                <div className={`w-px h-4 mx-auto mb-2 ${item.highlight ? 'bg-mint/50' : 'bg-white/10'}`}></div>
                
                <p className="text-xs md:text-sm text-muted leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;