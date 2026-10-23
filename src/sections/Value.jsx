import { Section, SectionHead } from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import StatusChip from '../components/StatusChip.jsx';
import { VALUE } from '../content.js';

export default function Value() {
  return (
    <Section id="value">
      <SectionHead label="Why choose AREATOR" title="Where AREATOR is meant to help your farm.">
        These are the intended benefits of the product concept. Where a benefit has not yet been measured or built, it is
        marked that way.
      </SectionHead>

      <ul className="mt-14 grid border-t border-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {VALUE.map((v, i) => (
          <Reveal
            as="li"
            key={v.title}
            delay={(i % 3) * 90}
            className="border-b border-white/10 py-9 sm:odd:pr-8 sm:even:pl-8 lg:px-8 lg:first:pl-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:border-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-aqua">
              <Icon name={v.icon} size={20} />
            </span>
            <h3 className="mt-5 text-xl font-medium tracking-tight text-white">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{v.text}</p>
            {v.status && <StatusChip status={v.status} className="mt-4" />}
          </Reveal>
        ))}
      </ul>

      <Reveal as="p" className="mt-10 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
        The intended business model pairs AREATOR aerator hardware with farm monitoring software, so it can grow from a
        single pond to a larger aquaculture operation.
      </Reveal>
    </Section>
  );
}
