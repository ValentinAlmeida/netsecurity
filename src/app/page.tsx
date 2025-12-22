import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ThreeBackground from '@/components/ThreeBackground'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  const partners = [
    'cisco', 'citrix', 'netwitness', 'trendmicro', 
    'tenable', 'fortinet', 'delinea', 'firemon', 
    'forcepoint', 'juniper', 'paloalto', 'secureid'
  ];

  return (
    <>
      <ThreeBackground />
      
      <Header />
      <Hero />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        
        <section className="py-24" id="quem-somos">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">Por que a NetSecurity?</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <ScrollReveal delay="delay-1" className="glass-card p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-accent">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl mb-6 relative flex justify-center items-center">
                        <div className="w-3 h-3 bg-accent-orange rounded-full absolute top-4 left-4 shadow-[0_0_15px_#ff6b35]"></div>
                        <div className="w-[2px] h-[30px] absolute bg-gradient-to-br from-accent-orange to-transparent -rotate-45"></div>
                        <div className="w-3 h-3 bg-accent-orange rounded-full absolute bottom-4 right-4 shadow-[0_0_15px_#ff6b35]"></div>
                    </div>
                    <h3 className="text-xl mb-4 text-foreground font-semibold">Atendimento Personalizado</h3>
                    <p className="text-[15px] text-muted leading-relaxed">Garantimos que cada cliente tenha atendimento único. Entendemos suas necessidades para buscar a solução mais adequada.</p>
                </ScrollReveal>

                <ScrollReveal delay="delay-2" className="glass-card p-10 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent-orange/15 to-background/80 border-accent-orange">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl mb-6 relative flex justify-center items-center">
                        <div className="w-9 h-11 border-[3px] border-accent-orange rounded-[6px_6px_20px_20px] relative"></div>
                        <div className="absolute w-4 h-4 bg-accent-orange rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#ff6b35] animate-pulse"></div>
                    </div>
                    <h3 className="text-xl mb-4 text-accent-orange font-semibold">Reconhecimento</h3>
                    <p className="text-[15px] text-muted leading-relaxed">Mais de 20 anos de mercado. Equipe certificada e alto nível de profissionalismo em todas as soluções do portfólio.</p>
                </ScrollReveal>

                <ScrollReveal delay="delay-3" className="glass-card p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 hover:border-accent">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl mb-6 relative flex justify-center items-center">
                         <div className="w-8 h-6 bg-gradient-to-b from-accent-orange to-background rounded absolute bottom-3.5"></div>
                         <div className="w-5 h-5 border-[3px] border-accent-orange border-b-0 rounded-t-full absolute top-2.5"></div>
                         <div className="w-10 h-[2px] bg-gradient-to-b from-transparent to-accent-orange absolute top-5 animate-scan shadow-[0_0_10px_white]"></div>
                    </div>
                    <h3 className="text-xl mb-4 text-foreground font-semibold">Infraestrutura de Operações</h3>
                    <p className="text-[15px] text-muted leading-relaxed">Nossa infraestrutura 24x7 garante o maior nível de segurança, monitorando milhares de eventos.</p>
                </ScrollReveal>
                
                 <ScrollReveal delay="delay-1" className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 md:col-span-2 opacity-70 transition-all duration-300 hover:opacity-100 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1 cursor-default">
                    <div className="flex-1">
                         <h3 className="text-xl mb-2 font-semibold text-foreground">+20 Anos de Experiência</h3>
                         <p className="text-muted">Uma trajetória sólida protegendo grandes corporações.</p>
                    </div>
                </ScrollReveal>

                 <ScrollReveal delay="delay-2" className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 md:col-span-1 opacity-70 transition-all duration-300 hover:opacity-100 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1 cursor-default">
                    <div className="flex-1">
                        <h3 className="text-xl mb-2 font-semibold text-foreground">Certificações Globais</h3>
                        <p className="text-muted">Equipe altamente qualificada.</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <section className="py-24" id="servicos">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">O Que Oferecemos?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: "fa-layer-group", title: "Camadas de Proteção", desc: "Conhecer as múltiplas camadas de segurança é um passo importante." },
                    { icon: "fa-users-gear", title: "Portfólio Completo", desc: "Oferecemos um portfólio com as soluções tecnológicas mais inovadoras." },
                    { icon: "fa-lightbulb", title: "Ideias Simples", desc: "Com opções de OPEX e CAPEX, podemos transformar economicamente o seu projeto." }
                ].map((item, index) => (
                    <ScrollReveal key={index} delay={`delay-${index + 1}`} className="glass-card p-12 text-center hover:-translate-y-2 transition-transform duration-300">
                        <i className={`fa-solid ${item.icon} text-5xl text-accent-orange mb-6 inline-block drop-shadow-[0_0_10px_rgba(255,107,53,0.4)]`}></i>
                        <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                        <p className="text-muted">{item.desc}</p>
                    </ScrollReveal>
                ))}
            </div>
        </section>
      </div> 

      <section className="bg-gradient-to-r from-secondary to-background border-y border-accent/30 py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
                { icon: "fa-diagram-project", num: "+ 150", label: "projetos entregues" },
                { icon: "fa-headset", num: "+ 10k", label: "horas de suporte/mês" },
                { icon: "fa-graduation-cap", num: "+ 500", label: "horas de treinamento/ano" },
                { icon: "fa-certificate", num: "+ 150", label: "certificações vigentes" },
            ].map((stat, i) => (
                 <ScrollReveal key={i} delay={`delay-${i + 1}`} className="p-5">
                    <i className={`fa-solid ${stat.icon} text-3xl text-accent-orange mb-4 opacity-80`}></i>
                    <span className="block text-5xl font-extrabold text-foreground mb-2">{stat.num}</span>
                    <p className="text-muted font-medium">{stat.label}</p>
                </ScrollReveal>
            ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <section className="py-24 text-center">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">Nossos Parceiros</h2>
            </ScrollReveal>
            
            <ScrollReveal delay="delay-1" className="overflow-hidden py-16 relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="flex w-fit animate-scroll items-center hover:[animation-play-state:paused]">
                    {[...partners, ...partners].map((partner, index) => (
                         <img 
                            key={index} 
                            src={`/assets/img/${partner}.png`} 
                            alt={partner} 
                            className="h-12 w-auto mx-12 opacity-60 brightness-0 invert transition-all duration-300 hover:opacity-100 hover:filter hover:brightness-0 hover:invert hover:drop-shadow-[0_0_5px_#3b82f6] hover:scale-110 cursor-pointer" 
                         />
                    ))}
                </div>
            </ScrollReveal>
        </section>

        <ScrollReveal className="text-center py-20 px-10 my-24 bg-gradient-to-b from-black/40 to-accent/10 border border-accent rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4">Quer elevar o nível de maturidade de Cibersegurança da sua empresa?</h2>
            <p className="text-xl text-muted mb-10">Fale agora com um dos nossos especialistas.</p>
            <a href="#contato" className="inline-block px-12 py-4 rounded-md text-lg font-bold transition-all duration-300 bg-accent text-background border border-accent shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(59,130,246,0.5)]">
                ENTRE EM CONTATO
            </a>
        </ScrollReveal>
      </div>

      <Footer />
    </>
  )
}