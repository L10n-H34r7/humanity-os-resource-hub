export default function Manifesto() {
  return (
    <section className="bg-earth-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-forest-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm sm:p-12">
          <div className="mb-8 text-center">
            <span className="text-4xl">💡</span>
            <h2 className="mt-4 text-3xl font-bold text-forest-900 sm:text-4xl">
              The Premise
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-forest-800">
            <p>
              <strong className="text-forest-900">We already have everything we need.</strong>{' '}
              The knowledge exists. The technology is open source. The land is there. Communities
              around the world are proving every day that we can live together in abundance —
              without money, without hierarchy, without exploitation.
            </p>

            <p>
              The problem isn't resources. It's <strong>connections</strong>. The solutions are
              scattered across thousands of websites, repositories, wikis, and communities. This
              hub brings them together so you can see the full picture:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { emoji: '🔧', text: 'Open source machines that anyone can build' },
                { emoji: '🌿', text: 'Permaculture that regenerates ecosystems' },
                { emoji: '🏘️', text: 'Communities already living without money' },
                { emoji: '⚖️', text: 'Legal frameworks for collective ownership' },
                { emoji: '☀️', text: 'Off-grid energy for true independence' },
                { emoji: '🤝', text: 'Gift economies replacing transactions' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-lg border border-forest-100 bg-forest-50/50 p-4"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-base text-forest-700">{item.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-sun-400 bg-sun-50/50 p-6 italic text-forest-700">
              "It is not utopia. It is not naïve. It is the most practical thing we can do.
              Every ecovillage, every open source tool, every gift freely given is a seed of
              the world we're building — not someday, but right now."
            </blockquote>

            <p className="text-center text-base font-medium text-forest-600">
              This is Humanity OS — an open source operating system for civilization.
              <br />
              <span className="text-forest-500">Fork it. Improve it. Share it. Live it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
