"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-coal/95 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' 
          : 'bg-gradient-to-b from-black/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
          <div className="relative h-8 w-8 md:h-10 md:w-10">
              <Image 
                  src="/assets/img/logo.png" 
                  alt="NetSecurity" 
                  fill
                  className="object-contain group-hover:opacity-80 transition-opacity" 
              />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wide text-eggshell group-hover:text-sienna transition-colors">
            NetSecurity
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-[13px] xl:text-sm font-semibold tracking-wide text-eggshell">
          
          <Link href="/#quem-somos" className="hover:text-sienna transition-colors whitespace-nowrap">
            Quem Somos
          </Link>
          
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-sienna transition-colors py-4">
            Soluções
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="w-60 bg-oxford border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col p-2">
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Serviços Gerenciados</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Consultoria Estratégica</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Integração de Tecnologia</a>
              </div>
            </div>
          </div>

          <Link href="/#parceiros" className="hover:text-sienna transition-colors whitespace-nowrap">
            Parceiros
          </Link>

          <Link href="/blog" className="hover:text-sienna transition-colors whitespace-nowrap">
            Blog
          </Link>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-sienna transition-colors py-4 whitespace-nowrap">
            Materiais Ricos
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="w-48 bg-oxford border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col p-2">
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Ebooks</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Webinars</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Whitepapers</a>
              </div>
            </div>
          </div>

          <Link href="/#cases" className="hover:text-sienna transition-colors whitespace-nowrap">
            Cases
          </Link>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-sienna transition-colors py-4 whitespace-nowrap">
            Transparência
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="w-72 bg-oxford border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col p-2">
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium border-b border-white/5">Política de Segurança</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium border-b border-white/5">Aviso de Privacidade</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium border-b border-white/5">Política de Privacidade</a>
                <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm font-medium">Canal de Denúncia</a>
              </div>
            </div>
          </div>

          <Link href="/#carreiras" className="hover:text-sienna transition-colors whitespace-nowrap">
            Carreiras
          </Link>

          <Link href="/#contato" className="ml-2 px-5 py-2 bg-sienna text-white rounded-lg hover:bg-sienna/90 transition-all shadow-lg hover:shadow-sienna/30 hover:-translate-y-0.5 whitespace-nowrap">
            Contato
          </Link>
        </nav>

        <button className="lg:hidden text-white p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

      </div>
    </header>
  );
};

export default Header;