import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)] blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 py-24 sm:py-28 md:py-32 lg:py-40">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs tracking-wide text-emerald-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" /> CitySense • Smart & Sustainable
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white drop-shadow md:text-6xl">
          Building the Future, One Smart City at a Time
        </h1>
        <p className="mt-4 max-w-2xl text-base text-emerald-100/90 md:text-lg">
          A visionary dashboard blending green technology and urban innovation — where data-driven insights meet eco-friendly design.
        </p>
        <div className="mt-8">
          <a
            href="#dashboard"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] transition hover:shadow-[0_0_45px_rgba(16,185,129,0.6)] focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
          >
            Explore the Future City
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
