"use client"

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const allPosts = [
  {
    id: 1,
    title: "O Futuro da Cibersegurança com IA Generativa",
    excerpt: "Como a inteligência artificial está redefinindo tanto as ameaças quanto as defesas no cenário global de TI.",
    category: "Tendências",
    date: "22 Out, 2025",
    readTime: "5 min",
    imageIcon: "fa-robot",
    featured: true
  },
  {
    id: 2,
    title: "Ransomware 3.0: Novas táticas de extorsão",
    excerpt: "Analise as mudanças nas estratégias dos cibercriminosos e saiba como blindar sua empresa.",
    category: "Ameaças",
    date: "18 Out, 2025",
    readTime: "8 min",
    imageIcon: "fa-virus",
    featured: false
  },
  {
    id: 3,
    title: "NetSecurity recebe certificação ISO 27001",
    excerpt: "Um marco importante que reforça nosso compromisso com a excelência e segurança da informação.",
    category: "Institucional",
    date: "15 Out, 2025",
    readTime: "3 min",
    imageIcon: "fa-award",
    featured: false
  },
  {
    id: 4,
    title: "Guia Definitivo: Zero Trust na Prática",
    excerpt: "Passo a passo para implementar a arquitetura de Confiança Zero sem paralisar sua operação.",
    category: "Tutoriais",
    date: "10 Out, 2025",
    readTime: "12 min",
    imageIcon: "fa-shield-cat",
    featured: false
  },
  {
    id: 5,
    title: "Vulnerabilidades em APIs: O novo alvo",
    excerpt: "Por que as APIs se tornaram o vetor de ataque favorito e como protegê-las.",
    category: "Ameaças",
    date: "05 Out, 2025",
    readTime: "6 min",
    imageIcon: "fa-code-branch",
    featured: false
  },
  {
    id: 6,
    title: "Cultura de Segurança: O fator humano",
    excerpt: "Treinamento e conscientização continuam sendo a melhor defesa contra engenharia social.",
    category: "Gestão",
    date: "01 Out, 2025",
    readTime: "4 min",
    imageIcon: "fa-users-viewfinder",
    featured: false
  },
];

const categories = ["Todos", "Tendências", "Ameaças", "Tutoriais", "Institucional", "Gestão"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  return (
    <main className="min-h-screen pt-32 bg-coal text-eggshell selection:bg-sienna selection:text-white">
      
      <section className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <span className="text-sienna font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Hub</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights de Cibersegurança</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Notícias, análises técnicas e tendências de mercado para manter sua empresa um passo à frente das ameaças.
          </p>
        </ScrollReveal>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6">
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap
                  ${activeCategory === cat 
                    ? 'bg-sienna text-white shadow-[0_0_15px_rgba(221,110,66,0.4)]' 
                    : 'bg-oxford/50 text-muted hover:bg-oxford hover:text-eggshell'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Buscar artigos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-oxford/50 border border-white/10 rounded-lg px-4 py-3 pl-10 text-sm focus:outline-none focus:border-sienna/50 transition-colors"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-muted"></i>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        
        {featuredPost && (
          <ScrollReveal className="mb-16">
            <div className="group glass-card p-0 grid md:grid-cols-2 overflow-hidden cursor-pointer hover:shadow-[0_0_40px_rgba(221,110,66,0.15)] transition-all duration-500">
              <div className="h-64 md:h-auto bg-oxford relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-coal/80 to-transparent z-10"></div>
                <div className="w-full h-full bg-oxford group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <i className={`fa-solid ${featuredPost.imageIcon} text-9xl text-white/10`}></i>
                </div>
                <span className="absolute top-6 left-6 z-20 bg-mint text-coal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Destaque
                </span>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted mb-4">
                  <span className="text-sienna font-bold uppercase tracking-wide">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} leitura</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-sienna transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <span className="text-sienna font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Ler artigo completo <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {regularPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <ScrollReveal key={post.id} className="group cursor-pointer glass-card p-0 overflow-hidden flex flex-col h-full hover:-translate-y-2">
                <div className="h-48 bg-oxford relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/90 to-transparent z-10"></div>
                  <div className="w-full h-full bg-oxford group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
                    <i className={`fa-solid ${post.imageIcon} text-6xl text-white/10`}></i>
                  </div>
                  <span className="absolute top-4 left-4 z-20 bg-oxford/90 border border-white/10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sienna transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-sienna text-sm font-bold flex items-center gap-2 mt-auto">
                    Ler mais <i className="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 opacity-50">
            <i className="fa-regular fa-folder-open text-6xl mb-4 text-muted"></i>
            <p className="text-xl">Nenhum artigo encontrado para esta busca.</p>
          </div>
        )}

        {regularPosts.length > 0 && (
            <div className="mt-16 text-center">
                <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 hover:border-sienna hover:text-sienna transition-all text-sm font-bold tracking-wide">
                    CARREGAR MAIS ARTIGOS
                </button>
            </div>
        )}
      </div>

      <section className="mt-32 border-t border-white/5 pt-20 pb-40 mb-10">
         <div className="max-w-[1000px] mx-auto px-6">
            <div className="rounded-3xl bg-oxford/50 border border-white/5 p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sienna via-mint to-sienna opacity-50"></div>
                <h2 className="text-3xl font-bold mb-4 text-eggshell">Conteúdo exclusivo semanalmente</h2>
                <p className="text-muted mb-8 max-w-xl mx-auto">Junte-se a mais de 5.000 profissionais de segurança que recebem nossa curadoria de conteúdo.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                    type="email" 
                    placeholder="Seu e-mail corporativo" 
                    className="flex-1 px-6 py-3 rounded-lg bg-coal border border-white/10 text-eggshell focus:border-sienna/50 focus:outline-none"
                    />
                    <button className="px-6 py-3 bg-sienna text-white font-bold rounded-lg hover:bg-sienna/90 transition-all shadow-lg hover:shadow-sienna/30">
                        Inscrever-se
                    </button>
                </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}