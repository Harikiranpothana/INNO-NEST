import { ArrowRight } from 'lucide-react';
import { Link } from '../lib/router.jsx';
import { Section } from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';

export default function CallToAction() {
  return (
    <Section id="collaborate" className="overflow-hidden py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_100%,rgba(56,184,192,0.22),transparent_55%)]"
      />
      <div className="relative max-w-4xl">
        <Reveal
          as="h2"
          className="text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Let's build better aquaculture technology together.
        </Reveal>
        <Reveal as="p" delay={140} className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
          Interested in AREATOR for your aquaculture operation? Contact <span className="whitespace-nowrap">INNO-NEST</span> to discuss product inquiries,
          purchasing opportunities, partnerships, and collaboration.
        </Reveal>
        <Reveal delay={280} className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-7 sm:py-3.5 sm:text-base"
          >
            Collaborate / Purchase
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="mt-4 text-xs text-white/40">
            Purchases are handled as inquiries. Online checkout isn't available yet.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
