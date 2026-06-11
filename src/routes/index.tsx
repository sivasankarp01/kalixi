import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Sparkles, Code2, Smartphone, Palette, Megaphone, PenTool, Video, Bot,
  Zap, Rocket, Globe, Shield, TrendingUp, Headphones, DollarSign, Target,
  Check, ChevronDown, Mail, MapPin, Phone, Linkedin, Instagram, Facebook,
  Star, Quote, Calendar, Layers, Database, Cloud, Cpu, Brush, Layout, Sun, Moon, MessageCircle, X,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalixi Technologies — From Idea to Impact" },
      { name: "description", content: "UAE-based digital studio building modern websites, mobile apps, AI solutions, design and marketing that grow brands." },
      { property: "og:title", content: "Kalixi Technologies — From Idea to Impact" },
      { property: "og:description", content: "Web, Mobile, AI, Design & Marketing for ambitious brands." },
      { property: "og:image", content: heroImg },
      { rel: "canonical", href: "/" } as any,
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Tech />
        <Products />
        <Portfolio />
        <Process />
        <Team />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------------- Scroll Progress ---------------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{ scaleX, background: "var(--gradient-brand)" }}
    />
  );
}

/* ---------------- Theme Toggle ---------------- */
function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("kalixi-theme")) as "dark" | "light" | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);
  const toggle = () => {
    setTheme(t => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      try { localStorage.setItem("kalixi-theme", next); } catch {}
      return next;
    });
  };
  return { theme, toggle };
}
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 transition overflow-hidden"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {theme === "dark" ? <Sun className="h-4 w-4 text-accent" /> : <Moon className="h-4 w-4 text-primary" />}
      </motion.div>
    </button>
  );
}

/* ---------------- WhatsApp Floating Chat ---------------- */
function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const phone = "971500000000"; // replace with real number
  const message = encodeURIComponent("Hi Kalixi! I'd like to discuss a project.");
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <motion.div initial={{ opacity: 0, y: 12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.25 }}
          className="w-72 rounded-2xl glass shadow-[var(--shadow-elevated)] overflow-hidden">
          <div className="flex items-center gap-3 p-4" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Kalixi Support</div>
              <div className="text-xs text-white/80">Typically replies in minutes</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="ml-auto text-white/80 hover:text-white"><X className="h-4 w-4" /></button>
          </div>
          <div className="p-4 space-y-3">
            <div className="rounded-2xl bg-muted/60 p-3 text-sm">👋 Hi there! How can we help you today?</div>
            <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
              Start Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
      <motion.button
        onClick={() => setOpen(v => !v)}
        aria-label="WhatsApp chat"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[var(--shadow-glow)]"
        style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
      >
        <span className="absolute inset-0 rounded-full animate-pulse-glow" style={{ background: "rgba(37,211,102,0.5)", filter: "blur(14px)" }} />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.94 4.68 4.12.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.88.49 3.71 1.43 5.33L5.33 26.67l5.45-1.42a10.65 10.65 0 005.24 1.34h.01c5.9 0 10.69-4.79 10.69-10.69 0-2.85-1.11-5.54-3.13-7.56a10.61 10.61 0 00-7.56-3.13z"/>
        </svg>
      </motion.button>
    </div>
  );
}

/* ---------------- 3D Tilt wrapper ---------------- */
function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 180, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ---------------- Nav ---------------- */
const navLinks = [
  ["Home", "#home"], ["Services", "#services"], ["About", "#about"],
  ["Portfolio", "#portfolio"], ["Products", "#products"], ["Team", "#team"],
  ["Reviews", "#testimonials"], ["Blog", "#blog"], ["Contact", "#contact"],
] as const;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-elevated)]" : ""}`}>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">Kalixi</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-brand)" }}>
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass">
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-foreground" />
                <span className="block h-0.5 w-5 bg-foreground" />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 grid gap-1">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white" style={{ background: "var(--gradient-brand)" }}>
              Book Free Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Section helpers ---------------- */
function Section({ id, eyebrow, title, subtitle, children, className = "" }: {
  id?: string; eyebrow?: string; title?: string; subtitle?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center mb-16">
            {eyebrow && (
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                {eyebrow}
              </motion.div>
            )}
            {title && (
              <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 text-lg text-muted-foreground">
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-[900px]" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-brand)" }} />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> UAE based · AI-forward digital studio
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Transforming ideas into
            <span className="block text-gradient">powerful digital experiences.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            We build modern websites, mobile applications, digital marketing campaigns and creative solutions that help businesses grow faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-brand)" }}>
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition">
              View Portfolio
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {["Fast Delivery", "Scalable Solutions", "100% Client Focus", "Modern Technologies"].map(t => (
              <span key={t} className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent" />{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16 mx-auto max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
          <div className="relative rounded-3xl glass overflow-hidden shadow-[var(--shadow-elevated)]">
            <img src={heroImg} alt="Kalixi digital ecosystem" width={1920} height={1080} className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { duration: 1600, bounce: 0 });
  const display = useTransform(sv, v => Math.floor(v).toString() + suffix);
  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  return <motion.span ref={ref}>{display}</motion.span>;
}
function Stats() {
  const items = [
    { n: 50, s: "+", label: "Projects Delivered" },
    { n: 20, s: "+", label: "Happy Clients" },
    { n: 5, s: "+", label: "Countries Served" },
    { n: 100, s: "%", label: "Client Satisfaction" },
  ];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl glass p-6 sm:p-10">
          {items.map((it, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                <Counter to={it.n} suffix={it.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const journey = [
    { y: "2023", t: "Founded in UAE", d: "Kalixi opens its doors with a vision of premium digital craftsmanship." },
    { y: "2024", t: "Global Clients", d: "Expanded to 5 countries with web, mobile and marketing engagements." },
    { y: "2025", t: "AI Division", d: "Launched AI solutions practice — chatbots, automation, integrations." },
    { y: "2026", t: "Scaling Up", d: "50+ projects delivered, 100% client satisfaction." },
  ];
  return (
    <Section id="about" eyebrow="About Us" title="A studio built for ambitious brands"
      subtitle="Kalixi Technologies is a digital solutions company helping businesses build, scale and succeed through innovative technology, creative design and data-driven marketing.">
      <div className="grid lg:grid-cols-2 gap-8 mb-14">
        <div className="rounded-3xl glass p-8">
          <Rocket className="h-6 w-6 text-accent" />
          <h3 className="mt-3 text-xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-muted-foreground">Empower businesses through technology and innovation — turning ideas into measurable impact.</p>
        </div>
        <div className="rounded-3xl glass p-8">
          <Globe className="h-6 w-6 text-accent" />
          <h3 className="mt-3 text-xl font-semibold">Our Vision</h3>
          <p className="mt-2 text-muted-foreground">Become a globally trusted digital transformation partner for the next generation of brands.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-16">
        {["Innovation", "Quality", "Transparency", "Customer Success", "Continuous Learning"].map(v => (
          <div key={v} className="rounded-2xl glass px-5 py-4 text-center text-sm font-medium">{v}</div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-10">
          {journey.map((j, i) => (
            <motion.div key={j.y} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>div:first-child]:col-start-2" : ""}`}>
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                <div className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 mt-2 h-3 w-3 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                <div className="text-sm font-semibold text-accent">{j.y}</div>
                <h4 className="mt-1 text-lg font-semibold">{j.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{j.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { icon: Code2, t: "Web Development", items: ["Business Websites", "Corporate Sites", "E-Commerce Stores", "Web Applications", "Landing Pages"] },
  { icon: Smartphone, t: "Mobile App Development", items: ["Android Apps", "iOS Apps", "Flutter", "Cross-Platform", "App Maintenance"] },
  { icon: Layout, t: "UI / UX Design", items: ["Wireframes", "Prototypes", "User Experience", "Interface Design"] },
  { icon: Megaphone, t: "Digital Marketing", items: ["Instagram & TikTok", "Facebook & LinkedIn", "Social Management", "Lead Generation"] },
  { icon: PenTool, t: "Graphic Design", items: ["Logo Design", "Brand Identity", "Social Creatives", "Marketing Materials"] },
  { icon: Video, t: "Video Editing", items: ["Reels & Shorts", "Promotional Videos", "Motion Graphics"] },
  { icon: Bot, t: "AI Solutions", items: ["AI Chatbots", "Automation", "AI Integration", "Process Automation"] },
];
function Services() {
  return (
    <Section id="services" eyebrow="What We Do" title="Services that move the needle"
      subtitle="End-to-end digital capabilities — from a single landing page to a multi-platform product launch.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, t, items }, i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative rounded-3xl glass p-7 overflow-hidden hover:border-white/20 transition">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition" style={{ background: "var(--gradient-brand)" }} />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "var(--gradient-soft)" }}>
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {items.map(x => <li key={x} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent shrink-0" />{x}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-brand)" }}>
          Request a Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const items = [
    { i: Zap, t: "Modern Tech Stack", d: "Latest frameworks and tooling." },
    { i: Rocket, t: "Fast Development", d: "Ship in weeks, not months." },
    { i: Target, t: "SEO Friendly", d: "Built to be found and rank." },
    { i: Smartphone, t: "Mobile Optimized", d: "Pixel-perfect on every device." },
    { i: Layers, t: "Scalable Architecture", d: "From MVP to enterprise." },
    { i: Headphones, t: "Dedicated Support", d: "Real humans, real fast." },
    { i: DollarSign, t: "Affordable Pricing", d: "Premium quality, fair price." },
    { i: TrendingUp, t: "Growth Focused", d: "We measure what matters." },
  ];
  return (
    <Section id="why" eyebrow="Why Kalixi" title="Built differently. On purpose.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ i: Icon, t, d }) => (
          <div key={t} className="rounded-2xl glass p-6 hover:bg-white/5 transition">
            <Icon className="h-5 w-5 text-accent" />
            <h4 className="mt-3 font-semibold">{t}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Tech ---------------- */
function Tech() {
  const groups = [
    { i: Code2, name: "Frontend", items: ["React", "Next.js", "Flutter"] },
    { i: Cpu, name: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { i: Database, name: "Database", items: ["MongoDB", "PostgreSQL", "Firebase"] },
    { i: Cloud, name: "Cloud", items: ["AWS", "Google Cloud", "Vercel"] },
    { i: Brush, name: "Design", items: ["Figma", "Adobe Suite"] },
    { i: Bot, name: "AI", items: ["OpenAI", "Gemini", "Claude"] },
  ];
  return (
    <Section eyebrow="Stack" title="Tools we use to build the future">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(({ i: Icon, name, items }) => (
          <div key={name} className="rounded-2xl glass p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)" }}>
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h4 className="font-semibold">{name}</h4>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map(x => (
                <span key={x} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground">{x}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Products ---------------- */
function Products() {
  const products = [
    { t: "Worker Booking Platform", tags: ["Flutter", "Django", "Realtime"], d: "On-demand service marketplace with realtime booking & dispatch.", r: "30% faster bookings" },
    { t: "E-Commerce Platform", tags: ["React", "Node.js", "Stripe"], d: "Modern storefront with payments, inventory and analytics built in.", r: "2.4x conversion lift" },
    { t: "Business CRM", tags: ["Dashboard", "Analytics", "Automation"], d: "Sales pipeline, customer management and reporting in one place.", r: "Saves 12h / week" },
    { t: "AI Customer Support", tags: ["Chatbot", "Automation", "Leads"], d: "24/7 AI assistant capturing leads and resolving tickets automatically.", r: "65% auto-resolved" },
  ];
  return (
    <Section id="products" eyebrow="Products" title="Products & success stories"
      subtitle="A glimpse at what we've shipped — from booking marketplaces to AI support systems.">
      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <motion.div key={p.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-3xl glass p-7 flex flex-col">
            <div className="aspect-[16/9] rounded-2xl mb-5 relative overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-2xl font-bold text-white drop-shadow-lg">{p.t}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold">{p.t}</h3>
            <p className="mt-2 text-muted-foreground text-sm flex-1">{p.d}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => <span key={t} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs">{t}</span>)}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent font-medium">
              <TrendingUp className="h-4 w-4" />{p.r}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Portfolio ---------------- */
function Portfolio() {
  const items = [
    { cat: "Web", t: "Fintech Landing", g: "from-blue-500 to-purple-600", h: "h-72" },
    { cat: "Mobile", t: "Fitness App", g: "from-cyan-500 to-blue-600", h: "h-96" },
    { cat: "Branding", t: "Cafe Identity", g: "from-purple-500 to-pink-500", h: "h-64" },
    { cat: "Marketing", t: "Launch Campaign", g: "from-orange-500 to-red-500", h: "h-80" },
    { cat: "UI/UX", t: "Banking Dashboard", g: "from-emerald-500 to-cyan-600", h: "h-72" },
    { cat: "Web", t: "SaaS Platform", g: "from-indigo-500 to-purple-600", h: "h-64" },
  ];
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", "Web", "Mobile", "Branding", "Marketing", "UI/UX"];
  const filtered = filter === "All" ? items : items.filter(i => i.cat === filter);
  return (
    <Section id="portfolio" eyebrow="Selected Work" title="Recent projects we're proud of">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === c ? "text-white shadow-[var(--shadow-glow)]" : "glass text-muted-foreground hover:text-foreground"}`}
            style={filter === c ? { background: "var(--gradient-brand)" } : undefined}>
            {c}
          </button>
        ))}
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
        {filtered.map((it, i) => (
          <motion.div key={it.t + i} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
            className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${it.g} ${it.h} break-inside-avoid cursor-pointer group`}>
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition">
              <div className="text-xs text-white/70 uppercase tracking-wider">{it.cat}</div>
              <div className="font-display text-lg font-bold text-white">{it.t}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "We listen, learn and define success metrics." },
    { n: "02", t: "Strategy", d: "A clear plan with timelines and deliverables." },
    { n: "03", t: "Design", d: "Beautiful prototypes you can click through." },
    { n: "04", t: "Development", d: "Production-grade engineering, iteratively shipped." },
    { n: "05", t: "Launch", d: "QA, performance audits and a confident go-live." },
    { n: "06", t: "Growth", d: "Ongoing support, optimisation and scaling." },
  ];
  return (
    <Section eyebrow="How We Work" title="A process built for clarity">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative rounded-3xl glass p-7">
            <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
            <h4 className="mt-3 text-lg font-semibold">{s.t}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Team ---------------- */
function Team() {
  const team = [
    { n: "Aarav Kalix", r: "Founder & CEO", s: "Strategy · Product" },
    { n: "Sara Mansoori", r: "Lead Developer", s: "React · Node · Cloud" },
    { n: "Yusuf Rahman", r: "UI/UX Designer", s: "Figma · Design Systems" },
    { n: "Layla Hassan", r: "Marketing Lead", s: "Paid · SEO · Content" },
    { n: "Omar Idris", r: "Graphic Designer", s: "Brand · Motion · Print" },
  ];
  return (
    <Section id="team" eyebrow="Meet the Team" title="Humans behind the pixels">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {team.map((m, i) => (
          <motion.div key={m.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-3xl glass p-5 text-center">
            <div className="mx-auto h-28 w-28 rounded-full grid place-items-center font-display text-3xl font-bold text-white" style={{ background: "var(--gradient-brand)" }}>
              {m.n.split(" ").map(x => x[0]).join("")}
            </div>
            <h4 className="mt-4 font-semibold">{m.n}</h4>
            <div className="text-sm text-accent">{m.r}</div>
            <div className="mt-1 text-xs text-muted-foreground">{m.s}</div>
            <div className="mt-3 flex items-center justify-center gap-2">
              {[Linkedin, Instagram].map((I, j) => (
                <a key={j} href="#" aria-label="social" className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <I className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    { n: "Ahmed Al Mansoori", c: "Mansoori Group", r: 5, q: "Kalixi delivered our platform ahead of schedule and the design is stunning. Genuinely impressed." },
    { n: "Priya Sharma", c: "Bloom Cosmetics", r: 5, q: "Our online sales doubled in three months. The team understands brand and conversion." },
    { n: "James Carter", c: "FieldOps", r: 5, q: "From the booking app to the AI support, every piece feels premium and just works." },
    { n: "Noor Hadi", c: "Hadi Studio", r: 5, q: "Best agency we've worked with in the UAE. Communication, design, code — all top tier." },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, [reviews.length]);
  return (
    <Section id="testimonials" eyebrow="Loved by Clients" title="What people say">
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-3xl glass p-8 sm:p-12 text-center min-h-[280px]">
          <Quote className="mx-auto h-8 w-8 text-accent" />
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mt-5 text-xl sm:text-2xl font-display leading-snug">"{reviews[idx].q}"</p>
            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: reviews[idx].r }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <div className="mt-3 font-semibold">{reviews[idx].n}</div>
            <div className="text-sm text-muted-foreground">{reviews[idx].c}</div>
          </motion.div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <button key={i} aria-label={`Review ${i+1}`} onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/40"}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    ["What services do you provide?", "Web & mobile development, UI/UX design, digital marketing, graphic design, video editing and AI solutions — end to end."],
    ["How long does development take?", "Most websites take 2–4 weeks, mobile apps and platforms 6–12 weeks depending on scope. We share a clear timeline upfront."],
    ["Do you provide ongoing support?", "Yes — we offer maintenance, hosting and growth packages so your product keeps performing after launch."],
    ["Can you build both Android and iOS apps?", "Absolutely. We build native and cross-platform apps using Flutter, Swift and Kotlin."],
    ["Do you offer marketing services?", "Yes — paid ads, social management, SEO, content and lead generation across all major platforms."],
    ["Can you help startups?", "Definitely. We love early-stage teams and offer founder-friendly pricing and MVP packages."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered">
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map(([q, a], i) => (
          <div key={q} className="rounded-2xl glass overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
              <span className="font-medium">{q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Blog ---------------- */
function Blog() {
  const posts = [
    { t: "Web Development Trends 2026", c: "Engineering", d: "From server components to edge runtimes — what's actually shipping." },
    { t: "Mobile App Best Practices", c: "Mobile", d: "Performance, accessibility and design that converts on small screens." },
    { t: "AI for Business: A Practical Guide", c: "AI", d: "Where to start, what to automate, and pitfalls to avoid." },
    { t: "Digital Marketing Tips That Work", c: "Marketing", d: "Channels, content and measurement playbooks for 2026." },
    { t: "Startup Growth Strategies", c: "Startups", d: "Lean experiments that compound into real traction." },
  ];
  return (
    <Section id="blog" eyebrow="Insights" title="From our blog">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.slice(0, 3).map((p, i) => (
          <motion.a key={p.t} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rounded-3xl glass overflow-hidden flex flex-col">
            <div className="aspect-[16/9] relative overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
              <div className="absolute inset-0 bg-grid opacity-20" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs text-accent font-medium uppercase tracking-wider">{p.c}</div>
              <h4 className="mt-2 font-semibold text-lg group-hover:text-gradient transition">{p.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">Read more <ArrowRight className="h-3.5 w-3.5" /></div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Let's Talk" title="Tell us about your project"
      subtitle="We reply within one business day. No bots, real humans.">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 rounded-3xl glass p-7 space-y-5">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)" }}><Mail className="h-5 w-5 text-accent" /></div>
            <div><div className="text-xs text-muted-foreground">Email</div><a href="mailto:hello@kalixi.in" className="font-medium">hello@kalixi.in</a></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)" }}><Globe className="h-5 w-5 text-accent" /></div>
            <div><div className="text-xs text-muted-foreground">Website</div><span className="font-medium">kalixi.in</span></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-soft)" }}><MapPin className="h-5 w-5 text-accent" /></div>
            <div><div className="text-xs text-muted-foreground">Based in</div><div className="font-medium">United Arab Emirates</div></div>
          </div>
          <div className="pt-3 border-t border-border">
            <div className="text-xs text-muted-foreground mb-3">Follow us</div>
            <div className="flex items-center gap-2">
              {[Linkedin, Instagram, Facebook].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10 transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="lg:col-span-3 rounded-3xl glass p-7 grid sm:grid-cols-2 gap-4">
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Phone" name="phone" />
          <Field label="Company" name="company" />
          <div className="sm:col-span-2">
            <label className="text-xs text-muted-foreground">Service Needed</label>
            <select required className="mt-1.5 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              {["Web Development", "Mobile App", "UI/UX Design", "Digital Marketing", "Graphic Design", "AI Solutions", "Other"].map(s => <option key={s} className="bg-background">{s}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea required rows={4} className="mt-1.5 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us about your project..." />
          </div>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]" style={{ background: "var(--gradient-brand)" }}>
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition">
              <Calendar className="h-4 w-4" /> Schedule Consultation
            </button>
            {sent && <span className="text-sm text-accent">Thanks — we'll be in touch shortly.</span>}
          </div>
        </form>
      </div>
    </Section>
  );
}
function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input required name={name} type={type} className="mt-1.5 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center" style={{ background: "var(--gradient-brand)" }}>
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Ready to build something amazing?
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">Let's transform your idea into a successful digital product.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/90 transition">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [
    { h: "Company", l: ["About", "Services", "Portfolio", "Careers"] },
    { h: "Services", l: ["Web Development", "Mobile Apps", "Digital Marketing", "Graphic Design", "AI Solutions"] },
    { h: "Resources", l: ["Blog", "FAQ", "Privacy Policy", "Terms"] },
  ];
  return (
    <footer className="border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Kalixi</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">From idea to impact — premium digital solutions for ambitious brands.</p>
            <div className="mt-5 flex items-center gap-2">
              {[Linkedin, Instagram, Facebook].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <h5 className="font-semibold text-sm mb-4">{c.h}</h5>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {c.l.map(x => <li key={x}><a href="#" className="hover:text-foreground transition">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Kalixi Technologies. All Rights Reserved.</div>
          <div>Crafted with care in the UAE.</div>
        </div>
      </div>
    </footer>
  );
}
