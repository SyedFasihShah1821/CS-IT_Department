import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import SectionHeading from "../components/common/SectionHeading";
import { events } from "../data/events";
import { announcements } from "../data/announcements";
import { team } from "../data/team";
import { gallery } from "../data/gallery";
import { sponsors } from "../data/sponsors";
import { siteMeta, stats } from "../data/siteMeta";

export default function Home() {
  const featured = events.filter((e) => e.featured).slice(0, 3);
  const latestAnn = announcements.slice(0, 3);
  const previewTeam = team.slice(2, 6);
  const previewGallery = gallery.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.25),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {siteMeta.department} • {siteMeta.society}
                <span className="hidden sm:inline-flex items-center gap-2 ml-2 pl-2 border-l border-white/20">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  Est. {siteMeta.established}
                </span>
              </div>

              <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[0.95] tracking-tight text-white mt-6">
                Where
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"> Computer Science </span>
                meets
                <br />
                celebration.
              </h1>

              <p className="mt-5 text-[15px] lg:text-[17px] leading-relaxed text-slate-300 max-w-2xl">
                We are the official Event Management Society of the CS & IT Department — curating{" "}
                <span className="text-white font-medium">hackathons, workshops, research symposia</span> and cultural fests that turn
                classrooms into communities and ideas into impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/events" size="lg" className="shadow-lg shadow-blue-900/20">
                  Explore Events
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button to="/about" variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-50">
                  About the Society
                </Button>
                <a
                  href="#featured"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
                >
                  ▶ Watch Highlights
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-slate-900 font-bold text-[10px]">✓</span>
                  Trusted by {stats[1].value} events
                </span>
                <span className="h-4 w-px bg-white/15 hidden sm:block" />
                <span>Next up: <span className="text-white font-medium">CyberSecure Workshop — Oct 20</span></span>
              </div>
            </div>

            {/* Right card stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[24px] bg-white p-2 shadow-2xl">
                <div className="rounded-[18px] overflow-hidden bg-slate-50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop"
                      alt="TechNex"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute left-4 right-4 bottom-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-3 py-1 text-xs font-bold">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                        Featured • TechNex 2025
                      </div>
                      <h3 className="mt-2 font-display font-extrabold text-white text-lg leading-tight">Annual Tech Symposium — Nov 15</h3>
                      <p className="text-xs text-white/80 mt-1">Keynotes • Project Expo • Coding Sprint • 600+ attendees</p>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-3 text-center">
                    {[
                      { k: "600+", v: "Attendees" },
                      { k: "42", v: "Projects" },
                      { k: "15+", v: "Universities" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-2xl bg-white border border-slate-200 p-3">
                        <p className="font-display font-extrabold text-slate-900">{s.k}</p>
                        <p className="text-[11px] tracking-wide uppercase text-slate-500">{s.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-10 hidden lg:flex items-center gap-2 rounded-full bg-white shadow-xl border border-slate-200 px-3 py-2">
                <span className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-bold">AI</span>
                <div className="pr-2">
                  <p className="text-xs font-bold leading-none">AI Bootcamp</p>
                  <p className="text-[11px] text-slate-500">3 days • Certificate</p>
                </div>
              </div>
              <div className="absolute -right-2 bottom-10 hidden lg:flex items-center gap-2 rounded-full bg-slate-900 text-white shadow-xl px-3 py-2">
                <span className="h-8 w-8 rounded-full bg-amber-400 text-slate-900 grid place-items-center font-bold text-xs">🏆</span>
                <div className="pr-2">
                  <p className="text-xs font-bold leading-none">Best Society 2024</p>
                  <p className="text-[11px] text-slate-400">Vice Chancellor Award</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4">
                <p className="font-display text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-sm font-semibold text-white">{s.label}</p>
                <p className="text-xs text-slate-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="About the Society"
                title="Student-led. Faculty-guided. Industry-connected."
                description="Since 2018 we’ve been the department’s execution engine — turning ideas into well-run, well-loved events that build skills, portfolios, and friendships."
              />
              <div className="mt-6 flex gap-3">
                <Button to="/about">Learn more</Button>
                <Button to="/team" variant="outline">
                  Meet the team
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                { t: "Our Mission", d: "Create inclusive platforms where every student can build, present, and grow — regardless of background.", icon: "🎯" },
                { t: "What We Do", d: "Hackathons, workshops, seminars, research expos and cultural nights — 20+ events a year.", icon: "⚡" },
                { t: "Why Join Us", d: "Learn by doing, earn certificates, get mentored, and find your crew.", icon: "🤝" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-lg transition">
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 grid place-items-center text-lg">{c.icon}</div>
                  <h3 className="mt-3 font-display font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-4">
            {[
              { title: "Technical Workshops", desc: "Ethical hacking, AI, web, cloud — hands-on labs with certificates.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop" },
              { title: "Hackathons & Competitions", desc: "12-hour sprints to 24-hour builds. Mentors, prizes, internships.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format&fit=crop" },
              { title: "Seminars & Research", desc: "Panels with industry, paper presentations, and incubation support.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80&auto=format&fit=crop" },
            ].map((x) => (
              <div key={x.title} className="group relative overflow-hidden rounded-2xl border border-slate-200">
                <img src={x.img} alt="" className="h-56 w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h4 className="font-display font-bold text-white">{x.title}</h4>
                  <p className="text-sm text-slate-200 mt-1">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section id="featured" className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured Events" title="Don’t just attend — experience" description="Handpicked highlights. From flagship symposia to intimate hands-on labs." />
            <Button to="/events" variant="outline" className="self-start lg:self-auto">
              View all events
            </Button>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {featured.map((ev) => (
              <Link key={ev.id} to={`/events/${ev.id}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={ev.image} alt={ev.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Badge variant="softBlue">{ev.category}</Badge>
                    <Badge variant={ev.status === "Upcoming" ? "success" : "muted"}>{ev.status}</Badge>
                  </div>
                  <div className="absolute right-3 bottom-3 bg-slate-900 text-white rounded-full px-3 py-1 text-xs font-semibold">
                    {ev.date}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition">{ev.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-1">{ev.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {ev.time}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="line-clamp-1">{ev.venue}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <SectionHeading eyebrow="Announcements" title="Latest updates" description="Registrations, results, and opportunities — never miss a deadline." />
            <Button to="/announcements" variant="outline" className="hidden sm:inline-flex">
              All announcements
            </Button>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {latestAnn.map((a) => (
              <Link key={a.id} to="/announcements" className="rounded-2xl border border-slate-200 p-5 hover:shadow-lg hover:border-blue-200 transition bg-white group">
                <div className="flex items-center gap-2">
                  {a.pinned && <Badge variant="amber">📌 Pinned</Badge>}
                  <Badge variant="softBlue">{a.category}</Badge>
                  <span className="ml-auto text-xs text-slate-500">{a.date}</span>
                </div>
                <h3 className="mt-3 font-display font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition line-clamp-2">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <Button to="/announcements" variant="outline" className="w-full justify-center">
              All announcements
            </Button>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-14 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              light
              eyebrow="Our Team"
              title="The people behind the programs"
              description="Faculty advisors, core organizers, and a 50+ volunteer crew who make every event feel effortless."
            />
            <Button to="/team" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 self-start lg:self-auto">
              Meet full team
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {previewTeam.map((m) => (
              <Link key={m.id} to={`/team/${m.id}`} className="group rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden hover:bg-white hover:border-slate-200 transition p-3">
                <div className="aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-200">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="font-display font-bold text-white group-hover:text-slate-900 leading-tight">{m.name}</h3>
                  <p className="text-xs font-semibold tracking-wide uppercase text-cyan-300 group-hover:text-blue-600">{m.role}</p>
                  <p className="text-xs text-slate-400 group-hover:text-slate-600 line-clamp-2 mt-1">{m.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading eyebrow="Gallery" title="Moments that matter" description="A glimpse into the energy, color, and community of our events." />
            <Button to="/gallery" variant="outline">
              Explore gallery
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {previewGallery.map((g) => (
              <Link key={g.id} to="/gallery" className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200">
                <img src={g.src} alt={g.caption} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-80" />
                <div className="absolute bottom-0 p-3 lg:p-4">
                  <p className="text-xs font-semibold tracking-wide uppercase text-cyan-200">{g.category} • {g.year}</p>
                  <p className="text-sm font-semibold text-white leading-tight">{g.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-10 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-500">Trusted by students & sponsors</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {sponsors.slice(0, 8).map((s) => (
              <div key={s.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center justify-center h-[72px] grayscale hover:grayscale-0 transition">
                <img src={s.logo} alt={s.name} className="max-h-8 object-contain" />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button to="/partners" variant="ghost" size="sm" className="rounded-full">
              Become a partner
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] bg-slate-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-amber-400/10" />
            <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-8 p-8 lg:p-10">
              <div className="lg:col-span-7">
                <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white leading-tight">Have an idea for the next big event?</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">We love co-creation. Pitch a workshop, volunteer, or partner with us — and let’s build something students will remember.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button to="/contact" className="bg-white text-slate-900 hover:bg-slate-100">Contact Us</Button>
                  <Button to="/about" variant="outline" className="border-white/20 text-white hover:bg-white/10">Learn about us</Button>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                {[
                  { n: "120+", l: "Events" },
                  { n: "250+", l: "Members" },
                  { n: "35+", l: "Partners" },
                  { n: "4.9/5", l: "Rating" },
                  { n: "600+", l: "Attendees at TechNex" },
                  { n: "7 yrs", l: "Since 2018" },
                ].map((x) => (
                  <div key={x.l} className="rounded-2xl bg-white/10 border border-white/15 p-4 text-center backdrop-blur">
                    <p className="font-display font-extrabold text-white">{x.n}</p>
                    <p className="text-xs text-slate-300">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
