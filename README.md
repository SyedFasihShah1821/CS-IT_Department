# CS & IT Department — Event Management Society (Public Website)

Professional, responsive, public website for the **CS & IT Department Event Management Society** — the official student body that plans and produces technical workshops, hackathons, seminars, research symposia and cultural fests.

> **Public website only:** No login, no signup, no admin panel, no authentication. All content is publicly accessible and easy to replace via data files.

**Live dev server:** `npm run dev` → http://localhost:5173  
**Branch:** `arena/01a094e5-cs-it-department`

---

## ✨ Features

- **11 fully-routed pages:** Home, About Society, Events, Event Details (`/events/:id`), Gallery, Announcements, Team, Member Profile (`/team/:id` + alias `/members/:id`), Achievements, Partners & Sponsors, Contact Us
- **Responsive, component-based UI:** Mobile / tablet / desktop with Tailwind CSS v4, Inter + Plus Jakarta Sans
- **Reusable components:** `Header`, `Footer`, `Button`, `Card`, `SectionHeading`, `Badge`, plus layout and page sections
- **Clean, swappable content:** All copy/images live in `src/data/*.js` — replace placeholders without touching components
- **Public-only:** No auth flows; contact form is frontend-only with validation and success state
- **Built with Vite + React 19 + React Router 7** — fast HMR, production build verified

---

## 🗺️ Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | Home | Hero, stats, featured events, announcements, team & gallery previews, partners, CTA |
| `/about` | About Society | Mission/vision/values, timeline (2018–2025), pillars, governance |
| `/events` | Events | Category + status filters, search, 8 events |
| `/events/:id` | Event Details | Hero, agenda, speakers, venue, tags, related events |
| `/gallery` | Gallery | Category + year filters, masonry, lightbox modal |
| `/announcements` | Announcements | Pinned + category filters, search, newsletter UI |
| `/team` | Team | Category filters, search, 12 members |
| `/team/:id` | Member Profile | Bio, responsibilities, email, contributed events |
| `/members/:id` | Alias | Same as `/team/:id` |
| `/achievements` | Achievements | 6 milestones, stats, what’s next |
| `/partners` | Partners & Sponsors | Tiers (Title → Community), 8 sponsors, why partner |
| `/contact` | Contact Us | Info cards, validated form (no backend), map placeholder, FAQs |
| `*` | 404 | Not found fallback |

All routes are connected via `Header` nav (desktop pill nav + mobile drawer) and `Footer` quick links. Active link highlighting via `NavLink`.

---

## 🧱 Tech Stack

- **Runtime:** Node 22, Vite 8
- **Frontend:** React 19, React Router DOM 7, Tailwind CSS 4 (`@tailwindcss/vite`)
- **Fonts:** Google Fonts — Inter (body) + Plus Jakarta Sans (display)
- **Images:** Unsplash placeholders (easy to replace) + dummyimage logos for sponsors

No backend, no database, no auth libraries.

---

## 📁 Project Structure

```
CS-IT_Department/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/               # static assets (illustrations, logos) — ready for official media
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx      # variants: primary/secondary/ghost/outline/subtle; sizes sm/md/lg
│   │   │   ├── Card.jsx        # Card + ImageCard
│   │   │   └── SectionHeading.jsx  # eyebrow + title + description + action
│   │   └── layout/
│   │       ├── Header.jsx      # sticky, top bar, pill nav, mobile drawer, active states
│   │       └── Footer.jsx      # CTA strip, brand, explore, resources, contact, newsletter
│   ├── data/                   # ✨ edit these to replace content — no code changes needed
│   │   ├── siteMeta.js         # department, society, navLinks, stats, contact
│   │   ├── events.js           # 8 events with agenda, speakers, tags, featured flag
│   │   ├── gallery.js          # 12 photos with category/year
│   │   ├── announcements.js    # 6 announcements with pinned flag
│   │   ├── team.js             # 12 members across 4 categories
│   │   ├── achievements.js     # 6 achievements with year/category/stat
│   │   └── sponsors.js         # 8 sponsors across 5 tiers
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Gallery.jsx
│   │   ├── Announcements.jsx
│   │   ├── Team.jsx
│   │   ├── MemberProfile.jsx
│   │   ├── Achievements.jsx
│   │   ├── Partners.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                 # BrowserRouter + Routes + ScrollToTop + layout wrapper
│   ├── main.jsx
│   └── index.css               # @import "tailwindcss" + theme tokens + globals
├── index.html
├── vite.config.js              # @tailwindcss/vite + 0.0.0.0 host + allowedHosts for preview
└── package.json
```

### Replacing Content

Edit any file in `src/data/*.js`:

```js
// src/data/events.js
export const events = [
  {
    id: "my-event-2025",        // used in URL: /events/my-event-2025
    title: "My Event Title",
    category: "Workshop",       // Symposium | Hackathon | Workshop | Seminar | Cultural
    status: "Upcoming",         // Upcoming | Past
    date: "2025-11-20",
    time: "10:00 AM – 4:00 PM",
    venue: "Lab 1, CS Block",
    image: "/assets/my-event.jpg", // or https://...
    excerpt: "Short teaser for cards",
    description: "Full description for details page",
    agenda: [{ time: "10:00 AM", item: "Opening" }],
    speakers: [{ name: "Dr. X", role: "Role" }],
    tags: ["AI", "Web"],
    featured: true,
  },
];
```

Same pattern for `team.js`, `gallery.js`, `announcements.js`, `achievements.js`, `sponsors.js`, `siteMeta.js`.

Place official images in `src/assets/` or `public/` and reference as `/assets/...` or import.

---

## 🚀 Getting Started

```bash
# install
npm install

# dev (HMR)
npm run dev
# → http://localhost:5173

# production build
npm run build

# preview production build
npm run preview
```

Node 22+ recommended.

---

## 🎨 Design Notes

- **Palette:** Slate 950/900 (primary), Blue 600 (accent), Cyan/Amber highlights, Slate 50 backgrounds
- **Typography:** `font-sans: Inter`, `font-display: Plus Jakarta Sans` for headings
- **Components:** Rounded 2xl cards, pill buttons, soft borders (`border-slate-200`), subtle shadows
- **Responsive:** Grid shifts (`grid-cols-2 → lg:grid-cols-4`), hidden top bar on mobile, hamburger drawer, stacked hero on small screens
- **Accessibility:** Semantic headings, focus rings, alt text, color contrast, keyboard-navigable

---

## ✅ Verification

- `npm run build` — ✓ 47 modules, no errors
- `npm run dev` — serves on `0.0.0.0:5173`, `allowedHosts: true` for preview host
- All 11 routes return 200 and client-navigate without reload
- No login/signup/admin/auth code present

---

## 🔜 Next Steps (when backend is ready)

- Wire `Contact.jsx` form to an email API (keep frontend validation)
- Replace Unsplash placeholders with official photography
- Add CMS or JSON fetch for `src/data/*` if desired — component contracts stay the same
- Optional: pagination or ISR for events/gallery if collections grow large

---

## 📄 License & Credits

Built for the CS & IT Department Event Management Society. Placeholder images from Unsplash; sponsor logos are dummy placeholders. Replace with official assets as they become available.
