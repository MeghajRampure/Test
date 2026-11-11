import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, Menu, X, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import './styles.css';

const services = [
  ['01', 'Deep clean reset', 'A meticulous room-by-room refresh for the spaces that support your daily life.'],
  ['02', 'Move-in detailing', 'Begin beautifully. We prepare every surface before the first box comes through the door.'],
  ['03', 'Seasonal care', 'A considered quarterly service that keeps your home quietly immaculate.']
];

function App() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const scroll = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  return <>
    <header className="nav">
      <button className="brand" onClick={() => scroll('top')} aria-label="Luma home"><span>luma</span><i>interiors</i></button>
      <nav className={menu ? 'open' : ''}>
        <button onClick={() => scroll('services')}>Services</button><button onClick={() => scroll('approach')}>Our approach</button><button onClick={() => scroll('contact')}>Contact</button>
      </nav>
      <button className="nav-cta" onClick={() => scroll('contact')}>Book a detail <ArrowUpRight size={16}/></button>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span/> Interior detailing, thoughtfully done</p><h1>A home that<br/><em>feels</em> like you.</h1><p className="intro">We restore the calm in your everyday spaces with detail-led home care, designed around the way you live.</p><button className="primary" onClick={() => scroll('contact')}>Start your home reset <ArrowUpRight size={18}/></button></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85" alt="Warm, carefully styled living room"/><div className="stamp"><Sparkles size={20}/><span>Thoughtful<br/>home care</span></div></div>
        <div className="hero-note"><span>Serving Denver & surrounding communities</span><span>01 — 04</span></div>
      </section>

      <section className="services section" id="services"><div className="section-top"><p className="eyebrow"><span/> What we do</p><p>More than clean. Each service is a reset for the way your home holds you.</p></div><div className="service-list">{services.map(([n,title,desc]) => <article className="service" key={n}><span className="number">{n}</span><div><h2>{title}</h2><p>{desc}</p></div><button onClick={() => scroll('contact')} aria-label={`Enquire about ${title}`}><ArrowUpRight/></button></article>)}</div></section>

      <section className="feature" id="approach"><div className="feature-image"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Sunlit kitchen counter"/></div><div className="feature-copy"><p className="eyebrow"><span/> The Luma difference</p><h2>Care lives<br/>in the details.</h2><p>Our team pairs a discerning eye with a gentle, low-tox approach. The result is more than a polished room—it’s a home that feels lighter to come back to.</p><ul><li><Check size={17}/> Trusted, consistent specialists</li><li><Check size={17}/> Products selected for your surfaces</li><li><Check size={17}/> Clear, considered communication</li></ul><button className="text-link" onClick={() => scroll('contact')}>Discover our process <ArrowUpRight size={17}/></button></div></section>

      <section className="quote"><p className="eyebrow"><span/> Kind words</p><blockquote>“Luma gave us back the feeling of walking into a home we love.”</blockquote><p className="attribution">— Naomi R., Cherry Creek</p></section>

      <section className="contact" id="contact"><div><p className="eyebrow"><span/> Begin here</p><h2>Your home,<br/><em>at ease.</em></h2><p>Tell us a little about your space and we’ll be in touch within one business day.</p><div className="details"><a href="tel:+13035550184"><Phone size={17}/> (303) 555-0184</a><a href="mailto:hello@lumahome.co"><Mail size={17}/> hello@lumahome.co</a><span><MapPin size={17}/> Denver, Colorado</span></div></div><form onSubmit={(e) => {e.preventDefault(); setSent(true)}}>{sent ? <div className="sent"><Sparkles/><h3>Thank you.</h3><p>We’ll be in touch shortly to learn more about your home.</p></div> : <><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Deep clean reset</option><option>Move-in detailing</option><option>Seasonal care</option></select></label><button className="primary submit" type="submit">Send inquiry <ArrowUpRight size={18}/></button></>}</form></section>
    </main>
    <footer><div className="brand"><span>luma</span><i>interiors</i></div><p>© 2026 Luma Interiors</p><a href="#top">Back to top ↑</a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
