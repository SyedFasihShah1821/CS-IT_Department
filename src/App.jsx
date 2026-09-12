import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Gallery from "./pages/Gallery";
import Announcements from "./pages/Announcements";
import Team from "./pages/Team";
import MemberProfile from "./pages/MemberProfile";
import Achievements from "./pages/Achievements";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold tracking-widest uppercase">404 • Not Found</div>
      <h1 className="mt-4 font-display text-3xl font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist. Try the navigation above or return home.</p>
      <a href="/" className="mt-6 inline-flex rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-slate-800">Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<MemberProfile />} />
            {/* alias for member profile */}
            <Route path="/members/:id" element={<MemberProfile />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
