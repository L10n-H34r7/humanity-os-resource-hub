import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { categories, typeLabels } from '../data/resources';
import type { Resource } from '../data/resources';

interface SearchResult extends Resource {
  categoryTitle: string;
  categoryEmoji: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const allResources: SearchResult[] = useMemo(
    () =>
      categories.flatMap((c) =>
        c.resources.map((r) => ({
          ...r,
          categoryTitle: c.title,
          categoryEmoji: c.emoji,
        }))
      ),
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allResources.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.categoryTitle.toLowerCase().includes(q)
    );
  }, [query, allResources]);

  return (
    <div className="relative bg-white/90 py-6 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search resources... (e.g., 'solar', 'land trust', 'permaculture', 'France')"
            className="w-full rounded-xl border border-forest-200 bg-white py-3 pl-12 pr-10 text-forest-900 placeholder:text-forest-400 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-200"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-forest-400 hover:bg-forest-100"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Results dropdown */}
        {isOpen && query.trim() && (
          <div className="absolute left-4 right-4 z-40 mt-2 max-h-96 overflow-y-auto rounded-xl border border-forest-200 bg-white shadow-xl sm:left-6 sm:right-6 lg:left-8 lg:right-8">
            {results.length > 0 ? (
              <div className="divide-y divide-forest-100">
                <div className="px-4 py-2 text-xs font-medium text-forest-500">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </div>
                {results.map((r, i) => {
                  const typeInfo = typeLabels[r.type] || { label: r.type, emoji: '📄' };
                  return (
                    <a
                      key={`${r.url}-${i}`}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 transition-colors hover:bg-forest-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-lg">{r.categoryEmoji}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-medium text-forest-900">
                              {r.title}
                            </span>
                            <span className="shrink-0 rounded-full bg-forest-100 px-2 py-0.5 text-[10px] text-forest-600">
                              {typeInfo.emoji} {typeInfo.label}
                            </span>
                          </div>
                          <p className="mt-0.5 line-clamp-2 text-xs text-forest-500">
                            {r.description}
                          </p>
                          <p className="mt-1 text-[10px] text-forest-400">{r.categoryTitle}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="px-4 py-6 text-center">
                <p className="text-sm text-forest-500">No resources found for "{query}"</p>
                <p className="mt-1 text-xs text-forest-400">
                  Try different keywords like "solar", "land", "community", or "France"
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isOpen && query.trim() && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
