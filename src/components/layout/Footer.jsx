import { Link } from "react-router-dom";
import { siteMeta, navLinks } from "../../data/siteMeta";

export default function Footer() {
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
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-slate-900 font-display font-extrabold text-sm leading-none">
                <span>CS<br /><span className="text-blue-600">IT</span></span>
              </div>
              <div className="leading-tight">
                <p className="font-display font-extrabold text-white text-sm">CS & IT Event Management Society</p>
                <p className="text-xs tracking-widest uppercase text-slate-400">Dept. of CS & IT</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Student-led society of the CS & IT Department — organizing technical workshops, hackathons, seminars, research symposia and cultural fests that connect students with industry and opportunity.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { label: "f", href: siteMeta.social.facebook },
                { label: "in", href: siteMeta.social.linkedin },
                { label: "ig", href: siteMeta.social.instagram },
                { label: "yt", href: siteMeta.social.youtube },
              ].map((s) => (
                <a key={s.label} href={s.href} className="h-9 w-9 rounded-full bg-white/10 hover:bg-white text-slate-300 hover:text-slate-900 flex items-center justify-center text-xs font-bold transition">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.slice(0, 6).map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li><Link to="/achievements" className="hover:text-white">Achievements</Link></li>
              <li><Link to="/partners" className="hover:text-white">Partners & Sponsors</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/announcements" className="hover:text-white">Announcements</Link></li>
              <li><a href="#" className="hover:text-white">Code of Conduct</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">📍</span>
                <span className="text-slate-400 leading-relaxed">{siteMeta.address}</span>
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

            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <p className="text-sm font-medium text-white">Newsletter — get event alerts</p>
              <div className="mt-2 flex gap-2">
                <input placeholder="Your email" className="flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm placeholder:text-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold transition">Subscribe</button>
              </div>
              <p className="text-xs text-slate-500 mt-2">No spam. Unsubscribe anytime. (UI only — no backend)</p>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CS & IT Event Management Society — Department of Computer Science & Information Technology. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for students, by students.</span>
            <span className="hidden sm:inline">•</span>
            <span>Public website — no login required.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
