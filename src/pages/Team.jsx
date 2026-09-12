import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { team, teamCategories } from "../data/team";
import usePageMeta from "../hooks/usePageMeta";

const cats = ["All", ...teamCategories];

// simple social icon SVGs (inline to avoid extra deps)
function SocialIcons({ member }) {
  const links = [
    { key: "linkedin", href: member.linkedin, label: "LinkedIn", icon: "in" },
    { key: "instagram", href: member.instagram, label: "Instagram", icon: "IG" },
    { key: "facebook", href: member.facebook, label: "Facebook", icon: "f" },
    { key: "github", href: member.github, label: "GitHub", icon: "GH" },
  ].filter((l) => l.href && l.href !== "#");
  if (links.length === 0) return <span className="text-[11px] text-slate-400">No public profiles</span>;
  return (
    <div className="flex items-center gap-1.5">
      {links.map((l) => (
        <a
          key={l.key}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noreferrer" : undefined}
          onClick={(e) => e.stopPropagation()}
          aria-label={`${member.name} ${l.label}`}
          className="h-7 w-7 rounded-full bg-slate-900 text-white grid place-items-center text-[10px] font-bold hover:bg-slate-700 transition"
          title={l.label}
        >
          {l.icon === "in" ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          ) : l.icon === "IG" ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
          ) : l.icon === "f" ? (
            <span className="font-bold">f</span>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          )}
        </a>
      ))}
    </div>
  );
}

export default function Team() {
  usePageMeta({ title: "Our Team", description: "Meet the five wings: Executive Body, Event Management, Media & Marketing, Technical and Volunteers — 20 members with profiles, program/semester and approved socials." });
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      team.filter(
        (m) =>
          (active === "All" || m.category === active) &&
          (!q ||
            m.name.toLowerCase().includes(q.toLowerCase()) ||
            m.role.toLowerCase().includes(q.toLowerCase()) ||
            m.program.toLowerCase().includes(q.toLowerCase()) ||
            m.category.toLowerCase().includes(q.toLowerCase()))
      ),
    [active, q]
  );

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                Team • {team.length} members • {teamCategories.length} wings
              </div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Our Team</h1>
              <p className="mt-2 text-slate-400 max-w-2xl text-sm lg:text-[15px] leading-relaxed">
                Five wings, one mission — Executive Body, Event Management, Media & Marketing, Technical and Volunteers. Every card shows photo, name, position, program/semester and approved socials. Tap <span className="text-white font-semibold">View Profile</span> for full bio and responsibilities.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-1 flex items-center shadow-lg w-full lg:w-auto">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search team members"
                placeholder="Search by name, role or program…"
                className="w-full lg:w-[280px] rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400"
              />
              {q && (
                <button onClick={() => setQ("")} className="mr-1 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-slate-200 sticky top-[64px] lg:top-[104px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Filter by team</p>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${
                  active === c ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} member{filtered.length !== 1 ? "s" : ""} {active !== "All" && `• ${active}`} — data in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">src/data/team.js</code>
          </p>
        </div>
      </section>

      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((m) => (
              <div
                key={m.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition flex flex-col"
              >
                {/* profile photo */}
                <Link to={`/team/${m.id}`} className="block relative aspect-[4/4.2] overflow-hidden bg-slate-100">
                  <img src={m.image} alt={`${m.name} — ${m.role}`} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur text-slate-900 px-2.5 py-1 text-[11px] font-bold shadow border border-slate-200">
                    {m.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-3 pt-8">
                    <p className="text-xs font-bold tracking-widest uppercase text-white/90">{m.role}</p>
                  </div>
                </Link>

                <div className="p-4 flex flex-col flex-1">
                  {/* full name, position */}
                  <Link to={`/team/${m.id}`} className="group-hover:text-blue-600 transition">
                    <h3 className="font-display font-bold text-slate-900 leading-tight text-[15px] line-clamp-1">{m.name}</h3>
                  </Link>
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mt-0.5">{m.role}</p>

                  {/* program/semester */}
                  <p className="text-xs text-slate-600 mt-2 flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 16l10 5 10-5"/></svg>
                    {m.program} • {m.semester}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{m.department}</p>

                  {/* social icons */}
                  <div className="mt-3 flex items-center justify-between">
                    <SocialIcons member={m} />
                    <span className="text-[11px] font-semibold text-slate-500">{m.events} events</span>
                  </div>

                  {/* View Profile */}
                  <Link
                    to={`/team/${m.id}`}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-bold hover:bg-slate-800 transition"
                  >
                    View Profile
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center mt-6">
              <p className="font-display font-bold text-slate-900">No members found</p>
              <p className="text-sm text-slate-500 mt-1">Try a different search or category.</p>
              <button onClick={() => { setActive("All"); setQ(""); }} className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold">
                Show all members
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">Want to join the crew?</h3>
              <p className="text-sm text-slate-600 mt-1">We recruit each Fall & Spring for Media, Logistics, Technical, and PR wings. No experience needed — we train you.</p>
              <p className="text-xs text-slate-500 mt-2">Recruitment info is public — no login required. Apply via Contact.</p>
            </div>
            <Link to="/contact" className="shrink-0 inline-flex rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">
              Apply via Contact →
            </Link>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">Profiles show only official, approved information. Personal contact details are intentionally omitted.</p>
        </div>
      </section>
    </div>
  );
}