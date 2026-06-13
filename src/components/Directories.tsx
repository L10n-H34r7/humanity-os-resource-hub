import { ExternalLink, Globe } from 'lucide-react';
import { directories } from '../data/directories';

export default function Directories() {
  return (
    <section id="directories" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Find Your People</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Directories</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Networks and directories to find intentional communities, cooperatives, ecovillages, 
            and collectives near you — or anywhere in the world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {directories.map((dir) => (
            <a
              key={dir.name}
              href={dir.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Globe size={12} />
                  {dir.scope}
                </span>
                {dir.count && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                    {dir.count} communities
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                {dir.name}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {dir.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
