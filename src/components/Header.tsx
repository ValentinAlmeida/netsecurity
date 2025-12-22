import Link from 'next/link'

export default function Header() {
  const basePath = '/netsecurity';

  return (
    <header>
      <div className="logo">
        <img 
            src={`${basePath}/assets/img/logo.png`} 
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