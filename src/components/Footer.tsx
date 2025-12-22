import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contato" className="bg-secondary pt-20 border-t border-accent/30">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-center md:text-left">
            <div className="flex flex-col gap-4">
                <h4 className="text-lg mb-2 text-foreground flex items-center justify-center md:justify-start gap-2">
                    <i className="fa-solid fa-location-dot text-accent-orange text-base"></i> BRASIL
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                    Rua Machado Bittencourt, 361 - 8º andar<br/>São Paulo - SP<br/>04044-001
                </p>
                <p className="text-muted text-sm">+ 55 (11) 5089-2060</p>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-lg mb-2 text-foreground flex items-center justify-center md:justify-start gap-2">
                    <i className="fa-solid fa-location-dot text-accent-orange text-base"></i> EUA
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                    4000 Ponce de Leon Boulevard<br/>Suite 470 - Coral Gables<br/>FL 33146
                </p>
                <p className="text-muted text-sm">+ 1 (305) 777-0467</p>
            </div>

            <div>
                <h4 className="text-lg mb-6 text-foreground">Redes Sociais</h4>
                <div className="flex flex-col gap-3">
                    {[
                        { icon: "fa-facebook", label: "Facebook" },
                        { icon: "fa-instagram", label: "Instagram" },
                        { icon: "fa-linkedin", label: "LinkedIn" }
                    ].map((social) => (
                        <a key={social.label} href="#" className="flex items-center gap-2.5 text-muted text-sm hover:text-accent transition-colors justify-center md:justify-start">
                            <i className={`fa-brands ${social.icon}`}></i> {social.label}
                        </a>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-lg mb-6 text-foreground">Menu</h4>
                <ul className="space-y-3">
                    {['Home', 'Quem somos', 'Serviços', 'Consultoria', 'Vagas', 'Contato'].map((link) => (
                        <li key={link}>
                            <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-muted text-sm hover:text-accent transition-colors">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 border-t border-white/5 py-8 text-center">
            <p className="text-white/40 text-[13px]">© 2023 NetSecurity. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}