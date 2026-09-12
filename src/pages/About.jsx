import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80&auto=format&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              About • Event Management Society
            </div>
            <h1 className="mt-4 font-display text-3xl lg:text-5xl font-extrabold leading-tight text-white">We turn the CS & IT Department into a stage for builders.</h1>
            <p className="mt-4 text-slate-300 leading-relaxed">Founded in 2018, the Event Management Society (EMS) is the official student body that plans, promotes, and produces every major technical and cultural gathering of the Department of Computer Science & Information Technology.</p>
            <div className="mt-6 flex gap-3">
              <Button to="/team">Meet the Team</Button>
              <Button to="/achievements" variant="secondary" className="bg-white text-slate-900">Our Achievements</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who we are" title="Mission, Vision & Values" description="A clear purpose keeps 250+ volunteers moving in the same direction — from first poster to final prize." align="center" />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Our Mission", text: "To create inclusive, high-quality platforms where students learn by doing — building skills, confidence, and portfolios through well-run events.", icon: "🎯", color: "bg-blue-600" },
              { title: "Our Vision", text: "To be the most student-trusted society on campus — known for flawless execution, industry relevance, and community impact.", icon: "👁️", color: "bg-slate-900" },
              { title: "Our Values", text: "Ownership, hospitality, learning, and respect. We show up, we help each other, and we leave every event better than we found it.", icon: "💎", color: "bg-amber-500" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50 hover:bg-white hover:shadow-lg transition">
                <div className={`h-12 w-12 rounded-xl ${c.color} text-white grid place-items-center text-xl`}>{c.icon}</div>
                <h3 className="mt-4 font-display font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Our Journey" title="Seven years of growing together" description="From a handful of volunteers to a department-wide movement." />
              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5">
                <p className="text-sm text-slate-600"><span className="font-semibold text-slate-900">Founded:</span> 2018 by CS & IT faculty and students</p>
                <p className="text-sm text-slate-600 mt-2"><span className="font-semibold text-slate-900">Advisors:</span> Dept. Head & Dean Computing</p>
                <p className="text-sm text-slate-600 mt-2"><span className="font-semibold text-slate-900">Members:</span> 250+ active across 4 wings</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="relative pl-8 border-l-2 border-slate-200 space-y-8">
                {[
                  { year: "2018", title: "Society Founded", desc: "Launched with 18 volunteers to organize departmental seminars and programming contests." },
                  { year: "2019–20", title: "First Flagship — TechNex", desc: "Debuted TechNex with 200 attendees and 4 industry speakers. Set the template for future expos." },
                  { year: "2021–22", title: "Going Hybrid", desc: "Ran virtual workshops during campus closures — AI bootcamp streamed to 900+ students nationwide." },
                  { year: "2023", title: "CodeSprint & Research Track", desc: "Inter-university hackathon and undergraduate research symposium added; 3 projects incubated." },
                  { year: "2024", title: "Best Society Award", desc: "Awarded Best Student Society by the Vice Chancellor for event excellence and community impact." },
                  { year: "2025", title: "Industry Partnerships", desc: "Title partnership with Systems Ltd. and 7 new sponsors — expanding mentorship and internships." },
                ].map((t) => (
                  <div key={t.year} className="relative">
                    <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-blue-600 border-4 border-white shadow" />
                    <div className="rounded-2xl bg-white border border-slate-200 p-5">
                      <p className="text-xs font-bold tracking-widest uppercase text-blue-600">{t.year}</p>
                      <h4 className="font-display font-bold text-slate-900">{t.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we do" title="Six pillars of our programming" description="Every event is designed to teach, showcase, or connect — often all three." align="center" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Technical Workshops", d: "Hands-on labs in AI, cybersecurity, web, cloud, and data — with certificates and take-home projects.", i: "🛠️" },
              { t: "Hackathons & Sprints", d: "12- to 24-hour builds judged by industry mentors. Winners get prizes, internships, and incubation.", i: "💻" },
              { t: "Seminars & Panels", d: "Career pathways, research trends, and honest conversations with alumni and hiring managers.", i: "🎙️" },
              { t: "Research Symposia", d: "Undergraduate papers, poster sessions, and journal recommendations for top work.", i: "🔬" },
              { t: "Cultural & Community", d: "Fusion nights, volunteer drives, and digital literacy outreach for local schools.", i: "🎭" },
              { t: "Competitions", d: "Coding battles, CTFs, game jams, and design challenges that sharpen competitive skills.", i: "🏆" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition bg-white">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">{f.i}</div>
                <h4 className="mt-3 font-display font-bold text-slate-900">{f.t}</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-14 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading light eyebrow="Governance" title="How we’re organized" description="Clear roles, transparent selection, and mentorship at every level — so newcomers ramp up fast." />
              <div className="mt-6 flex gap-3">
                <Link to="/team" className="rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-slate-100">View org chart →</Link>
                <Link to="/contact" className="rounded-full border border-white/20 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white/10">Join us</Link>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { r: "Patron & Advisors", p: "Dean Computing & Dept. Head", d: "Strategic guidance, approvals, and industry links." },
                { r: "Core Committee", p: "President, VP, Secretary, Treasurer", d: "Owns calendar, budget, partnerships, and overall quality." },
                { r: "Wing Leads", p: "Technical, Media, Logistics, PR", d: "Run their verticals with autonomy and accountability." },
                { r: "Volunteers", p: "50+ students per semester", d: "Execution crew — trained, rostered, and recognized." },
              ].map((g) => (
                <div key={g.r} className="rounded-2xl bg-white/10 border border-white/10 p-5 backdrop-blur">
                  <p className="text-xs font-bold tracking-widest uppercase text-cyan-300">{g.r}</p>
                  <p className="font-display font-bold text-white mt-1">{g.p}</p>
                  <p className="text-sm text-slate-400 mt-1">{g.d}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl bg-white p-5 border border-slate-200">
                <h4 className="font-display font-bold text-slate-900">How to join</h4>
                <ol className="mt-2 space-y-1.5 text-sm text-slate-600 list-decimal list-inside">
                  <li>Apply via the volunteer form (open each Fall/Spring) or contact us.</li>
                  <li>Short interview + orientation & training sprint (1 week).</li>
                  <li>Get rostered to a wing and start shipping real events.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
