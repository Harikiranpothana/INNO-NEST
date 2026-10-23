import { useEffect, useState } from 'react';

// Tiny History-API router: two routes don't justify another dependency.
const EVT = 'inno:navigate';
const clean = (p) => p.replace(/\/+$/, '') || '/';
const read = () => clean(window.location.pathname);

export function usePath() {
  const [path, setPath] = useState(read);
  useEffect(() => {
    const sync = () => setPath(read());
    window.addEventListener('popstate', sync);
    window.addEventListener(EVT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(EVT, sync);
    };
  }, []);
  return path;
}

export function scrollToId(id, smooth = true) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });
  return true;
}

export function go(to) {
  const url = new URL(to, window.location.origin);
  const target = url.pathname + url.search + url.hash;
  if (clean(url.pathname) === read()) {
    // Same page: just scroll.
    if (target !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.pushState(null, '', target);
    }
    if (url.hash) scrollToId(url.hash.slice(1));
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState(null, '', target);
  window.dispatchEvent(new Event(EVT));
}

export function Link({ to, onClick, children, ...rest }) {
  const handle = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    go(to);
  };
  return (
    <a {...rest} href={to} onClick={handle}>
      {children}
    </a>
  );
}
