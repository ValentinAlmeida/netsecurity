import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center py-8 relative z-20 gap-5 max-w-[1200px] mx-auto px-6">
      <div className="font-bold text-2xl text-foreground tracking-wide flex items-center">
        <Image 
          src="/assets/img/logo.png" 
          alt="NetSecurity" 
          width={32} 
          height={32} 
          className="mr-3"
        />
        NetSecurity
      </div>
      
      <nav className="flex gap-8 items-center flex-wrap justify-center w-full md:w-auto">
        {['Quem Somos', 'Serviços', 'Consultoria', 'Vagas'].map((item) => (
          <Link 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            className="text-muted text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap transition-colors hover:text-accent"
          >
            {item}
          </Link>
        ))}
        
        <Link 
          href="#contato" 
          className="px-5 py-2 border border-accent/30 rounded text-accent text-[13px] font-semibold hover:bg-accent/10 transition-colors"
        >
          CONTATO
        </Link>
      </nav>
    </header>
  )
}