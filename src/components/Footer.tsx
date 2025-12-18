import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contato">
        <div className="container footer-grid">
            <div className="footer-col">
                <h4><i className="fa-solid fa-location-dot"></i> BRASIL</h4>
                <p>Rua Machado Bittencourt, 361 - 8º andar<br/>São Paulo - SP<br/>04044-001</p>
                <p>+ 55 (11) 5089-2060</p>
            </div>

            <div className="footer-col">
                <h4><i className="fa-solid fa-location-dot"></i> EUA</h4>
                <p>4000 Ponce de Leon Boulevard<br/>Suite 470 - Coral Gables<br/>FL 33146</p>
                <p>+ 1 (305) 777-0467</p>
            </div>

            <div className="footer-col">
                <h4>Redes Sociais</h4>
                <div className="social-links">
                    <a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a>
                    <a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>

            <div className="footer-col">
                <h4>Menu</h4>
                <ul className="footer-menu">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#quem-somos">Quem somos</Link></li>
                    <li><Link href="#servicos">Serviços</Link></li>
                    <li><Link href="#consultoria">Consultoria</Link></li>
                    <li><Link href="#vagas">Vagas</Link></li>
                    <li><Link href="#contato">Contato</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="container copyright">
            <p>© 2023 NetSecurity. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}