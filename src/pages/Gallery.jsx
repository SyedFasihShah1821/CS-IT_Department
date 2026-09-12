import { useState, useMemo } from "react";
import { gallery } from "../data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [year, setYear] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const cats = ["All", "Symposium", "Hackathon", "Workshop", "Seminar", "Cultural"];
  const years = ["All", "2024", "2023"];

  const filtered = useMemo(() => gallery.filter((g) => (active === "All" || g.category === active) && (year === "All" || g.year === year)), [active, year]);

  return (
    <div>
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Gallery</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">Browse highlights from TechNex, CodeSprint, workshops, and cultural nights. Click any photo to view larger — all placeholders are real-world style and easy to replace with official media.</p>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-slate-200 sticky top-[64px] lg:top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={`rounded-full px-4 py-1.5 text-sm font-semibold border ${active === c ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {years.map((y) => (
              <button key={y} onClick={() => setYear(y)} className={`rounded-full px-4 py-1.5 text-sm font-semibold border ${year === y ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"}`}>
                {y === "All" ? "All Years" : y}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
          <p className="text-xs text-slate-500">Showing {filtered.length} photos {active !== "All" && `• ${active}`} {year !== "All" && `• ${year}`}</p>
        </div>
      </section>

      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((g) => (
              <button key={g.id} onClick={() => setLightbox(g)} className="group relative break-inside-avoid block w-full text-left rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition">
                <img src={g.src} alt={g.caption} className="w-full object-cover group-hover:scale-[1.02] transition duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="p-3">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{g.category} • {g.year}</p>
                  <p className="text-sm font-semibold text-slate-900 leading-tight">{g.caption}</p>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center">
              <p className="font-bold">No photos for this filter</p>
              <p className="text-sm text-slate-500">Try All categories or another year.</p>
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden bg-white">
              <img src={lightbox.src} alt={lightbox.caption} className="w-full max-h-[70vh] object-cover" />
              <div className="p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-600">{lightbox.category} • {lightbox.year}</p>
                  <p className="font-display font-bold text-slate-900">{lightbox.caption}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800">
                  Close
                </button>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 mt-3">Click outside to close • Use filters to browse more</p>
          </div>
        </div>
      )}
    </div>
  );
}
