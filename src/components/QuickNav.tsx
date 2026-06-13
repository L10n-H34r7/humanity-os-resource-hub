import { categories } from '../data/resources';

export default function QuickNav({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-forest-900 sm:text-3xl">
            Explore by Category
          </h2>
          <p className="mt-2 text-forest-600">
            Jump to any section or scroll down to browse everything
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className="group flex flex-col items-center rounded-xl border border-forest-200/60 bg-white p-4 shadow-sm transition-all hover:border-forest-300 hover:shadow-md sm:p-5"
            >
              <span className="text-3xl transition-transform group-hover:scale-110 sm:text-4xl">
                {cat.emoji}
              </span>
              <span className="mt-2 text-center text-xs font-medium leading-tight text-forest-700 sm:text-sm">
                {cat.title.length > 25 ? cat.title.split('&')[0].trim() : cat.title}
              </span>
              <span className="mt-1 text-[10px] text-forest-400">
                {cat.resources.length} resources
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
