import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteMeta } from "../../data/siteMeta";

/**
 * Professional Header — Design System aligned
 * - Logo placeholder (swap with official logo: replace div with <img src="/logo.svg" alt="EMS Logo" />)
 * - Society name + Department/University identity
 * - 9 primary routes uppercase
 * - Upcoming Events CTA
 * - Responsive mobile menu with subtle slide animation
 */

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      {/* Top identity bar — Department/University + utility */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <p className="flex items-center gap-2 tracking-wide">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">{siteMeta.department}</span>
            <span className="opacity-40">•</span>
            <span>{siteMeta.university}</span>
            <span className="hidden xl:inline-flex items-center gap-2 ml-2 pl-2 border-l border-white/15">
              Est. {siteMeta.established} • {siteMeta.society}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteMeta.email}`} className="hover:text-white transition-colors">
              {siteMeta.email}
            </a>
            <span className="opacity-30">|</span>
            <span>{siteMeta.phone}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] lg:h-[76px] items-center justify-between gap-4">
          {/* Brand: Logo placeholder + Society name + Department/University identity */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            onClick={() => setOpen(false)}
            aria-label="CS & IT Event Management Society — Home"
          >
            {/* Logo placeholder — replace with <img> when official logo is available */}
            <div className="h-11 w-11 lg:h-[46px] lg:w-[46px] rounded-xl bg-slate-900 flex items-center justify-center shadow-sm ring-1 ring-slate-900/5 group-hover:shadow-md transition-shadow shrink-0 overflow-hidden border border-slate-800">
              {/* Placeholder graphic */}
              <div className="text-center leading-none">
                <div className="flex items-center justify-center gap-0.5">
                  <span className="h-6 w-[3px] rounded-full bg-white" />
                  <span className="h-7 w-[3px] rounded-full bg-cyan-300" />
                  <span className="h-5 w-[3px] rounded-full bg-blue-400" />
                </div>
                <p className="font-display font-extrabold text-[9px] tracking-widest text-white mt-1">EMS</p>
              </div>
            </div>

            <div className="leading-tight">
              {/* Society name — primary identity */}
              <p className="font-display font-extrabold text-slate-900 text-[13.5px] lg:text-[15px] tracking-tight leading-none">
                CS & IT Event Management Society
              </p>
              {/* Department/University identity — secondary, always visible */}
              <p className="text-[11px] lg:text-xs font-medium tracking-wide text-slate-500 mt-0.5 hidden sm:block">
                {siteMeta.department}
                <span className="hidden lg:inline"> • {siteMeta.university}</span>
              </p>
              <p className="text-[10px] tracking-widest uppercase text-slate-500 sm:hidden">
                {siteMeta.shortName} • {siteMeta.university}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation — 9 items, uppercase, pill container */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-full p-1 shadow-sm"
            aria-label="Primary navigation"
          >
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Upcoming Events CTA — desktop */}
            <Link
              to="/events"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Upcoming Events
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation — responsive, card-style links */}
      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-fade-in"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Identity hint on mobile */}
            <div className="mb-3 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-medium text-slate-600 leading-tight">
                <span className="font-semibold text-slate-900">{siteMeta.department}</span>
                <span className="hidden sm:inline"> • {siteMeta.university}</span>
              </p>
            </div>

            <div className="grid gap-1.5">
              {navLinks.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-bold tracking-widest uppercase flex items-center justify-between transition ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                    }`
                  }
                >
                  <span>{l.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </NavLink>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 grid gap-2">
              <Link
                to="/events"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm font-bold tracking-widest uppercase shadow-sm transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Upcoming Events
              </Link>
              <div className="flex gap-2">
                <a
                  href={`mailto:${siteMeta.email}`}
                  className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {siteMeta.email}
                </a>
              </div>
              <p className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100 mt-1">
                Public website — no login required • {siteMeta.shortName}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
