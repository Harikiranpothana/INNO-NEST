import { Section, SectionHead } from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { COMPARISON } from '../content.js';

// Hedged cells ("Depends on…", "Varies…") are muted so definite statements stand out.
const isHedge = (t) => /^(depends on|varies)/i.test(t);
const Cell = ({ text }) => <span className={isHedge(text) ? 'italic text-white/40' : ''}>{text}</span>;

export default function Comparison() {
  return (
    <Section id="compare">
      <SectionHead label="AREATOR vs. existing solutions" title="How AREATOR compares.">
        A side-by-side look at manual monitoring, conventional sensor-based systems and AREATOR. Existing products differ
        widely, so where a capability depends on the product, we say so rather than guess.
      </SectionHead>

      {/* Desktop / tablet: real table */}
      <Reveal className="mt-14 hidden md:block lg:mt-20">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparison of manual monitoring, conventional sensor systems and AREATOR across ten criteria
            </caption>
            <thead>
              <tr className="border-b border-white/10">
                <th scope="col" className="w-[18%] px-5 py-5 font-medium text-white/60">
                  Criterion
                </th>
                <th scope="col" className="w-[24%] px-5 py-5 font-medium text-white/60">
                  Manual monitoring
                </th>
                <th scope="col" className="w-[24%] px-5 py-5 font-medium text-white/60">
                  Conventional sensor systems
                </th>
                <th scope="col" className="w-[34%] border-x border-t-2 border-x-aqua/30 border-t-aqua bg-aqua/10 px-5 py-5 text-base font-semibold text-white">
                  AREATOR
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((r) => (
                <tr key={r.criterion} className="border-b border-white/10 last:border-b-0">
                  <th scope="row" className="px-5 py-4 align-top font-medium text-white/90">
                    {r.criterion}
                  </th>
                  <td className="px-5 py-4 align-top text-white/60">
                    <Cell text={r.manual} />
                  </td>
                  <td className="px-5 py-4 align-top text-white/60">
                    <Cell text={r.sensor} />
                  </td>
                  <td className="border-x border-aqua/30 bg-aqua/10 px-5 py-4 align-top font-medium text-white">{r.areator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Mobile: one block per criterion, so nothing scrolls sideways */}
      <ul className="mt-12 divide-y divide-white/10 border-y border-white/10 md:hidden">
        {COMPARISON.map((r, i) => (
          <Reveal as="li" key={r.criterion} delay={(i % 3) * 60} className="py-6">
            <h3 className="text-base font-medium text-white">{r.criterion}</h3>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="text-xs text-white/40">Manual monitoring</dt>
                <dd className="text-white/60"><Cell text={r.manual} /></dd>
              </div>
              <div>
                <dt className="text-xs text-white/40">Conventional sensor systems</dt>
                <dd className="text-white/60"><Cell text={r.sensor} /></dd>
              </div>
              <div className="rounded-lg border-l-2 border-aqua bg-aqua/[0.07] px-3 py-2.5">
                <dt className="text-xs font-semibold text-aqua">AREATOR</dt>
                <dd className="font-medium text-white">{r.areator}</dd>
              </div>
            </dl>
          </Reveal>
        ))}
      </ul>

      <Reveal as="p" className="mt-6 max-w-3xl text-xs leading-relaxed text-white/40">
        This compares approaches, not specific brands, and is not the result of independent testing. AREATOR entries
        describe the product's design intent and prototype status as documented by INNO-NEST. Cost and multi-pond
        capability are still to be confirmed.
      </Reveal>
    </Section>
  );
}
