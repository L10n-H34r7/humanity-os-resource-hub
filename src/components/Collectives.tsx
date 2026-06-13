import { useState } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { collectives, regionLabels } from '../data/collectives';

export default function Collectives() {
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const regions = ['all', ...Object.keys(regionLabels)];
  const filtered = activeRegion === 'all'
    ? collectives
    : collectives.filter((c) => c.region === activeRegion);

  return (
    <section id="collectives" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Living Proof</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Collectives & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Communities</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            From Zapatista autonomous zones to Danish freetown, from Basque worker cooperatives to Brazilian land reform settlements — these communities are already living the alternative.
          </p>
        </div>

        {/* Region filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeRegion === region
                  ? 'bg-emerald-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {region === 'all' ? '🌐 All Regions' : `${regionLabels[region]?.emoji} ${regionLabels[region]?.label}`}
            </button>
          ))}
        </div>

        {/* Collectives grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((collective) => (
            <div
              key={collective.name}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {collective.type}
                </span>
                {collective.active && (
                  <span className="flex items-center gap-1.5 text-xs text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {collective.name}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {collective.location}
                </span>
                {collective.founded && (
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    Est. {collective.founded}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {collective.description}
              </p>

              {collective.url && (
                <a
                  href={collective.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Visit <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
