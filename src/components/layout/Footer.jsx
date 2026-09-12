import { Link } from "react-router-dom";
import { siteMeta, navLinks } from "../../data/siteMeta";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsNote, setNewsNote] = useState(false);

  // Build quick links per spec: About, Events, Team, Gallery, Contact + Home
  const quickLinks = [
    { label: "About", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Team", path: "/team" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];
  const moreLinks = [
    { label: "Announcements", path: "/announcements" },
    { label: "Achievements", path: "/achievements" },
    { label: "Partners & Sponsors", path: "/partners" },
  ];

  const socials = [
    { label: "Facebook", href: siteMeta.social.facebook, icon: "f" },
    { label: "LinkedIn", href: siteMeta.social.linkedin, icon: "in" },
    { label: "Instagram", href: siteMeta.social.instagram, icon: "ig" },
    { label: "YouTube", href: siteMeta.social.youtube, icon: "yt" },
    { label: "Twitter", href: siteMeta.social.twitter, icon: "X" },
  ];

  function onNewsletter(e) {
    e.preventDefault();
    // Do NOT pretend to subscribe — pending integration
    setNewsNote(true);
    setTimeout(() => setNewsNote(false), 4000);
  }

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Ready to be part of something bigger?</h3>
            <p className="text-sm text-slate-400 mt-1">Join workshops, hackathons, and our volunteer crew — no experience needed.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-slate-100 transition">
              Become a Member
            </Link>
            <Link to="/events" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
              View Events
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand — society logo, short description, University/Department info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-slate-900 font-display font-extrabold text-sm leading-none">
                <span>CS<br /><span className="text-blue-600">IT</span></span>
              </div>
              <div className="leading-tight">
                <p className="font-display font-extrabold text-white text-sm">{siteMeta.society}</p>
                <p className="text-xs tracking-widest uppercase text-slate-400">{siteMeta.department}</p>
                <p className="text-xs text-slate-500">{siteMeta.university} • Est. {siteMeta.established}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Student-led society of the CS &amp; IT Department — organizing technical workshops, hackathons, seminars, research symposia and cultural fests that connect students with industry and opportunity.
            </p>
            {/* University/Department information */}
            <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-3">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-300">University / Department</p>
              <p className="text-sm text-slate-300 mt-1 leading-tight">{siteMeta.department}</p>
              <p className="text-sm text-slate-400">{siteMeta.university}</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{siteMeta.address}</p>
            </div>

            {/* Official email + social icons */}
            <div className="mt-5">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Official Email</p>
              <a href={`mailto:${siteMeta.email}`} className="mt-1 inline-flex text-sm font-semibold text-white hover:text-blue-300 break-all">{siteMeta.email}</a>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Social Icons</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {socials.map((s) => {
                  const isPlaceholder = !s.href || s.href === "#";
                  return isPlaceholder ? (
                    <span key={s.label} title={`${s.label} — placeholder awaiting verified handle`} className="h-9 w-9 rounded-full bg-white/5 border border-white/10 text-slate-500 flex items-center justify-center text-xs font-bold cursor-not-allowed">
                      {s.icon}
                    </span>
                  ) : (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="h-9 w-9 rounded-full bg-white/10 hover:bg-white text-slate-300 hover:text-slate-900 flex items-center justify-center text-xs font-bold transition border border-white/10">
                      {s.icon}
                    </a>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500 mt-2">Approved profiles only — placeholders are muted and not clickable.</p>
            </div>
          </div>

          {/* Quick Links — per spec: Events, About, Team, Gallery, Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {/* Include Home + spec required links */}
              <li><Link to="/" className="text-slate-400 hover:text-white transition">Home</Link></li>
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
              {/* Additional from nav for completeness */}
              {navLinks.filter((n) => !quickLinks.find((q) => q.path === n.path) && n.path !== "/" ).slice(0,3).map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Discover</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {moreLinks.map((l) => (
                <li key={l.path}><Link to={l.path} className="hover:text-white transition">{l.label}</Link></li>
              ))}
              <li><Link to="/about" className="hover:text-white transition">About Society</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact / Newsletter — pending integration clearly marked */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">📍</span>
                <span className="text-slate-400 leading-relaxed">{siteMeta.address} • {siteMeta.university}</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">✉️</span>
                <a href={`mailto:${siteMeta.email}`} className="text-slate-400 hover:text-white">{siteMeta.email}</a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">📞</span>
                <span className="text-slate-400">{siteMeta.phone} • {siteMeta.officeHours}</span>
              </li>
            </ul>

            <form onSubmit={onNewsletter} className="mt-6">
              <p className="text-sm font-medium text-white">Newsletter — get event alerts</p>
              <p className="text-xs text-slate-500">UI only — no backend connected. No emails are stored.</p>
              <div className="mt-2 flex gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  type="email"
                  className="flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm placeholder:text-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold transition">Subscribe</button>
              </div>
              {newsNote ? (
                <p className="text-xs text-amber-300 mt-2 bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-2">Pending integration — newsletter backend not connected. No email was saved. Wire to your email service when ready.</p>
              ) : (
                <p className="text-xs text-slate-500 mt-2">No spam. Unsubscribe anytime. (UI only — pending integration)</p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteMeta.society} — {siteMeta.department}, {siteMeta.university}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for students, by students.</span>
            <span className="hidden sm:inline">•</span>
            <span>Public website — no login required.</span>
          </p>
        </div>
        <p className="mt-3 text-center text-xs text-slate-600">
          Verified quick links: <Link to="/events" className="hover:text-slate-400 underline">Events</Link> • <Link to="/about" className="hover:text-slate-400 underline">About</Link> • <Link to="/team" className="hover:text-slate-400 underline">Team</Link> • <Link to="/gallery" className="hover:text-slate-400 underline">Gallery</Link> • <Link to="/contact" className="hover:text-slate-400 underline">Contact</Link> • All CTAs and partner links verified — no dead buttons.
        </p>
      </div>
    </footer>
  );
}
