import { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import { siteMeta } from "../data/siteMeta";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim() || form.message.length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Contact Us</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">Have a question, proposal, or want to volunteer or sponsor? Reach out — we reply within 24 hours on working days. No login or signup needed; this is a public inquiry form (frontend only).</p>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="font-display font-bold text-slate-900">Visit us</h3>
              <div className="mt-3 space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600 leading-relaxed">{siteMeta.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center shrink-0">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href={`mailto:${siteMeta.email}`} className="text-blue-600 hover:underline">{siteMeta.email}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="h-8 w-8 rounded-full bg-amber-500 text-slate-900 grid place-items-center shrink-0 font-bold">📞</span>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-600">{siteMeta.phone}</p>
                    <p className="text-xs text-slate-500">{siteMeta.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 text-white p-5">
              <h4 className="font-display font-bold">Office Hours</h4>
              <p className="text-sm text-slate-400 mt-1">CS & IT Department, 2nd Floor, Academic Block-B</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li className="flex justify-between"><span className="text-slate-400">Mon – Thu</span><span className="font-medium">9:00 AM – 4:00 PM</span></li>
                <li className="flex justify-between"><span className="text-slate-400">Friday</span><span className="font-medium">9:00 AM – 12:30 PM</span></li>
                <li className="flex justify-between"><span className="text-slate-400">Sat – Sun</span><span className="font-medium">Closed</span></li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h4 className="font-display font-bold text-slate-900">FAQs</h4>
              <div className="mt-3 space-y-3">
                {[
                  { q: "Do I need to create an account?", a: "No. This is a public website — no login, signup, or admin panel. Just browse or use the contact form." },
                  { q: "How do I register for an event?", a: "Visit the Events page, open the event, and click Contact Organizers — or visit the department office." },
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

          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 lg:p-8">
              <SectionHeading eyebrow="Get in touch" title="Send us a message" description="We’ll get back to you quickly. All fields are required. This form is frontend-only — no backend yet." />
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Full name</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g., Ayesha Ahmed" className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-300 bg-red-50" : "border-slate-200"}`} />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Email address</label>
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@university.edu.pk" className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200"}`} />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Subject</label>
                  <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${errors.subject ? "border-red-300" : "border-slate-200"}`}>
                    <option value="">Select a subject</option>
                    <option>Event Registration</option>
                    <option>Volunteer Application</option>
                    <option>Sponsorship / Partnership</option>
                    <option>General Inquiry</option>
                    <option>Media / Press</option>
                  </select>
                  {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="How can we help?" className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200"}`} />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  <p className="text-xs text-slate-500 mt-1">Please don’t share sensitive data. {form.message.length}/500</p>
                </div>

                {sent && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-800">
                    ✅ Message sent — thank you! We’ll reply at <strong>{siteMeta.email}</strong>. (This is a frontend demo; no email was actually sent.)
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-semibold hover:bg-slate-800 transition">
                    Send Message
                  </button>
                  <button type="button" onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setErrors({}); }} className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold hover:bg-slate-50">
                    Reset
                  </button>
                  <p className="text-xs text-slate-500 self-center">No login required • Response within 24 hours</p>
                </div>
              </form>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <div className="aspect-[16/7] bg-slate-100 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=1200&q=80&auto=format&fit=crop" alt="Campus map placeholder" className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-2xl bg-white shadow-xl border border-slate-200 px-6 py-4 text-center max-w-sm">
                    <p className="font-display font-bold text-slate-900">Find us on campus</p>
                    <p className="text-sm text-slate-600 mt-1">Academic Block-B, 2nd Floor — CS & IT Department</p>
                    <a href="#" onClick={(e) => e.preventDefault()} className="mt-3 inline-flex rounded-full bg-blue-600 text-white px-4 py-1.5 text-xs font-semibold">
                      Open in Google Maps (placeholder)
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">🅿️ Parking available</span>
                <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">♿ Accessible entrance</span>
                <span className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">🚇 Campus shuttle stop nearby</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
