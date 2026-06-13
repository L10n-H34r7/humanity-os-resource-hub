import { Lightbulb, Share2, Scale, Sprout, Users, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Share2,
    title: 'Gift Economy',
    description: 'Markets existed before money. Gift economies are the oldest and most natural form of exchange — based on trust, reciprocity, and abundance, not scarcity.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Users,
    title: 'Collective Governance',
    description: 'From Zapatista assemblies to Rojava councils — direct democracy works. People can govern themselves without politicians, bosses, or bureaucrats.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Sprout,
    title: 'Commons & Shared Ownership',
    description: 'Land, housing, and means of production owned collectively. Community Land Trusts, cooperatives, and commons remove resources from speculation permanently.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Open Source Everything',
    description: 'Knowledge, tools, designs, and processes shared freely. From farm equipment to governance templates — the blueprints for a better world are open source.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Scale,
    title: 'Mutual Aid',
    description: '"From each according to their ability, to each according to their need." Not charity — solidarity. Horizontal networks of support that replace the state.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  {
    icon: Zap,
    title: 'Post-Scarcity Tech',
    description: 'Automation, renewable energy, permaculture, and digital tools mean we can produce enough for everyone. Scarcity is manufactured, not inevitable.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">The Vision</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Not Utopia — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Already Happening</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Millions of people already live outside the money system — in cooperatives, communes, 
            ecovillages, and autonomous zones. This is not theory. These are the six pillars that 
            make it work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl ${pillar.bg} border ${pillar.border} hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div className={`inline-flex p-3 rounded-xl ${pillar.bg} ${pillar.color} mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
          <blockquote className="text-center">
            <p className="text-xl sm:text-2xl text-white italic leading-relaxed">
              "Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing."
            </p>
            <footer className="mt-4 text-emerald-400 font-semibold">— Arundhati Roy</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
