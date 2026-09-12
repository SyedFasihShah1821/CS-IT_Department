import { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import { siteMeta } from "../data/siteMeta";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    const ok = validate();
    if (!ok) {
      setSubmitted(false);
      return;
    }
    // Do NOT pretend to send email — backend not connected. Show pending-integration notice.
    setSubmitted(true);
    // Keep values for demo inspection; optionally log to console for devs
    console.log("[Contact form preview — not sent]", form);
  }

  const mapsQuery = encodeURIComponent(siteMeta.address);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">Contact Us • Public • No login required</div>
            <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Contact Us</h1>
            <p className="mt-3 text-slate-400 leading-relaxed">
              Reach the CS &amp; IT Event Management Society for questions, volunteering, partnership or general inquiry. We reply within 24 hours on working days.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur flex gap-3">
              <span className="h-8 w-8 rounded-full bg-white text-slate-900 grid place-items-center shrink-0">✉️</span>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-blue-100">Official Email</p>
                <a href={`mailto:${siteMeta.email}`} className="text-sm font-semibold text-white hover:text-blue-200 break-all">{siteMeta.email}</a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur flex gap-3">
              <span className="h-8 w-8 rounded-full bg-amber-400 text-slate-900 grid place-items-center shrink-0 font-bold">📞</span>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-amber-200">Approved Phone</p>
                <p className="text-sm font-semibold text-white">{siteMeta.phone}</p>
                <p className="text-xs text-slate-400">{siteMeta.officeHours}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-300">Office</p>
              <p className="text-sm font-semibold text-white leading-tight">{siteMeta.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          {/* Left — Department/University info, contacts, social, map */}
          <div className="lg:col-span-5 space-y-4">
            {/* Department/University information */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-display font-extrabold text-xs leading-none border border-slate-800">
                  <span>CS<br /><span className="text-cyan-300">IT</span></span>
                </div>
                <div>
                  <p className="font-display font-extrabold text-slate-900 text-sm leading-tight">{siteMeta.society}</p>
                  <p className="text-xs text-slate-500">{siteMeta.department} • {siteMeta.university}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Student-led society of the CS &amp; IT Department — organizing technical workshops, hackathons, seminars, research symposia and cultural fests that connect students with industry and opportunity.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  { k: "2018", v: "Established" },
                  { k: "250+", v: "Active members" },
                  { k: "120+", v: "Events" },
                ].map((x) => (
                  <div key={x.k} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <p className="font-display font-extrabold text-slate-900">{x.k}</p>
                    <p className="text-[11px] tracking-wide uppercase text-slate-500">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official contacts */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="font-display font-bold text-slate-900">Official contacts</h3>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-slate-900">Location / Address</p>
                    <p className="text-slate-600 leading-relaxed">{siteMeta.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center shrink-0">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-900">Official Email</p>
                    <a href={`mailto:${siteMeta.email}`} className="text-blue-600 hover:underline break-all">{siteMeta.email}</a>
                    <p className="text-xs text-slate-500">Approved contact — replies within 24h</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-8 w-8 rounded-full bg-amber-500 text-slate-900 grid place-items-center shrink-0 font-bold">📞</span>
                  <div>
                    <p className="font-semibold text-slate-900">Approved Phone / Contact</p>
                    <p className="text-slate-600">{siteMeta.phone}</p>
                    <p className="text-xs text-slate-500">{siteMeta.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h4 className="font-display font-bold text-slate-900">Social links</h4>
              <p className="text-xs text-slate-500 mt-1">Official, approved profiles only.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { label: "Facebook", href: siteMeta.social.facebook, icon: "f" },
                  { label: "Instagram", href: siteMeta.social.instagram, icon: "IG" },
                  { label: "LinkedIn", href: siteMeta.social.linkedin, icon: "in" },
                  { label: "YouTube", href: siteMeta.social.youtube, icon: "YT" },
                  { label: "Twitter / X", href: siteMeta.social.twitter, icon: "X" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href !== "#" ? s.href : undefined}
                    target={s.href !== "#" ? "_blank" : undefined}
                    rel={s.href !== "#" ? "noreferrer" : undefined}
                    onClick={(e) => s.href === "#" && e.preventDefault()}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border ${s.href !== "#" ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800" : "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed"}`}
                    title={s.label}
                  >
                    <span className="h-5 w-5 rounded-full bg-white/20 grid place-items-center text-[10px] font-bold">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">Links with “#” are placeholders awaiting verified handles — not dead buttons.</p>
            </div>

            {/* Office Hours */}
            <div className="rounded-2xl bg-slate-900 text-white p-5">
              <h4 className="font-display font-bold">Office Hours</h4>
              <p className="text-sm text-slate-400 mt-1">CS &amp; IT Department, 2nd Floor, Academic Block-B • Visit without appointment</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li className="flex justify-between"><span className="text-slate-400">Mon – Thu</span><span className="font-medium">9:00 AM – 4:00 PM</span></li>
                <li className="flex justify-between"><span className="text-slate-400">Friday</span><span className="font-medium">9:00 AM – 12:30 PM</span></li>
                <li className="flex justify-between"><span className="text-slate-400">Sat – Sun</span><span className="font-medium">Closed</span></li>
              </ul>
            </div>

            {/* Location / Google Maps area */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <div className="p-4 border-b border-slate-100">
                <h4 className="font-display font-bold text-slate-900">Location — Google Maps</h4>
                <p className="text-xs text-slate-500 mt-1">Find us at Academic Block-B. Map embed is a placeholder until real coordinates/API key is configured.</p>
              </div>
              <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                <iframe
                  title="CS & IT Department Location"
                  src={`https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-3 left-3 right-3 flex justify-center pointer-events-none">
                  <span className="rounded-full bg-white/95 backdrop-blur text-slate-900 px-3 py-1 text-xs font-semibold shadow border border-slate-200">Map: Google Maps embed</span>
                </div>
              </div>
              <div className="p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <p className="text-xs text-slate-600 flex-1">{siteMeta.address} • {siteMeta.university}</p>
                <a href={mapsSearchUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 text-white px-4 py-1.5 text-xs font-bold hover:bg-blue-700 shadow shrink-0">
                  Open in Google Maps
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7m10 0v10"/></svg>
                </a>
              </div>
              <div className="px-4 pb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">🅿️ Parking available</span>
                <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">♿ Accessible entrance</span>
                <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">🚇 Campus shuttle stop nearby</span>
              </div>
              <div className="px-4 pb-4">
                <p className="text-xs text-slate-500 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">Map iframe is a live Google Maps embed using address query. Replace <code className="bg-white px-1 py-0.5 rounded">q</code> with exact lat/lng or Embed API key for campus-accurate pin when available.</p>
              </div>
            </div>

            {/* FAQs */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h4 className="font-display font-bold text-slate-900">FAQs</h4>
              <div className="mt-3 space-y-3">
                {[
                  { q: "Do I need to create an account?", a: "No. This is a public website — no login, signup, or admin panel. Just browse or use the contact form." },
                  { q: "How do I register for an event?", a: "Visit the Events page, open the event, and click Contact Organizers — or visit the department office during office hours." },
                  { q: "Can non-CS students join?", a: "Most events are open to all faculties. Technical workshops may prioritize computing students if seats are limited." },
                ].map((f) => (
                  <details key={f.q} className="group rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <summary className="font-semibold text-slate-900 text-sm cursor-pointer list-none flex justify-between items-center">
                      {f.q} <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="text-sm text-slate-600 mt-2">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-sm">
              <SectionHeading eyebrow="Get in touch" title="Send us a message" description="Frontend-only UI — no backend yet. Fields: Name, Email, Subject, Message." />

              {/* Pending integration notice — always visible */}
              <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
                <div className="h-8 w-8 rounded-full bg-amber-400 text-slate-900 grid place-items-center font-bold shrink-0">!</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Pending integration — no emails are sent</p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-1">
                    This form is a UI placeholder. There is <strong>no backend/email service connected</strong> yet, so clicking <strong>Send</strong> does not send an email or store data. To enable, connect to an approved service (e.g., EmailJS, Formspree, or your API endpoint) and replace the demo handler in <code className="bg-white px-1 py-0.5 rounded border">src/pages/Contact.jsx</code>. Use the official email above for urgent contact.
                  </p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label htmlFor="c-name" className="text-sm font-semibold text-slate-700">Name</label>
                  <input
                    id="c-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name — e.g., Ayesha Ahmed"
                    className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="text-sm font-semibold text-slate-700">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@university.edu.pk"
                    className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-subject" className="text-sm font-semibold text-slate-700">Subject</label>
                  <input
                    id="c-subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Subject — e.g., Partnership Inquiry, Volunteer Application"
                    className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                  />
                  {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="c-message" className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    id="c-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="How can we help?"
                    className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  <p className="text-xs text-slate-500 mt-1">Please don’t share sensitive data. {form.message.length}/500</p>
                </div>

                {/* Post-submit pending notice */}
                {submitted && (
                  <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm">
                    <p className="font-semibold text-slate-900">Demo validation passed — no email sent</p>
                    <p className="text-xs text-slate-600 mt-1">Your input passed frontend validation but was <strong>not sent</strong> because no backend is connected. Check console for logged payload. To go live, wire the <code className="bg-white px-1 py-0.5 rounded border">onSubmit</code> handler to your email service, then update this notice to a real success state.</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <button type="submit" className="rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-bold hover:bg-slate-800 transition shadow-sm">
                    Send
                  </button>
                  <button type="button" onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setErrors({}); setSubmitted(false); }} className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50">
                    Clear
                  </button>
                  <p className="text-xs text-slate-500">No login required • UI only • Official: {siteMeta.email}</p>
                </div>
              </form>

              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Prefer direct contact?</p>
                <p className="text-sm text-slate-700 mt-1">Email <a href={`mailto:${siteMeta.email}`} className="font-semibold text-blue-600 hover:underline">{siteMeta.email}</a> or visit during {siteMeta.officeHours} at {siteMeta.address}. No account needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
