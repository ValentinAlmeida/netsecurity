import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Image 
            src="/assets/img/logo.png" 
            alt="NetSecurity" 
            width={32} 
            height={32} 
            style={{ marginRight: '12px' }} 
        />
        NetSecurity
      </div>
      <nav>
        <Link href="#quem-somos">QUEM SOMOS</Link>
        <Link href="#servicos">SERVIÇOS</Link>
        <Link href="#consultoria">CONSULTORIA</Link>
        <Link href="#vagas">VAGAS</Link>
        <Link href="#contato" className="nav-cta">CONTATO</Link>
      </nav>
    </header>
  )
}