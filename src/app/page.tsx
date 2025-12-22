import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
// Removemos o ThreeBackground e o Hero pois o vídeo fará esse papel agora

export default function Home() {
  const partners = [
    'cisco', 'citrix', 'netwitness', 'trendmicro', 
    'tenable', 'fortinet', 'delinea', 'firemon', 
    'forcepoint', 'juniper', 'paloalto', 'secureid'
  ];

  return (
    <main className="bg-slate-900 min-h-screen text-white">
      
      {/* --- INÍCIO DA NOVA SEÇÃO HERO COM VÍDEO --- */}
      <div className="relative w-full h-screen overflow-hidden">
        
        {/* 1. O Header precisa ficar 'absolute' aqui dentro para flutuar sobre o vídeo */}
        <div className="absolute top-0 left-0 w-full z-50">
           <Header />
        </div>

        {/* 2. Camadas do Vídeo de Fundo */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay z-10"></div>
          {/* O gradiente abaixo garante que a transição para o resto do site seja suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/assets/img/videohome.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 3. Conteúdo Central do Hero (Texto Neon) */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 drop-shadow-[0_0_25px_rgba(0,149,255,0.6)] uppercase tracking-tighter leading-tight mb-8">
              Serviços Gerenciados <br />
              de Segurança
            </h1>
            
            <div className="flex flex-col items-center">
              <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-md">
                Experiência, Eficiência e Transparência,
              </h2>
              <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-md">
                somos a NetSecurity
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
      {/* --- FIM DA NOVA SEÇÃO HERO --- */}


      {/* --- O RESTO DO SEU CONTEÚDO CONTINUA AQUI --- */}
      {/* Adicionei 'relative z-10 bg-slate-900' para garantir que o fundo cubra o vídeo ao rolar */}
      <div className="relative z-10 bg-slate-900 max-w-[1200px] mx-auto px-6 pt-10">
        
        <section className="py-24" id="quem-somos">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Por que a NetSecurity?</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <ScrollReveal delay="delay-1" className="glass-card p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-500/50 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 relative flex justify-center items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-4 left-4 shadow-[0_0_15px_#ff6b35]"></div>
                        <div className="w-[2px] h-[30px] absolute bg-gradient-to-br from-orange-500 to-transparent -rotate-45"></div>
                        <div className="w-3 h-3 bg-orange-500 rounded-full absolute bottom-4 right-4 shadow-[0_0_15px_#ff6b35]"></div>
                    </div>
                    <h3 className="text-xl mb-4 text-white font-semibold">Atendimento Personalizado</h3>
                    <p className="text-[15px] text-gray-400 leading-relaxed">Garantimos que cada cliente tenha atendimento único. Entendemos suas necessidades para buscar a solução mais adequada.</p>
                </ScrollReveal>

                <ScrollReveal delay="delay-2" className="glass-card p-10 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/15 to-slate-900/80 border border-orange-500/50 rounded-2xl">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 relative flex justify-center items-center">
                        <div className="w-9 h-11 border-[3px] border-orange-500 rounded-[6px_6px_20px_20px] relative"></div>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#ff6b35] animate-pulse"></div>
                    </div>
                    <h3 className="text-xl mb-4 text-orange-500 font-semibold">Reconhecimento</h3>
                    <p className="text-[15px] text-gray-400 leading-relaxed">Mais de 20 anos de mercado. Equipe certificada e alto nível de profissionalismo em todas as soluções do portfólio.</p>
                </ScrollReveal>

                <ScrollReveal delay="delay-3" className="glass-card p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 hover:border-blue-500/50 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 relative flex justify-center items-center">
                          <div className="w-8 h-6 bg-gradient-to-b from-orange-500 to-transparent rounded absolute bottom-3.5"></div>
                          <div className="w-5 h-5 border-[3px] border-orange-500 border-b-0 rounded-t-full absolute top-2.5"></div>
                          <div className="w-10 h-[2px] bg-gradient-to-b from-transparent to-orange-500 absolute top-5 animate-scan shadow-[0_0_10px_white]"></div>
                    </div>
                    <h3 className="text-xl mb-4 text-white font-semibold">Infraestrutura de Operações</h3>
                    <p className="text-[15px] text-gray-400 leading-relaxed">Nossa infraestrutura 24x7 garante o maior nível de segurança, monitorando milhares de eventos.</p>
                </ScrollReveal>
                
                 {/* CARDS LARGOS */}
                 <ScrollReveal delay="delay-1" className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 md:col-span-2 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex-1">
                          <h3 className="text-xl mb-2 font-semibold text-white">+20 Anos de Experiência</h3>
                          <p className="text-gray-400">Uma trajetória sólida protegendo grandes corporações.</p>
                    </div>
                </ScrollReveal>

                 <ScrollReveal delay="delay-2" className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 md:col-span-1 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex-1">
                        <h3 className="text-xl mb-2 font-semibold text-white">Certificações Globais</h3>
                        <p className="text-gray-400">Equipe altamente qualificada.</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <section className="py-24" id="servicos">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">O Que Oferecemos?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: "fa-layer-group", title: "Camadas de Proteção", desc: "Conhecer as múltiplas camadas de segurança é um passo importante." },
                    { icon: "fa-users-gear", title: "Portfólio Completo", desc: "Oferecemos um portfólio com as soluções tecnológicas mais inovadoras." },
                    { icon: "fa-lightbulb", title: "Ideias Simples", desc: "Com opções de OPEX e CAPEX, podemos transformar economicamente o seu projeto." }
                ].map((item, index) => (
                    <ScrollReveal key={index} delay={`delay-${index + 1}`} className="glass-card p-12 text-center hover:-translate-y-2 transition-transform duration-300 bg-white/5 border border-white/10 rounded-2xl">
                        <i className={`fa-solid ${item.icon} text-5xl text-orange-500 mb-6 inline-block drop-shadow-[0_0_10px_rgba(255,107,53,0.4)]`}></i>
                        <h3 className="mb-4 text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </ScrollReveal>
                ))}
            </div>
        </section>
      </div> 

      <section className="bg-gradient-to-r from-slate-800 to-slate-900 border-y border-white/10 py-20 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
                { icon: "fa-diagram-project", num: "+ 150", label: "projetos entregues" },
                { icon: "fa-headset", num: "+ 10k", label: "horas de suporte/mês" },
                { icon: "fa-graduation-cap", num: "+ 500", label: "horas de treinamento/ano" },
                { icon: "fa-certificate", num: "+ 150", label: "certificações vigentes" },
            ].map((stat, i) => (
                 <ScrollReveal key={i} delay={`delay-${i + 1}`} className="p-5">
                    <i className={`fa-solid ${stat.icon} text-3xl text-orange-500 mb-4 opacity-80`}></i>
                    <span className="block text-5xl font-extrabold text-white mb-2">{stat.num}</span>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                </ScrollReveal>
            ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 bg-slate-900">
        <section className="py-24 text-center">
            <ScrollReveal>
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Nossos Parceiros</h2>
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

        <ScrollReveal className="text-center py-20 px-10 my-24 bg-gradient-to-b from-black/40 to-blue-900/10 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Quer elevar o nível de maturidade de Cibersegurança da sua empresa?</h2>
            <p className="text-xl text-gray-400 mb-10">Fale agora com um dos nossos especialistas.</p>
            <a href="#contato" className="inline-block px-12 py-4 rounded-md text-lg font-bold transition-all duration-300 bg-blue-600 text-white border border-blue-500 shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:bg-blue-700 hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(59,130,246,0.5)]">
                ENTRE EM CONTATO
            </a>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  )
}