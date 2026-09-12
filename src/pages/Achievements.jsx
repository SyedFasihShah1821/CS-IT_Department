import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading";
import { achievements, achievementCategories } from "../data/achievements";
import usePageMeta from "../hooks/usePageMeta";

const allCats = ["All", ...achievementCategories];

export default function Achievements() {
  usePageMeta({ title: "Achievements", description: "Competition wins, awards, successful events, participation certificates, student achievements and society milestones — 13 highlights since 2018." });
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return achievements;
    return achievements.filter((a) => a.category === active);
  }, [active]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1600&q=80&auto=format&fit=crop" alt="Award ceremony background — decorative" className="h-full w-full object-cover" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-900 px-3 py-1 text-xs font-bold tracking-widest uppercase">🏆 Achievements • {achievements.length} highlights • Since 2018</div>
            <h1 className="mt-4 font-display text-3xl lg:text-5xl font-extrabold leading-tight text-white">Recognition earned together.</h1>
            <p className="mt-4 text-slate-300 leading-relaxed text-sm lg:text-base">
              Competition achievements, awards, successful events, participation certificates, student achievements and society milestones — transparent, verifiable and placeholder-friendly in <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">src/data/achievements.js</code>.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link to="/events" className="rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-semibold hover:bg-slate-100">Explore Events</Link>
              <Link to="/partners" className="rounded-full bg-white/10 border border-white/20 text-white px-5 py-2 text-sm font-semibold hover:bg-white/15">Our Partners →</Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { k: "2× Champions", v: "Competition Achievements" },
              { k: "Best Society 2024", v: "Awards — VC Award" },
              { k: "600+ at TechNex", v: "Successful Events" },
              { k: "3,500+ Certificates", v: "Participation Certificates" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                <p className="font-display font-extrabold text-white leading-tight">{s.k}</p>
                <p className="text-xs text-slate-400 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { k: "6 Papers", v: "Student Achievements — National Conf" },
              { k: "18 Placed", v: "Via partner referrals" },
              { k: "120+ Events", v: "Society Milestones — 7 years" },
              { k: "250+ Members", v: "Active community" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                <p className="font-display font-extrabold text-white leading-tight">{s.k}</p>
                <p className="text-xs text-slate-400 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[64px] lg:top-[104px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            {allCats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${active === c ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} of {achievements.length} • {active !== "All" ? active : "All categories"} — verified entries; placeholders clearly marked
          </p>
        </div>
      </section>

      {/* Achievements grid */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Milestones" title="What we’ve achieved" description="Six categories that show where passion + process can take you — competition wins to society growth." align="center" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <div key={a.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={a.image} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-white/95 backdrop-blur text-slate-900 px-2.5 py-1 text-xs font-bold shadow border border-slate-200">{a.category}</span>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold shadow">{a.year}</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent p-3 pt-8">
                    <span className="inline-flex rounded-full bg-amber-400 text-slate-900 px-2.5 py-1 text-xs font-bold">{a.stat}</span>
                    <span className="ml-2 text-xs font-semibold text-white/90">{a.highlight}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{a.category}</p>
                  <h3 className="font-display font-bold leading-tight text-slate-900 mt-1 text-[15px] line-clamp-2">{a.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 flex-1 leading-relaxed">{a.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-semibold text-slate-500">{a.year} • {a.category}</span>
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-full">{a.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center mt-6">
              <p className="font-display font-bold text-slate-900">No achievements in this category</p>
              <button onClick={() => setActive("All")} className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold">Show all</button>
            </div>
          )}

          {/* By the numbers */}
          <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 grid lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-display font-bold text-slate-900">By the numbers</h4>
              <p className="text-xs text-slate-500 mt-1">Aggregated from verified records</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { k: "120+", v: "Events held" },
                  { k: "6", v: "Papers published" },
                  { k: "80+", v: "Awards won" },
                  { k: "35+", v: "Approved partners" },
                ].map((x) => (
                  <div key={x.v} className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                    <p className="font-display font-extrabold text-slate-900">{x.k}</p>
                    <p className="text-xs text-slate-500">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-slate-900">What’s next</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
                <li>Launch incubation track for Top 3 Research Symposium papers (with TechBridge).</li>
                <li>Expand digital literacy drive to 10 schools in 2025–26.</li>
                <li>Host first regional CTF with SecureNet.</li>
                <li>Double internship placements via Systems Ltd. partnership.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/events" className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800">See events</Link>
                <Link to="/partners" className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">Our partners</Link>
                <Link to="/contact" className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-700">Contact →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}