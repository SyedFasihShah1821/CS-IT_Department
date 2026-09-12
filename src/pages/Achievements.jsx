import SectionHeading from "../components/common/SectionHeading";
import { achievements } from "../data/achievements";
import { Link } from "react-router-dom";

export default function Achievements() {
  return (
    <div>
      <section className="bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1600&q=80&auto=format&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-900 px-3 py-1 text-xs font-bold tracking-widest uppercase">🏆 Achievements • Since 2018</div>
            <h1 className="mt-4 font-display text-3xl lg:text-5xl font-extrabold leading-tight text-white">Recognition earned together.</h1>
            <p className="mt-4 text-slate-300 leading-relaxed">Awards, wins, papers, placements, and community impact — all made possible by student initiative and faculty mentorship. Data is placeholder-friendly in <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">src/data/achievements.js</code>.</p>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { k: "Best Society 2024", v: "Vice Chancellor Award" },
              { k: "Top 3 — CodeSprint", v: "Inter-University" },
              { k: "18 Placed", v: "Via partner referrals" },
              { k: "500+ Students", v: "Digital literacy outreach" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                <p className="font-display font-extrabold text-white">{s.k}</p>
                <p className="text-xs text-slate-400">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Milestones" title="What we’ve achieved" description="Six highlights that show where passion + process can take you." align="center" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={a.image} alt={a.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute left-3 top-3 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">{a.year}</div>
                  <div className="absolute right-3 top-3 rounded-full bg-amber-400 text-slate-900 px-3 py-1 text-xs font-bold">{a.stat}</div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{a.category}</p>
                  <h3 className="font-display font-bold leading-tight text-slate-900 mt-1">{a.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 flex-1">{a.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 grid lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-display font-bold text-slate-900">By the numbers</h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  { k: "120+", v: "Events held" },
                  { k: "6", v: "Papers published" },
                  { k: "80+", v: "Awards won" },
                  { k: "35+", v: "Partners" },
                ].map((x) => (
                  <div key={x.v} className="rounded-xl bg-white border border-slate-200 p-3 text-center">
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
              <div className="mt-4 flex gap-3">
                <Link to="/events" className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800">See events</Link>
                <Link to="/partners" className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">Our partners</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
