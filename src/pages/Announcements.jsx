import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge";
import { announcements } from "../data/announcements";
import { events } from "../data/events";

const categories = [
  "All",
  "Upcoming Event Announcements",
  "Registration Deadlines",
  "Venue Changes",
  "Competition Results",
  "Society Updates",
  "Important Notices",
];

export default function Announcements() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    return announcements.filter((a) => {
      const catOk = active === "All" || a.category === active;
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(q.toLowerCase()) ||
        a.category.toLowerCase().includes(q.toLowerCase());
      return catOk && qOk;
    });
  }, [active, q]);

  const counts = {
    total: announcements.length,
    upcoming: announcements.filter((a) => a.category === "Upcoming Event Announcements").length,
    deadlines: announcements.filter((a) => a.category === "Registration Deadlines").length,
    venue: announcements.filter((a) => a.category === "Venue Changes").length,
    results: announcements.filter((a) => a.category === "Competition Results").length,
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                Announcements • {counts.total} total • {announcements.filter((a) => a.pinned).length} pinned
              </div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Announcements</h1>
              <p className="mt-2 text-slate-400 max-w-2xl text-sm lg:text-[15px] leading-relaxed">
                Structured official updates — upcoming event announcements, registration deadlines, venue changes, competition results, society updates and important notices. Each card has title, date, category, short content and optional full details.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/10 border border-white/20 text-slate-300 px-3 py-1">{counts.upcoming} Upcoming</span>
                <span className="rounded-full bg-amber-500 text-slate-900 px-3 py-1 font-bold">{counts.deadlines} Deadlines</span>
                <span className="rounded-full bg-white/10 border border-white/20 text-slate-300 px-3 py-1">{counts.venue} Venue</span>
                <span className="rounded-full bg-emerald-500 text-white px-3 py-1 font-bold">{counts.results} Results</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-1 flex items-center gap-1 self-start lg:self-auto shadow-sm">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search title, category, content…"
                className="w-[240px] sm:w-[300px] rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400"
              />
              <span className="hidden sm:inline-flex h-8 w-8 rounded-full bg-slate-900 text-white place-items-center justify-center">⌕</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[68px] lg:top-[108px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${
                  active === c ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {c === "All" ? "All" : c}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} announcement{filtered.length !== 1 ? "s" : ""} {active !== "All" && `• ${active}`} {q && `• “${q}”`}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          {/* List */}
          <div className="lg:col-span-8 space-y-4">
            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center">
                <p className="font-display font-bold text-slate-900">No announcements match your filter</p>
                <p className="text-sm text-slate-500 mt-1">Try another category or clear search.</p>
                <button
                  onClick={() => {
                    setActive("All");
                    setQ("");
                  }}
                  className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filtered.map((a) => {
                const isExpanded = expanded === a.id;
                return (
                  <article
                    key={a.id}
                    className={`rounded-2xl border p-6 transition ${a.pinned ? "bg-amber-50/50 border-amber-200 shadow-sm" : "bg-white border-slate-200 hover:shadow-md"}`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {a.pinned && <Badge variant="amber">📌 Pinned</Badge>}
                      <Badge variant="softBlue">{a.category}</Badge>
                      <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                        {a.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-3 font-display text-lg font-extrabold leading-tight text-slate-900">{a.title}</h2>

                    {/* Short content (excerpt) */}
                    <p className="mt-2 text-sm font-semibold text-slate-800 leading-relaxed">{a.excerpt}</p>

                    {/* Short content (content) */}
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.content}</p>

                    {/* Optional full details */}
                    {a.fullDetails && (
                      <div className="mt-3">
                        {isExpanded ? (
                          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                            <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Full Details</p>
                            <p className="mt-1 text-sm text-slate-700 leading-relaxed">{a.fullDetails}</p>
                            <button
                              onClick={() => setExpanded(null)}
                              className="mt-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold hover:bg-slate-50"
                            >
                              Show less
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setExpanded(a.id)}
                            className="rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-bold hover:bg-slate-800"
                          >
                            View full details →
                          </button>
                        )}
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-3">
                      <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">{a.category}</span>
                      <div className="flex gap-2">
                        <Link to="/events" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold hover:bg-slate-50">
                          Related events
                        </Link>
                        <Link to="/contact" className="rounded-full bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold hover:bg-blue-700">
                          Contact
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick stats */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="font-display font-bold text-slate-900">At a glance</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                {[
                  { k: counts.total, l: "Total" },
                  { k: announcements.filter((a) => a.pinned).length, l: "Pinned" },
                  { k: counts.deadlines, l: "Deadlines" },
                  { k: counts.results, l: "Results" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <p className="font-display text-xl font-extrabold text-slate-900">{s.k}</p>
                    <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming deadlines */}
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
              <h3 className="font-display font-bold text-amber-900 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-amber-500 text-white grid place-items-center text-xs">!</span>
                Registration deadlines
              </h3>
              <ul className="mt-3 space-y-2">
                {announcements
                  .filter((a) => a.category === "Registration Deadlines")
                  .slice(0, 3)
                  .map((a) => (
                    <li key={a.id} className="rounded-xl bg-white border border-amber-200 p-3">
                      <p className="text-sm font-bold text-slate-900 leading-tight">{a.title}</p>
                      <p className="text-xs text-slate-600 mt-1">{a.excerpt}</p>
                    </li>
                  ))}
              </ul>
              <Link to="/events" className="mt-3 inline-flex rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-bold">
                View events →
              </Link>
            </div>

            {/* Venue changes */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="font-display font-bold text-slate-900">Recent venue changes</h3>
              <ul className="mt-3 space-y-2">
                {announcements
                  .filter((a) => a.category === "Venue Changes")
                  .map((a) => (
                    <li key={a.id} className="flex gap-2 text-sm">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-slate-700">
                        <span className="font-semibold text-slate-900">{a.title}</span> — {a.excerpt}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Society updates */}
            <div className="rounded-2xl bg-slate-900 text-white p-5">
              <h3 className="font-display font-bold">Society updates</h3>
              <p className="text-sm text-slate-400 mt-1">Become a member, volunteer, or partner — all announcements are official and backed by faculty advisors.</p>
              <div className="mt-4 flex gap-2">
                <Link to="/team" className="flex-1 rounded-full bg-white text-slate-900 px-4 py-2 text-xs font-bold text-center hover:bg-slate-100">
                  Meet team
                </Link>
                <Link to="/contact" className="flex-1 rounded-full border border-white/20 text-white px-4 py-2 text-xs font-bold text-center hover:bg-white/10">
                  Contact
                </Link>
              </div>
            </div>

            {/* Pinned */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" /> Pinned posts
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {announcements
                  .filter((a) => a.pinned)
                  .map((a) => (
                    <li key={a.id} className="flex gap-2">
                      <span className="text-amber-600">📌</span>
                      <span className="text-slate-800 font-medium">{a.title}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Upcoming events teaser from events data */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-display font-bold text-slate-900">Upcoming events</h3>
              <div className="mt-3 space-y-2">
                {events
                  .filter((e) => e.status === "Upcoming")
                  .slice(0, 3)
                  .map((e) => (
                    <Link key={e.id} to={`/events/${e.id}`} className="flex gap-3 rounded-xl bg-white border border-slate-200 p-3 hover:shadow-sm transition">
                      <img src={e.image} alt={e.title} className="h-12 w-16 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold tracking-widest uppercase text-blue-600">{e.category}</p>
                        <p className="text-sm font-bold text-slate-900 leading-tight truncate">{e.title}</p>
                        <p className="text-xs text-slate-500">{e.date} • {e.venue}</p>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link to="/events" className="mt-3 inline-flex text-xs font-bold text-blue-600">
                View all events →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Back nav helper */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Need context? Go <Link to="/" className="font-semibold text-blue-600 hover:underline">
              Home
            </Link>{" "}
            → <Link to="/events" className="font-semibold text-blue-600 hover:underline">Events</Link> → <span className="font-semibold text-slate-900">Event Details</span> and back.
          </p>
          <div className="flex gap-3">
            <Link to="/events" className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">
              ← Back to Events
            </Link>
            <Link to="/" className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800">
              ← Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
