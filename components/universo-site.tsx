'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, MessageCircle, X, Leaf, Sparkles } from 'lucide-react'

const whatsapp = 'https://wa.me/351965686663'
const nav = [{ label: 'Início', href: '#inicio' }, { label: 'Sobre', href: '#sobre' }, { label: 'Produtos', href: '#produtos' }, { label: 'Contactos', href: '#contactos' }]

function WhatsAppLink({ children, className = '', message, ariaLabel }: { children: React.ReactNode; className?: string; message?: string; ariaLabel?: string }) {
  const href = message ? `${whatsapp}?text=${encodeURIComponent(message)}` : whatsapp
  return <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel ?? (typeof children === 'string' ? children : 'Contactar pelo WhatsApp')}>{children}</a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><a className="brand" href="#inicio" aria-label="Universo Aloé Vera — início"><span className="brand-mark"><Leaf size={21} strokeWidth={1.5} /></span><span><strong>UNIVERSO</strong><small>ALOÉ VERA</small></span></a>
    <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <WhatsAppLink className="header-cta"><MessageCircle size={16} /> Falar pelo WhatsApp <ArrowUpRight size={15} /></WhatsAppLink>
    <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="mobile-nav" aria-label="Navegação móvel">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></a>)}<WhatsAppLink className="mobile-nav-cta">Falar pelo WhatsApp <ArrowUpRight size={16} /></WhatsAppLink></nav>}
  </header>
}

function Hero() {
  return <section className="hero" id="inicio"><Image src="/aloe-botanical.png" alt="Folhas de aloé vera numa composição botânica elegante" fill priority className="hero-image" sizes="100vw" /><div className="hero-shade" />
    <div className="hero-content"><p className="eyebrow light"><span /> UM CUIDADO MAIS NATURAL</p><h1>UNIVERSO<br /><em>ALOÉ VERA</em></h1><p className="hero-lede">Beleza e bem-estar<br />inspirados na natureza.</p><p className="hero-copy">Descubra uma seleção de produtos de Aloé Vera, beleza e cuidados pessoais para o seu dia a dia.</p><div className="hero-actions"><a className="button button-cream" href="#produtos">Explorar produtos <ArrowDown size={16} /></a><WhatsAppLink className="button button-ghost">Falar com o Nuno <ArrowUpRight size={16} /></WhatsAppLink></div></div>
    <div className="hero-note"><span>01 / 03</span><span className="note-line" /><span>Beleza. Natureza. Bem-estar.</span></div><div className="hero-stamp"><Leaf size={20} /><span>INSPIRADO<br />NA NATUREZA</span></div>
  </section>
}

function Intro() {
  return <section className="intro section-wrap" id="sobre"><div className="intro-image"><Image src="/aloe-botanical.png" alt="Detalhe das folhas de aloé vera" fill sizes="(max-width: 700px) 100vw, 42vw" /><div className="image-caption"><Leaf size={15} /> A simplicidade da natureza</div></div><div className="intro-copy"><p className="eyebrow"><span /> O UNIVERSO</p><h2>Bem-vindo ao<br /><em>Universo Aloé Vera</em></h2><p>No UNIVERSO ALOÉ VERA, encontra uma seleção de produtos de beleza, cuidados pessoais e bem-estar. O Nuno está disponível para apresentar os produtos e ajudar a esclarecer as suas dúvidas.</p><div className="intro-signoff"><span className="sign-line" /><span>Um cuidado de cada vez</span></div><WhatsAppLink className="text-link">Conheça-nos melhor <ArrowRight size={16} /></WhatsAppLink></div></section>
}

function Catalog() {
  return <section className="catalog" id="produtos"><div className="section-wrap catalog-inner"><div className="catalog-heading"><div><p className="eyebrow"><span /> A NOSSA SELEÇÃO</p><h2>Encontre o seu<br /><em>próximo essencial.</em></h2></div><p className="catalog-intro">Uma seleção pensada para os seus momentos de cuidado. Fale connosco para descobrir a oferta disponível.</p></div>
      <div className="catalog-note"><div className="catalog-note-icon"><Sparkles size={22} /></div><div><span className="note-kicker">CATÁLOGO EM PREPARAÇÃO</span><h3>Em breve, novidades por aqui.</h3><p>Estamos a preparar a apresentação dos produtos. Entre em contacto com o Nuno para conhecer a seleção disponível e receber informações personalizadas.</p><WhatsAppLink className="text-link" message="Olá, Nuno! Gostaria de conhecer os produtos disponíveis no UNIVERSO ALOÉ VERA.">Pedir informações sobre os produtos <ArrowRight size={16} /></WhatsAppLink></div><div className="catalog-leaf" aria-hidden="true"><Leaf /></div></div>
      <p className="catalog-footnote">Os produtos e respetivos detalhes serão apresentados assim que o catálogo estiver disponível.</p>
    </div></section>
}

function Contact() {
  return <section className="contact" id="contactos"><div className="contact-orb" aria-hidden="true"><Leaf /></div><div className="contact-inner"><p className="eyebrow light"><span /> ESTAMOS POR AQUI</p><h2>O próximo passo<br />começa com <em>uma conversa.</em></h2><p>Gostaria de saber mais sobre os nossos produtos? Entre em contacto com o Nuno para conhecer os produtos disponíveis, esclarecer dúvidas ou pedir informações sobre encomendas.</p><WhatsAppLink className="button button-cream"><MessageCircle size={17} /> Contactar pelo WhatsApp <ArrowUpRight size={16} /></WhatsAppLink><a className="contact-number" href={whatsapp} target="_blank" rel="noreferrer">+351 965 686 663</a></div><div className="contact-aside">RESPOSTA DIRECTA<br />PELO WHATSAPP</div></section>
}

function Footer() {
  return <footer className="footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Leaf size={21} strokeWidth={1.5} /></span><span><strong>UNIVERSO</strong><small>ALOÉ VERA</small></span></a><p>Beleza, cuidados pessoais e bem-estar.</p><nav aria-label="Links do rodapé">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><span className="copyright">© {new Date().getFullYear()} UNIVERSO ALOÉ VERA</span></footer>
}

export default function UniversoSite() {
  return <><Header /><main><Hero /><div className="intro-kicker"><span>RAÍZES NATURAIS</span><span>·</span><span>CUIDADO CONSCIENTE</span><span>·</span><span>BELEZA AUTÊNTICA</span></div><Intro /><Catalog /><Contact /></main><Footer /><WhatsAppLink className="whatsapp-float" ariaLabel="Falar pelo WhatsApp"><MessageCircle size={22} /><span>Fale connosco</span></WhatsAppLink></>
}
