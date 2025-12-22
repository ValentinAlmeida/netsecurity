'use client'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="text-center pt-36 pb-24 relative perspective-[1000px] overflow-visible max-w-[1200px] mx-auto px-6 z-10">
        <ScrollReveal>
            <span className="inline-block border border-accent px-3.5 py-1.5 rounded-full text-xs text-accent bg-accent/10 font-semibold tracking-widest mb-8">
                CIBERSEGURANÇA AVANÇADA
            </span>
        </ScrollReveal>
        
        <ScrollReveal delay="delay-1">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted">
                Experiência, Eficiência<br/>e Transparência
            </h1>
        </ScrollReveal>
        
        <ScrollReveal delay="delay-2">
            <p className="text-xl text-muted max-w-[700px] mx-auto mb-16">
                Somos a NetSecurity. Protegendo seu negócio com soluções de ponta e uma equipe dedicada de especialistas.
            </p>
        </ScrollReveal>
        
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 w-screen h-[800px] flex justify-center z-0 pointer-events-none">
            <ScrollReveal delay="delay-4" className="w-full flex justify-center">
                <div 
                    className="w-[1200px] h-[700px] bg-[#1a1a1a]/95 border border-white/10 rounded-3xl shadow-[0_-20px_80px_-20px_rgba(59,130,246,0.15)] relative overflow-hidden"
                    style={{ transform: 'rotateX(20deg) rotateY(-10deg) rotateZ(2deg)', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}
                >
                    <div className="h-11 bg-white/[0.02] border-b border-white/5 flex items-center px-5">
                        <div className="flex gap-2 mr-auto">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
                        </div>
                        <div className="text-[11px] text-white/20 bg-black/30 px-5 py-1 rounded-xl mx-auto">
                            netsecurity-dashboard.sys
                        </div>
                        <div className="w-10"></div>
                    </div>

                    <div className="flex h-full">
                        <div className="w-[220px] border-r border-white/5 p-6 bg-white/[0.01]">
                            <div className="h-2.5 bg-white/5 rounded w-1/2 mb-4"></div>
                            <div className="h-2.5 bg-white/5 rounded w-4/5 mb-4"></div>
                            <div className="h-2.5 bg-white/5 rounded w-3/5 mb-4"></div>
                            <div className="h-2.5 bg-white/5 rounded w-3/4 mt-8 mb-4"></div>
                            <div className="h-2.5 bg-white/5 rounded w-1/2 mb-4"></div>
                        </div>
                        <div className="flex-1 p-10 text-left">
                            <div className="flex items-end gap-5 h-[250px] border-b border-white/5 pb-5 mb-8">
                                <div className="flex-1 bg-white/5 rounded-t h-[40%]"></div>
                                <div className="flex-1 bg-white/5 rounded-t h-[60%]"></div>
                                <div className="flex-1 bg-white/5 rounded-t h-[30%]"></div>
                                <div className="flex-1 bg-gradient-to-t from-accent to-transparent opacity-80 rounded-t h-[80%]"></div>
                                <div className="flex-1 bg-white/5 rounded-t h-[50%]"></div>
                                <div className="flex-1 bg-white/5 rounded-t h-[70%]"></div>
                            </div>

                            <div className="font-mono text-xs text-white/40 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-accent">✔</span> System protected
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-accent-orange">⚠</span> Threat detected: IP 192.168.x.x blocked
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-accent-secondary">ℹ</span> Scanning ports...
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-1/2 bg-accent blur-[100px] opacity-15 -z-10"></div>
                </div>
            </ScrollReveal>
        </div>

        <ScrollReveal delay="delay-4">
            <div className="mt-[250px] relative z-20 glass-card p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-left shadow-2xl max-w-4xl mx-auto gap-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <i className="fab fa-aws fa-3x text-[#FF9900]"></i>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">aws marketplace</h3>
                        <p className="text-muted">Agora você pode adquirir nossos serviços especializados pelo Marketplace da AWS.</p>
                    </div>
                </div>
                <a href="#" className="whitespace-nowrap px-8 py-3.5 bg-accent text-background font-bold rounded-md border border-accent hover:bg-accent-hover hover:border-accent-hover shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-1">
                    CONFIRA
                </a>
            </div>
        </ScrollReveal>
    </section>
  )
}