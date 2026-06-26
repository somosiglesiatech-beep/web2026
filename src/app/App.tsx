import { useState, useEffect } from "react";
import { MapPin, Clock, Mail, Instagram, Youtube, MessageCircle, ChevronDown, ArrowRight, Play, ExternalLink } from "lucide-react";

const FONT = "'Poppins', sans-serif";
const GOLD = "#C9973A";
const GOLD_LIGHT = "#E8B84B";
const DARK = "#1A1A1A";
const MUTED = "#777777";
const WHITE = "#ffffff";
const OFFWHITE = "#F7F7F7";

const sermons = [
  { id: "qv5iohc3kqE", title: "Cristo la Revelación Final", preacher: "Pastor Marcelo", date: "2026" },
  { id: "kzrw_b3-LZs", title: "Escuchenlo a El", preacher: "Pastora Andrea", date: "Jun 2026" },
  { id: "HmwdPIgsCcM", title: "El misterio revelado", preacher: "Somos iglesia", date: "2026" },
];

const instaPosts = [
  { id: "1", img: "https://res.cloudinary.com/dek3odiw4/image/upload/v1782481748/jovenes_orando_tamalr.webp", alt: "Jovenes" },
  { id: "2", img: "https://res.cloudinary.com/dek3odiw4/image/upload/v1782481743/bautismo_assykn.webp", alt: "Bautismo" },
  { id: "3", img: "https://res.cloudinary.com/dek3odiw4/image/upload/v1782481737/hombre_leyendo_la_biblia_k76iw6.jpg", alt: "Estudio Bíblico" },
  { id: "4", img: "https://res.cloudinary.com/dek3odiw4/image/upload/v1782481742/abrazo_mujeres_zs4vhr.webp", alt: "Familia de la iglesia" },
  { id: "5", img: "https://res.cloudinary.com/dek3odiw4/image/upload/v1782481740/santa_cena_rqldni.jpg", alt: "Alabanza y adoración" },
  { id: "6", img: "https://res.cloudinary.com/dek3odiw4/image/upload/v1782481752/pareja_sonriendo_saoq4a.webp", alt: "Iglesia" },
];

const schedules = [
  { day: "Domingo", time: "11:00 am", label: "Culto principal" },
  { day: "Martes de Oración", time: "19:00 hs", label: "Culto de oración" },
  { day: "Miércoles", time: "20:00 hs", label: "Estudiamos las escrituras" },
  { day: "Sábado", time: "19:30 hs", label: "Culto de Jóvenes" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold tracking-widest uppercase" style={{ fontFamily: FONT, color: scrolled ? GOLD : WHITE, letterSpacing: "0.18em" }}>
          SOMOS IGLESIA
        </span>
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Quiénes somos", "nuevos"],
            ["Predicaciones", "predicaciones"],
            ["Vida", "vida"],
            ["Contacto", "contacto"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs uppercase tracking-wider transition-colors duration-200"
              style={{ fontFamily: FONT, color: scrolled ? MUTED : "rgba(255,255,255,0.75)", letterSpacing: "0.14em" }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? MUTED : "rgba(255,255,255,0.75)")}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden" style={{ minHeight: "100svh" }}>
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dek3odiw4/image/upload/v1782485020/Sin_t%C3%ADtulo-2_nvl5ma.jpg"
          alt="Iglesia"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(201,151,58,0.1) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.45em] mb-6" style={{ fontFamily: FONT, color: GOLD_LIGHT, fontWeight: 300 }}>
          Neuquén · Argentina
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold mb-3 leading-tight" style={{ fontFamily: FONT, color: WHITE }}>
          SOMOS
          <span className="block" style={{ color: GOLD_LIGHT }}>IGLESIA</span>
        </h1>
        <p className="text-lg sm:text-2xl font-light mb-12 tracking-[0.3em] uppercase" style={{ fontFamily: FONT, color: "rgba(255,255,255,0.75)" }}>
          Somos Familia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("predicaciones")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center gap-2 px-8 py-4 font-semibold uppercase text-sm tracking-widest transition-all duration-300"
            style={{ fontFamily: FONT, background: GOLD, color: WHITE, letterSpacing: "0.14em" }}
            onMouseEnter={e => (e.currentTarget.style.background = GOLD_LIGHT)}
            onMouseLeave={e => (e.currentTarget.style.background = GOLD)}
          >
            <Play className="w-4 h-4" /> Ver Predicaciones
          </button>
          <button
            onClick={() => document.getElementById("encontranos")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center gap-2 px-8 py-4 font-semibold uppercase text-sm tracking-widest transition-all duration-300"
            style={{ fontFamily: FONT, background: "transparent", color: WHITE, border: "1.5px solid rgba(255,255,255,0.5)", letterSpacing: "0.14em" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD_LIGHT; e.currentTarget.style.color = GOLD_LIGHT; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = WHITE; }}
          >
            <MapPin className="w-4 h-4" /> Cómo Llegar
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce">
        <ChevronDown style={{ color: WHITE }} className="w-5 h-5" />
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ fontFamily: FONT, color: GOLD, fontWeight: 600, letterSpacing: "0.3em" }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: FONT, color: DARK }}>
      {children}
    </h2>
  );
}

function GoldBtn({ children, onClick, href }: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const cls = "inline-flex items-center gap-2 px-8 py-4 font-semibold uppercase text-sm tracking-widest transition-all duration-300";
  const style = { fontFamily: FONT, background: GOLD, color: WHITE, letterSpacing: "0.14em" };
  const hoverIn = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.background = GOLD_LIGHT);
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.background = GOLD);

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</a>;
  }
  return <button onClick={onClick} className={cls} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</button>;
}

function GhostBtn({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls = "inline-flex items-center gap-2 px-8 py-4 font-semibold uppercase text-sm tracking-widest transition-all duration-300";
  const base = { fontFamily: FONT, color: DARK, border: `1.5px solid rgba(0,0,0,0.2)`, letterSpacing: "0.14em", background: "transparent" };
  const hoverIn = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; };
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = DARK; };
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={base} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</a>;
  }
  return <div className={cls} style={base}>{children}</div>;
}

function NuevosSection() {
  return (
    <section id="nuevos" className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Bienvenidos</SectionLabel>
            <SectionHeading>
              Bienvenidos <span style={{ color: GOLD }}>iglesia</span>
            </SectionHeading>
            <p className="text-base leading-relaxed mb-4 font-light" style={{ fontFamily: FONT, color: MUTED }}>
              Somos una comunidad que sigue a Jesús ubicados en el corazón de Neuquén Capital. Cristo es el centro y quien nos edifica.
            </p>
            <p className="text-base leading-relaxed mb-10 font-light" style={{ fontFamily: FONT, color: MUTED }}>
              Sin importar de dónde vengas, tu historia o tus preguntas, acá hay un lugar para vos.
            </p>
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ fontFamily: FONT, color: DARK, letterSpacing: "0.25em" }}>
                Lo que creemos
              </p>
              <ul className="space-y-3">
                {["La Biblia como Palabra de Dios", "Salvación por gracia mediante la fe en Jesús", "El poder transformador del Espíritu Santo", "Efesios 2:19 En Cristo Somos familia de Dios"].map(b => (
                  <li key={b} className="flex items-start gap-3 text-sm" style={{ fontFamily: FONT, color: DARK, fontWeight: 400 }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: GOLD }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <GoldBtn onClick={() => alert("¡Te esperamos!")}>
              Planificar mi visita <ArrowRight className="w-4 h-4" />
            </GoldBtn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Schedule card — full width */}
            <div className="col-span-2 p-6 border" style={{ background: OFFWHITE, borderColor: "rgba(0,0,0,0.07)" }}>
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4" style={{ color: GOLD }} />
                <p className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: FONT, color: DARK, letterSpacing: "0.25em" }}>
                  Horarios
                </p>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                {schedules.map(s => (
                  <div key={s.day} className="flex justify-between items-center py-3">
                    <div>
                      <p className="text-sm font-semibold" style={{ fontFamily: FONT, color: DARK }}>{s.day}</p>
                      <p className="text-xs font-light" style={{ fontFamily: FONT, color: MUTED }}>{s.label}</p>
                    </div>
                    <span className="text-sm font-semibold" style={{ fontFamily: FONT, color: GOLD }}>{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="p-6 border" style={{ background: OFFWHITE, borderColor: "rgba(0,0,0,0.07)" }}>
              <MapPin className="w-4 h-4 mb-4" style={{ color: GOLD }} />
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: FONT, color: DARK, letterSpacing: "0.25em" }}>
                Dirección
              </p>
              <p className="text-sm font-light leading-relaxed" style={{ fontFamily: FONT, color: MUTED }}>
                Río Negro 735<br />
                Neuquén Capital<br />
                Argentina
              </p>
            </div>

            {/* Photo */}
            <div className="relative overflow-hidden" style={{ minHeight: 160, background: "#e0ddd8" }}>
              <img
                src="https://res.cloudinary.com/dek3odiw4/image/upload/v1782481739/porteros_lvb41v.jpg"
                alt="Comunidad de fe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,151,58,0.25) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PredicacionesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="predicaciones" className="py-24 px-6" style={{ background: OFFWHITE }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Palabra</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading>
            Últimas <span style={{ color: GOLD }}>predicaciones</span>
          </SectionHeading>
          <GhostBtn href="https://www.youtube.com/@somosiglesiaoficial">
            <Youtube className="w-4 h-4" style={{ color: "#FF0000" }} />
            Ver canal completo
            <ExternalLink className="w-3 h-3" />
          </GhostBtn>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%", background: "#e0ddd8" }}>
              <iframe
                key={active}
                className="absolute inset-0 w-full h-full"
                src={`https://youtube.com/playlist?list=PLtjkaoWpBxNERI2Q3DemdfBsyxQz0LL11&si=n_DcDF7yzpGrpYKv${sermons[active].id}?rel=0&modestbranding=1`}
                title={sermons[active].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 px-1">
              <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ fontFamily: FONT, color: GOLD, letterSpacing: "0.25em" }}>
                {sermons[active].preacher} · {sermons[active].date}
              </p>
              <h3 className="text-xl font-semibold" style={{ fontFamily: FONT, color: DARK }}>{sermons[active].title}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {sermons.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className="flex items-start gap-4 p-4 text-left transition-all duration-200 border"
                style={{
                  background: active === i ? WHITE : "transparent",
                  borderColor: active === i ? GOLD + "50" : "rgba(0,0,0,0.08)",
                  boxShadow: active === i ? "0 2px 12px rgba(201,151,58,0.1)" : "none",
                }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: active === i ? GOLD : "#E8E8E8", color: active === i ? WHITE : MUTED }}
                >
                  {active === i ? <Play className="w-3 h-3" /> : i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold leading-snug mb-1" style={{ fontFamily: FONT, color: DARK }}>{s.title}</p>
                  <p className="text-xs font-light" style={{ fontFamily: FONT, color: MUTED }}>{s.preacher} · {s.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VidaSection() {
  return (
    <section id="vida" className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Comunidad</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading>
            Vida de <span style={{ color: GOLD }}>iglesia</span>
          </SectionHeading>
          <GhostBtn href="https://www.instagram.com/somosiglesia.nqn">
            <Instagram className="w-4 h-4" style={{ color: "#E1306C" }} />
            Seguir en Instagram
            <ExternalLink className="w-3 h-3" />
          </GhostBtn>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {instaPosts.map((p, i) => (
            <div key={p.id} className="relative overflow-hidden group cursor-pointer" style={{ paddingBottom: "100%", background: "#e0ddd8" }}>
              <img
                src={p.img}
                alt={p.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }}
              >
                <span className="text-xs font-medium uppercase tracking-wider" style={{ fontFamily: FONT, color: WHITE }}>
                  {p.alt}
                </span>
              </div>
              {i === 0 && (
                <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold uppercase tracking-widest" style={{ background: GOLD, color: WHITE, fontFamily: FONT }}>
                  Destacado
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EncontranosSection() {
  return (
    <section id="encontranos" className="py-24 px-6" style={{ background: OFFWHITE }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Visitanos</SectionLabel>
        <SectionHeading>
          <span style={{ color: GOLD }}>Encontranos</span>
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <iframe
              title="Mapa Somos Iglesia Neuquén"
              src="https://maps.app.goo.gl/RFPJ6vAPEtypkJZA9"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-4">
            <div className="p-6 border" style={{ background: WHITE, borderColor: "rgba(0,0,0,0.07)" }}>
              <MapPin className="w-4 h-4 mb-3" style={{ color: GOLD }} />
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: FONT, color: DARK, letterSpacing: "0.25em" }}>
                Dirección
              </p>
              <p className="text-sm font-light leading-relaxed" style={{ fontFamily: FONT, color: MUTED }}>
                Río Negro 735<br />
                Neuquén Capital<br />
                Provincia de Neuquén, Argentina
              </p>
            </div>

            <div className="p-6 border" style={{ background: WHITE, borderColor: "rgba(0,0,0,0.07)" }}>
              <Clock className="w-4 h-4 mb-3" style={{ color: GOLD }} />
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: FONT, color: DARK, letterSpacing: "0.25em" }}>
                Próximo culto
              </p>
              <p className="text-sm font-light leading-relaxed" style={{ fontFamily: FONT, color: MUTED }}>
                Domingo<br />
                <span className="font-semibold" style={{ color: GOLD }}>11:00 hs</span> — Domingo en Familia<br />
              </p>
            </div>

            <GoldBtn href="https://maps.app.goo.gl/RFPJ6vAPEtypkJZA9">
              <MapPin className="w-4 h-4" /> Abrir en Maps
            </GoldBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactoSection() {
  const contacts = [
    { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", value: "+54 9 2994 207481", href: "https://wa.me/5492994207481", color: "#25D366" },
    { icon: <Instagram className="w-6 h-6" />, label: "Instagram", value: "@somosiglesianqn", href: "https://www.instagram.com", color: "#E1306C" },
    { icon: <Youtube className="w-6 h-6" />, label: "YouTube", value: "Somos Iglesia Nqn", href: "https://www.youtube.com", color: "#FF0000" },
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "somosiglesia.tech@gmail.com", href: "mailto:somosiglesia.tech@gmail.com", color: GOLD },
  ];

  return (
    <section id="contacto" className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Hablemos</SectionLabel>
        <SectionHeading>
          <span style={{ color: GOLD }}>Contacto</span>
        </SectionHeading>
        <p className="text-base font-light mb-14 max-w-md" style={{ fontFamily: FONT, color: MUTED }}>
          Escribinos por el canal que prefieras y con gusto te respondemos.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 flex flex-col gap-4 border transition-all duration-300"
              style={{ background: OFFWHITE, borderColor: "rgba(0,0,0,0.07)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = c.color + "50"; (e.currentTarget as HTMLElement).style.background = WHITE; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${c.color}15`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.07)"; (e.currentTarget as HTMLElement).style.background = OFFWHITE; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <span className="w-10 h-10 flex items-center justify-center" style={{ background: c.color + "15", color: c.color }}>
                {c.icon}
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ fontFamily: FONT, color: MUTED, letterSpacing: "0.2em" }}>
                  {c.label}
                </p>
                <p className="text-sm font-semibold" style={{ fontFamily: FONT, color: DARK }}>{c.value}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: c.color }} />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-base font-bold tracking-widest uppercase" style={{ fontFamily: FONT, color: GOLD, letterSpacing: "0.2em" }}>
            SOMOS IGLESIA
          </span>
          <p className="text-xs font-light" style={{ fontFamily: FONT, color: MUTED }}>
            © 2025 Somos Iglesia · Río Negro 735, Neuquén Capital
          </p>
          <p className="text-xs font-medium tracking-widest uppercase" style={{ fontFamily: FONT, color: MUTED, letterSpacing: "0.2em" }}>
            Somos Familia
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: FONT, background: WHITE }}>
      <NavBar />
      <HeroSection />
      <NuevosSection />
      <PredicacionesSection />
      <VidaSection />
      <EncontranosSection />
      <ContactoSection />
    </div>
  );
}
