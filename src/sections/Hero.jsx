import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, scrollToId } from '../lib/router.jsx';
import logo from '../assets/inno-nest-logo.png';

// Original hero video, unchanged.
const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  // Pause the background video when it's off-screen, or if the visitor prefers reduced motion.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      v.pause();
      return undefined;
    }
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [videoFailed]);

  return (
    <header id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-black font-geist">
      {/* Fallback backdrop: shows if the video is slow or fails to load */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(56,184,192,0.28),transparent_60%),radial-gradient(ellipse_at_20%_90%,rgba(10,38,79,0.55),transparent_55%)]"
      />

      {/* Video background */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '70% center' }}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        />
      )}

      {/* Blend into the page below */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent to-black" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between gap-12 px-6 pb-10 pt-[calc(80px+3rem)] sm:pb-12 sm:pt-[calc(80px+4rem)] md:px-12 md:pb-16 md:pt-[calc(80px+5rem)] lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs text-white/90 animate-[fadeSlideUp_0.8s_ease_0.2s_both] sm:mb-6 sm:text-sm">
            INNO-NEST presents AREATOR: Aquaculture Pond Health Monitoring System
          </p>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-white animate-[fadeSlideUp_0.8s_ease_0.4s_both] sm:text-5xl md:text-6xl lg:text-7xl">
            Smarter pond monitoring.
            <br />
            More responsive aeration.
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 animate-[fadeSlideUp_0.8s_ease_0.7s_both] sm:mb-6 sm:max-w-xl sm:text-base md:text-lg">
              AREATOR is INNO-NEST's smart aquaculture pond monitoring and management solution, designed to
              monitor important water-quality parameters, notify farmers of abnormal conditions, and support
              timely aeration decisions.
            </p>
            <div className="flex flex-wrap gap-3 animate-[fadeSlideUp_0.8s_ease_0.9s_both]">
              <button
                onClick={() => scrollToId('areator')}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
              >
                Explore AREATOR
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-black/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-white/60 sm:px-6 sm:py-3"
              >
                Contact INNO-NEST
              </Link>
            </div>
          </div>

          {/* Official logo, shown unaltered on its own background */}
          <div className="hidden flex-col items-end gap-3 animate-[fadeSlideUp_0.8s_ease_1.1s_both] md:flex">
            {/* <img */}
              {/* src={logo} */}
              {/* alt="INNO-NEST official logo" */}
              {/* width="140" */}
              {/* height="135" */}
              {/* className="h-28 w-auto rounded-2xl ring-1 ring-white/20 lg:h-36" */}
            {/* /> */}
            <p className="text-xs text-white/60">AREATOR is a product developed by INNO-NEST</p>
          </div>
        </div>
      </div>
    </header>
  );
}
