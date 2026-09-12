import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading";
import Badge from "../components/common/Badge";
import { events } from "../data/events";

const categories = ["All", "Symposium", "Hackathon", "Workshop", "Seminar", "Cultural"];
const statuses = ["All", "Upcoming", "Past"];

export default function Events() {
  const [activeCat, setActiveCat] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const catOk = activeCat === "All" || e.category === activeCat;
      const statusOk = activeStatus === "All" || e.status === activeStatus;
      const qOk = !q || e.title.toLowerCase().includes(q.toLowerCase()) || e.excerpt.toLowerCase().includes(q.toLowerCase());
      return catOk && statusOk && qOk;
    });
  }, [activeCat, activeStatus, q]);

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                Events • {events.length} total • 4 upcoming
              </div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Events Calendar</h1>
              <p className="mt-2 text-slate-400 max-w-2xl text-sm lg:text-[15px]">From flagship symposia to hands-on labs — filter by category, status, or search. Click any card for full agenda, speakers, and venue details.</p>
            </div>
            <div className="rounded-2xl bg-white p-1 flex items-center gap-1 self-start">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search events…"
                className="w-[200px] sm:w-[280px] rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400"
              />
              <span className="hidden sm:inline-flex h-8 w-8 rounded-full bg-slate-900 text-white place-items-center justify-center">⌕</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-200 sticky top-[64px] lg:top-[104px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${activeCat === c ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveStatus(s)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold border ${activeStatus === s ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">Showing {filtered.length} event{filtered.length !== 1 ? "s" : ""} {activeCat !== "All" && `• ${activeCat}`} {activeStatus !== "All" && `• ${activeStatus}`}</p>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center">
              <p className="font-display font-bold text-slate-900">No events match your filters</p>
              <p className="text-sm text-slate-500 mt-1">Try a different category or clear search.</p>
              <button onClick={() => { setActiveCat("All"); setActiveStatus("All"); setQ(""); }} className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold">Clear filters</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((ev) => (
                <Link key={ev.id} to={`/events/${ev.id}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img src={ev.image} alt={ev.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                    <div className="absolute left-3 top-3 flex gap-2">
                      <Badge variant="softBlue">{ev.category}</Badge>
                      <Badge variant={ev.status === "Upcoming" ? "success" : "muted"}>{ev.status}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                      <span className="rounded-full bg-white/95 backdrop-blur text-slate-900 px-3 py-1 text-xs font-semibold shadow">{ev.date}</span>
                      <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">{ev.venue.split(",")[0]}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition line-clamp-2">{ev.title}</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-1">{ev.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {ev.tags.map((t) => (
                        <span key={t} className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                      <span className="inline-flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {ev.time}</span>
                      <span className="font-semibold text-blue-600 group-hover:gap-2 flex items-center gap-1">View details <span>→</span></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading align="center" title="Want to propose an event?" description="Students and faculty can pitch ideas — we’ll help with planning, budgeting, and promotion." />
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">Contact organizers</Link>
            <Link to="/about" className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-50">How we select</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
