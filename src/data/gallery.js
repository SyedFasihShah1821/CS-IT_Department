// Gallery — event-wise albums
// Categories per spec: Workshops, Competitions, Seminars, Department Events, Guest Sessions, Awards/Ceremonies

export const albums = [
  {
    id: "workshop-cybersecure-2024",
    title: "CyberSecure Workshop — Hands-on Lab",
    category: "Workshops",
    date: "2024-10-20",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "w1", src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop", caption: "Lab 3 — Isolated VM setup" },
      { id: "w2", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Vulnerability assessment live demo" },
      { id: "w3", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop", caption: "Mentor guiding participants" },
      { id: "w4", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "Group photo — Workshop cohort" },
      { id: "w5", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop", caption: "CTF challenge — teams in action" },
      { id: "w6", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Certificate distribution" },
      { id: "w7", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop", caption: "Career pathways panel" },
      { id: "w8", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop", caption: "Lab walkthrough — OWASP Top 10" },
    ],
  },
  {
    id: "competition-codesprint-2024",
    title: "CodeSprint 24 — Inter-University Hackathon",
    category: "Competitions",
    date: "2024-12-08",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "c1", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop", caption: "Teams hacking — 12-hour sprint" },
      { id: "c2", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Mentor review session" },
      { id: "c3", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop", caption: "Final demos — jury evaluation" },
      { id: "c4", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "Winners — Team ByteCraft" },
      { id: "c5", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop", caption: "Industry judges panel" },
      { id: "c6", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop", caption: "Award ceremony" },
      { id: "c7", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop", caption: "Volunteers on setup" },
      { id: "c8", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80&auto=format&fit=crop", caption: "Networking after demos" },
      { id: "c9", src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&auto=format&fit=crop", caption: "Late-night debugging" },
      { id: "c10", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Closing group photo" },
    ],
  },
  {
    id: "seminar-technex-2024",
    title: "TechNex 2024 — Annual Tech Symposium",
    category: "Seminars",
    date: "2024-11-15",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "s1", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop", caption: "Opening ceremony — Main Auditorium" },
      { id: "s2", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop", caption: "Keynote — Future of AI" },
      { id: "s3", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80&auto=format&fit=crop", caption: "Project expo — student demos" },
      { id: "s4", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Industry panel — Cloud & DevOps" },
      { id: "s5", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop", caption: "Coding sprint — live leaderboard" },
      { id: "s6", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "Volunteers at registration desk" },
      { id: "s7", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Award ceremony — top projects" },
      { id: "s8", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop", caption: "Attendee networking" },
    ],
  },
  {
    id: "department-fusion-2024",
    title: "Fusion Fest — Department Cultural Night",
    category: "Department Events",
    date: "2024-03-18",
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "d1", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop", caption: "Cultural stage — opening act" },
      { id: "d2", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop", caption: "Tech exhibition — student stalls" },
      { id: "d3", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop", caption: "Drama performance" },
      { id: "d4", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop", caption: "Music performance — live band" },
      { id: "d5", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "Crowd — University Grounds" },
      { id: "d6", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Prize distribution" },
      { id: "d7", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop", caption: "Behind the scenes — logistics team" },
    ],
  },
  {
    id: "guest-devfest-2024",
    title: "DevFest — Guest Session with GDG",
    category: "Guest Sessions",
    date: "2024-11-02",
    coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "gs1", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop", caption: "Guest keynote — Modern Web" },
      { id: "gs2", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Flutter workshop — live coding" },
      { id: "gs3", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop", caption: "Firebase lab — deploy session" },
      { id: "gs4", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80&auto=format&fit=crop", caption: "Guest Q&A — alumni panel" },
      { id: "gs5", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "Networking with GDG speakers" },
      { id: "gs6", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Mini-app showcase" },
      { id: "gs7", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop", caption: "Group photo with guests" },
    ],
  },
  {
    id: "awards-technex-2023",
    title: "Awards Ceremony — TechNex 2023",
    category: "Awards/Ceremonies",
    date: "2023-11-20",
    coverImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "a1", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Award distribution — Dean on stage" },
      { id: "a2", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop", caption: "Winners — Best Project" },
      { id: "a3", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Volunteer recognition" },
      { id: "a4", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80&auto=format&fit=crop", caption: "Faculty felicitation" },
      { id: "a5", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "Closing remarks" },
      { id: "a6", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop", caption: "Official group photograph" },
      { id: "a7", src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop", caption: "Team celebration" },
    ],
  },
  {
    id: "workshop-ai-bootcamp",
    title: "AI Bootcamp — Group & Labs",
    category: "Workshops",
    date: "2024-09-12",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "wai1", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Python lab — hands-on" },
      { id: "wai2", src: "https://images.unsplash.com/photo-1531482615713-2afd690979bc?w=800&q=80&auto=format&fit=crop", caption: "LLM demo — chatbot build" },
      { id: "wai3", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop", caption: "Mentor feedback session" },
      { id: "wai4", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&auto=format&fit=crop", caption: "Group photo — bootcamp cohort" },
      { id: "wai5", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Deployment — Hugging Face" },
    ],
  },
  {
    id: "competition-gamejam",
    title: "GameJam — 24-Hour Build",
    category: "Competitions",
    date: "2024-06-15",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&auto=format&fit=crop",
    photos: [
      { id: "gj1", src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&auto=format&fit=crop", caption: "Theme reveal — Time Loop" },
      { id: "gj2", src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&auto=format&fit=crop", caption: "Teams building — Unity & Godot" },
      { id: "gj3", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop", caption: "Playtesting — jury" },
      { id: "gj4", src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop", caption: "Winners — Chrono Escape" },
      { id: "gj5", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", caption: "Expo showcase" },
    ],
  },
];

// Legacy flat gallery for backwards compatibility (Home preview, event details)
export const gallery = albums.flatMap((album) =>
  album.photos.slice(0, 2).map((p, i) => ({
    id: `${album.id}-p${i}`,
    src: p.src,
    caption: p.caption,
    category: album.category,
    year: album.date.slice(0, 4),
    albumId: album.id,
    albumTitle: album.title,
  }))
);

// Helper to get album by id
export function getAlbum(id) {
  return albums.find((a) => a.id === id);
}
