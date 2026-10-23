import Reveal from './Reveal.jsx';

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 ${className}`}>{children}</div>
);

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative scroll-mt-16 border-t border-white/10 py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

// Same voice as the hero: small label, medium-weight tight headline, muted paragraph.
export function SectionHead({ label, title, children, className = '' }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:gap-12 ${className}`}>
      <div className="lg:col-span-7">
        <Reveal as="p" className="mb-4 text-xs text-white/90 sm:mb-6 sm:text-sm">
          {label}
        </Reveal>
        <Reveal as="h2" delay={120} className="text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </Reveal>
      </div>
      {children && (
        <Reveal delay={240} className="text-sm leading-relaxed text-white/60 sm:text-base md:text-lg lg:col-span-5 lg:self-end">
          {children}
        </Reveal>
      )}
    </div>
  );
}
