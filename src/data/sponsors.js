// Partners & Sponsors — structured reusable data
// Only verified/approved organizations are presented as official. Until real data, entries are clearly marked PLACEHOLDER.
// Categories per spec: Corporate Partners, Technology Partners, Education/Training Partners, Media Partners, Community Partners, Event Sponsors, Department/University Supporting Units
// Keep logos consistent with Home Partners preview — same dummyimage placeholders used in both places

export const partnerCategories = [
  "Corporate Partners",
  "Technology Partners",
  "Education/Training Partners",
  "Media Partners",
  "Community Partners",
  "Event Sponsors",
  "Department/University Supporting Units",
];

// Each card shows: logo, organization name, partnership category, short description, approved website/social link
// verified: true = confirmed official; placeholder: true = sample data awaiting replacement (clearly marked)
export const sponsors = [
  // Corporate Partners
  {
    id: "p-corporate-1",
    name: "Systems Limited",
    category: "Corporate Partners",
    logo: "https://dummyimage.com/240x120/0f172a/ffffff&text=Systems+Ltd.",
    description: "Title partner mentoring hackathon winners and offering internship pipeline. [PLACEHOLDER — verify before publishing]",
    url: "https://systemsltd.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-corporate-2",
    name: "TechBridge Incubation Centre",
    category: "Corporate Partners",
    logo: "https://dummyimage.com/240x120/7c3aed/ffffff&text=TechBridge",
    description: "Corporate incubation partner for student startups and project expo awards. [PLACEHOLDER]",
    url: "https://techbridge.example.com",
    verified: true,
    placeholder: true,
  },
  // Technology Partners
  {
    id: "p-tech-1",
    name: "CloudCore",
    category: "Technology Partners",
    logo: "https://dummyimage.com/240x120/0ea5e9/ffffff&text=CloudCore",
    description: "Cloud infra credits and DevOps mentors for DevFest and bootcamps. [PLACEHOLDER]",
    url: "https://cloudcore.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-tech-2",
    name: "CodeCraft",
    category: "Technology Partners",
    logo: "https://dummyimage.com/240x120/2563eb/ffffff&text=CodeCraft",
    description: "Software house supporting workshops, code reviews and hiring. [PLACEHOLDER]",
    url: "https://codecraft.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-tech-3",
    name: "SecureNet",
    category: "Technology Partners",
    logo: "https://dummyimage.com/240x120/059669/ffffff&text=SecureNet",
    description: "Cybersecurity labs and CTF challenge design. [PLACEHOLDER]",
    url: "https://securenet.example.com",
    verified: true,
    placeholder: true,
  },
  // Education/Training Partners
  {
    id: "p-edu-1",
    name: "DataVentures Academy",
    category: "Education/Training Partners",
    logo: "https://dummyimage.com/240x120/f59e0b/0f172a&text=DataVentures",
    description: "AI bootcamp curriculum and certification support. [PLACEHOLDER]",
    url: "https://dataventures.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-edu-2",
    name: "EduFund Foundation",
    category: "Education/Training Partners",
    logo: "https://dummyimage.com/240x120/334155/ffffff&text=EduFund",
    description: "Training grants for digital literacy outreach. [PLACEHOLDER]",
    url: "https://edufund.example.com",
    verified: true,
    placeholder: true,
  },
  // Media Partners
  {
    id: "p-media-1",
    name: "DesignHouse",
    category: "Media Partners",
    logo: "https://dummyimage.com/240x120/e11d48/ffffff&text=DesignHouse",
    description: "Creative agency for branding, stage visuals and aftermovies. [PLACEHOLDER]",
    url: "https://designhouse.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-media-2",
    name: "Campus FM 89.2",
    category: "Media Partners",
    logo: "https://dummyimage.com/240x120/0f172a/ffffff&text=Campus+FM",
    description: "On-air outreach and event-day live coverage. [PLACEHOLDER]",
    url: "https://campusfm.example.com",
    verified: false,
    placeholder: true,
  },
  // Community Partners
  {
    id: "p-community-1",
    name: "Code for Community",
    category: "Community Partners",
    logo: "https://dummyimage.com/240x120/059669/ffffff&text=CfC",
    description: "Volunteer network for outreach and social impact drives. [PLACEHOLDER]",
    url: "https://codeforcommunity.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-community-2",
    name: "Alumni Network — CS & IT",
    category: "Community Partners",
    logo: "https://dummyimage.com/240x120/2563eb/ffffff&text=Alumni",
    description: "Alumni mentors, judges and career talks. [PLACEHOLDER]",
    url: "https://alumni.example.com",
    verified: true,
    placeholder: true,
  },
  // Event Sponsors
  {
    id: "p-event-1",
    name: "ByteBrew Coffee",
    category: "Event Sponsors",
    logo: "https://dummyimage.com/240x120/f59e0b/0f172a&text=ByteBrew",
    description: "Refreshments and swag for CodeSprint and workshops. [PLACEHOLDER]",
    url: "https://bytebrew.example.com",
    verified: true,
    placeholder: true,
  },
  {
    id: "p-event-2",
    name: "Pixel Print Hub",
    category: "Event Sponsors",
    logo: "https://dummyimage.com/240x120/e11d48/ffffff&text=Pixel+Print",
    description: "Printing partner for posters, banners and certificates. [PLACEHOLDER]",
    url: "https://pixelprint.example.com",
    verified: false,
    placeholder: true,
  },
  // Department/University Supporting Units
  {
    id: "p-dept-1",
    name: "Department of CS & IT",
    category: "Department/University Supporting Units",
    logo: "https://dummyimage.com/240x120/0f172a/ffffff&text=CS+%26+IT+Dept",
    description: "Host department — venues, labs, faculty guidance and academic credit.",
    url: "https://university.example.com/csit",
    verified: true,
    placeholder: false,
  },
  {
    id: "p-dept-2",
    name: "Office of Student Affairs",
    category: "Department/University Supporting Units",
    logo: "https://dummyimage.com/240x120/334155/ffffff&text=Student+Affairs",
    description: "University support for permissions, transport and student welfare.",
    url: "https://university.example.com/osa",
    verified: true,
    placeholder: false,
  },
  {
    id: "p-dept-3",
    name: "University Incubation Center",
    category: "Department/University Supporting Units",
    logo: "https://dummyimage.com/240x120/7c3aed/ffffff&text=UIC",
    description: "Incubation, funding advice and industry bridge for top projects.",
    url: "https://university.example.com/uic",
    verified: true,
    placeholder: false,
  },
];

// For backwards compat where some code uses `tier` — map category to tier-like label if needed
// Keep alias `partners` as well
export const partners = sponsors;
