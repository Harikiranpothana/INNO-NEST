import {
  Activity, Brain, Clock, Cpu, Fan, FlaskConical, Gauge, Handshake, Info, Layers, Link2,
  MessageCircle, MessageSquareText, Route, ShieldCheck, ShoppingBag, Smartphone,
  Thermometer, Timer, TriangleAlert, Waves, WifiOff, Wind, Zap,
} from 'lucide-react';

// Explicit map keeps the bundle small (no wildcard import) while content.js stays plain data.
const ICONS = {
  Activity, Brain, Clock, Cpu, Fan, FlaskConical, Gauge, Handshake, Info, Layers, Link2,
  MessageCircle, MessageSquareText, Route, ShieldCheck, ShoppingBag, Smartphone,
  Thermometer, Timer, TriangleAlert, Waves, WifiOff, Wind, Zap,
};

export default function Icon({ name, ...props }) {
  const C = ICONS[name] || Info;
  return <C aria-hidden="true" {...props} />;
}
