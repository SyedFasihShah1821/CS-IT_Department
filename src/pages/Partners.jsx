import { useState, useMemo } from "react";
import { sponsors, partnerCategories } from "../data/sponsors";
import SectionHeading from "../components/common/SectionHeading";
import { Link } from "react-router-dom";

const allCats = ["All", ...partnerCategories];

export default function Partners() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return sponsors;
    return sponsors.filter((s) => s.category === active);
  }, [active]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">Partners & Sponsors • {sponsors.length} organizations • 7 categories</div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold leading-tight text-white">Built with our partners — verified, not assumed.</h1>
              <p className="mt-3 text-slate-400 leading-relaxed text-sm lg:text-[15px]">
                Industry and community partners make our work possible — from venues and swag to mentorship, judging, and internships. <span className="text-white font-semibold">Only verified/approved organizations are presented as official.</span> Entries marked <span className="inline-flex rounded bg-amber-400 text-slate-900 px-1.5 py-0.5 text-xs font-bold">[PLACEHOLDER]</span> are samples until real data is supplied. Replace anytime in <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">src/data/sponsors.js</code> — Home preview uses the same logos.
              </p>
              <div className="mt-4 rounded-xl bg-amber-400/15 border border-amber-400/30 p-3 flex gap-3">
                <div className="h-8 w-8 rounded-full bg-amber-400 text-slate-900 grid place-items-center font-bold shrink-0">!</div>
                <div>
                  <p className="text-xs font-bold text-amber-300 tracking-widest uppercase">Verification note</p>
                  <p className="text-xs text-slate-300 leading-relaxed">Department/University supporting units are verified. All others marked [PLACEHOLDER] are illustrative — share confirmed partner details to publish as official. This section is public and requires no login.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-blue-600 text-white px-6 py-2.5 text-sm font-bold hover:bg-blue-700 shadow">Become a Partner →</Link>
                <Link to="/contact" className="rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-bold hover:bg-slate-100">Become a Sponsor</Link>
                <Link to="/contact" className="rounded-full border border-white/20 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white/10">Contact</Link>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-xl">
              <h3 className="font-display font-bold text-slate-900">Why Partner With Us?</h3>
              <p className="text-sm text-slate-600 mt-1">Preview — full section below with student reach, visibility, brand recognition and collaboration.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                <li>Student reach — 600+ at TechNex, 3,500+ yearly</li>
                <li>Event visibility — posters, stage, website, socials</li>
                <li>Brand recognition — CSR & media features</li>
                <li>Collaboration — talent, mentoring, incubation</li>
              </ul>
              <Link to="/contact" className="mt-4 block text-center rounded-full bg-slate-900 text-white py-2.5 text-sm font-semibold hover:bg-slate-800">Start a partnership conversation</Link>
              <Link to="/achievements" className="mt-2 block text-center rounded-full border border-slate-200 bg-white py-2.5 text-sm font-semibold hover:bg-slate-50">See Achievements →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[64px] lg:top-[104px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Filter by partnership category</p>
          <div className="flex flex-wrap gap-2">
            {allCats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-semibold border transition ${active === c ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} of {sponsors.length} • {active !== "All" ? active : "All categories"} — verified entries have no placeholder tag; placeholders are amber-marked
          </p>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-4 ${filtered.length <= 2 ? "md:grid-cols-2 lg:grid-cols-2" : filtered.length <= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}>
            {filtered.map((s) => (
              <div key={s.id} className="group rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg hover:border-blue-200 transition flex flex-col">
                {/* logo */}
                <div className={`h-[72px] rounded-xl border flex items-center justify-center p-3 transition ${s.placeholder ? "bg-amber-50 border-amber-200 grayscale-[0.3] group-hover:grayscale-0" : "bg-slate-50 border-slate-100 grayscale group-hover:grayscale-0"}`}>
                  <img src={s.logo} alt={`${s.name} logo`} className="max-h-10 object-contain" loading="lazy" />
                </div>
                {s.placeholder && <span className="mt-3 inline-flex self-start rounded-full bg-amber-400 text-slate-900 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase">[PLACEHOLDER]</span>}
                {!s.placeholder && s.verified && <span className="mt-3 inline-flex self-start rounded-full bg-emerald-500 text-white px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase">Verified • Official</span>}
                {!s.verified && !s.placeholder && <span className="mt-3 inline-flex self-start rounded-full bg-slate-200 text-slate-700 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase">Pending verification</span>}

                <h3 className="mt-3 font-display font-bold text-slate-900 group-hover:text-blue-600 leading-tight text-[15px]">{s.name}</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mt-1">{s.category}</p>
                <p className="text-sm text-slate-600 mt-2 flex-1 leading-relaxed">{s.description.replace(" [PLACEHOLDER — verify before publishing]", "").replace(" [PLACEHOLDER]", "")}</p>
                {s.placeholder && <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 mt-2">[PLACEHOLDER] — verify details before listing as official.</p>}

                <div className="mt-4 flex items-center gap-2">
                  {s.url && s.url !== "#" ? (
                    <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-bold hover:bg-slate-800">
                      Visit website
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7m10 0v10"/></svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 rounded-full bg-slate-100 px-4 py-1.5">Link on file — contact for intro</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">Approved website/social link — public, no login required.</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center mt-6">
              <p className="font-display font-bold text-slate-900">No partners in this category</p>
              <button onClick={() => setActive("All")} className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold">Show all partners</button>
            </div>
          )}

          <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h4 className="font-display font-bold text-slate-900">Logos stay consistent</h4>
              <p className="text-sm text-slate-600 mt-1">Home “Partners & Sponsors” preview pulls the same file — <code className="bg-slate-100 px-1 py-0.5 rounded">src/data/sponsors.js</code>. Change once, updates everywhere. Connected via <Link to="/" className="text-blue-600 font-semibold hover:underline">Home → Partners</Link> → <Link to="/partners" className="text-blue-600 font-semibold hover:underline">Partners page</Link>.</p>
            </div>
            <Link to="/" className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">← Back to Home preview</Link>
          </div>
        </div>
      </section>

      {/* Why Partner With Us? */}
      <section className="py-14 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Partner With Us?" title="Put your brand where students build" description="Four clear reasons — student reach, event visibility, brand recognition and true collaboration. No vague promises, just what partners actually get." align="center" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👥",
                title: "Student Reach",
                desc: "Direct access to 600+ engaged computing students at TechNex, 250+ active members and 3,500+ students reached yearly — plus alumni and faculty.",
                bullets: ["600+ at flagship", "3,500+ yearly touchpoints", "Alumni & faculty network"],
              },
              {
                icon: "👁️",
                title: "Event Visibility",
                desc: "Your logo and story live where attention is — posters, stage backdrops, website, badges, certificates, reels and press.",
                bullets: ["Posters • Stage • Website", "Socials • After-movies", "Certificates & swag"],
              },
              {
                icon: "🏆",
                title: "Brand Recognition",
                desc: "Be seen as a builder, not just a sponsor — CSR impact, media features and reports that students share with employers.",
                bullets: ["CSR & outreach credits", "Media & press mentions", "Post-event impact report"],
              },
              {
                icon: "🤝",
                title: "Collaboration Opportunities",
                desc: "Go beyond logos — mentor, judge, hire, co-host labs, or incubate student projects. Flexible formats that match your goals.",
                bullets: ["Talent pipeline & hiring", "Mentoring & judging", "Labs, incubation, research"],
              },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center text-lg">{x.icon}</div>
                <h4 className="mt-4 font-display font-bold text-slate-900">{x.title}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{x.desc}</p>
                <ul className="mt-4 space-y-1">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Become a Partner / Sponsor / Contact */}
          <div className="mt-10 rounded-2xl bg-slate-900 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-white">Ready to talk? Choose your next step</h3>
              <p className="text-sm text-slate-400 mt-1">All options go to the public Contact form — no login, reply within 24 hours.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-bold hover:bg-blue-700 shadow">
                Become a Partner →
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-bold hover:bg-slate-100">
                Become a Sponsor
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-4">Partners page is public and linked from Home. For compliance, placeholders must be replaced with verified data before claiming official endorsement.</p>
        </div>
      </section>

      {/* additional CTA strip */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-slate-900">What partners actually get</h4>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <ul className="space-y-1 list-disc list-inside">
                  <li>Logo on digital & print assets</li>
                  <li>Dedicated post-event impact report</li>
                  <li>Priority access to project expo & demos</li>
                </ul>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Speaking, mentoring & judging slots</li>
                  <li>Talent pipeline — CV book & referrals</li>
                  <li>Co-branded certificates for participants</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="rounded-full bg-slate-900 text-white text-center py-2.5 text-sm font-semibold hover:bg-slate-800">Become a Partner</Link>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/contact" className="rounded-full border border-slate-200 bg-white text-center py-2.5 text-sm font-semibold hover:bg-slate-50">Become a Sponsor</Link>
                <Link to="/contact" className="rounded-full border border-slate-200 bg-white text-center py-2.5 text-sm font-semibold hover:bg-slate-50">Contact</Link>
              </div>
              <p className="text-xs text-slate-500 text-center">Replace placeholders in <code className="bg-slate-100 px-1 py-0.5 rounded">sponsors.js</code> to go live.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
