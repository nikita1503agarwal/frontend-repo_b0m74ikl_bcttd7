import React from 'react';
import { Wind, Leaf, Recycle, Bus } from 'lucide-react';

const cards = [
  {
    title: 'Air Quality',
    value: 'AQI 38 • Good',
    trend: '+3% today',
    icon: Wind,
    color: 'from-cyan-500/30 to-emerald-500/30',
  },
  {
    title: 'Renewable Energy',
    value: '72% grid supply',
    trend: '+12% YoY',
    icon: Leaf,
    color: 'from-emerald-500/30 to-lime-400/30',
  },
  {
    title: 'Waste Management',
    value: '64% recycled',
    trend: '-6% landfill',
    icon: Recycle,
    color: 'from-lime-400/30 to-teal-400/30',
  },
  {
    title: 'Smart Transport',
    value: 'EV share 41%',
    trend: '-18% congestion',
    icon: Bus,
    color: 'from-cyan-500/30 to-blue-500/30',
  },
];

const DataCard = ({ title, value, trend, Icon, color }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-emerald-300/40">
    <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-40 blur-2xl`} />
    <div className="relative flex items-start gap-4">
      <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-3 text-emerald-300 ring-1 ring-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-widest text-emerald-200/80">{title}</p>
        <p className="mt-1 text-xl font-semibold text-white">{value}</p>
        <p className="mt-1 text-xs text-emerald-200/70">{trend}</p>
      </div>
    </div>
    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400" />
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <section id="dashboard" className="relative w-full bg-gradient-to-b from-black to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Smart City Dashboard</h2>
            <p className="mt-2 max-w-2xl text-sm text-emerald-100/80">
              Live indicators for air quality, renewable energy, waste circularity, and smart mobility.
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur md:block">
            Updated • 2 mins ago
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <DataCard key={c.title} title={c.title} value={c.value} trend={c.trend} Icon={c.icon} color={c.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
