import { Section, SectionHead } from '../components/Section.jsx';
import Reveal, { useReveal } from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { WORKFLOW } from '../content.js';
import prototype from '../assets/areator-prototype.jpg';

// Five genuinely sequential steps, so numbering is information here.
function Workflow() {
  const [ref, state] = useReveal();
  const hidden = state === 'hidden';
  return (
    <ol ref={ref} className="relative mt-16 grid gap-10 lg:mt-24 lg:grid-cols-5 lg:gap-6">
      {/* connector: vertical on mobile, horizontal on desktop */}
      <span
        aria-hidden="true"
        className={`absolute left-[21px] top-6 h-[calc(100%-3rem)] w-px origin-top bg-gradient-to-b from-aqua/70 to-leaf/70 transition-transform duration-[1400ms] ease-out lg:left-[21px] lg:top-[21px] lg:h-px lg:w-[calc(80%+1.2rem)] lg:origin-left lg:bg-gradient-to-r ${
          hidden ? 'scale-y-0 lg:scale-x-0 lg:scale-y-100' : 'scale-y-100 lg:scale-x-100'
        }`}
      />
      {WORKFLOW.map((s, i) => (
        <li key={s.title} className="relative flex gap-5 lg:flex-col lg:gap-5">
          <span className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-white/25 bg-black text-aqua">
            <Icon name={s.icon} size={19} />
          </span>
          <div>
            <h3 className="text-lg font-medium tracking-tight text-white">
              <span className="mr-2 text-white/40">{i + 1}.</span>
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Solution() {
  return (
    <Section id="areator">
      <SectionHead label="Meet AREATOR" title="One system that monitors, alerts and responds.">
        AREATOR is an integrated aquaculture pond monitoring and management system. It combines water-quality sensing,
        abnormal-condition detection, SMS communication and aeration control, so a reading outside its limits can lead
        to a timely response.
      </SectionHead>

      <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <figure className="max-w-lg">
            <img
              src={prototype}
              alt="The AREATOR working prototype floating on a pond: a twin-hull float with a paddle aerator and an electronics enclosure"
              width="413"
              height="332"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-xs text-white/40">The AREATOR working prototype.</figcaption>
          </figure>
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal as="h3" className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Built to support the farmer's decisions, not replace them.
          </Reveal>
          <Reveal delay={120} className="mt-4 space-y-4 text-sm leading-relaxed text-white/60 sm:text-base">
            <p>
              Sensors watch key pond conditions while a controller analyzes the readings. When a parameter crosses its
              predefined limit, the farmer is informed by SMS and the aerator can be brought into play, either by its
              configured control logic or by a supported SMS command.
            </p>
            <p>
              AREATOR does not eliminate fish mortality or guarantee healthy pond conditions. It narrows the gap between
              a problem starting and a farmer knowing about it.
            </p>
          </Reveal>
        </div>
      </div>

      <Workflow />
    </Section>
  );
}
