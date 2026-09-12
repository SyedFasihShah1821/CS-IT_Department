import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteMeta } from "../../data/siteMeta";
import Button from "../common/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      {/* Top bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {siteMeta.department} — {siteMeta.society} • Est. {siteMeta.established}
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
        <div className="flex h-[64px] lg:h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <div className="h-10 w-10 lg:h-11 lg:w-11 rounded-xl bg-slate-900 flex items-center justify-center text-white font-display font-extrabold text-sm leading-none shadow-md">
              <span>
                CS
                <br />
                <span className="text-cyan-300">IT</span>
              </span>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-extrabold text-slate-900 text-[13px] lg:text-[15px] tracking-tight">CS & IT Event Management</p>
              <p className="font-display font-extrabold text-slate-900 text-[13px] lg:text-[15px] tracking-tight -mt-1">Society</p>
              <p className="text-[10px] lg:text-[11px] font-medium tracking-widest uppercase text-slate-500">{siteMeta.department}</p>
            </div>
            <div className="sm:hidden leading-tight">
              <p className="font-display font-extrabold text-slate-900 text-sm">CS & IT EMS</p>
              <p className="text-[10px] tracking-widest uppercase text-slate-500">Event Society</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-full p-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:text-slate-900 hover:bg-white"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <Button to="/events" variant="secondary" size="sm" className="rounded-full">
                Explore Events
              </Button>
              <Button to="/contact" size="sm" className="rounded-full">
                Join Us
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold flex items-center justify-between ${isActive ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"}`
                }
              >
                <span>{l.label}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Button to="/events" variant="secondary" onClick={() => setOpen(false)} className="w-full justify-center">
                Explore Events
              </Button>
              <Button to="/contact" onClick={() => setOpen(false)} className="w-full justify-center">
                Join Us
              </Button>
            </div>
            <div className="pt-3 text-xs text-slate-500 text-center border-t border-slate-100 mt-2">
              <p>{siteMeta.email} • {siteMeta.phone}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
