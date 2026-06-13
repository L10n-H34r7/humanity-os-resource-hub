import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, AlertTriangle, ExternalLink } from 'lucide-react';
import { legalFrameworks } from '../data/legalFrameworks';

function FrameworkCard({ structure }: { structure: { name: string; description: string; pros: string[]; cons: string[]; url?: string } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div>
          <h4 className="text-white font-semibold">{structure.name}</h4>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">{structure.description}</p>
        </div>
        {expanded ? (
          <ChevronUp size={18} className="text-gray-500 flex-shrink-0 ml-3" />
        ) : (
          <ChevronDown size={18} className="text-gray-500 flex-shrink-0 ml-3" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">{structure.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h5 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                <Check size={14} /> Advantages
              </h5>
              <ul className="space-y-1.5">
                {structure.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-emerald-400 mt-0.5">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                <AlertTriangle size={14} /> Challenges
              </h5>
              <ul className="space-y-1.5">
                {structure.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-amber-400 mt-0.5">–</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {structure.url && (
            <a
              href={structure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Learn more <ExternalLink size={13} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function LegalFrameworks() {
  const [activeCountry, setActiveCountry] = useState<string>('all');

  const filtered = activeCountry === 'all'
    ? legalFrameworks
    : legalFrameworks.filter((f) => f.country === activeCountry);

  return (
    <section id="legal" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Legal Pathways</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Frameworks</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Collective ownership is legal — in many forms, in many countries. Here's how to do it within existing legal systems while building outside them.
          </p>
        </div>

        {/* Country filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCountry('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCountry === 'all'
                ? 'bg-emerald-500 text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            🌐 All Countries
          </button>
          {legalFrameworks.map((f) => (
            <button
              key={f.country}
              onClick={() => setActiveCountry(f.country)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCountry === f.country
                  ? 'bg-emerald-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {f.flag} {f.country}
            </button>
          ))}
        </div>

        {/* Frameworks */}
        <div className="space-y-8">
          {filtered.map((framework) => (
            <div key={framework.country}>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-3xl">{framework.flag}</span>
                {framework.country}
              </h3>
              <div className="space-y-3">
                {framework.structures.map((structure) => (
                  <FrameworkCard key={structure.name} structure={structure} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
