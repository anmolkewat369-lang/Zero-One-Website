import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, CircleHelp, Clock3, Code2, Coffee, Flower2, Globe2, HeartPulse, MapPin, MonitorSmartphone, Palette, ShoppingBag, Sparkles, Users, Dumbbell, Hotel, Wrench, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MobileNav, ScrollReveal } from "@/components/site-interactions";
import { Logo } from "@/components/logo";

const categories = [
  { name: "Restaurants & cafés", icon: Coffee },
  { name: "Salons & beauty", icon: Flower2 },
  { name: "Clinics & healthcare", icon: HeartPulse },
  { name: "Fitness & gyms", icon: Dumbbell },
  { name: "Hotels & hospitality", icon: Hotel },
  { name: "Retail & local shops", icon: ShoppingBag },
  { name: "Professional services", icon: BriefcaseBusiness },
  { name: "And more", icon: CircleHelp },
];

const services = [
  { n: "01", icon: Palette, title: "Website design", copy: "A clear, considered look that fits your business and makes the next step obvious." },
  { n: "02", icon: Code2, title: "Website development", copy: "Responsive, fast websites built to work smoothly across phones, tablets and desktops." },
  { n: "03", icon: Zap, title: "Business integrations", copy: "Useful connections like enquiry forms, WhatsApp, maps, bookings and galleries." },
  { n: "04", icon: Wrench, title: "Ongoing support", copy: "A team to call on for updates, improvements and help after your site goes live." },
];

const principles = [
  { icon: Users, title: "Business-first", copy: "We begin with your business, your customers and what a website needs to do for you." },
  { icon: MonitorSmartphone, title: "Made for mobile", copy: "A thoughtful experience on the phone your customers already use every day." },
  { icon: Zap, title: "Fast by design", copy: "Lightweight pages and careful implementation help keep the experience quick." },
  { icon: Globe2, title: "Ready to grow", copy: "Start with what you need now, with room to add more as your business evolves." },
];

const steps = [
  { n: "01", title: "Discover", copy: "We learn about your business, your customers and what you want to achieve." },
  { n: "02", title: "Design", copy: "We shape a clear visual direction and a useful structure for your content." },
  { n: "03", title: "Develop", copy: "We build the site, check it across screen sizes and refine the details together." },
  { n: "04", title: "Launch", copy: "We help get your website online and stay available for the next improvements." },
];

const team = [
  { n: "01", name: "Anmol Kewat", role: "Web Development", initials: "AK", tone: "blue" },
  { n: "02", name: "Akshay Namdeo", role: "Web Development", initials: "AN", tone: "violet" },
  { n: "03", name: "Aashpi Yadav", role: "Business & Client Relations", initials: "AY", tone: "peach" },
  { n: "04", name: "Aashi Koshta", role: "Business & Client Relations", initials: "AK", tone: "mint" },
];

function SectionLabel({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span>; }

function WebsitePreview() {
  return (
    <div className="hero-preview" aria-hidden="true">
      <div className="preview-glow" />
      <div className="browser-window">
        <div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><div className="browser-address"><span>✳</span> website preview</div><div className="browser-menu">···</div></div>
        <div className="demo-site">
          <div className="demo-nav"><div className="demo-brand"><span>✳</span><b>YOUR BUSINESS</b></div><div className="demo-links"><i /><i /><i /></div><div className="demo-nav-cta" /></div>
          <div className="demo-content">
            <div className="demo-copy"><span className="demo-kicker" /><div className="demo-heading"><i /><i /><i /></div><div className="demo-paragraph"><i /><i /><i /></div><div className="demo-action"><span /><ArrowRight size={13} /></div><div className="demo-proof"><span /><i /><i /></div></div>
            <div className="demo-photo"><div className="demo-sun"/><div className="demo-leaf leaf-a"/><div className="demo-leaf leaf-b"/><div className="demo-table"/><div className="demo-vase"/><div className="demo-photo-stamp">Made for<br/>your business</div></div>
          </div>
          <div className="demo-bottom"><span /><span /><span /><span /></div>
        </div>
      </div>
      <div className="phone-window"><div className="phone-notch"/><div className="phone-screen"><div className="phone-head"><span>✳</span><i /></div><div className="phone-image"><div className="demo-sun"/><div className="demo-leaf leaf-a"/><div className="demo-leaf leaf-b"/></div><div className="phone-lines"><i/><i/><i/><i/></div><div className="phone-button"/></div></div>
      <div className="preview-note"><span className="note-mark"><Check size={14}/></span><span><b>Designed around your business</b><small>Clear on every screen</small></span></div>
      <div className="hero-index">01 <span>—</span> 04</div>
    </div>
  );
}

function MiniSiteCard() {
  return <div className="work-visual work-project-image"><Image src="/images/projects/zeroonecopy.png" alt="Zero One website homepage" fill sizes="(max-width: 760px) calc(100vw - 3rem), (max-width: 1050px) 50vw, 44vw" unoptimized/></div>;
}

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zero One",
    description: "A web design and development team building modern websites for local businesses.",
    address: { "@type": "PostalAddress", addressLocality: "Jabalpur", addressCountry: "IN" },
    areaServed: ["India", "Worldwide"],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <header className="site-header"><div className="container header-inner"><a href="#home" aria-label="Zero One home"><Logo /></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a></nav><a className="header-cta" href="#contact">Start a project <ArrowRight size={15}/></a><MobileNav /></div></header>
      <main id="main-content">
        <section className="hero" id="home"><div className="hero-grid"/><div className="container hero-inner"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-dot"/> WEB DESIGN & DEVELOPMENT <span className="kicker-line"/></div><h1>Websites that help local businesses <span>grow.</span></h1><p className="hero-description">Zero One designs and develops fast, modern websites that help businesses look professional, reach customers and turn visitors into enquiries.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <ArrowRight size={17}/></a><a className="hero-text-link" href="#work">View our work <ArrowDownRight size={16}/></a></div><div className="hero-location"><MapPin size={15}/><span>Based in Jabalpur</span><i/> <span>Working across India & beyond</span></div></div><WebsitePreview /></div><div className="hero-bottom container"><div className="scroll-cue"><span className="scroll-cue-line"/> SCROLL TO EXPLORE</div><span className="hero-bottom-right">Thoughtful websites. Built around your business.</span></div></section>

        <section className="categories section-pad"><div className="container"><ScrollReveal><div className="section-head split-head"><div><SectionLabel>Built for</SectionLabel><h2 className="section-title">Businesses of <span className="title-blue">all kinds.</span></h2></div><p className="section-copy">From restaurants to clinics, we build websites for local businesses across different industries.</p></div></ScrollReveal><div className="category-grid">{categories.map(({ name, icon: Icon }, i) => <ScrollReveal key={name} delay={i * 0.04}><div className="category-card"><span className="category-icon"><Icon size={19} strokeWidth={1.7}/></span><span>{name}</span><ArrowUpRight className="category-arrow" size={15}/></div></ScrollReveal>)}</div></div></section>

        <section className="work-section section-pad" id="work"><div className="container"><ScrollReveal><div className="section-head split-head"><div><SectionLabel>Our work</SectionLabel><h2 className="section-title">Selected <span className="title-blue">projects.</span></h2></div><p className="section-copy">A look at real projects, including our own internal website.</p></div></ScrollReveal><ScrollReveal><article className="featured-work"><MiniSiteCard/><div className="work-details"><div className="work-meta"><span className="status-dot"/> INTERNAL PROJECT <span className="meta-divider">/</span> IN PROGRESS</div><h3>Zero One Website</h3><span className="work-project-category">Web Design &amp; Development</span><p>Our own website, designed and developed by the Zero One team.</p><div className="work-tags"><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span></div><a href="#contact" className="work-link">Talk to us about your website <ArrowRight size={16}/></a></div></article></ScrollReveal><div className="work-footnote"><Sparkles size={16}/><p>We’re developing our first self-initiated concepts now. They’ll appear here with clear labels as they’re ready.</p></div></div></section>

        <section className="services-section section-pad" id="services"><div className="container"><ScrollReveal><div className="services-intro"><div><SectionLabel>Our services</SectionLabel><h2 className="section-title">Everything you need for a <span className="title-blue">strong online presence.</span></h2></div><div className="services-description"><p className="section-copy">We handle the technical side, so you can focus on what you do best — running your business.</p><a className="text-arrow" href="#contact">Get a quote <ArrowRight size={16}/></a></div></div></ScrollReveal><div className="service-grid">{services.map(({ n, icon: Icon, title, copy }, i) => <ScrollReveal key={n} delay={i * 0.06}><article className="service-card"><div className="service-card-top"><span>{n}</span><Icon size={20} strokeWidth={1.6}/></div><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={17}/></a></article></ScrollReveal>)}</div></div></section>

        <section className="why-section section-pad" id="about"><div className="container why-layout"><ScrollReveal><div className="why-copy"><SectionLabel>Why Zero One</SectionLabel><h2 className="section-title">A website should do more than <span className="title-blue">look good.</span></h2><p className="section-copy">It should help people understand what you do and make it easy to take the next step. That is what we keep in mind at every stage.</p><a className="text-arrow" href="#process">How we work <ArrowRight size={16}/></a></div></ScrollReveal><div className="principle-grid">{principles.map(({ icon: Icon, title, copy }, i) => <ScrollReveal key={title} delay={i * .05}><article className="principle-card"><div className="principle-icon"><Icon size={19} strokeWidth={1.7}/></div><h3>{title}</h3><p>{copy}</p></article></ScrollReveal>)}</div></div></section>

        <section className="process-section section-pad" id="process"><div className="container"><ScrollReveal><div className="section-head split-head process-head"><div><SectionLabel>Our process</SectionLabel><h2 className="section-title">Simple. Transparent. <span className="title-blue">Focused.</span></h2></div><p className="section-copy">You’ll know what comes next, from the first conversation through launch.</p></div></ScrollReveal><div className="process-grid">{steps.map(({ n, title, copy }, i) => <ScrollReveal key={n} delay={i * .07}><article className="process-card"><div className="process-top"><span>{n}</span><div className="process-track"><i style={{ width: `${(i + 1) * 25}%` }}/></div></div><h3>{title}</h3><p>{copy}</p><span className="process-index">STEP {n}</span></article></ScrollReveal>)}</div></div></section>

        <section className="team-section section-pad"><div className="team-orbit" aria-hidden="true">01</div><div className="container team-container"><ScrollReveal><div className="team-heading"><SectionLabel>Meet the team</SectionLabel><h2 className="section-title">Four people.<br/><span>One team.</span></h2><p>We’re a small, focused team working across web development and client relationships.</p></div></ScrollReveal><div className="team-grid">{team.map((person, i) => <ScrollReveal key={person.n} delay={i * .06}><article className="team-card"><div className={`team-avatar avatar-${person.tone}`}><span>{person.initials}</span><small>{person.n}</small><div className="avatar-decoration"/></div><div className="team-person"><h3>{person.name}</h3><span>{person.role}</span></div></article></ScrollReveal>)}</div></div></section>

        <section className="contact-section section-pad" id="contact"><div className="container contact-container"><ScrollReveal><div className="contact-heading"><SectionLabel>Start a conversation</SectionLabel><h2>Have a business that needs a <span>website?</span></h2><p>Tell us what you have in mind. We’ll get back to you to talk through the next steps.</p><div className="contact-location"><MapPin size={16}/><span>Based in Jabalpur</span><i/> Working across India & beyond</div></div></ScrollReveal><ScrollReveal delay={.1}><div className="contact-panel"><div className="contact-panel-intro"><span>01 <i>—</i> LET’S TALK</span><p>Share a few details and we’ll be in touch.</p><div className="contact-promise"><Clock3 size={15}/> A real conversation, no pressure.</div></div><ContactForm/></div></ScrollReveal></div></section>
      </main>
      <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a href="#home"><Logo light/></a><p>Websites for local businesses.<br/>Based in Jabalpur, working everywhere.</p><span className="footer-location"><MapPin size={14}/> Jabalpur, India</span></div><div className="footer-nav-group"><div className="footer-nav-col"><span>Explore</span><a href="#work">Our work</a><a href="#services">Services</a><a href="#process">Process</a></div><div className="footer-nav-col"><span>Zero One</span><a href="#about">About the team</a><a href="#contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><div className="footer-note"><span>Have a project in mind?</span><a href="#contact">Let’s talk <ArrowUpRight size={15}/></a><small>Jabalpur · India · Remote</small></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Zero One. All rights reserved.</span><span>Made with care in Jabalpur <span className="footer-heart">♥</span></span></div></div></footer>
    </>
  );
}
