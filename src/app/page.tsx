'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import VideoBackground from '@/components/VideoBackground'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {

  const basePath = '/netsecurity';

  const partners = [
    'cisco', 'citrix', 'netwitness', 'trendmicro', 
    'tenable', 'fortinet', 'delinea', 'firemon', 
    'forcepoint', 'juniper', 'paloalto', 'secureid'
  ];

  return (
    <>
      <VideoBackground />
      
      <div className="container">
        <Header />
        <Hero />

        <section className="section-padding" id="quem-somos">
            <ScrollReveal>
                <h2 className="section-title">Por que a NetSecurity?</h2>
            </ScrollReveal>
            <div className="bento-grid">
                
                <ScrollReveal delay="delay-1" className="bento-card">
                    <div className="card-graphic graphic-integracao">
                        <div className="node node-1"></div> <div className="connection"></div> <div className="node node-2"></div>
                    </div>
                    <h3>Atendimento Personalizado</h3>
                    <p>Garantimos que cada cliente tenha atendimento único. Entendemos suas necessidades para buscar a solução mais adequada.</p>
                </ScrollReveal>

                <ScrollReveal delay="delay-2" className="bento-card card-highlight">
                    <div className="card-graphic graphic-netsecurity">
                        <div className="shield-shape"></div> <div className="core-glow"></div>
                    </div>
                    <h3>Reconhecimento</h3>
                    <p>Mais de 20 anos de mercado. Equipe certificada e alto nível de profissionalismo em todas as soluções do portfólio.</p>
                </ScrollReveal>

                <ScrollReveal delay="delay-3" className="bento-card">
                    <div className="card-graphic graphic-ciber">
                          <div className="lock-body"></div> <div className="lock-shackle"></div> <div className="scan-line"></div>
                    </div>
                    <h3>Infraestrutura de Operações</h3>
                    <p>Nossa infraestrutura 24x7 garante o maior nível de segurança, monitorando milhares de eventos e vulnerabilidades.</p>
                </ScrollReveal>
                
                 <ScrollReveal delay="delay-1" className="bento-card card-wide" style={{ opacity: 0.7 } as React.CSSProperties}>
                    <div className="card-content">
                         <h3>+20 Anos de Experiência</h3>
                         <p>Uma trajetória sólida protegendo grandes corporações.</p>
                    </div>
                </ScrollReveal>

                 <ScrollReveal delay="delay-2" className="bento-card card-wide" style={{ opacity: 0.7 } as React.CSSProperties}>
                    <div className="card-content">
                        <h3>Certificações Globais</h3>
                        <p>Equipe altamente qualificada com as principais certificações do mercado.</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <section className="section-padding" id="servicos">
            <ScrollReveal>
                <h2 className="section-title">O Que Oferecemos?</h2>
            </ScrollReveal>
            <div className="offer-grid">
                <ScrollReveal delay="delay-1" className="offer-card glass-card">
                    <i className="fa-solid fa-layer-group offer-icon"></i>
                    <h3>Camadas de Proteção</h3>
                    <p>Conhecer as múltiplas camadas de segurança é um passo importante para garantir uma proteção eficiente nos mais diversos ambientes de TI.</p>
                </ScrollReveal>
                <ScrollReveal delay="delay-2" className="offer-card glass-card">
                    <i className="fa-solid fa-users-gear offer-icon"></i>
                    <h3>Portfólio Completo</h3>
                    <p>Para resolver grandes problemas, conte com grandes parceiros. Oferecemos um portfólio com as soluções tecnológicas mais inovadoras.</p>
                </ScrollReveal>
                <ScrollReveal delay="delay-3" className="offer-card glass-card">
                    <i className="fa-regular fa-lightbulb offer-icon"></i>
                    <h3>Ideias Simples</h3>
                    <p>Com opções de OPEX e CAPEX, podemos transformar economicamente o seu projeto, reduzindo custos diretos e indiretos.</p>
                </ScrollReveal>
            </div>
        </section>
      </div> 

      <section className="stats-section">
        <div className="container stats-grid">
            <ScrollReveal delay="delay-1" className="stat-item">
                <i className="fa-solid fa-diagram-project stat-icon"></i>
                <span className="stat-number">+ 150</span>
                <p>projetos entregues</p>
            </ScrollReveal>
            <ScrollReveal delay="delay-2" className="stat-item">
                <i className="fa-solid fa-headset stat-icon"></i>
                <span className="stat-number">+ 10k</span>
                <p>horas de suporte/mês</p>
            </ScrollReveal>
            <ScrollReveal delay="delay-3" className="stat-item">
                <i className="fa-solid fa-graduation-cap stat-icon"></i>
                <span className="stat-number">+ 500</span>
                <p>horas de treinamento/ano</p>
            </ScrollReveal>
            <ScrollReveal delay="delay-4" className="stat-item">
                <i className="fa-solid fa-certificate stat-icon"></i>
                <span className="stat-number">+ 150</span>
                <p>certificações vigentes</p>
            </ScrollReveal>
        </div>
      </section>

      <div className="container">
        <section className="section-padding center-text">
            <ScrollReveal>
                <h2 className="section-title" style={{ marginBottom: '40px' }}>Nossos Parceiros</h2>
            </ScrollReveal>
            
            <ScrollReveal delay="delay-1" className="partners-slider">
                <div className="slide-track">
                    {[...partners, ...partners].map((partner, index) => (
                          <Image 
                            key={index} 
                            src={`${basePath}/assets/img/${partner}.png`} 
                            alt={partner} 
                            width={150}
                            height={60}
                            className="partner-img" 
                          />
                    ))}
                </div>
            </ScrollReveal>
        </section>

        <ScrollReveal className="final-cta-section glass-card">
            <h2>Quer elevar o nível de maturidade de Cibersegurança da sua empresa?</h2>
            <p>Fale agora com um dos nossos especialistas.</p>
            <a href="#contato" className="btn btn-primary btn-large">ENTRE EM CONTATO</a>
        </ScrollReveal>
      </div>

      <Footer />
    </>
  )
}