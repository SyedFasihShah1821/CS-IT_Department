import { useParams, Link } from "react-router-dom";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import { events } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const ev = events.find((e) => e.id === id);

  if (!ev) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Event not found</h1>
        <p className="text-slate-600 mt-2">The event you’re looking for doesn’t exist or was moved.</p>
        <Link to="/events" className="mt-6 inline-flex rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold">
          Back to events
        </Link>
      </div>
    );
  }

  const related = events.filter((e) => e.category === ev.category && e.id !== ev.id).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb & hero */}
      <div className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/events" className="hover:text-white">Events</Link>
            <span>/</span>
            <span className="text-white">{ev.title.slice(0, 40)}…</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ev.image} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Badge variant="softBlue">{ev.category}</Badge>
                <Badge variant={ev.status === "Upcoming" ? "success" : "muted"}>{ev.status}</Badge>
                <span className="inline-flex items-center rounded-full bg-white text-slate-900 px-3 py-1 text-xs font-bold">{ev.date} • {ev.time}</span>
              </div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold leading-tight text-white">{ev.title}</h1>
              <p className="mt-3 text-slate-300 leading-relaxed">{ev.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact">Register / Inquire</Button>
                <a href="#agenda" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white/10">
                  View agenda
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: ev.date, v: "Date" },
                  { k: ev.time.split("–")[0].trim(), v: "Start" },
                  { k: ev.venue, v: "Venue" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur">
                    <p className="text-xs font-bold tracking-widest uppercase text-cyan-200">{s.v}</p>
                    <p className="text-xs font-semibold text-white mt-1 leading-tight">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-white shadow-2xl">
                <img src={ev.image} alt={ev.title} className="aspect-[16/10] object-cover w-full" />
                <div className="p-5">
                  <h3 className="font-display font-bold text-slate-900">At a glance</h3>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    <li className="flex gap-3"><span className="text-slate-400">📅</span> <span><strong>Date:</strong> {ev.date}</span></li>
                    <li className="flex gap-3"><span className="text-slate-400">⏰</span> <span><strong>Time:</strong> {ev.time}</span></li>
                    <li className="flex gap-3"><span className="text-slate-400">📍</span> <span><strong>Venue:</strong> {ev.venue}</span></li>
                    <li className="flex gap-3"><span className="text-slate-400">🏷️</span> <span><strong>Category:</strong> {ev.category}</span></li>
                    <li className="flex gap-3"><span className="text-slate-400">🎟️</span> <span><strong>Status:</strong> {ev.status} {ev.status === "Upcoming" ? "— registrations via Contact page" : "— see gallery for highlights"}</span></li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ev.tags.map((t) => (
                      <span key={t} className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-medium">#{t}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-5 block text-center rounded-full bg-slate-900 text-white py-2.5 text-sm font-semibold hover:bg-slate-800">
                    Contact organizers
                  </Link>
                  <p className="text-xs text-slate-500 text-center mt-2">Public event — no login required to inquire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="font-display text-xl font-bold text-slate-900">About this event</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{ev.description}</p>

            <h3 id="agenda" className="mt-8 font-display text-lg font-bold text-slate-900">Agenda</h3>
            <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden">
              {ev.agenda.map((a, i) => (
                <div key={i} className={`flex gap-4 p-4 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} border-b last:border-0 border-slate-100`}>
                  <span className="shrink-0 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold h-fit">{a.time}</span>
                  <span className="text-sm text-slate-700 pt-0.5">{a.item}</span>
                </div>
              ))}
            </div>

            {ev.speakers.length > 0 && (
              <>
                <h3 className="mt-8 font-display text-lg font-bold text-slate-900">Speakers & Hosts</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {ev.speakers.map((s) => (
                    <div key={s.name} className="rounded-2xl border border-slate-200 p-4 flex gap-3 items-center bg-slate-50">
                      <div className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center font-bold">{s.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{s.name}</p>
                        <p className="text-xs text-slate-600">{s.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
              <h4 className="font-display font-bold text-slate-900">Need to register?</h4>
              <p className="text-sm text-slate-600 mt-1">Registrations are handled via the Contact page or at the CS & IT office. No online login needed.</p>
              <Link to="/contact" className="mt-4 block text-center rounded-full bg-blue-600 text-white py-2.5 text-sm font-semibold hover:bg-blue-700">Go to Contact</Link>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h4 className="font-display font-bold text-slate-900">Share this event</h4>
              <div className="mt-3 flex gap-2">
                {["Facebook", "LinkedIn", "WhatsApp"].map((n) => (
                  <button key={n} onClick={() => alert(`Share on ${n} — UI only`)} className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-slate-50">
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-display text-lg font-bold text-slate-900">Related events</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/events/${r.id}`} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition">
                  <img src={r.image} alt={r.title} className="aspect-[16/10] object-cover w-full group-hover:scale-105 transition duration-500" />
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{r.category}</p>
                    <h4 className="font-display font-bold text-slate-900 leading-tight group-hover:text-blue-600">{r.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{r.date} • {r.venue}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
