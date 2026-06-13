import { ExternalLink } from 'lucide-react';
import type { Resource } from '../data/resources';
import { typeLabels } from '../data/resources';

export default function ResourceCard({ resource }: { resource: Resource }) {
  const typeInfo = typeLabels[resource.type] || { label: resource.type, emoji: '📄' };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-forest-200/60 bg-white p-5 shadow-sm transition-all hover:border-forest-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h4 className="text-base font-semibold leading-snug text-forest-900 group-hover:text-forest-700">
          {resource.title}
        </h4>
        <ExternalLink
          size={16}
          className="mt-0.5 shrink-0 text-forest-400 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-forest-600">
        {resource.description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-2.5 py-1 text-xs font-medium text-forest-700">
          {typeInfo.emoji} {typeInfo.label}
        </span>
        {resource.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-earth-100 px-2.5 py-1 text-xs text-earth-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
