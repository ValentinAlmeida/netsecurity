"use client"

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-6 bg-gradient-to-b from-black/90 to-transparent text-eggshell transition-all duration-300">
      
      <Link href="/" className="flex items-center gap-3 cursor-pointer group">
        <img 
            src="/assets/img/logo.png" 
            alt="NetSecurity" 
            className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity" 
        />
        <span className="text-2xl font-bold tracking-wide text-eggshell group-hover:text-sienna transition-colors">NetSecurity</span>
      </Link>

      <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
        <Link href="/#quem-somos" className="hover:text-sienna transition-colors">
          Quem Somos
        </Link>
        
        <div className="group relative flex items-center gap-1 cursor-pointer hover:text-sienna transition-colors py-4">
          Soluções
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-60 bg-oxford border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col p-2">
              <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm normal-case font-medium">Serviços Gerenciados</a>
              <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm normal-case font-medium">Consultoria Estratégica</a>
              <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm normal-case font-medium">Integração de Tecnologia</a>
            </div>
          </div>
        </div>

        <Link href="/#parceiros" className="hover:text-sienna transition-colors">
          Parceiros
        </Link>

        <Link href="/blog" className="hover:text-sienna transition-colors">
          Blog
        </Link>

        <div className="group relative flex items-center gap-1 cursor-pointer hover:text-sienna transition-colors py-4">
          Materiais Ricos
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-48 bg-oxford border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col p-2">
              <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm normal-case font-medium">Ebooks</a>
              <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm normal-case font-medium">Webinars</a>
              <a href="#" className="px-4 py-3 hover:bg-white/5 hover:text-sienna rounded-lg transition-colors text-sm normal-case font-medium">Whitepapers</a>
            </div>
          </div>
        </div>

        <Link href="/#cases" className="hover:text-sienna transition-colors">
          Cases
        </Link>

        <Link href="/#transparencia" className="hover:text-sienna transition-colors">
          Transparência
        </Link>

        <Link href="/#carreiras" className="hover:text-sienna transition-colors">
          Carreiras
        </Link>

        <Link href="/#contato" className="ml-4 px-6 py-2.5 bg-sienna text-white rounded-lg hover:bg-sienna/90 transition-all shadow-lg hover:shadow-sienna/30 hover:-translate-y-0.5">
          Contato
        </Link>
      </nav>

      <button className="lg:hidden text-white p-2">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </header>
  );
};

export default Header;