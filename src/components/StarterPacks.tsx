import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Rocket } from 'lucide-react';
import { starterPacks } from '../data/directories';

function PackCard({ pack }: { pack: typeof starterPacks[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">{pack.title.split(' ')[0]}</span>
          <div>
            <h3 className="text-xl font-semibold text-white">
              {pack.title.split(' ').slice(1).join(' ')}
            </h3>
            <p className="text-sm text-gray-500">{pack.steps.length} steps · {pack.resources.length} resources</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-6">
          {/* Steps */}
          <div>
            <h4 className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Rocket size={14} /> Step-by-Step
            </h4>
            <ol className="space-y-2.5">
              {pack.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
              📎 Key Resources
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {pack.resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 text-sm text-gray-300 hover:text-emerald-400 transition-all"
                >
                  <ExternalLink size={13} className="flex-shrink-0" />
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StarterPacks() {
  return (
    <section id="starters" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Action Blueprints</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Starter <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Packs</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Step-by-step guides to start building right now. No permission needed.
          </p>
        </div>

        <div className="space-y-4">
          {starterPacks.map((pack) => (
            <PackCard key={pack.title} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  );
}
