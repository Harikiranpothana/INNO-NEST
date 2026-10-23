import { Section, SectionHead } from '../components/Section.jsx';
import Reveal, { useReveal } from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { PARAMETERS, GAP_STAGES } from '../content.js';
import fishImg from '../assets/pond-fish-loss.jpg';

// Illustrative only: shows why a gap opens between two periodic checks.
function GapTimeline() {
  const [ref, state] = useReveal();
  const grow = state === 'hidden' ? 'scale-x-0' : 'scale-x-100';
  return (
    <div ref={ref} className="mt-14">
      <div className="relative pt-14">
        {/* manual inspection markers */}
        {[
          { left: '6%', label: 'Manual check' },
          { left: '88%', label: 'Next manual check' },
        ].map((m) => (
          <div key={m.label} className="absolute top-0 -translate-x-1/2 text-center" style={{ left: m.left }}>
            <p className="whitespace-nowrap text-[11px] text-white/70 sm:text-xs">{m.label}</p>
            <div className="mx-auto mt-2 h-10 w-px bg-white/50" />
          </div>
        ))}
        <div
          className={`h-3 origin-left rounded-full bg-gradient-to-r from-aqua/60 via-white/20 to-rose-400/80 transition-transform duration-[1400ms] ease-out ${grow}`}
        />
      </div>
      <ol className="mt-4 grid grid-cols-4 gap-2 sm:gap-6">
        {GAP_STAGES.map((s, i) => (
          <li key={s} className="text-[11px] leading-snug text-white/70 sm:text-sm">
            <span className="sr-only">{`Stage ${i + 1}: `}</span>
            {s}
          </li>
        ))}
      </ol>
      <p className="mt-6 text-xs text-white/40">
        Illustrative sequence, not measured data. When the interval between two observations is longer than the time
        pond conditions need to deteriorate, the problem goes unseen.
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <Section id="problem">
      <SectionHead label="The problem" title="Pond water changes all the time. Manual checks happen only now and then.">
        Fish health and growth depend on several interacting water-quality parameters. These can vary with
        environmental conditions, biological activity, stocking density and time of day.
      </SectionHead>

      <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <figure>
            <img
              src={fishImg}
              alt="Dead fish floating among reeds at the edge of a pond"
              width="470"
              height="470"
              loading="lazy"
              className="aspect-square w-full max-w-md rounded-2xl object-cover lg:max-w-none"
            />
            <figcaption className="mt-3 text-xs text-white/40">
              Sudden deterioration in water quality is a risk to fish health and survival.
            </figcaption>
          </figure>
        </Reveal>

        <ul className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7 lg:self-center">
          {PARAMETERS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="flex gap-5 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-aqua">
                <Icon name={p.icon} size={20} />
              </span>
              <div>
                <h3 className="text-lg font-medium tracking-tight text-white">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="mt-20 lg:mt-28">
        <Reveal
          as="p"
          className="max-w-4xl text-2xl font-medium leading-[1.25] tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Water conditions can change continuously, while manual monitoring happens periodically. This creates a gap
          between the onset of a problem and the farmer's response.
        </Reveal>
        <GapTimeline />
      </div>
    </Section>
  );
}
