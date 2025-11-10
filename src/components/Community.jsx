import React from 'react';
import { Lightbulb, Users, Rocket } from 'lucide-react';

const ideas = [
  {
    title: 'Neighborhood Microgrids',
    desc: 'Peer-to-peer energy sharing using rooftop solar and home batteries.',
    tag: 'Energy',
  },
  {
    title: 'Smart Waste Rewards',
    desc: 'Token incentives for sorting recyclables and compost at source.',
    tag: 'Waste',
  },
  {
    title: 'EV Carpool Hub',
    desc: 'AI-matched commute pools powered by fast-charging hubs.',
    tag: 'Mobility',
  },
  {
    title: 'Rain Garden Streets',
    desc: 'Permeable pavements with native plants to reduce runoff.',
    tag: 'Nature',
  },
];

const IdeaCard = ({ title, desc, tag }) => (
  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-emerald-300/40">
    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-60 blur-2xl" />
    <div className="relative">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-emerald-200">
        {tag}
      </div>
      <h4 className="mt-3 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-emerald-100/80">{desc}</p>
      <button className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300 transition hover:text-emerald-200">
        Support idea <Rocket className="h-3.5 w-3.5" />
      </button>
    </div>
  </div>
);

const Community = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-white/10">
            <Lightbulb className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Community Innovations</h3>
            <p className="text-sm text-emerald-100/80">Citizen ideas shaping the next-gen sustainable city</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ideas.map((i) => (
            <IdeaCard key={i.title} title={i.title} desc={i.desc} tag={i.tag} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="flex items-center gap-3 text-emerald-100/90">
            <Users className="h-5 w-5 text-emerald-300" />
            <p className="text-sm">Join 12,532 citizens contributing ideas</p>
          </div>
          <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Share your idea →</a>
        </div>
      </div>
    </section>
  );
};

export default Community;
