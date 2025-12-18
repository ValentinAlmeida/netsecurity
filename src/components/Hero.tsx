'use client'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="hero">
        <ScrollReveal>
            <span className="tagline">CIBERSEGURANÇA AVANÇADA</span>
        </ScrollReveal>
        
        <ScrollReveal delay="delay-1">
            <h1>Experiência, Eficiência<br/>e Transparência</h1>
        </ScrollReveal>
        
        <ScrollReveal delay="delay-2">
            <p className="subtitle">Somos a NetSecurity. Protegendo seu negócio com soluções de ponta e uma equipe dedicada de especialistas.</p>
        </ScrollReveal>
        
        {/* Interface Dashboard - Cópia Fiel do HTML */}
        <ScrollReveal delay="delay-4" className="hero-interface-container">
            <div className="interface-glass">
                <div className="interface-header">
                    <div className="dots">
                        <span></span><span></span><span></span>
                    </div>
                    <div className="address-bar">netsecurity-dashboard.sys</div>
                </div>
                <div className="interface-body">
                    <div className="sidebar">
                        <div className="skeleton-line w-50"></div>
                        <div className="skeleton-line w-80"></div>
                        <div className="skeleton-line w-60"></div>
                        <div className="skeleton-line w-70 mt-20"></div>
                        <div className="skeleton-line w-50"></div>
                    </div>
                    <div className="main-content">
                        <div className="chart-area">
                            <div className="chart-bar h-40"></div>
                            <div className="chart-bar h-60"></div>
                            <div className="chart-bar h-30"></div>
                            <div className="chart-bar h-80 active"></div>
                            <div className="chart-bar h-50"></div>
                            <div className="chart-bar h-70"></div>
                        </div>
                        <div className="log-area">
                            <div className="log-line"><span className="success">✔</span> System protected</div>
                            <div className="log-line"><span className="warning">⚠</span> Threat detected: IP 192.168.x.x blocked</div>
                            <div className="log-line"><span className="info">ℹ</span> Scanning ports...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interface-glow"></div>
        </ScrollReveal>

        <ScrollReveal delay="delay-4">
            <div className="aws-banner glass-card">
                <div className="aws-content">
                    <i className="fab fa-aws fa-3x" style={{ color: '#FF9900' }}></i>
                    <div className="aws-text">
                        <h3>aws marketplace</h3>
                        <p>Agora você pode adquirir nossos serviços especializados pelo Marketplace da AWS.</p>
                    </div>
                </div>
                <a href="#" className="btn btn-primary">CONFIRA</a>
            </div>
        </ScrollReveal>
    </section>
  )
}