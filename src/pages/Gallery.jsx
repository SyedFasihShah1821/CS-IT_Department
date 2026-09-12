import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { albums } from "../data/gallery";
import Badge from "../components/common/Badge";

const categories = ["All", "Workshops", "Competitions", "Seminars", "Department Events", "Guest Sessions", "Awards/Ceremonies"];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [activeAlbumId, setActiveAlbumId] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeAlbum = useMemo(() => albums.find((a) => a.id === activeAlbumId) || null, [activeAlbumId]);

  const filteredAlbums = useMemo(() => {
    if (activeCat === "All") return albums;
    return albums.filter((a) => a.category === activeCat);
  }, [activeCat]);

  // Lightbox controls
  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    if (!activeAlbum) return;
    setLightboxIndex((i) => (i + 1) % activeAlbum.photos.length);
  }, [activeAlbum]);
  const prev = useCallback(() => {
    if (!activeAlbum) return;
    setLightboxIndex((i) => (i - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
  }, [activeAlbum]);

  // Keyboard handling for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, next, prev, closeLightbox]);

  const totalPhotos = albums.reduce((sum, a) => sum + a.photos.length, 0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-blue-100 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                Gallery • {albums.length} albums • {totalPhotos} photos
              </div>
              <h1 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Gallery</h1>
              <p className="mt-2 text-slate-400 max-w-2xl text-sm lg:text-[15px] leading-relaxed">
                Event-wise albums for Workshops, Competitions, Seminars, Department Events, Guest Sessions and Awards/Ceremonies. Each album shows cover, title, date and photo count — open an album for a responsive grid and lightbox with captions.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-xs">
              <span className="rounded-full bg-white text-slate-900 px-3 py-1 font-bold">{albums.length} albums</span>
              <span className="rounded-full bg-blue-600 text-white px-3 py-1 font-bold">{totalPhotos} photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[68px] lg:top-[108px] z-30 backdrop-blur bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Filter by album category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActiveCat(c);
                  setActiveAlbumId(null);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${
                  activeCat === c ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filteredAlbums.length} album{filteredAlbums.length !== 1 ? "s" : ""} {activeCat !== "All" && `• ${activeCat}`} — all placeholders are real-world style, easy to replace with official media
          </p>
        </div>
      </section>

      {/* Album grid OR Album detail */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeAlbum ? (
            // Album detail view
            <div>
              <button
                onClick={() => {
                  setActiveAlbumId(null);
                  setLightboxIndex(null);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Back to albums
              </button>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                <div className="relative aspect-[16/6] overflow-hidden bg-slate-100">
                  <img src={activeAlbum.coverImage} alt={`${activeAlbum.title} cover`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="softBlue">{activeAlbum.category}</Badge>
                      <span className="rounded-full bg-white text-slate-900 px-3 py-1 text-xs font-bold shadow">{activeAlbum.photos.length} photos</span>
                      <span className="rounded-full bg-slate-900/80 backdrop-blur text-white px-3 py-1 text-xs font-semibold border border-white/20">{activeAlbum.date}</span>
                    </div>
                    <h2 className="mt-3 font-display text-2xl lg:text-3xl font-extrabold leading-tight">{activeAlbum.title}</h2>
                    <p className="text-sm text-white/80 mt-1">Click any photo for preview — use next/previous or swipe on mobile</p>
                  </div>
                </div>

                <div className="p-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{activeAlbum.title}</span> • {activeAlbum.date} • {activeAlbum.category} • {activeAlbum.photos.length} photos
                  </p>
                  <div className="flex gap-2">
                    <Link to="/events" className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold hover:bg-slate-50">
                      Related events
                    </Link>
                    <button
                      onClick={() => setLightboxIndex(0)}
                      className="rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-bold hover:bg-slate-800"
                    >
                      Start slideshow
                    </button>
                  </div>
                </div>
              </div>

              {/* Responsive image grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeAlbum.photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => openLightbox(idx)}
                    className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition text-left"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-slate-900 leading-tight line-clamp-2">{photo.caption}</p>
                      <p className="text-xs text-slate-500 mt-1">Photo {idx + 1} • Click to preview</p>
                    </div>
                  </button>
                ))}
              </div>

              <p className="mt-6 text-center text-xs text-slate-500">Tip: In preview, use ← → keys, swipe, or buttons to navigate • Press Esc or click outside to close</p>
            </div>
          ) : (
            // Album cards grid
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlbums.map((album) => (
                  <div
                    key={album.id}
                    className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                  >
                    {/* Cover image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img src={album.coverImage} alt={`${album.title} cover`} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                      <div className="absolute left-3 top-3 flex gap-2">
                        <Badge variant="softBlue">{album.category}</Badge>
                      </div>
                      <div className="absolute right-3 top-3 rounded-full bg-white text-slate-900 px-2.5 py-1 text-xs font-bold shadow flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M16 8l-2 2" /></svg>
                        {album.photos.length}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-display font-bold text-white leading-tight text-lg line-clamp-2">{album.title}</h3>
                        <p className="text-xs text-white/80 mt-1 flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                          {album.date}
                        </p>
                      </div>
                    </div>

                    {/* Details: event title, date, number of photos, View Album */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold tracking-widest uppercase text-slate-500">{album.category}</p>
                          <h4 className="font-display font-bold text-slate-900 leading-tight mt-1">{album.title}</h4>
                        </div>
                        <span className="shrink-0 rounded-full bg-slate-900 text-white px-2.5 py-1 text-xs font-bold">{album.photos.length} photos</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                        <span className="inline-flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                          {album.date}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{album.photos.length} photos</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">{album.category}</span>
                        <button
                          onClick={() => setActiveAlbumId(album.id)}
                          className="inline-flex items-center gap-1 rounded-full bg-blue-600 text-white px-4 py-1.5 text-xs font-bold hover:bg-blue-700 transition"
                        >
                          View Album
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAlbums.length === 0 && (
                <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center mt-6">
                  <p className="font-display font-bold text-slate-900">No albums for this category</p>
                  <p className="text-sm text-slate-500 mt-1">Try All or another category.</p>
                  <button onClick={() => setActiveCat("All")} className="mt-4 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold">
                    Show all albums
                  </button>
                </div>
              )}

              {/* Performance note */}
              <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-slate-900">Optimized for mobile & performance</h4>
                  <p className="text-sm text-slate-600 mt-1">Lazy-loaded images, responsive `src` sizes, minimal JS — placeholder media easy to swap via `src/data/gallery.js`.</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link to="/" className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50">
                    ← Back to Home preview
                  </Link>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold hover:bg-slate-800">
                    Top ↑
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox — image preview with next/prev, close, captions */}
      {activeAlbum && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 h-10 w-10 rounded-full bg-white text-slate-900 grid place-items-center shadow-xl hover:bg-slate-50 z-10"
              aria-label="Close preview"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              <div className="relative">
                <img
                  src={activeAlbum.photos[lightboxIndex].src}
                  alt={activeAlbum.photos[lightboxIndex].caption}
                  className="w-full max-h-[70vh] object-contain bg-slate-900"
                />
                {/* Prev */}
                <button
                  onClick={prev}
                  className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 backdrop-blur text-slate-900 grid place-items-center shadow hover:bg-white"
                  aria-label="Previous"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                {/* Next */}
                <button
                  onClick={next}
                  className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 backdrop-blur text-slate-900 grid place-items-center shadow hover:bg-white"
                  aria-label="Next"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
                {/* Counter */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 backdrop-blur text-white px-3 py-1 text-xs font-bold border border-white/20">
                  {lightboxIndex + 1} / {activeAlbum.photos.length}
                </div>
              </div>

              {/* Caption bar */}
              <div className="p-4 lg:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-white">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-600">
                    {activeAlbum.category} • {activeAlbum.date} • Photo {lightboxIndex + 1}
                  </p>
                  <p className="font-display font-bold text-slate-900 mt-1">{activeAlbum.photos[lightboxIndex].caption}</p>
                  <p className="text-xs text-slate-500 mt-1">{activeAlbum.title}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={prev} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold hover:bg-slate-50">
                    ← Previous
                  </button>
                  <button onClick={next} className="rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-semibold hover:bg-slate-800">
                    Next →
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-3 hidden sm:block">← → keys or swipe to navigate • Esc or click outside to close • Captions shown below image</p>
            <p className="text-center text-xs text-slate-400 mt-3 sm:hidden">Tap outside or X to close • Swipe for next/previous</p>
          </div>
        </div>
      )}
    </div>
  );
}
