import { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { githubProjects, categoryLabels } from '../data/githubProjects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Object.keys(categoryLabels)];
  const filtered = activeCategory === 'all'
    ? githubProjects
    : githubProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">GitHub Ecosystem</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Tools, platforms, and simulators building the infrastructure for post-capitalist society. All open source. All forkable.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'all' ? '✨ All' : `${categoryLabels[cat]?.emoji} ${categoryLabels[cat]?.label}`}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => {
            const cat = categoryLabels[project.category];
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cat?.color}`}>
                    {cat?.emoji} {cat?.label}
                  </span>
                  {project.stars && (
                    <span className="flex items-center gap-1 text-xs text-yellow-400">
                      <Star size={12} fill="currentColor" />
                      {project.stars}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  {project.name}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-gray-500 text-xs border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
