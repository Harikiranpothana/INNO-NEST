import { STATUS } from '../content.js';

const STYLE = {
  demonstrated: 'border-leaf/40 bg-leaf/10 text-leaf',
  design: 'border-aqua/40 bg-aqua/10 text-aqua',
  planned: 'border-white/20 text-white/60',
  unmeasured: 'border-white/20 text-white/60',
};

export default function StatusChip({ status, className = '' }) {
  const s = STATUS[status];
  if (!s) return null;
  return (
    <span
      title={s.hint}
      className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${STYLE[status]} ${className}`}
    >
      {s.label}
    </span>
  );
}
