import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import SectionHeading from "../components/common/SectionHeading";
import { events } from "../data/events";
import { announcements } from "../data/announcements";
import { team } from "../data/team";
import { albums } from "../data/gallery";
import { sponsors } from "../data/sponsors";
import { siteMeta } from "../data/siteMeta";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Home",
    description:
      "Official public website of the CS & IT Event Management Society, Department of CS & IT — events, workshops, hackathons, gallery, team, achievements and partners. No login required.",
  });
  // Featured event — poster + full details
  const featuredEvent = events.find((e) => e.featured && e.status === "Upcoming") || events.find((e) => e.status === "Upcoming") || events[0];
  // Upcoming events grid — 3-6 cards
  const upcomingEvents = events.filter((e) => e.status === "Upcoming").slice(0, 4);
  const latestAnn = announcements.slice(0, 4);
  // Gallery preview — event-wise albums + sample photos
  const galleryAlbums = albums.slice(0, 4).map((a) => ({ name: a.title, count: a.photos.length, cover: a.coverImage, category: a.category }));
  const previewGallery = albums.flatMap((a) => a.photos).slice(0, 3);
  // Team preview — President, VP, General Secretary + key coordinators
  const teamPreviewIds = ["syed-fasih-shah", "laiba-ahmed", "bilal-hassan", "sara-tariq", "hamza-rauf", "zainab-ali"];
  const previewTeam = teamPreviewIds.map((id) => team.find((m) => m.id === id)).filter(Boolean);

  const impactStats = [
    { value: "120+", label: "Total Events", sub: "2018 — 2025", icon: "🎯" },
    { value: "45+", label: "Workshops", sub: "Hands-on labs", icon: "🛠️" },
    { value: "30+", label: "Competitions", sub: "Hackathons & CTFs", icon: "🏆" },
    { value: "25+", label: "Seminars", sub: "Talks & panels", icon: "🎙️" },
    { value: "3,500+", label: "Students Reached", sub: "Participants", icon: "👥" },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO — Professional society/event banner */}
      <section className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80&auto=format&fit=crop"
            alt="CS & IT Event Management Society banner"
            className="h-full w-full object-cover opacity-[0.28]"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/75 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] uppercase backdrop-blur animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                {siteMeta.tagline}
              </div>

              <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[54px] font-extrabold leading-[0.92] tracking-tight text-white mt-5 animate-fade-in-up">
                CS & IT
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Event Management Society
                </span>
              </h1>

              <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-slate-400 animate-fade-in delay-100">
                {siteMeta.department} • {siteMeta.university}
              </p>

              <p className="mt-5 text-[15px] lg:text-[17px] leading-relaxed text-slate-300 max-w-2xl animate-fade-in delay-100">
                The official student-led society of the CS & IT Department — orchestrating{" "}
                <span className="text-white font-semibold">hackathons, workshops, research symposia</span> and cultural
                celebrations that turn classrooms into communities and ideas into impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in delay-200">
                <Button to="/events" size="lg" className="shadow-lg shadow-blue-900/25 hover:shadow-xl hover:-translate-y-px active:translate-y-0">
                  View Events
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button
                  to="/about"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-50 border-white shadow-sm hover:shadow-md hover:-translate-y-px active:translate-y-0"
                >
                  Explore Society
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400 animate-fade-in delay-300">
                <span className="inline-flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-slate-900 font-bold text-[10px] shadow-sm">✓</span>
                  Trusted by {impactStats[0].value} events
                </span>
                <span className="h-4 w-px bg-white/15 hidden sm:block" />
                <span>
                  Next up: <span className="text-white font-medium">CyberSecure Workshop — Oct 20</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Registrations open
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[24px] bg-white p-2 shadow-2xl">
                <div className="rounded-[18px] overflow-hidden bg-slate-50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop"
                      alt="Students presenting projects at TechNex symposium"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
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
        </div>
      </section>

      {/* FEATURED / UPCOMING EVENT — poster, title, date, time, venue, description, View Details */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Event"
            title="Don’t miss our next flagship"
            description="A detailed look at the most anticipated upcoming gathering — poster, schedule, venue and full story. Every button goes somewhere real."
          />
          <div className="mt-8 grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Poster */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm h-full">
                <img src={featuredEvent.image} alt={`${featuredEvent.title} poster`} className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto lg:h-full" />
                <div className="absolute left-3 top-3 flex gap-2">
                  <Badge variant="amber">★ Featured</Badge>
                  <Badge variant="softBlue">{featuredEvent.category}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-white/95 backdrop-blur text-slate-900 px-3 py-1.5 text-xs font-bold shadow">{featuredEvent.status}</span>
                  <span className="rounded-full bg-slate-900 text-white px-3 py-1.5 text-xs font-bold shadow">Poster</span>
                </div>
              </div>
            </div>
            {/* Details */}
            <div className="lg:col-span-7 flex">
              <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8 flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="softBlue">{featuredEvent.category}</Badge>
                  <Badge variant="success">Upcoming</Badge>
                  <span className="ml-auto text-xs font-semibold tracking-widest uppercase text-slate-500">{featuredEvent.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl font-extrabold leading-tight text-slate-900">{featuredEvent.title}</h3>
                <p className="mt-3 text-sm lg:text-[15px] leading-relaxed text-slate-600">{featuredEvent.description}</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Date</p>
                    <p className="mt-1 text-sm font-bold text-slate-900 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                      {featuredEvent.date}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Time</p>
                    <p className="mt-1 text-sm font-bold text-slate-900 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8v4l3 3M6 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
                      {featuredEvent.time}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Venue</p>
                    <p className="mt-1 text-sm font-bold text-slate-900 leading-tight flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                      {featuredEvent.venue}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button to={`/events/${featuredEvent.id}`} size="md">
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </Button>
                  <Button to="/events" variant="outline" size="md">
                    All Events
                  </Button>
                  <Link to="/announcements" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    Announcements →
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featuredEvent.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">#{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SOCIETY PREVIEW */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="About Society Preview"
                title="Student-led. Faculty-guided. Industry-connected."
                description="Since 2018 we’ve been the department’s execution engine — turning ideas into well-run, well-loved events that build skills, portfolios, and friendships."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/about">Explore Society</Button>
                <Button to="/team" variant="outline">
                  Meet the Team
                </Button>
              </div>
              <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">✓</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">250+ active members • 4 wings</p>
                  <p className="text-xs text-slate-500">Technical • Media • Logistics • PR — training provided</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                { t: "Our Mission", d: "Create inclusive platforms where every student can build, present, and grow — regardless of background.", icon: "🎯" },
                { t: "What We Do", d: "Hackathons, workshops, seminars, research expos and cultural nights — 20+ events a year.", icon: "⚡" },
                { t: "Why Join Us", d: "Learn by doing, earn certificates, get mentored, and find your crew.", icon: "🤝" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200 grid place-items-center text-lg">{c.icon}</div>
                  <h3 className="mt-3 font-display font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.d}</p>
                  <Link to="/about" className="mt-3 inline-flex text-xs font-semibold text-blue-600 hover:text-blue-700">Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS — 3–6 cards with image, name, date, venue, category and details link */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Upcoming Events"
              title="Mark your calendar"
              description="From flagship symposia to hands-on labs — every card has image, date, venue, category and a working View Details link."
            />
            <Button to="/events" variant="outline" className="self-start lg:self-auto">
              View All Events
            </Button>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((ev) => (
              <Link key={ev.id} to={`/events/${ev.id}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={ev.image} alt={ev.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  <div className="absolute left-3 top-3">
                    <Badge variant="softBlue">{ev.category}</Badge>
                  </div>
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-emerald-500 text-white px-2.5 py-1 text-xs font-bold shadow">Upcoming</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition line-clamp-2">{ev.title}</h3>
                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <p className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                      {ev.date} • {ev.time}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                      {ev.venue}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">{ev.category}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:gap-2 transition-all">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {upcomingEvents.length < 3 && (
            <p className="mt-6 text-center text-sm text-slate-500">More events coming soon — check back or view all events.</p>
          )}
        </div>
      </section>

      {/* IMPACT STATISTICS — Total Events, Workshops, Competitions, Seminars, Participants */}
      <section className="py-14 lg:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-bold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Impact Statistics
            </div>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">Measured in moments and momentum</h2>
            <p className="mt-3 text-slate-400 leading-relaxed">Total events, workshops, competitions, seminars and students reached — transparent impact from 2018 to today.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {impactStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white border border-slate-200 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="mx-auto h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center text-lg">{s.icon}</div>
                <p className="mt-3 font-display text-3xl font-extrabold text-slate-900 tracking-tight">{s.value}</p>
                <p className="text-sm font-bold text-slate-900">{s.label}</p>
                <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/achievements" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
              View Achievements
            </Button>
            <Button to="/events" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Explore All Events
            </Button>
          </div>
        </div>
      </section>

      {/* LATEST ANNOUNCEMENTS — event announcements, deadlines, venue changes, results, notices */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Latest Announcements"
              title="Deadlines, venues, results — stay ahead"
              description="Event announcements, deadlines, venue changes, results and official notices. Each card links to the full Announcements page."
            />
            <Button to="/announcements" variant="outline" className="self-start lg:self-auto">
              View All Announcements
            </Button>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestAnn.map((a) => (
              <Link key={a.id} to="/announcements" className="group rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg hover:border-blue-200 transition flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  {a.pinned && <Badge variant="amber">📌 Pinned</Badge>}
                  <Badge variant="softBlue">{a.category}</Badge>
                  <span className="ml-auto text-[11px] font-medium text-slate-500">{a.date}</span>
                </div>
                <h3 className="mt-3 font-display font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition line-clamp-2 text-[15px]">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2 flex-1">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-semibold text-slate-500">{a.category}</span>
                  <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW — albums + View Full Gallery */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Gallery Preview"
              title="Albums from the field"
              description="Curated albums — TechNex, CodeSprint, workshops and cultural nights. Click any album to view full gallery."
            />
            <Button to="/gallery" className="self-start lg:self-auto">
              View Full Gallery
            </Button>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryAlbums.map((album) => (
              <Link key={album.name} to="/gallery" className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={album.cover} alt={album.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Badge variant="softBlue">{album.category}</Badge>
                    <span className="rounded-full bg-white text-slate-900 px-2.5 py-1 text-xs font-bold shadow">{album.count} photos</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display font-bold text-white leading-tight">{album.name}</h3>
                    <p className="text-xs text-white/80 mt-1">Album • View Full Gallery →</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">Album</p>
                  <span className="text-xs font-bold text-blue-600">Open →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {previewGallery.slice(0, 3).map((g) => (
              <Link key={g.id} to="/gallery" className="group relative overflow-hidden rounded-2xl aspect-[16/10] bg-slate-200 block">
                <img src={g.src} alt={g.caption} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 p-3">
                  <p className="text-sm font-semibold text-white leading-tight line-clamp-1">{g.caption}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW — President, Vice President, General Secretary & key coordinators */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Team Preview"
              title="Leadership on the ground"
              description="President, Vice President, General Secretary and key coordinators — each card links to a full profile."
            />
            <Button to="/team" variant="outline" className="self-start lg:self-auto">
              Meet Full Team
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewTeam.map((m) => (
              <Link key={m.id} to={`/team/${m.id}`} className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition flex gap-4 p-4 items-center">
                <div className="h-20 w-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-slate-900 leading-tight truncate group-hover:text-blue-600">{m.name}</h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-600">{m.role}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">{m.bio}</p>
                  <span className="mt-2 inline-flex text-xs font-semibold text-slate-500">View profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & SPONSORS — logos, names, categories, optional links + Become a Partner/Sponsor CTA */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Partners & Sponsors"
              title="Backed by builders"
              description="Logos, names, categories and links — hover for detail. Become a partner and put your brand where students build."
            />
            <div className="flex gap-3 self-start lg:self-auto">
              <Button to="/partners" variant="outline">
                All Partners
              </Button>
              <Button to="/contact" size="md">
                Become a Partner
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.slice(0, 8).map((s) => (
              <a key={s.id} href={s.url} target={s.url && s.url !== "#" ? "_blank" : undefined} rel={s.url && s.url !== "#" ? "noreferrer" : undefined} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-lg hover:border-blue-200 transition flex flex-col text-left">
                <div className="h-[72px] rounded-xl bg-white border border-slate-200 flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition">
                  <img src={s.logo} alt={`${s.name} logo`} className="max-h-9 object-contain" loading="lazy" />
                </div>
                <h3 className="mt-4 font-display font-bold text-slate-900 group-hover:text-blue-600 leading-tight">{s.name}</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mt-1">{s.category}</p>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 flex-1">{s.description.replace(" [PLACEHOLDER — verify before publishing]", "").replace(" [PLACEHOLDER]", "")}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                  {s.url !== "#" ? "Visit website →" : "Category details →"}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/partners" variant="ghost" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full">
              Become a Sponsor
            </Button>
            <Button to="/contact" variant="outline" className="rounded-full">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA — partnership/support questions + Contact/Partner buttons */}
      <section className="py-14 lg:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-amber-400/10" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-bold tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
                Partnership CTA
              </div>
              <h2 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">
                Want to partner, sponsor, or support the next event?
              </h2>
              <p className="mt-3 text-slate-300 leading-relaxed max-w-2xl">
                Have questions about partnership tiers, branding, student reach, or how your support creates impact? We’ll walk you through everything — no jargon, just clear next steps.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  { q: "What’s the reach?", a: "600+ students at TechNex, 3,500+ reached yearly." },
                  { q: "What do partners get?", a: "Logo, stage, swag, talent pipeline, post-event report." },
                  { q: "How to start?", a: "One email to set up a 20-min call with the core team." },
                  { q: "Is support flexible?", a: "Yes — cash, venue, mentorship, prizes, or media." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                    <p className="text-sm font-bold text-white">{item.q}</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact" className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg">
                  Contact Us
                </Button>
                <Button to="/partners" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Explore Partners
                </Button>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-semibold shadow">
                  Become a Partner →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
                <h3 className="font-display font-bold text-slate-900">Quick partnership check</h3>
                <p className="text-sm text-slate-600 mt-1">Tell us what you have in mind — we’ll respond within 24 hours.</p>
                <div className="mt-4 space-y-3">
                  {[
                    { l: "Sponsorship tier?", v: "Title • Platinum • Gold • Silver • Community" },
                    { l: "Support type?", v: "Funding • Venue • Mentors • Prizes • Media" },
                    { l: "Contact", v: `${siteMeta.email} • ${siteMeta.phone}` },
                  ].map((row) => (
                    <div key={row.l} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                      <p className="text-xs font-bold tracking-widest uppercase text-slate-500">{row.l}</p>
                      <p className="text-sm font-medium text-slate-900 mt-1">{row.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Button to="/contact" size="sm" className="w-full justify-center">
                    Partner Now
                  </Button>
                  <Button to="/contact" variant="outline" size="sm" className="w-full justify-center">
                    Ask a Question
                  </Button>
                </div>
                <p className="text-xs text-slate-500 text-center mt-3">Public form — no login required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Contact Preview"
                title="Let’s talk — event, volunteer, or partner?"
                description="Find us at the CS & IT Department or reach out online. All inquiries go to the Contact page — no login needed."
              />
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center">📍</div>
                  <p className="mt-3 text-xs font-bold tracking-widest uppercase text-slate-500">Address</p>
                  <p className="mt-1 text-sm font-medium text-slate-900 leading-relaxed">{siteMeta.address}</p>
                  <Link to="/contact" className="mt-3 inline-flex text-xs font-bold text-blue-600">Get directions →</Link>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center">✉️</div>
                  <p className="mt-3 text-xs font-bold tracking-widest uppercase text-slate-500">Email</p>
                  <a href={`mailto:${siteMeta.email}`} className="mt-1 block text-sm font-bold text-slate-900 hover:text-blue-600 break-all">{siteMeta.email}</a>
                  <p className="text-xs text-slate-500 mt-1">Replies within 24h</p>
                  <Link to="/contact" className="mt-3 inline-flex text-xs font-bold text-blue-600">Send message →</Link>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-5">
                  <div className="h-9 w-9 rounded-xl bg-amber-500 text-slate-900 grid place-items-center font-bold">📞</div>
                  <p className="mt-3 text-xs font-bold tracking-widest uppercase text-slate-500">Phone</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{siteMeta.phone}</p>
                  <p className="text-xs text-slate-500 mt-1">{siteMeta.officeHours}</p>
                  <Link to="/contact" className="mt-3 inline-flex text-xs font-bold text-blue-600">Call / Visit →</Link>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact">Go to Contact</Button>
                <Button to="/about" variant="outline">
                  About Society
                </Button>
                <span className="inline-flex items-center gap-2 text-xs text-slate-500 self-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Office hours: {siteMeta.officeHours}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col">
                <div className="aspect-[16/11] bg-slate-100 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800&q=80&auto=format&fit=crop"
                    alt="Campus map preview"
                    className="h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 grid place-items-center p-4">
                    <div className="rounded-2xl bg-white shadow-xl border border-slate-200 px-5 py-4 text-center max-w-xs">
                      <p className="font-display font-bold text-slate-900">Find us on campus</p>
                      <p className="text-xs text-slate-600 mt-1">Academic Block-B, 2nd Floor — CS & IT Department</p>
                      <Link to="/contact" className="mt-3 inline-flex rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-bold">
                        Open Contact Page →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-wrap gap-2 text-xs border-t border-slate-100 bg-slate-50">
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1.5 font-medium">🅿️ Parking</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1.5 font-medium">♿ Accessible</span>
                  <span className="rounded-full bg-white border border-slate-200 px-3 py-1.5 font-medium">🚇 Shuttle stop</span>
                  <Link to="/contact" className="ml-auto text-xs font-bold text-blue-600">Contact preview →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
