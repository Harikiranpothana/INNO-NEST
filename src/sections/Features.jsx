import { Check } from 'lucide-react';
import { Section, SectionHead } from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import StatusChip from '../components/StatusChip.jsx';
import { FEATURE_GROUPS, STATUS } from '../content.js';
import sms from '../assets/sms-prototype-test.jpg';

export default function Features() {
  return (
    <Section id="features">
      <SectionHead label="Capabilities" title="What AREATOR does, and how far along each part is.">
        Each capability is marked with its current status, so you can tell what has been shown on the prototype from what
        is still a design objective or a plan.
      </SectionHead>

      {/* status key */}
      <Reveal className="mt-10 grid gap-3 border-y border-white/10 py-5 lg:grid-cols-3 lg:gap-8">
        {['demonstrated', 'design', 'planned'].map((k) => (
          <p key={k} className="flex items-start gap-3 text-sm text-white/60">
            <StatusChip status={k} />
            {STATUS[k].hint}
          </p>
        ))}
      </Reveal>

      <div className="divide-y divide-white/10 border-b border-white/10">
        {FEATURE_GROUPS.map((g) => (
          <Reveal key={g.title} className="grid gap-5 py-9 lg:grid-cols-12 lg:gap-12">
            <div className="flex items-center gap-4 lg:col-span-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-aqua">
                <Icon name={g.icon} size={20} />
              </span>
              <h3 className="text-xl font-medium tracking-tight text-white">{g.title}</h3>
            </div>
            <ul className="space-y-4 lg:col-span-8">
              {g.items.map((it) => (
                <li key={it.text} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <span className="flex max-w-xl gap-3 text-sm text-white/80 sm:text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-white/40" aria-hidden="true" />
                    {it.text}
                  </span>
                  <StatusChip status={it.status} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* SMS showcase: authentic prototype screenshot */}
      <div className="mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:order-2 lg:col-span-5">
          <figure className="mx-auto max-w-[320px]">
            <img
              src={sms}
              alt="Screenshot of a prototype SMS: a water-quality report listing pH, temperature and turbidity against normal ranges, a written suggestion, then ON and OFF commands answered by 'Aerator control: MOTORS ON' and 'MOTORS OFF'"
              width="531"
              height="1152"
              loading="lazy"
              className="w-full rounded-[2rem] ring-1 ring-white/20"
            />
            <figcaption className="mt-3 text-xs leading-relaxed text-white/40">
              Test messages from the AREATOR prototype. The readings come from a test and are not live pond data. The
              sender's phone number has been masked.
            </figcaption>
          </figure>
        </Reveal>
        <div className="lg:order-1 lg:col-span-7">
          <Reveal as="h3" className="text-2xl font-medium tracking-tight text-white sm:text-4xl">
            A pond report in a text message.
          </Reveal>
          <Reveal as="div" delay={120} className="mt-5 space-y-4 text-sm leading-relaxed text-white/60 sm:text-base">
            <p>
              The system texts the measured water-quality values to a registered mobile number, each shown beside its
              normal range, for example temperature at 25–30 °C and turbidity at 0–25 NTU.
            </p>
            <p>
              Below the readings it adds plain-language suggestions, such as checking for suspended particles when
              water clarity is poor.
            </p>
            <p>
              The farmer can also reply ON or OFF to switch the aerator motors, and the system confirms the change.
              SMS works on ordinary mobile phones, with no app to install.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
