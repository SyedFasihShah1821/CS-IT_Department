import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { siteMeta } from "../data/siteMeta";

export default function About() {
  return (
    <div>
      {/* Hero — Society Introduction anchor */}
      <section className="bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80&auto=format&fit=crop" alt="CS & IT Event Management Society" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              About • {siteMeta.society}
            </div>
            <h1 className="mt-4 font-display text-3xl lg:text-5xl font-extrabold leading-tight text-white">
              We turn the CS & IT Department into a stage for builders.
            </h1>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Founded in 2018, the Event Management Society (EMS) is the official student body that plans, promotes, and produces every major technical and cultural gathering of the {siteMeta.department} at {siteMeta.university}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/events">View Events</Button>
              <Button to="/team" variant="secondary" className="bg-white text-slate-900">Meet the Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIETY INTRODUCTION */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Society Introduction"
                title="The official event backbone of CS & IT"
                description="A student-led, faculty-guided society with 250+ volunteers across four wings — Technical, Media, Logistics and PR. We own the calendar, the checklists, and the culture."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  The <span className="font-semibold text-slate-900">{siteMeta.society}</span> was formed to bridge the gap between classroom learning and real-world experience. Under the patronage of the Dean, Faculty of Computing and mentorship of the Head of Department, we curate a year-round program that is <span className="font-semibold text-slate-900">student-led, industry-aligned, and community-driven</span>.
                </p>
                <p>
                  Every semester we run 10–12 events — from flagship symposia like TechNex to intimate webinars and department socials — reaching over 3,500 students since 2018. Our focus is <span className="font-semibold text-slate-900">learning by doing</span>: students plan budgets, negotiate sponsorships, design posters, host speakers, and run the show.
                </p>
                <p>
                  We are a <span className="font-semibold text-slate-900">public society</span> — no membership fee, no login wall. Anyone can attend, anyone can volunteer, and every contribution is recognized with certificates, mentorship, and portfolio-worthy experience.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: "2018", l: "Founded" },
                  { v: "250+", l: "Active Members" },
                  { v: "4", l: "Wings" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center">
                    <p className="font-display text-xl font-extrabold text-slate-900">{s.v}</p>
                    <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop" alt="Students collaborating" className="aspect-[16/10] object-cover w-full" />
                <div className="p-5">
                  <h3 className="font-display font-bold text-slate-900">How we work</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><span className="text-blue-600">✓</span> Faculty advisors approve scope & budget</li>
                    <li className="flex gap-2"><span className="text-blue-600">✓</span> Core committee owns planning & quality</li>
                    <li className="flex gap-2"><span className="text-blue-600">✓</span> Wing leads execute with volunteer crews</li>
                    <li className="flex gap-2"><span className="text-blue-600">✓</span> Post-event retro → public report & certificates</li>
                  </ul>
                  <Link to="/team" className="mt-4 inline-flex rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800">
                    View governance →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <div className="rounded-2xl bg-slate-900 text-white p-8 border border-slate-800 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/15 grid place-items-center text-xl">👁️</div>
              <p className="mt-4 text-xs font-bold tracking-widest uppercase text-cyan-300">Vision</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight">To be the most trusted student platform on campus</h3>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Known for flawless execution, industry relevance, and inclusive culture — where any student, regardless of background, can find a team, a mentor, and a stage to grow.
              </p>
              <div className="mt-6 rounded-xl bg-white/10 border border-white/10 p-4">
                <p className="text-sm text-slate-200 italic">“A society where execution is the culture and every volunteer leaves more capable than they arrived.”</p>
              </div>
            </div>
            {/* Mission */}
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-blue-600 text-white grid place-items-center text-xl">🎯</div>
              <p className="mt-4 text-xs font-bold tracking-widest uppercase text-blue-600">Mission</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight text-slate-900">Create platforms where students learn by doing</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Design high-quality workshops, competitions, seminars and socials that build real skills, real portfolios, and real friendships — with clear learning outcomes and open access.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-blue-600">•</span> Inclusive by design — no prior experience required</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> Industry-mentored — judges, speakers, and hiring partners</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> Portfolio-driven — certificates, projects, and references</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Objectives"
            title="Eight clear objectives drive every event"
            description="From first-year welcome to final-year showcase — our objectives keep 250 volunteers aligned on what success means."
            align="center"
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Bridge Theory & Practice", d: "Move learning from slides to studios with hands-on labs and builds.", i: "🔗" },
              { t: "Build Technical Depth", d: "Workshops, trainings, and webinars in AI, cloud, security, and data.", i: "🛠️" },
              { t: "Foster Competitive Spirit", d: "Competitions, hackathons, and CTFs that reward problem-solving.", i: "🏆" },
              { t: "Connect to Industry", d: "Seminars, panels, and mentorship with hiring partners and alumni.", i: "🤝" },
              { t: "Strengthen Community", d: "Social & departmental events that welcome, recognize, and retain talent.", i: "🎭" },
              { t: "Nurture Leadership", d: "Give students ownership of budgets, teams, and stages.", i: "🌱" },
              { t: "Ensure Inclusivity", d: "Open attendance, transparent selection, and need-blind volunteering.", i: "💎" },
              { t: "Document & Share", d: "Post-event reports, recordings, and galleries for lasting impact.", i: "📚" },
            ].map((o) => (
              <div key={o.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-lg transition">
                <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 grid place-items-center text-lg">{o.i}</div>
                <h4 className="mt-3 font-display font-bold text-slate-900 leading-tight">{o.t}</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Six formats, one standard: excellent" description="Every event type has a playbook — so quality is predictable, even as topics change." align="center" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Workshops", d: "Hands-on labs (AI, security, web) — 40–60 seats, live VMs, certificates.", i: "🛠️", link: "/events", count: "45+ held" },
              { t: "Seminars", d: "Keynotes & panels on research, careers, and emerging tech with faculty & industry.", i: "🎙️", link: "/events", count: "25+ held" },
              { t: "Competitions", d: "Hackathons, CodeBattle, CTFs and GameJam — prizes, internships, incubation.", i: "🏆", link: "/events", count: "30+ held" },
              { t: "Webinars", d: "Live online sessions (90 min) with Q&A and recordings — open to all departments.", i: "💻", link: "/events", count: "12+ held" },
              { t: "Trainings", d: "Multi-day bootcamps (Cloud, Data, Flutter) — from zero to deployable project.", i: "📈", link: "/events", count: "18+ held" },
              { t: "Social / Departmental Events", d: "Welcome Bash, Fusion Fest, awards and networking dinners that build belonging.", i: "🎭", link: "/events", count: "15+ held" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg hover:border-blue-200 transition">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">{f.i}</div>
                  <span className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600">{f.count}</span>
                </div>
                <h4 className="mt-3 font-display font-bold text-slate-900">{f.t}</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{f.d}</p>
                <Link to={f.link} className="mt-3 inline-flex text-xs font-bold text-blue-600 hover:text-blue-700">Explore {f.t} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLE IN CS & IT DEPARTMENT */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Role in CS & IT Department"
                title="The department’s execution arm"
                description="We are not an external club — we are embedded in the department’s academic mission, calendar, and quality processes."
              />
              <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>Appointed by the Head of Department and overseen by the Dean, Faculty of Computing, EMS manages the <span className="font-semibold text-slate-900">co-curricular calendar</span> that complements core courses.</p>
                <p>We handle <span className="font-semibold text-slate-900">logistics, outreach, and reporting</span> for flagship events, freeing faculty to focus on mentorship and evaluation.</p>
              </div>
              <div className="mt-6 flex gap-3">
                <Button to="/events" variant="outline">View Events</Button>
                <Button to="/achievements">Achievements</Button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Academic Complement", d: "Workshops mapped to courses (DS, OS, AI) and trainings that fill skill gaps before FYP.", icon: "📚" },
                { t: "Talent Pipeline", d: "Flagship events surface top students for research, TA-ships, and partner internships.", icon: "🔭" },
                { t: "Industry Interface", d: "We coordinate judges, speakers, and sponsors — single point of contact for partners.", icon: "🏢" },
                { t: "Quality & Records", d: "Budgets, attendance, feedback, and post-event reports archived for accreditation.", icon: "📋" },
                { t: "Community Stewardship", d: "Onboarding, recognition, and alumni network keep institutional knowledge alive.", icon: "🤝" },
                { t: "Outreach", d: "Social events and digital literacy drives extend impact beyond the department.", icon: "🌍" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-md transition">
                  <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 grid place-items-center">{c.icon}</div>
                  <h4 className="mt-3 font-display font-bold text-slate-900 text-sm">{c.t}</h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Department stats */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { k: "120+", v: "Events co-run with department" },
              { k: "18", v: "Faculty mentors engaged" },
              { k: "6", v: "Partner-led trainings yearly" },
              { k: "100%", v: "Transparent reporting" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-slate-900 text-white p-5 text-center">
                <p className="font-display text-2xl font-extrabold">{s.k}</p>
                <p className="text-xs text-slate-400 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT DEVELOPMENT */}
      <section className="py-14 lg:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.18),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Student Development"
                title="Where volunteers become professionals"
                description="Every role is a learning path — with training, feedback, and a portfolio to show for it."
              />
              <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 p-5 backdrop-blur">
                <h4 className="font-display font-bold text-white">From volunteer to lead in one semester</h4>
                <ol className="mt-3 space-y-2 text-sm text-slate-300">
                  <li><span className="font-bold text-white">Week 1–2:</span> Orientation & wing training (Technical/Media/Logistics/PR)</li>
                  <li><span className="font-bold text-white">Week 3–6:</span> Shadow a senior on a live event</li>
                  <li><span className="font-bold text-white">Week 7–12:</span> Own a deliverable — poster, budget, or stage</li>
                  <li><span className="font-bold text-white">End:</span> Certificate + feedback + opportunity to lead next event</li>
                </ol>
                <Link to="/team" className="mt-4 inline-flex rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-semibold hover:bg-slate-100">
                  Meet mentors →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Technical Skills", d: "AI, cloud, security, data, web — learned by hosting, not just attending.", i: "💻", stat: "45+ labs" },
                { t: "Soft Skills", d: "Public speaking, negotiation, time management, and crisis handling on live stages.", i: "🗣️", stat: "1:5 mentor ratio" },
                { t: "Leadership", d: "Own a budget, manage a team, and debrief with faculty — real ownership.", i: "🌟", stat: "30% become leads" },
                { t: "Career Link", d: "Top performers get referrals, portfolio reviews, and partner interviews.", i: "🚀", stat: "18 placed" },
                { t: "Recognition", d: "Certificates, awards at Fusion Fest, and LinkedIn endorsements from advisors.", i: "🏅", stat: "100% certified" },
                { t: "Community", d: "Friends across batches, alumni network, and a culture of helping juniors.", i: "💙", stat: "250+ members" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-white p-5 border border-slate-200 hover:shadow-lg transition">
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center">{c.i}</div>
                    <span className="rounded-full bg-blue-50 border border-blue-200 text-blue-700 px-2.5 py-1 text-xs font-bold">{c.stat}</span>
                  </div>
                  <h4 className="mt-3 font-display font-bold text-slate-900">{c.t}</h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT MANAGEMENT ACTIVITIES */}
      <section className="py-14 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Event Management Activities"
            title="How we ship excellent events — every time"
            description="A five-stage playbook that scales from a 60-seat workshop to a 600-person symposium."
            align="center"
          />

          {/* Process */}
          <div className="mt-10 grid lg:grid-cols-5 gap-4">
            {[
              { step: "01", t: "Ideation", d: "Faculty + students propose, core committee prioritizes by learning outcome.", color: "bg-blue-600" },
              { step: "02", t: "Planning", d: "Budget, venue, speakers, and risk plan — signed off by advisors.", color: "bg-slate-900" },
              { step: "03", t: "Promotion", d: "Posters, socials, classroom pitches, and registration tracking.", color: "bg-cyan-600" },
              { step: "04", t: "Execution", d: "Run-sheet, volunteer roster, live troubleshooting, hospitality.", color: "bg-amber-500" },
              { step: "05", t: "Feedback", d: "Attendee survey, retro, report, certificates, and gallery.", color: "bg-emerald-600" },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg transition">
                <div className={`h-8 w-8 rounded-full ${s.color} text-white grid place-items-center text-xs font-extrabold`}>{s.step}</div>
                <h4 className="mt-3 font-display font-bold text-slate-900">{s.t}</h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          {/* Activities by type + timeline hint */}
          <div className="mt-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h3 className="font-display font-bold text-slate-900">Year-round activity calendar</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Monthly", d: "1–2 webinars or seminars (career, research, industry)." },
                  { t: "Bi-monthly", d: "1 hands-on workshop or training (40–60 seats)." },
                  { t: "Quarterly", d: "1 competition (CodeBattle, CTF, GameJam) or research symposium." },
                  { t: "Semesterly", d: "1 flagship (TechNex) + 1 social (Welcome Bash / Fusion Fest)." },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-600">{c.t}</p>
                    <p className="text-sm text-slate-600 mt-1">{c.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/events" className="rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">View all events</Link>
                <Link to="/gallery" className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-50">View gallery</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h4 className="font-display font-bold text-slate-900">What “done” means</h4>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Budget reconciled and published internally</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Attendance & feedback collected (avg 4.8/5)</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Photos/web gallery updated within 48h</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Certificates sent within 72h</li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span> Retro notes archived for next team</li>
                </ul>
                <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">📋</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Need the playbook?</p>
                    <p className="text-xs text-slate-500">Contact us for the volunteer onboarding kit.</p>
                  </div>
                  <Link to="/contact" className="ml-auto rounded-full bg-blue-600 text-white px-4 py-1.5 text-xs font-bold hover:bg-blue-700">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-xl font-bold text-slate-900">Ready to build with us?</h3>
          <p className="text-sm text-slate-600 mt-2">Whether you want to attend, volunteer, or partner — there’s a place for you.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/events" className="rounded-full bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold hover:bg-blue-700">View events</Link>
            <Link to="/contact" className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-50">Contact us</Link>
            <Link to="/team" className="rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">Meet the team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
