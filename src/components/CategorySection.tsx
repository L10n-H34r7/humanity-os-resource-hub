import { useState } from 'react';
import type { Category } from '../data/resources';
import { typeLabels } from '../data/resources';
import ResourceCard from './ResourceCard';

const colorClasses: Record<string, { bg: string; border: string; heading: string; badge: string }> = {
  forest: {
    bg: 'bg-forest-50/50',
    border: 'border-forest-200',
    heading: 'text-forest-900',
    badge: 'bg-forest-100 text-forest-700',
  },
  earth: {
    bg: 'bg-earth-50/50',
    border: 'border-earth-200',
    heading: 'text-earth-900',
    badge: 'bg-earth-100 text-earth-700',
  },
  sun: {
    bg: 'bg-sun-50/50',
    border: 'border-sun-200',
    heading: 'text-sun-900',
    badge: 'bg-sun-100 text-sun-700',
  },
  sky: {
    bg: 'bg-sky-50/50',
    border: 'border-sky-200',
    heading: 'text-sky-900',
    badge: 'bg-sky-100 text-sky-700',
  },
};

export default function CategorySection({ category }: { category: Category }) {
  const [filterType, setFilterType] = useState<string>('all');
  const colors = colorClasses[category.color] || colorClasses.forest;

  const filteredResources =
    filterType === 'all'
      ? category.resources
      : category.resources.filter((r) => r.type === filterType);

  const typesInCategory = Array.from(new Set(category.resources.map((r) => r.type)));

  return (
    <section id={category.id} className={`py-12 sm:py-16 ${colors.bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{category.emoji}</span>
            <div>
              <h2 className={`text-2xl font-bold sm:text-3xl ${colors.heading}`}>
                {category.title}
              </h2>
              <p className="mt-1 text-sm text-forest-600 sm:text-base">{category.description}</p>
            </div>
          </div>

          {/* Type Filter */}
          {typesInCategory.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-forest-700 text-white'
                    : 'bg-white text-forest-600 hover:bg-forest-100'
                }`}
              >
                All ({category.resources.length})
              </button>
              {typesInCategory.map((type) => {
                const info = typeLabels[type];
                const count = category.resources.filter((r) => r.type === type).length;
                return (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      filterType === type
                        ? 'bg-forest-700 text-white'
                        : 'bg-white text-forest-600 hover:bg-forest-100'
                    }`}
                  >
                    {info?.emoji} {info?.label} ({count})
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Resources Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.url} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="rounded-xl border border-dashed border-forest-300 bg-white/60 p-8 text-center">
            <p className="text-forest-500">No resources match this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
