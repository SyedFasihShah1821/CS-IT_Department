import { useParams, Link, useNavigate } from "react-router-dom";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import { events } from "../data/events";
import { sponsors } from "../data/sponsors";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ev = events.find((e) => e.id === id);

  if (!ev) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold tracking-widest uppercase">Not found</div>
        <h1 className="mt-4 font-display text-2xl font-bold">Event not found</h1>
        <p className="text-slate-600 mt-2">The event you’re looking for doesn’t exist or was moved.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => navigate(-1)} variant="outline">Go Back</Button>
          <Button to="/events">Back to Events</Button>
        </div>
      </div>
    );
  }

  const related = events.filter((e) => e.category === ev.category && e.id !== ev.id).slice(0, 3);
  const partnerDetails = ev.partners ? ev.partners.map((pid) => sponsors.find((s) => s.id === pid)).filter(Boolean) : [];
  const isPast = ev.status === "Past";
  const isUpcoming = ev.status === "Upcoming";
  const isOngoing = ev.status === "Ongoing";

  return (
    <div className="overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition">HOME</Link>
            <span>/</span>
            <Link to="/events" className="hover:text-white transition">EVENTS</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-xs">{ev.title}</span>
            <button onClick={() => navigate(-1)} className="ml-auto hidden sm:inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10">
              ← Back
            </button>
          </nav>
        </div>
      </div>

      {/* Large banner / poster */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ev.image} alt={`${ev.title} banner`} className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.22),transparent_60%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            {/* Poster */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-white/10">
                <img src={ev.image} alt={`${ev.title} poster`} className="aspect-[4/3] object-cover w-full" />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded-full bg-white text-slate-900 px-3 py-1 text-xs font-bold shadow">{ev.category}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold shadow ${isUpcoming ? "bg-emerald-500 text-white" : isOngoing ? "bg-amber-400 text-slate-900" : "bg-slate-800 text-white"}`}>{ev.status}</span>
                </div>
                {ev.featured && (
                  <div className="absolute right-3 top-3 rounded-full bg-amber-400 text-slate-900 px-2.5 py-1 text-xs font-bold shadow">★ Featured</div>
                )}
              </div>
            </div>
            {/* Title + meta */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Badge variant="softBlue">{ev.category}</Badge>
                <Badge variant={isUpcoming ? "success" : isOngoing ? "warning" : "muted"}>{ev.status}</Badge>
                {ev.featured && <Badge variant="amber">★ Featured</Badge>}
              </div>
              <h1 className="mt-3 font-display text-3xl lg:text-4xl xl:text-[42px] font-extrabold leading-[0.95] tracking-tight text-white">
                {ev.title}
              </h1>
              <p className="mt-3 text-slate-300 leading-relaxed max-w-2xl">{ev.excerpt}</p>

              {/* Key meta row: date, time, venue, organizer */}
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Date", value: ev.date, icon: "📅" },
                  { label: "Time", value: ev.time, icon: "⏰" },
                  { label: "Venue", value: ev.venue, icon: "📍" },
                  { label: "Organizer", value: ev.organizer || "CS & IT EMS", icon: "🏢" },
                ].map((m) => (
                  <div key={m.label} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-3">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-cyan-200 flex items-center gap-1.5">
                      <span>{m.icon}</span> {m.label}
                    </p>
                    <p className="text-xs font-bold text-white mt-1 leading-tight line-clamp-2">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {ev.registration?.required && isUpcoming && (
                  <Button to={ev.registration.link || "/contact"} size="md" className="shadow-lg">
                    Register Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </Button>
                )}
                {ev.registration?.required && isOngoing && (
                  <Button to="/announcements" size="md" variant="secondary" className="bg-amber-400 text-slate-900 hover:bg-amber-300 border-amber-400">
                    View Live Updates
                  </Button>
                )}
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
                  Contact Organizer
                </Link>
                <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-slate-100 transition">
                  ← Back to Events
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Home → Events → <span className="text-slate-200">{ev.title}</span> — use Back to return
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content — desktop two columns, mobile stacked */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          {/* Left: details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Detailed description */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold tracking-widest uppercase text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Detailed Description
              </div>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">About this event</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{ev.description}</p>
              {ev.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {ev.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Schedule / Agenda */}
            <div>
              <h3 id="agenda" className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center text-sm">🗓️</span>
                Schedule / Agenda
              </h3>
              <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden">
                {ev.agenda.map((a, i) => (
                  <div key={i} className={`flex gap-4 p-4 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} border-b last:border-0 border-slate-100`}>
                    <span className="shrink-0 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold h-fit">{a.time}</span>
                    <span className="text-sm text-slate-700 pt-0.5">{a.item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">* Schedule may be updated — check Announcements for changes.</p>
            </div>

            {/* Highlights */}
            {ev.highlights?.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-xl bg-amber-400 text-slate-900 grid place-items-center text-sm">✨</span>
                  Highlights
                </h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {ev.highlights.map((h) => (
                    <div key={h} className="rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
                      <span className="h-6 w-6 rounded-full bg-amber-500 text-white grid place-items-center text-xs shrink-0 mt-0.5">✓</span>
                      <p className="text-sm text-slate-800 leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speaker / Guest */}
            {ev.speakers?.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center text-sm">🎙️</span>
                  Speaker / Guest
                </h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {ev.speakers.map((s) => (
                    <div key={s.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex gap-3 items-center">
                      <img src={s.image || `https://dummyimage.com/80x80/0f172a/ffffff&text=${encodeURIComponent(s.name.split(" ")[0][0])}`} alt={s.name} className="h-12 w-12 rounded-full object-cover border border-slate-200" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{s.name}</p>
                        <p className="text-xs text-slate-600">{s.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Partner / Sponsor information */}
            {partnerDetails.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center text-sm">🤝</span>
                  Partner / Sponsor Information
                </h3>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {partnerDetails.map((s) => (
                    <a key={s.id} href={s.url} className="rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-md hover:border-blue-200 transition">
                      <img src={s.logo} alt={s.name} className="h-10 object-contain" />
                      <p className="mt-3 font-bold text-slate-900 text-sm">{s.name}</p>
                      <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">{s.tier}</p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{s.description}</p>
                    </a>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <Link to="/partners" className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">
                    View all partners →
                  </Link>
                  <Link to="/contact" className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-700">
                    Become a Partner
                  </Link>
                </div>
              </div>
            )}

            {/* Gallery / Results after completion */}
            {(isPast || (ev.gallery && ev.gallery.length > 0) || ev.results) && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-8 w-8 rounded-xl bg-emerald-600 text-white grid place-items-center text-sm">🖼️</span>
                  Gallery / Results {isPast ? "— After Completion" : ""}
                </h3>

                {ev.gallery?.length > 0 && (
                  <>
                    <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
                      {ev.gallery.map((src, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                          <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                      ))}
                    </div>
                    <Link to="/gallery" className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                      View full gallery →
                    </Link>
                  </>
                )}

                {ev.results ? (
                  <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Results</p>
                    <p className="mt-1 text-sm text-slate-700 leading-relaxed">{ev.results.summary}</p>
                    {ev.results.winners?.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Winners / Top</p>
                        <ul className="mt-2 space-y-1">
                          {ev.results.winners.map((w) => (
                            <li key={w} className="flex gap-2 text-sm text-slate-800">
                              <span className="text-amber-500">🏆</span> {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {ev.results.stats && <p className="mt-3 text-xs text-slate-500 italic">{ev.results.stats}</p>}
                  </div>
                ) : (
                  isPast && <p className="mt-4 text-sm text-slate-500">Results and gallery will be published here after completion. Check Announcements for updates.</p>
                )}

                {!isPast && !ev.gallery?.length && !ev.results && (
                  <p className="mt-4 text-sm text-slate-500">Gallery and results will appear here after the event is completed. Follow Announcements for live updates.</p>
                )}
              </div>
            )}
          </div>

          {/* Right: sticky sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[112px] self-start">
            {/* At a glance */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-display font-bold text-slate-900">At a glance</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li className="flex gap-3">
                  <span className="text-slate-400">📅</span>
                  <span>
                    <strong>Date:</strong> {ev.date}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">⏰</span>
                  <span>
                    <strong>Time:</strong> {ev.time}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">📍</span>
                  <span>
                    <strong>Venue:</strong> {ev.venue}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">🏢</span>
                  <span>
                    <strong>Organizer:</strong> {ev.organizer}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">🏷️</span>
                  <span>
                    <strong>Category:</strong> {ev.category}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">🎟️</span>
                  <span>
                    <strong>Status:</strong> {ev.status}
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {ev.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Registration information */}
            {ev.registration && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center">🎫</span>
                  <h3 className="font-display font-bold text-slate-900">Registration</h3>
                  <span className={`ml-auto rounded-full px-2.5 py-1 text-xs font-bold ${ev.registration.required ? "bg-amber-400 text-slate-900" : "bg-slate-100 text-slate-700"}`}>
                    {ev.registration.required ? "Required" : "Open"}
                  </span>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Deadline</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{ev.registration.deadline}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Fee</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{ev.registration.fee}</p>
                  </div>
                  <div className="rounded-xl bg-blue-50 border border-blue-200 p-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Instructions</p>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed">{ev.registration.instructions}</p>
                  </div>
                </div>
                {(isUpcoming || isOngoing) && (
                  <Link
                    to={ev.registration.link || "/contact"}
                    className="mt-4 block text-center rounded-full bg-slate-900 text-white py-2.5 text-sm font-semibold hover:bg-slate-800"
                  >
                    {isOngoing ? "Join / Contact" : "Register via Contact"}
                  </Link>
                )}
                {isPast && (
                  <Link to="/gallery" className="mt-4 block text-center rounded-full bg-slate-900 text-white py-2.5 text-sm font-semibold hover:bg-slate-800">
                    View Gallery & Results
                  </Link>
                )}
                <p className="text-xs text-slate-500 text-center mt-2">Public event — no login required.</p>
              </div>
            )}

            {/* Back nav */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="font-display font-bold text-slate-900">Navigate</h4>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                >
                  ← Back
                </button>
                <Link to="/events" className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold text-center hover:bg-slate-800">
                  All Events
                </Link>
                <Link to="/" className="col-span-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-center hover:bg-slate-50">
                  ← Home
                </Link>
              </div>
              <div className="mt-4 flex gap-2">
                {["Facebook", "LinkedIn", "WhatsApp"].map((n) => (
                  <button
                    key={n}
                    onClick={() => alert(`Share on ${n} — UI only`)}
                    className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-slate-50"
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-slate-900">Related events</h3>
              <Link to="/events" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View all →
              </Link>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/events/${r.id}`}
                  className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition"
                >
                  <img src={r.image} alt={r.title} className="aspect-[16/10] object-cover w-full group-hover:scale-105 transition duration-500" />
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{r.category} • {r.date}</p>
                    <h4 className="font-display font-bold text-slate-900 leading-tight group-hover:text-blue-600 line-clamp-2">{r.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{r.venue}</p>
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
