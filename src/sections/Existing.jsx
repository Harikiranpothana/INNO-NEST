import { Minus } from 'lucide-react';
import { Section, SectionHead } from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { EXISTING } from '../content.js';

export default function Existing() {
  return (
    <Section id="existing">
      <SectionHead label="Existing solutions" title="Two common approaches, and where each falls short.">
        Farms today usually rely on one of these. Capabilities vary widely between products, so not every system has
        every limitation listed here.
      </SectionHead>

      <div className="mt-14 grid border-t border-white/10 lg:mt-20 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
        {EXISTING.map((e, i) => (
          <Reveal
            key={e.title}
            delay={i * 120}
            className={`py-10 lg:py-12 ${i === 0 ? 'lg:pr-12' : 'border-t border-white/10 lg:border-t-0 lg:pl-12'}`}
          >
            <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">{e.title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">{e.text}</p>
            <p className="mt-8 text-sm text-white/90">{i === 0 ? 'Limitations' : 'Limitations can include'}</p>
            <ul className="mt-3 space-y-3">
              {e.limits.map((l) => (
                <li key={l} className="flex gap-3 text-sm text-white/70 sm:text-base">
                  <Minus size={18} className="mt-0.5 shrink-0 text-white/40" aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="border-t border-white/10 pt-10">
        <h3 className="text-lg font-medium tracking-tight text-white">The aeration cost gap</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
          When aeration isn't controlled by real-time pond conditions, the aerator may run longer than necessary,
          adding avoidable energy use and operating cost. Published studies cited in our project research report that
          mechanical aeration can account for roughly 90–95% of total energy consumption in typical shrimp farms.
        </p>
      </Reveal>
    </Section>
  );
}
