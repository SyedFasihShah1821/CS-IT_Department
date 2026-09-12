import { Link } from "react-router-dom";
import Badge from "./Badge";

/**
 * Reusable Event Card — structured data, consistent design
 * Required fields: poster/image, name, date, time (if available), venue, category, short description, View Details
 */
export default function EventCard({ event }) {
  const statusVariant = event.status === "Upcoming" ? "success" : event.status === "Ongoing" ? "warning" : "muted";
  const statusLabel = event.status;
  return (
    <Link
      to={`/events/${event.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Poster / Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={event.image}
          alt={`${event.title} poster`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category + status */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge variant="softBlue">{event.category}</Badge>
          <Badge variant={statusVariant}>{statusLabel}</Badge>
        </div>
        {/* Featured ribbon */}
        {event.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-amber-400 text-slate-900 px-2.5 py-1 text-xs font-bold shadow">★ Featured</div>
        )}
        {/* Date pill bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900 shadow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
            {event.date}
          </span>
          <span className="hidden sm:inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold shadow truncate max-w-[45%]">
            {event.venue.split(",")[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Name / Title */}
        <h3 className="font-display font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
          {event.title}
        </h3>

        {/* Short description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2 flex-1">{event.excerpt}</p>

        {/* Meta: date, time, venue */}
        <div className="mt-4 space-y-1.5 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>
              <span className="font-semibold text-slate-900">Date:</span> {event.date}
              {event.time && <><span className="mx-1.5 text-slate-300">•</span><span className="font-semibold text-slate-900">Time:</span> {event.time}</>}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
            <span><span className="font-semibold text-slate-900">Venue:</span> {event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h10" /></svg>
            <span><span className="font-semibold text-slate-900">Category:</span> {event.category}</span>
          </div>
        </div>

        {/* View Details */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">{event.category}</span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:gap-1.5 transition-all">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// Compact variant for upcoming section if needed
export function EventCardCompact({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-3 hover:shadow-md transition">
      <img src={event.image} alt={event.title} className="h-20 w-28 rounded-xl object-cover shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold tracking-widest uppercase text-blue-600">{event.category} • {event.status}</p>
        <h4 className="font-display font-bold text-sm leading-tight text-slate-900 group-hover:text-blue-600 line-clamp-1">{event.title}</h4>
        <p className="text-xs text-slate-600 mt-1">{event.date} • {event.venue}</p>
      </div>
    </Link>
  );
}
