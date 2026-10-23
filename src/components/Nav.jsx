import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, go } from '../lib/router.jsx';
import { NAV_LINKS } from '../content.js';
import logo from '../assets/inno-nest-logo.png';

// Same markup, spacing and classes as the original nav; it is now fixed so it
// stays reachable on a long page, and gains a soft backdrop after scrolling.
export default function Nav({ path }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Main"
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 transition-colors duration-500 md:px-12 lg:px-16 ${
          scrolled && !open ? 'bg-black/70 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-10">
          <Link to="/" aria-label="INNO-NEST home" className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width="40"
              height="39"
              className="h-9 w-9 rounded-lg object-contain sm:h-10 sm:w-10"
            />
            <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">INNO-NEST</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} to={l.to} className="text-sm text-white/80 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <Link
            to="/contact"
            className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block"
          >
            Let's Talk
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-50 flex h-10 w-10 items-center justify-center text-white active:scale-90 md:hidden"
          >
            <Menu
              size={24}
              className={`absolute transition-all duration-300 ${
                open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={24}
              className={`absolute transition-all duration-300 ${
                open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-0 z-30 overflow-hidden bg-black/[0.98] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? 'h-[100dvh] opacity-100' : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all delay-100 duration-500 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <button
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setOpen(false);
                go('/contact');
              }}
              className="mt-6 self-start rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
