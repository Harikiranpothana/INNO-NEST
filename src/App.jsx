import { useEffect } from 'react';
import { usePath, scrollToId, Link } from './lib/router.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

const TITLES = {
  '/': 'INNO-NEST | AREATOR Aquaculture Pond Health Monitoring System',
  '/contact': 'Contact INNO-NEST | AREATOR Purchase and Collaboration Inquiries',
};

function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-start justify-center px-6 pt-24 md:px-12 lg:px-16">
      <p className="text-sm text-white/60">404</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight text-white sm:text-5xl">That page doesn't exist.</h1>
      <Link to="/" className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105">
        Back to home
      </Link>
    </main>
  );
}

export default function App() {
  const path = usePath();

  // On every route change: set the title, then either jump to a #section or to the top.
  useEffect(() => {
    document.title = TITLES[path] || 'Page not found | INNO-NEST';
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(hash, false)));
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [path]);

  return (
    <div className="min-h-screen bg-black font-geist text-white">
      <Nav path={path} />
      {/* key restarts the entrance animation on each route change */}
      <div key={path} className={path === '/' ? '' : 'animate-[pageIn_0.5s_ease_both]'}>
        {path === '/' && (
          <>
            <main>
              <Home />
            </main>
            <Footer />
          </>
        )}
        {path === '/contact' && <Contact />}
        {path !== '/' && path !== '/contact' && (
          <>
            <NotFound />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
