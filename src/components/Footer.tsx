"use client"

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-coal border-t border-white/5 pt-20 pb-10 text-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
               <img 
                  src="/assets/img/logo.png" 
                  alt="NetSecurity" 
                  className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" 
               />
               <span className="text-xl font-bold tracking-wide text-eggshell">NetSecurity</span>
            </Link>
            <p className="text-muted leading-relaxed max-w-sm mb-6 pr-4">
              Líder em soluções de cibersegurança, protegendo o futuro dos negócios com inteligência e tecnologia de ponta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-oxford flex items-center justify-center text-eggshell hover:bg-sienna hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-oxford flex items-center justify-center text-eggshell hover:bg-sienna hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-oxford flex items-center justify-center text-eggshell hover:bg-sienna hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-eggshell font-bold mb-6 tracking-wide text-lg">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted hover:text-sienna transition-colors block py-1">Home</Link></li>
              <li><Link href="/#quem-somos" className="text-muted hover:text-sienna transition-colors block py-1">Quem Somos</Link></li>
              <li><Link href="/#solucoes" className="text-muted hover:text-sienna transition-colors block py-1">Soluções</Link></li>
              <li><Link href="/blog" className="text-muted hover:text-sienna transition-colors block py-1">Blog</Link></li>
              <li><Link href="/#carreiras" className="text-muted hover:text-sienna transition-colors block py-1">Carreiras</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-eggshell font-bold mb-6 tracking-wide text-lg">Escritórios</h4>
            <div className="mb-6 flex items-start gap-3">
               <i className="fa-solid fa-location-dot text-sienna mt-1"></i>
               <div>
                 <span className="text-eggshell font-bold text-xs uppercase block mb-1">Brasil 🇧🇷</span>
                 <p className="text-muted text-xs leading-relaxed">
                   Rua Machado Bittencourt, 361<br/>
                   São Paulo - SP<br/>
                   +55 (11) 5089-2060
                 </p>
               </div>
            </div>
            <div className="flex items-start gap-3">
               <i className="fa-solid fa-location-dot text-sienna mt-1"></i>
               <div>
                 <span className="text-eggshell font-bold text-xs uppercase block mb-1">EUA 🇺🇸</span>
                 <p className="text-muted text-xs leading-relaxed">
                   4000 Ponce de Leon Blvd<br/>
                   Coral Gables, FL<br/>
                   +1 (305) 777-0467
                 </p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-eggshell font-bold mb-6 tracking-wide text-lg">Governança</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted hover:text-mint transition-colors flex items-start gap-3 group">
                  <div className="w-5 flex justify-center mt-0.5 shrink-0">
                    <i className="fa-solid fa-shield-halved text-sienna group-hover:text-mint transition-colors"></i>
                  </div>
                  <span className="leading-tight">Política de Segurança da Informação</span>
                </a>
              </li>
              
              <li>
                <a href="#" className="text-muted hover:text-mint transition-colors flex items-start gap-3 group">
                  <div className="w-5 flex justify-center mt-0.5 shrink-0">
                    <i className="fa-solid fa-user-lock text-sienna group-hover:text-mint transition-colors"></i>
                  </div>
                  <span className="leading-tight">Aviso de Privacidade Candidatos de Vagas</span>
                </a>
              </li>

              <li>
                <a href="#" className="text-muted hover:text-mint transition-colors flex items-start gap-3 group">
                  <div className="w-5 flex justify-center mt-0.5 shrink-0">
                     <i className="fa-solid fa-file-contract text-sienna group-hover:text-mint transition-colors"></i>
                  </div>
                  <span className="leading-tight">Política de Privacidade</span>
                </a>
              </li>

              <li>
                <a href="#" className="text-muted hover:text-mint transition-colors flex items-start gap-3 group">
                  <div className="w-5 flex justify-center mt-0.5 shrink-0">
                    <i className="fa-solid fa-bullhorn text-sienna group-hover:text-mint transition-colors"></i>
                  </div>
                  <span className="leading-tight">Termos para o Canal de Denúncia</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
          <p>© {new Date().getFullYear()} NetSecurity. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-eggshell transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-eggshell transition-colors">Mapa do Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;