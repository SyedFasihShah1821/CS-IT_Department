import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { team } from "../data/team";

const cats = ["All", "Faculty Advisors", "Core Committee", "Organizers", "Volunteers"];

export default function Team() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => team.filter((m) => (active === "All" || m.category === active) && (!q || m.name.toLowerCase().includes(q.toLowerCase()) || m.role.toLowerCase().includes(q.toLowerCase()))), [active, q]);

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">Team • {team.length} members • 4 wings</div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Our Team</h1>
              <p className="mt-2 text-slate-400 max-w-2xl">The faculty advisors, organizers, and volunteers who make every event run like clockwork. Click any card to view a member profile — data lives in <code className="bg-white/10 px-1 py-0.5 rounded text-white">src/data/team.js</code>.</p>
            </div>
            <div className="rounded-2xl bg-white p-1 flex items-center">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or role…" className="w-[260px] rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-slate-200 sticky top-[64px] lg:top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`rounded-full px-4 py-1.5 text-sm font-semibold border ${active === c ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 mb-4">Showing {filtered.length} member{filtered.length !== 1 ? "s" : ""} {active !== "All" && `• ${active}`}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((m) => (
              <Link key={m.id} to={`/team/${m.id}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
                <div className="aspect-[4/4.2] overflow-hidden bg-slate-100">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-slate-900 leading-tight group-hover:text-blue-600">{m.name}</h3>
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{m.role}</p>
                  <p className="text-[11px] font-medium tracking-wide uppercase text-slate-500 mt-1">{m.category}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2">{m.bio}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{m.events} events</span>
                    <span className="text-xs font-semibold text-blue-600 group-hover:gap-1 flex items-center gap-1">Profile <span>→</span></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-xl font-bold text-slate-900">Want to join the crew?</h3>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">We recruit each Fall & Spring for Media, Logistics, Technical, and PR wings. No experience needed — we train you.</p>
          <Link to="/contact" className="mt-4 inline-flex rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">Apply via Contact</Link>
        </div>
      </section>
    </div>
  );
}
