import { ArrowRight, Info } from 'lucide-react';
import { Section, SectionHead } from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import StatusChip from '../components/StatusChip.jsx';

const STEPS = [
  { title: 'A GSM or sensor fault occurs', text: 'Communication drops, or a sensor stops reporting correctly.' },
  { title: 'Aeration keeps running', text: 'The aerator continues local operation instead of stopping.' },
  { title: 'The system retries', text: 'It keeps trying to restore communication.' },
  { title: 'The farmer is notified', text: 'The farmer is warned about the fault.' },
];

export default function Reliability() {
  return (
    <Section id="reliability">
      <SectionHead label="Reliability" title="Designed so a failed signal doesn't switch the aerator off.">
        AREATOR's intended fail-safe approach is that a GSM or sensor failure should not automatically stop aeration.
      </SectionHead>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 110} className="relative bg-black p-6 lg:p-8">
            <p className="text-sm text-white/40">Step {i + 1}</p>
            <h3 className="mt-3 text-lg font-medium tracking-tight text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            {i < STEPS.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                size={18}
                className="absolute right-4 top-6 hidden text-aqua lg:block"
              />
            )}
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10 flex max-w-3xl gap-4 rounded-2xl border border-aqua/30 bg-aqua/[0.06] p-6">
        <Info size={20} className="mt-0.5 shrink-0 text-aqua" aria-hidden="true" />
        <div>
          <p className="flex flex-wrap items-center gap-3 text-base font-medium text-white">
            Fail-safe behavior is a design objective <StatusChip status="design" />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Reliable local control, fault detection and safety mechanisms still have to be verified on the physical
            prototype. INNO-NEST does not claim guaranteed fail-safe behavior until that testing is complete.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
