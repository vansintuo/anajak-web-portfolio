'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  ['01', 'Home', '#home'],
  ['02', 'Products', '#products'],
  ['03', 'Solutions', '#solutions'],
  ['04', 'Contact Us', '#contact'],
]

const products = [
  { number: '01', name: 'Asphalt Paver', desc: 'Precision paving for consistent, high-performance road surfaces.', image: 'https://images.unsplash.com/photo-1590644365607-1c5a8e8e1f4b?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', name: 'Road Roller', desc: 'Intelligent compaction equipment for resilient infrastructure.', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', name: 'Rubber Processing Unit', desc: 'Turn end-of-life rubber into valuable road construction material.', image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85' },
  { number: '04', name: 'Asphalt Mixing Plant', desc: 'Controlled, reliable production of modified asphalt mixtures.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85' },
]

const solutions = [
  ['01', 'Rubber Road Technology', 'Engineered rubber-modified materials that improve flexibility, reduce noise and extend road life.'],
  ['02', 'Road Construction', 'From site preparation to final compaction, we bring precision and control to every layer.'],
  ['03', 'Rubber Recycling', 'A closed-loop approach that transforms discarded tires into high-value infrastructure inputs.'],
  ['04', 'Road Rehabilitation', 'Smarter resurfacing and maintenance systems for roads that perform for longer.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map(([, , href]) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[]

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35
      let currentSection = sections[0]?.id ?? 'home'

      for (const section of sections) {
        if (section.offsetTop <= marker) currentSection = section.id
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div className="site-shell">
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
        <div className="sidebar-top">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><i /><i /><i /></span>
            <span>RUBBER<br /><b>ROAD</b></span>
          </a>
          <button className="mobile-close" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X /></button>
        </div>
        <div className="nav-label">Navigation</div>
        <nav aria-label="Main navigation">
          {navItems.map(([num, label, href]) => <a key={href} href={href} className={activeSection === href.slice(1) ? 'active' : ''} aria-current={activeSection === href.slice(1) ? 'page' : undefined} onClick={() => { setActiveSection(href.slice(1)); setMenuOpen(false) }}><span>{num}</span>{label}<ArrowUpRight /></a>)}
        </nav>
        <div className="sidebar-bottom">
          <div className="side-line" />
          <p>BUILDING<br />BETTER ROADS</p>
          <span>Engineering sustainable infrastructure through advanced rubber road technology.</span>
          <div className="side-coords">11°33&apos; N &nbsp; 104°55&apos; E</div>
        </div>
      </aside>

      <button className="mobile-menu" aria-label="Open navigation" onClick={() => setMenuOpen(true)}><Menu /></button>
      <main className="content">
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="eyebrow light">RUBBER ROAD TECHNOLOGY <span>— 01 / 04</span></p>
            <h1>Engineering<br />the <em>roads</em><br />of tomorrow.</h1>
            <p className="hero-lede">Advanced rubber road technology and infrastructure solutions designed for stronger, more durable and sustainable roads.</p>
            <div className="hero-actions"><a href="#solutions" className="button button-light">Explore solutions <ArrowDownRight /></a><a href="#products" className="text-link light">Our products <ArrowUpRight /></a></div>
          </div>
          <div className="hero-meta"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>EST. 2014</span></div>
        </section>

        <section className="intro section-pad">
          <div className="section-kicker"><span>02</span><span>Our approach</span></div>
          <div className="intro-grid">
            <div><h2>From rubber<br />to <em>road</em><br />infrastructure.</h2></div>
            <div className="intro-text"><p className="large-copy">We combine rubber technology, engineering expertise and modern construction equipment to create infrastructure that is made to last.</p><p>Every road is a system. From the material beneath the surface to the machine that lays it down, we design and deliver the details that make performance possible.</p><a href="#solutions" className="text-link">How we work <ArrowUpRight /></a></div>
            <div className="material-image"><span>01 / MATERIAL STUDY</span></div>
          </div>
        </section>

        <section className="stats"><div className="stats-inner">{[['10+', 'Years experience'], ['50+', 'Road projects'], ['100K+', 'Materials processed'], ['20+', 'Construction machines']].map(([n, l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

        <section className="technology section-pad"><div className="section-kicker"><span>03</span><span>The process</span></div><div className="tech-heading"><h2>How we build<br /><em>better roads.</em></h2><p>A considered process, from the first recovered tire to the final quality check.</p></div><div className="process">{['Rubber collection', 'Material processing', 'Rubber modification', 'Road construction', 'Quality testing', 'Completed infrastructure'].map((item, i) => <div className="process-step" key={item}><span>0{i + 1}</span><div className="process-dot" /><p>{item}</p></div>)}</div></section>

        <section id="products" className="products section-pad"><div className="section-kicker"><span>04</span><span>Equipment division</span></div><div className="products-head"><h2>Machinery for<br /><em>modern</em> road construction.</h2><a href="#contact" className="text-link">View catalogue <ArrowUpRight /></a></div><div className="product-grid">{products.map((product, i) => <article className={`product-card product-${i + 1}`} key={product.name}><div className="product-image" style={{ backgroundImage: `url(${product.image})` }} /><div className="product-info"><span>{product.number}</span><div><h3>{product.name}</h3><p>{product.desc}</p><a href="#contact">View details <ArrowUpRight /></a></div></div></article>)}</div></section>

        <section id="solutions" className="solutions"><div className="section-pad"><div className="section-kicker light"><span>05</span><span>Capabilities</span></div><h2>Complete road infrastructure<br /><em>from material to finished road.</em></h2></div><div className="solution-list">{solutions.map(([num, title, text], i) => <article className={`solution-card solution-card-${i + 1}`} key={num}><div className="solution-card-top"><span className="solution-num">{num}</span><span className="solution-label">ROAD SYSTEM / 0{i + 1}</span></div><div className="solution-road-visual"><span /><span /><span /></div><div className="solution-card-body"><div><h3>{title}</h3><p>{text}</p></div><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight /></a></div></article>)}</div><div className="road-strip"><span>PLANNING</span><i /><span>MATERIAL</span><i /><span>PAVING</span><i /><span>COMPACTION</span><i /><span>QUALITY CONTROL</span><i /><span>COMPLETED ROAD</span></div></section>

        <section id="contact" className="contact section-pad"><div className="section-kicker"><span>06</span><span>Start a conversation</span></div><div className="contact-grid"><div><h2>Let&apos;s build<br /><em>better roads.</em></h2><p className="large-copy">Talk with our engineering team about your next infrastructure project.</p><div className="contact-details"><p><span>HEAD OFFICE</span>Phnom Penh, Cambodia</p><p><span>EMAIL</span>info@rubberroad.com</p><p><span>PHONE</span>+855 23 555 014</p></div></div><form onSubmit={(e) => { e.preventDefault(); setSent(true) }}><label>Full name<input required placeholder="Your name" /></label><label>Company<input placeholder="Company name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>Project type<select defaultValue=""><option value="" disabled>Select project type</option><option>Rubber road technology</option><option>Road construction</option><option>Machinery</option><option>Other</option></select></label><label className="message-field">Message<textarea required placeholder="Tell us about your project" rows={3} /></label><button className="button button-dark" type="submit">{sent ? 'Inquiry sent' : 'Send inquiry'} <ArrowUpRight /></button></form></div></section>
        <footer>
          <div className="footer-top"><a href="#home" className="footer-brand"><span className="brand-mark"><i /><i /><i /></span><span>RUBBER<br /><b>ROAD</b></span></a><p>Engineering the future of road infrastructure through advanced rubber technology.</p><a href="#home" className="footer-back">Back to top <ArrowUpRight /></a></div>
          <div className="footer-bottom"><span>RUBBER ROAD / ENGINEERING THE FUTURE</span><span>© 2024 Rubber Road Technology</span><span>Phnom Penh, Cambodia</span></div>
        </footer>
      </main>
    </div>
  )
}
