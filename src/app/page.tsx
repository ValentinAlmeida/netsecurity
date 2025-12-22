"use client"

import React from 'react';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import Hero from '@/components/Hero';

const WhyUsSection = () => (
  <section className="py-24" id="quem-somos">
    <ScrollReveal>
        <h2 className="text-4xl font-bold text-center mb-16">Por que a NetSecurity?</h2>
    </ScrollReveal>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollReveal delay="delay-1" className="glass-card p-10 flex flex-col items-start group">
            <div className="w-16 h-16 bg-background rounded-2xl mb-6 flex justify-center items-center group-hover:bg-brand-secondary/10 transition-colors duration-300">
                  <i className="fa-solid fa-share-nodes text-3xl text-brand-primary drop-shadow-[0_0_8px_rgba(221,110,66,0.6)]"></i>
            </div>
            <h3 className="text-xl mb-4 font-semibold tracking-tight">Atendimento Personalizado</h3>
            <p className="text-[15px] text-muted font-normal leading-relaxed">Garantimos que cada cliente tenha atendimento único. Entendemos suas necessidades para buscar a solução mais adequada.</p>
        </ScrollReveal>

        <ScrollReveal delay="delay-2" className="glass-card p-10 flex flex-col items-start border-brand-primary/50 bg-gradient-to-br from-surface to-background shadow-[0_0_20px_rgba(221,110,66,0.15)]">
            <div className="w-16 h-16 bg-background rounded-2xl mb-6 flex justify-center items-center">
                <i className="fa-solid fa-shield-halved text-3xl text-brand-primary drop-shadow-[0_0_12px_rgba(221,110,66,0.8)]"></i>
            </div>
            <h3 className="text-xl mb-4 text-brand-primary font-semibold tracking-tight">Reconhecimento</h3>
            <p className="text-[15px] text-muted font-normal leading-relaxed">Mais de 20 anos de mercado. Equipe certificada e alto nível de profissionalismo em todas as soluções do portfólio.</p>
        </ScrollReveal>

        <ScrollReveal delay="delay-3" className="glass-card p-10 flex flex-col items-start group">
            <div className="w-16 h-16 bg-background rounded-2xl mb-6 flex justify-center items-center group-hover:bg-brand-secondary/10 transition-colors duration-300">
                  <i className="fa-solid fa-lock text-3xl text-brand-primary drop-shadow-[0_0_8px_rgba(221,110,66,0.6)]"></i>
            </div>
            <h3 className="text-xl mb-4 font-semibold tracking-tight">Infraestrutura de Operações</h3>
            <p className="text-[15px] text-muted font-normal leading-relaxed">Nossa infraestrutura 24x7 garante o maior nível de segurança, monitorando milhares de eventos.</p>
        </ScrollReveal>
        
          <ScrollReveal delay="delay-1" className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 md:col-span-2 group">
            <div className="flex-1">
                  <h3 className="text-xl mb-2 font-semibold tracking-tight group-hover:text-brand-secondary transition-colors duration-300">+20 Anos de Experiência</h3>
                  <p className="text-muted font-normal">Uma trajetória sólida protegendo grandes corporações.</p>
            </div>
        </ScrollReveal>

          <ScrollReveal delay="delay-2" className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 md:col-span-1 group">
            <div className="flex-1">
                <h3 className="text-xl mb-2 font-semibold tracking-tight group-hover:text-brand-secondary transition-colors duration-300">Certificações Globais</h3>
                <p className="text-muted font-normal">Equipe altamente qualificada.</p>
            </div>
        </ScrollReveal>
    </div>
  </section>
);

const ServicesSection = () => {
  const servicesData = [
    { icon: "fa-layer-group", title: "Camadas de Proteção", desc: "Conhecer as múltiplas camadas de segurança é um passo importante para garantir uma proteção eficiente nos mais diversos ambientes de TI." },
    { icon: "fa-users-gear", title: "Portfólio Completo", desc: "Para resolver grandes problemas, conte com grandes parceiros. Oferecemos um portfólio com as soluções tecnológicas mais inovadoras." },
    { icon: "fa-lightbulb", title: "Ideias Simples", desc: "Com opções de OPEX e CAPEX, podemos transformar economicamente o seu projeto, reduzindo custos diretos e indiretos." }
  ];

  return (
    <section className="py-24" id="servicos">
        <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">O Que Oferecemos?</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
                <ScrollReveal key={index} delay={`delay-${index + 1}`} className="glass-card p-12 text-center group">
                    <i className={`fa-solid ${item.icon} text-5xl text-brand-primary mb-6 inline-block drop-shadow-[0_0_12px_rgba(221,110,66,0.5)] group-hover:scale-110 transition-transform duration-300`}></i>
                    <h3 className="mb-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-muted font-normal leading-relaxed">{item.desc}</p>
                </ScrollReveal>
            ))}
        </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: "fa-diagram-project", value: 150, prefix: "+ ", label: "projetos entregues" },
    { icon: "fa-headset", value: 10, prefix: "+ ", suffix: "k", label: "horas de suporte/mês" },
    { icon: "fa-graduation-cap", value: 500, prefix: "+ ", label: "horas de treinamento/ano" },
    { icon: "fa-certificate", value: 150, prefix: "+ ", label: "certificações vigentes" },
  ];

  return (
    <section className="bg-surface border-y border-brand-primary/10 py-20 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={`delay-${i + 1}`} className="p-5 hover:transform hover:scale-105 transition-transform duration-300">
                  <i className={`fa-solid ${stat.icon} text-4xl text-brand-primary mb-4 inline-block drop-shadow-[0_0_10px_rgba(221,110,66,0.5)]`}></i>
                  <span className="block text-5xl font-extrabold mb-2">
                      <AnimatedCounter 
                          end={stat.value} 
                          prefix={stat.prefix} 
                          suffix={stat.suffix} 
                          duration={2500} 
                      />
                  </span>
                  <p className="text-brand-secondary font-medium text-sm uppercase tracking-wider opacity-90">{stat.label}</p>
              </ScrollReveal>
          ))}
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const partners = [
    'cisco', 'citrix', 'netwitness', 'trendmicro', 
    'tenable', 'fortinet', 'delinea', 'firemon', 
    'forcepoint', 'juniper', 'paloalto', 'secureid'
  ];

  return (
    <section className="py-24 text-center">
        <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">Nossos Parceiros</h2>
        </ScrollReveal>
        
        <ScrollReveal delay="delay-1" className="overflow-hidden py-16 relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex w-fit animate-scroll items-center hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, index) => (
                      <img 
                        key={index} 
                        src={`/assets/img/${partner}.png`} 
                        alt={partner} 
                        className="h-12 w-auto mx-12 opacity-60 brightness-0 invert transition-all duration-300 hover:opacity-100 hover:filter hover:brightness-0 hover:invert hover:drop-shadow-[0_0_5px_#aceca1] hover:scale-110 cursor-pointer" 
                      />
                ))}
            </div>
        </ScrollReveal>
    </section>
  );
};

const CTASection = () => (
  <ScrollReveal className="text-center py-20 px-10 my-24 bg-surface border border-brand-primary/20 rounded-2xl shadow-[0_0_40px_rgba(21,34,61,0.6)]">
      <h2 className="text-3xl font-bold mb-4">Quer elevar o nível de maturidade de Cibersegurança da sua empresa?</h2>
      <p className="text-xl text-muted mb-10">Fale agora com um dos nossos especialistas.</p>
      <a href="#contato" className="inline-block px-12 py-4 rounded-md text-lg font-bold transition-all duration-300 bg-brand-primary text-white border border-brand-primary shadow-[0_4px_20px_rgba(221,110,66,0.3)] hover:bg-brand-secondary hover:text-background hover:border-brand-secondary hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(172,236,161,0.5)]">
          ENTRE EM CONTATO
      </a>
  </ScrollReveal>
);


export default function Home() {
  return (
    <main className="min-h-screen text-foreground font-sans selection:bg-brand-primary selection:text-white">
      
      <Hero />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-10">
        <WhyUsSection />
        <ServicesSection />
      </div> 

      <StatsSection />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <PartnersSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}