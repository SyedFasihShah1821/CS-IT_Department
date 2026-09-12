import { useState, useMemo } from "react";
import Badge from "../components/common/Badge";
import { announcements } from "../data/announcements";

const cats = ["All", "Workshop", "Recruitment", "Event Update", "Results", "Schedule", "Partnership"];

export default function Announcements() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => announcements.filter((a) => (active === "All" || a.category === active) && (!q || a.title.toLowerCase().includes(q.toLowerCase()))), [active, q]);

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Announcements</h1>
              <p className="mt-2 text-slate-400 max-w-2xl">Official updates from the CS & IT Event Management Society — registrations, results, schedules, and opportunities. Replace placeholder content anytime via <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">src/data/announcements.js</code>.</p>
            </div>
            <div className="rounded-2xl bg-white p-1 flex items-center">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search announcements…" className="w-[260px] rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center">
                <p className="font-bold">No announcements match your filter</p>
              </div>
            ) : (
              filtered.map((a) => (
                <article key={a.id} className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-md transition">
                  <div className="flex flex-wrap items-center gap-2">
                    {a.pinned && <Badge variant="amber">📌 Pinned</Badge>}
                    <Badge variant="softBlue">{a.category}</Badge>
                    <span className="text-xs text-slate-500 ml-auto">{a.date}</span>
                  </div>
                  <h2 className="mt-3 font-display font-bold text-slate-900 leading-tight text-lg">{a.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.content}</p>
                  <p className="mt-2 text-sm text-slate-600 italic">“{a.excerpt}”</p>
                </article>
              ))
            )}
          </div>
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="font-display font-bold text-slate-900">Subscribe for alerts</h3>
              <p className="text-sm text-slate-600 mt-1">Get email alerts for registrations and results (UI only).</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
                <input placeholder="Your email" className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold">Subscribe</button>
              </form>
            </div>
            <div className="rounded-2xl bg-slate-900 text-white p-5">
              <h3 className="font-display font-bold">Post an announcement</h3>
              <p className="text-sm text-slate-400 mt-1">Faculty and core committee can contact the Media lead to publish official updates. All data is in <code className="text-cyan-300">src/data/</code> for easy replacement.</p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
              <h4 className="font-bold text-amber-900 text-sm">📌 Pinned posts</h4>
              <ul className="mt-2 space-y-2 text-sm text-amber-900">
                {announcements.filter((a) => a.pinned).map((a) => (
                  <li key={a.id} className="flex gap-2"><span>•</span><span>{a.title}</span></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
