import { sponsors } from "../data/sponsors";
import SectionHeading from "../components/common/SectionHeading";
import { Link } from "react-router-dom";

const tiers = ["Title Sponsor", "Platinum", "Gold", "Silver", "Community"];

export default function Partners() {
  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">Partners & Sponsors • {sponsors.length} total</div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold leading-tight text-white">Built with our partners.</h1>
              <p className="mt-3 text-slate-400 leading-relaxed">Industry and community partners make our work possible — from venues and swag to mentorship, judging, and internships. Replace logos and tiers anytime in <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">src/data/sponsors.js</code>.</p>
            </div>
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200">
              <h3 className="font-display font-bold text-slate-900">Become a partner</h3>
              <p className="text-sm text-slate-600 mt-1">Reach 600+ engaged computing students and support the next generation of builders.</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                <li>Logo on posters, stage, and website</li>
                <li>Talent pipeline — early access to top performers</li>
                <li>Speaking and mentoring slots</li>
                <li>CSR & community visibility</li>
              </ul>
              <Link to="/contact" className="mt-4 block text-center rounded-full bg-blue-600 text-white py-2.5 text-sm font-semibold hover:bg-blue-700">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {tiers.map((tier) => {
            const list = sponsors.filter((s) => s.tier === tier);
            if (list.length === 0) return null;
            return (
              <div key={tier}>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-lg font-bold text-slate-900">{tier}</h2>
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">{list.length}</span>
                </div>
                <div className={`mt-4 grid gap-4 ${tier === "Title Sponsor" ? "md:grid-cols-1 lg:grid-cols-2" : tier === "Platinum" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3 lg:grid-cols-4"}`}>
                  {list.map((s) => (
                    <a key={s.id} href={s.url} className="group rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg hover:border-blue-200 transition flex flex-col">
                      <div className="h-[64px] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition">
                        <img src={s.logo} alt={s.name} className="max-h-10 object-contain" />
                      </div>
                      <h3 className="mt-4 font-display font-bold text-slate-900 group-hover:text-blue-600">{s.name}</h3>
                      <p className="text-xs font-semibold tracking-wide uppercase text-slate-500">{s.tier}</p>
                      <p className="text-sm text-slate-600 mt-2 flex-1">{s.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">Visit →</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" title="Why partners love EMS" description="We make sponsorship simple and meaningful." />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Authentic engagement", d: "Students actually build and ship — not just attend. Your brand is part of their portfolio story." },
              { t: "Curated audience", d: "600+ computing students, plus faculty and alumni — all concentrated in one high-intent community." },
              { t: "Easy collaboration", d: "One point of contact, clear tiers, and post-event impact reports with photos and stats." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <h4 className="font-display font-bold text-slate-900">{x.t}</h4>
                <p className="text-sm text-slate-600 mt-2">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="inline-flex rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-semibold hover:bg-slate-800">Start a partnership conversation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
