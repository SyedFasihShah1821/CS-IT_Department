import { useParams, Link } from "react-router-dom";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import { team } from "../data/team";
import { events } from "../data/events";

export default function MemberProfile() {
  const { id } = useParams();
  const member = team.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Member not found</h1>
        <p className="text-slate-600 mt-2">This profile doesn’t exist or was moved.</p>
        <Link to="/team" className="mt-6 inline-flex rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold">Back to team</Link>
      </div>
    );
  }

  const contributed = events.slice(0, 3);

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/team" className="hover:text-white">Team</Link>
            <span>/</span>
            <span className="text-white">{member.name}</span>
          </nav>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <div className="aspect-[4/4.5] overflow-hidden bg-slate-200">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <Badge variant="softBlue">{member.category}</Badge>
                  <h1 className="mt-3 font-display text-2xl font-extrabold text-slate-900 leading-tight">{member.name}</h1>
                  <p className="text-sm font-semibold tracking-wide uppercase text-blue-600">{member.role}</p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{member.bio}</p>

                  <div className="mt-5 space-y-3">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50">
                      <span className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center text-xs">✉️</span>
                      <div>
                        <p className="text-xs font-bold tracking-wide uppercase text-slate-500">Email</p>
                        <p className="text-sm font-medium text-slate-900">{member.email}</p>
                      </div>
                    </a>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-900 text-white p-4 text-center">
                        <p className="font-display text-xl font-extrabold">{member.events}</p>
                        <p className="text-xs tracking-wide uppercase text-slate-400">Events</p>
                      </div>
                      <div className="rounded-xl bg-blue-600 text-white p-4 text-center">
                        <p className="font-display text-xl font-extrabold">4.9</p>
                        <p className="text-xs tracking-wide uppercase text-blue-100">Rating</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={member.linkedin} className="flex-1 rounded-full bg-slate-900 text-white py-2.5 text-center text-sm font-semibold hover:bg-slate-800">LinkedIn</a>
                      <Link to="/team" className="flex-1 rounded-full border border-slate-200 bg-white py-2.5 text-center text-sm font-semibold hover:bg-slate-50">All members</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-display text-xl font-bold text-slate-900">Responsibilities</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {member.responsibilities.map((r) => (
                  <span key={r} className="rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700">
                    {r}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 font-display text-lg font-bold text-slate-900">About</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {member.bio} As <strong>{member.role}</strong> in the <strong>{member.category}</strong>, {member.name.split(" ")[0]} is responsible for{" "}
                {member.responsibilities.join(", ").toLowerCase()}. Collaborates closely with faculty advisors and the core committee to ensure every event is
                well-planned, inclusive, and memorable. Passionate about mentorship and creating opportunities for juniors to lead.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <h4 className="font-display font-bold text-slate-900">Message from {member.name.split(" ")[0]}</h4>
                <p className="mt-2 text-sm text-slate-600 italic leading-relaxed">
                  “EMS taught me that great events are really about people — listening to what students need, sweating the small details, and celebrating every volunteer who shows up. If you’re curious, come volunteer for just one event. You’ll find your people.”
                </p>
              </div>

              <h3 className="mt-8 font-display text-lg font-bold text-slate-900">Events contributed</h3>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                {contributed.map((ev) => (
                  <Link key={ev.id} to={`/events/${ev.id}`} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition">
                    <img src={ev.image} alt={ev.title} className="aspect-[16/10] object-cover w-full group-hover:scale-105 transition duration-500" />
                    <div className="p-3">
                      <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{ev.category}</p>
                      <p className="text-sm font-bold leading-tight text-slate-900 group-hover:text-blue-600">{ev.title}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Button to="/contact">Contact {member.name.split(" ")[0]}</Button>
                <Button to="/team" variant="outline">Back to team</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
