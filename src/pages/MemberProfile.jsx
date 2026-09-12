import { useParams, Link } from "react-router-dom";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import { team } from "../data/team";
import { events } from "../data/events";
import { siteMeta } from "../data/siteMeta";
import usePageMeta from "../hooks/usePageMeta";

function SocialLink({ href, label, children }) {
  if (!href || href === "#") return null;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition"
    >
      {children}
      {label}
    </a>
  );
}

export default function MemberProfile() {
  const { id } = useParams();
  const member = team.find((m) => m.id === id);
  usePageMeta({
    title: member ? `${member.name} — ${member.role}` : "Member Not Found",
    description: member ? `${member.name}, ${member.role} — ${member.category}, ${member.program} ${member.semester}. ${member.bio}` : "Team member not found.",
  });

  if (!member) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold tracking-widest uppercase">Member not found</div>
        <h1 className="mt-4 font-display text-2xl font-bold">We couldn’t find that profile</h1>
        <p className="text-slate-600 mt-2">This profile doesn’t exist or was moved. Check the Team list — every card links to a working profile.</p>
        <Link to="/team" className="mt-6 inline-flex rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold">Back to Team</Link>
      </div>
    );
  }

  const contributed = events.slice(0, 3);
  const hasPortfolio = member.portfolio && member.portfolio !== "#";

  return (
    <div>
      {/* breadcrumb */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="text-slate-600">/</span>
            <Link to="/team" className="hover:text-white">Team</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white truncate">{member.name}</span>
          </nav>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* left — large photo + quick identity */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                {/* large photo */}
                <div className="relative aspect-[4/4.6] overflow-hidden bg-slate-200">
                  <img src={member.image} alt={`${member.name} — ${member.role}, ${siteMeta.society}`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <Badge variant="softBlue">{member.category}</Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/95 backdrop-blur text-slate-900 px-3 py-1 text-xs font-bold shadow border border-slate-200">
                    {member.events} events
                  </div>
                </div>

                <div className="p-6">
                  {/* full name, position, society name */}
                  <p className="text-[11px] font-bold tracking-widest uppercase text-blue-600">{siteMeta.society}</p>
                  <h1 className="mt-1 font-display text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">{member.name}</h1>
                  <p className="text-sm font-bold tracking-wide uppercase text-slate-700 mt-1">{member.role}</p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">{member.category}</p>

                  {/* short bio */}
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">{member.bio}</p>

                  {/* quick academic + contact */}
                  <div className="mt-6 space-y-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Academic</p>
                      <p className="text-sm font-bold text-slate-900 mt-1">{member.program} • {member.semester}</p>
                      <p className="text-xs text-slate-600 mt-1">{member.department}</p>
                    </div>

                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition">
                      <span className="h-9 w-9 rounded-full bg-slate-900 text-white grid place-items-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z"/><path d="M4 7l8 7 8-7"/></svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Official email</p>
                        <p className="text-sm font-semibold text-slate-900 break-all">{member.email}</p>
                      </div>
                    </a>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-900 text-white p-4 text-center">
                        <p className="font-display text-xl font-extrabold">{member.events}</p>
                        <p className="text-xs tracking-wide uppercase text-slate-400">Events served</p>
                      </div>
                      <div className="rounded-xl bg-blue-600 text-white p-4 text-center">
                        <p className="font-display text-xl font-extrabold">{member.category === "Executive Body" ? "Core" : member.category.split(" ")[0]}</p>
                        <p className="text-xs tracking-wide uppercase text-blue-100">Wing</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a href={member.linkedin !== "#" ? member.linkedin : undefined} onClick={(e) => member.linkedin === "#" && e.preventDefault()} className={`flex-1 rounded-full py-2.5 text-center text-sm font-semibold ${member.linkedin !== "#" ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}>
                        LinkedIn
                      </a>
                      <Link to="/team" className="flex-1 rounded-full border border-slate-200 bg-white py-2.5 text-center text-sm font-semibold hover:bg-slate-50">
                        All members
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right — details */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* responsibilities */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <h2 className="font-display text-lg font-bold text-slate-900">Responsibilities</h2>
                <p className="text-xs text-slate-500 mt-1">What {member.name.split(" ")[0]} is responsible for in {siteMeta.shortName}.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.responsibilities.map((r) => (
                    <span key={r} className="rounded-full bg-white border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* detailed academic & society info */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-white border border-slate-200 p-4">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Program</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{member.program}</p>
                  <p className="text-xs text-slate-500 mt-1">Degree program</p>
                </div>
                <div className="rounded-xl bg-white border border-slate-200 p-4">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Semester</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{member.semester}</p>
                  <p className="text-xs text-slate-500 mt-1">Current standing</p>
                </div>
                <div className="rounded-xl bg-white border border-slate-200 p-4">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Department</p>
                  <p className="mt-1 text-sm font-bold text-slate-900 leading-tight">{member.department}</p>
                  <p className="text-xs text-slate-500 mt-1">{siteMeta.university}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="font-display font-bold text-slate-900">About {member.name}</h3>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">{member.role} • {member.category} • {siteMeta.society}</p>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {member.bio} As <strong>{member.role}</strong> in the <strong>{member.category}</strong> of <strong>{siteMeta.society}</strong>, {member.name.split(" ")[0]} is responsible for{" "}
                  {member.responsibilities.join(", ").toLowerCase()}. Collaborates closely with the Executive Body and faculty advisor to ensure every event is well-planned, inclusive, and memorable. Passionate about mentorship and creating opportunities for juniors to lead.
                </p>
                <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <h4 className="font-display font-bold text-slate-900 text-sm">Message from {member.name.split(" ")[0]}</h4>
                  <p className="mt-2 text-sm text-slate-600 italic leading-relaxed">
                    “EMS taught me that great events are really about people — listening to what students need, sweating the small details, and celebrating every volunteer who shows up. If you’re curious, come volunteer for just one event. You’ll find your people.”
                  </p>
                </div>
              </div>

              {/* social / approved contacts */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-display font-bold text-slate-900">Approved profiles & contact</h3>
                <p className="text-xs text-slate-500 mt-1">Only official, approved links are listed. Personal phone/address is intentionally omitted. Missing icons mean the member has not shared that profile publicly.</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <SocialLink href={member.linkedin} label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </SocialLink>
                  <SocialLink href={member.instagram} label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
                  </SocialLink>
                  <SocialLink href={member.facebook} label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                  </SocialLink>
                  <SocialLink href={member.github} label="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </SocialLink>
                  {hasPortfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l9 4.5v9L12 20 3 15.5v-9L12 2z"/><path d="M3 7.5L12 12l9-4.5"/><path d="M12 12v8"/></svg>
                      Portfolio
                    </a>
                  )}
                </div>
                {!hasPortfolio && (
                  <p className="text-xs text-slate-500 mt-3">Portfolio not shared publicly by this member.</p>
                )}
                <div className="mt-4 rounded-xl bg-white border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-slate-600">Need to reach {member.name.split(" ")[0]}? Use the official email above or the society contact.</p>
                  <a href={`mailto:${member.email}`} className="rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-bold hover:bg-slate-800">
                    Email {member.name.split(" ")[0]} →
                  </a>
                </div>
              </div>

              {/* events contributed */}
              <h3 className="mt-8 font-display text-lg font-bold text-slate-900">Events contributed</h3>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                {contributed.map((ev) => (
                  <Link key={ev.id} to={`/events/${ev.id}`} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition">
                    <img src={ev.image} alt={ev.title} className="aspect-[16/10] object-cover w-full group-hover:scale-105 transition duration-500" loading="lazy" />
                    <div className="p-3">
                      <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{ev.category}</p>
                      <p className="text-sm font-bold leading-tight text-slate-900 group-hover:text-blue-600 line-clamp-2">{ev.title}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact">Contact {member.name.split(" ")[0]}</Button>
                <Button to="/team" variant="outline">Back to Team</Button>
                <Link to={`/team`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-50">
                  View all profiles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
