import { Link } from '../lib/router.jsx';
import { NAV_LINKS } from '../content.js';
import { Container } from './Section.jsx';
import logo from '../assets/inno-nest-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm items-start gap-4">
          <img src={logo} alt="INNO-NEST logo" width="64" height="62" loading="lazy" className="h-16 w-16 rounded-xl object-contain" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">INNO-NEST</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              AREATOR, the Aquaculture Pond Health Monitoring System, is a product developed by <span className="whitespace-nowrap">INNO-NEST</span>.
            </p>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {[...NAV_LINKS, { label: 'Contact', to: '/contact' }].map((l) => (
            <Link key={l.label} to={l.to} className="text-sm text-white/70 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="text-xs text-white/40">© 2026 INNO-NEST. All rights reserved.</p>
      </Container>
    </footer>
  );
}
