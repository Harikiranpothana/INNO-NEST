import { useLayoutEffect, useRef, useState } from 'react';

// Scroll reveal built on the site's existing fadeSlideUp keyframe.
// Content below the fold is hidden *before first paint* and animated once when
// it scrolls into view. If IntersectionObserver is missing, everything simply shows.
export function useReveal() {
  const ref = useRef(null);
  const [state, setState] = useState('idle'); // idle | hidden | shown

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) return undefined; // already on screen / passed
    setState('hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, state];
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, state] = useReveal();
  const anim =
    state === 'hidden' ? 'opacity-0' : state === 'shown' ? 'animate-[fadeSlideUp_0.8s_ease_both]' : '';
  return (
    <Tag
      ref={ref}
      className={`${anim} ${className}`}
      style={state === 'shown' ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
