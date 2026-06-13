import { starterPacks } from '../data/resources';

export default function StarterPacks() {
  return (
    <section id="starter-packs" className="bg-gradient-to-b from-earth-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-4xl">🚀</span>
          <h2 className="mt-4 text-3xl font-bold text-forest-900 sm:text-4xl">
            Starter Packs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-forest-600">
            Where are you on your journey? Pick your path and start building the alternative today.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {starterPacks.map((pack) => (
            <div
              key={pack.title}
              className="group rounded-2xl border border-forest-200/60 bg-white p-6 shadow-sm transition-all hover:border-forest-300 hover:shadow-md sm:p-8"
            >
              <h3 className="mb-2 text-xl font-bold text-forest-900">{pack.title}</h3>
              <p className="mb-6 text-sm text-forest-600">{pack.description}</p>
              <ol className="space-y-3">
                {pack.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-100 text-xs font-bold text-forest-700">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-forest-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
