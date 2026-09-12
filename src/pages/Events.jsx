import { useState, useMemo } from "react";
import SectionHeading from "../components/common/SectionHeading";
import Badge from "../components/common/Badge";
import EventCard from "../components/common/EventCard";
import { events } from "../data/events";
import usePageMeta from "../hooks/usePageMeta";

const categories = ["All", "Workshops", "Seminars", "Competitions", "Webinars", "Trainings", "Social/Departmental Events"];
const statuses = ["All", "Upcoming", "Ongoing", "Past"];

export default function Events() {
  usePageMeta({ title: "Events", description: "Browse all society events by time and type — Upcoming, Ongoing and Past across Workshops, Seminars, Competitions, Webinars, Trainings and Social events. 120+ events since 2018." });
  const [activeCat, setActiveCat] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const catOk = activeCat === "All" || e.category === activeCat;
      const qOk = !q || e.title.toLowerCase().includes(q.toLowerCase()) || e.excerpt.toLowerCase().includes(q.toLowerCase()) || e.category.toLowerCase().includes(q.toLowerCase());
      const statusOk = activeStatus === "All" || e.status === activeStatus;
      return catOk && qOk && statusOk;
    });
  }, [activeCat, activeStatus, q]);

  // Group for sectioned view when All statuses
  const grouped = useMemo(() => {
    const byStatus = (status) => filtered.filter((e) => e.status === status);
    return {
      upcoming: byStatus("Upcoming"),
      ongoing: byStatus("Ongoing"),
      past: byStatus("Past"),
    };
  }, [filtered]);

  const counts = {
    total: events.length,
    upcoming: events.filter((e) => e.status === "Upcoming").length,
    ongoing: events.filter((e) => e.status === "Ongoing").length,
    past: events.filter((e) => e.status === "Past").length,
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                Events • {counts.total} total • {counts.upcoming} upcoming • {counts.ongoing} ongoing • {counts.past} past
              </div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Events Calendar</h1>
              <p className="mt-2 text-slate-400 max-w-2xl text-sm lg:text-[15px]">
                Browse by time and type — Upcoming, Ongoing/Current and Past across Workshops, Seminars, Competitions, Webinars, Trainings and Social/Departmental Events. Every card has poster, name, date, time, venue, category and View Details.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/10 border border-white/20 text-slate-300 px-3 py-1">{counts.upcoming} Upcoming</span>
                <span className="rounded-full bg-amber-500 text-slate-900 px-3 py-1 font-bold">{counts.ongoing} Ongoing</span>
                <span className="rounded-full bg-white/10 border border-white/20 text-slate-300 px-3 py-1">{counts.past} Past</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-1 flex items-center gap-1 self-start lg:self-auto shadow-sm">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search events"
                placeholder="Search by name, category, description…"
                className="w-[220px] sm:w-[300px] rounded-full px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400"
              />
              <span className="hidden sm:inline-flex h-8 w-8 rounded-full bg-slate-900 text-white place-items-center justify-center">⌕</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters — category + status */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[68px] lg:top-[108px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Categories */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Event categories</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${
                      activeCat === c ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            {/* Status */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Time</p>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveStatus(s)}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${
                        activeStatus === s ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 self-start lg:self-auto">
                Showing {filtered.length} event{filtered.length !== 1 ? "s" : ""} {activeCat !== "All" && `• ${activeCat}`} {activeStatus !== "All" && `• ${activeStatus}`} {q && `• “${q}”`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content — sectioned by status when All */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center">
              <p className="font-display font-bold text-slate-900">No events match your filters</p>
              <p className="text-sm text-slate-500 mt-1">Try another category, status, or clear search.</p>
              <button
                onClick={() => {
                  setActiveCat("All");
                  setActiveStatus("All");
                  setQ("");
                }}
                className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800"
              >
                Clear filters
              </button>
            </div>
          ) : activeStatus === "All" ? (
            <div className="space-y-12">
              {/* Upcoming */}
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">Upcoming Events</h2>
                  <Badge variant="success">{grouped.upcoming.length} upcoming</Badge>
                  <span className="h-px flex-1 bg-slate-200 hidden sm:block" />
                </div>
                <p className="text-sm text-slate-600 mt-1">Registrations open — secure your spot. All cards show poster, date, time, venue, category and View Details.</p>
                {grouped.upcoming.length === 0 ? (
                  <p className="mt-4 text-sm text-slate-500 italic">No upcoming events for this filter.</p>
                ) : (
                  <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {grouped.upcoming.map((ev) => (
                      <EventCard key={ev.id} event={ev} />
                    ))}
                  </div>
                )}
              </div>

              {/* Ongoing */}
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">Ongoing / Current Events</h2>
                  <Badge variant="warning">{grouped.ongoing.length} ongoing</Badge>
                  <span className="h-px flex-1 bg-slate-200 hidden sm:block" />
                </div>
                <p className="text-sm text-slate-600 mt-1">Happening right now — join online or visit the venue. Updates posted on Announcements.</p>
                {grouped.ongoing.length === 0 ? (
                  <p className="mt-4 text-sm text-slate-500 italic">No ongoing events right now. Check upcoming or past.</p>
                ) : (
                  <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {grouped.ongoing.map((ev) => (
                      <EventCard key={ev.id} event={ev} />
                    ))}
                  </div>
                )}
              </div>

              {/* Past */}
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">Past Events</h2>
                  <Badge variant="muted">{grouped.past.length} past</Badge>
                  <span className="h-px flex-1 bg-slate-200 hidden sm:block" />
                </div>
                <p className="text-sm text-slate-600 mt-1">Highlights and outcomes — browse gallery or read results for details.</p>
                {grouped.past.length === 0 ? (
                  <p className="mt-4 text-sm text-slate-500 italic">No past events for this filter.</p>
                ) : (
                  <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {grouped.past.map((ev) => (
                      <EventCard key={ev.id} event={ev} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Single status filtered view
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">
                  {activeStatus === "Upcoming" ? "Upcoming Events" : activeStatus === "Ongoing" ? "Ongoing / Current Events" : "Past Events"}
                </h2>
                <Badge variant={activeStatus === "Upcoming" ? "success" : activeStatus === "Ongoing" ? "warning" : "muted"}>
                  {filtered.length} {activeStatus.toLowerCase()}
                </Badge>
              </div>
              <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((ev) => (
                  <EventCard key={ev.id} event={ev} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            align="center"
            title="Want to propose an event?"
            description="Students and faculty can pitch Workshops, Seminars, Competitions, Webinars, Trainings or Social events — we’ll help with planning, budgeting, and promotion."
          />
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <a href="/contact" className="rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">
              Contact organizers
            </a>
            <a href="/about" className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-50">
              How we select
            </a>
            <a href="/gallery" className="rounded-full bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold hover:bg-blue-700">
              View gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}