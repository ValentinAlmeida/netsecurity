"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import { FaArrowRight, FaNetworkWired, FaShieldHalved } from 'react-icons/fa6';
import { FaRegImage } from 'react-icons/fa6';

const Home = () => {
  const partners = [
    'cisco', 'citrix', 'netwitness', 'trendmicro', 
    'tenable', 'fortinet', 'delinea', 'firemon', 
    'forcepoint', 'juniper', 'paloalto', 'secureid'
  ];

  const news = [
    { title: "O impacto da IA na Cibersegurança", category: "Artigo", date: "22 Out, 2025" },
    { title: "NetSecurity conquista prêmio global", category: "Notícia", date: "15 Out, 2025" },
    { title: "Novas ameaças de Ransomware em 2026", category: "Tendências", date: "10 Out, 2025" },
  ];

  return (
    <main className="min-h-screen font-sans selection:bg-sienna selection:text-white overflow-hidden">
      
      <Hero />

      <section className="relative z-10 py-28 bg-coal cyber-grid">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-oxford/30 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-eggshell">
              Cada negócio é único. <br />
              <span className="text-sienna">Sua cibersegurança também deveria ser.</span>
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Combinamos estratégia, flexibilidade e especialistas para construir a proteção certa, do tamanho exato da sua operação.
            </p>
            <Link href="/#contato" className="inline-block px-8 py-4 bg-sienna text-white font-bold rounded-lg hover:bg-sienna/90 transition-all duration-300 shadow-lg hover:shadow-sienna/25 hover:-translate-y-1">
              Fale com nossos especialistas
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay="delay-2" className="h-full min-h-[400px] rounded-3xl overflow-hidden relative group border border-white/10 shadow-2xl">
             <div className="absolute inset-0 bg-sienna/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
             <Image 
                src="/assets/img/negocio_unico.jpeg" 
                alt="Especialistas em Cibersegurança" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative border-y border-white/5 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-80" 
            >
                <source src="/assets/img/essencia_video.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="block text-sienna font-bold tracking-wider uppercase mb-4 drop-shadow-md">Nossa Essência</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-eggshell drop-shadow-lg">
              Antes da cibersegurança se tornar prioridade, <span className="text-mint">ela já era o nosso foco.</span>
            </h3>
            <p className="text-gray-100 text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
              São mais de <strong className="text-white">25 anos</strong> qualificando e entregando projetos que conectam tecnologia, pessoas e estratégia para proteger o que realmente importa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-28 bg-coal overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-oxford/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sienna/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-eggshell mb-4">Maturidade e Evolução Constante</h2>
              <p className="text-muted text-lg">Desde 1999, evoluindo junto com os riscos, a tecnologia e o negócio.</p>
            </div>
          </ScrollReveal>
          <Timeline />
        </div>
      </section>

      <section className="py-28 bg-oxford/50 relative">
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 text-eggshell">Ecossistema Estratégico</h2>
            <p className="max-w-2xl mx-auto text-muted mb-20 text-lg">
              Construímos um ecossistema sólido de parceiros globais, escolhidos pela excelência técnica para gerar valor real.
            </p>
          </ScrollReveal>

          <ScrollReveal delay="delay-1" className="overflow-hidden py-4 relative w-full mask-gradient">
              <div className="flex w-fit animate-scroll items-center hover:[animation-play-state:paused]">
                  {[...partners, ...partners].map((partner, index) => (
                    <div key={index} className="partner-card relative">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image 
                            src={`/assets/img/${partner}.png`} 
                            alt={partner}
                            width={150}
                            height={60}
                            className="partner-logo"
                          />
                        </div>
                    </div>
                  ))}
              </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-coal cyber-grid">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <ScrollReveal className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-eggshell">Notícias e Artigos</h2>
            <Link href="/blog" className="text-sienna hover:text-mint transition-colors text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              Ver tudo <FaArrowRight className="animate-pulse" />
            </Link>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <ScrollReveal key={index} delay={`delay-${index + 1}`} className="group cursor-pointer glass-card p-0 overflow-hidden hover:-translate-y-2">
                <div className="h-52 bg-oxford relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/80 to-transparent z-10"></div>
                  <div className="w-full h-full bg-oxford group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <FaRegImage className={`text-4xl text-white/20 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`} />
                  </div>
                  <span className="absolute top-4 left-4 z-20 bg-sienna text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{item.category}</span>
                </div>
                <div className="p-8">
                  <span className="text-muted text-sm mb-3 block">{item.date}</span>
                  <h3 className="text-xl font-bold text-eggshell group-hover:text-sienna transition-colors leading-tight">{item.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-oxford relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 animate-float">
                <FaNetworkWired className="text-9xl" />
            </div>
            <div className="absolute bottom-10 right-10 animate-float-delayed">
                <FaShieldHalved className="text-9xl" />
            </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 rounded-3xl bg-coal/50 border border-white/5 p-8 md:p-10 backdrop-blur-lg flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-eggshell">Assine nossa Newsletter</h2>
            <p className="text-muted text-base">Receba insights exclusivos e tendências de cibersegurança diretamente no seu e-mail.</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Seu e-mail corporativo" 
              className="flex-1 px-6 py-3 rounded-xl bg-coal border border-white/10 text-eggshell placeholder:text-muted/60 focus:outline-none focus:border-sienna/50 transition-colors"
            />
            <button className="px-6 py-3 bg-sienna text-white font-bold rounded-xl hover:bg-sienna/90 transition-all shadow-lg hover:shadow-sienna/30 hover:-translate-y-1 whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;