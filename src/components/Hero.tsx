export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-forest-900 via-forest-800 to-forest-700"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute left-10 top-20 text-6xl opacity-20" style={{ animation: 'float 6s ease-in-out infinite' }}>🌍</div>
      <div className="absolute right-20 top-40 text-4xl opacity-15" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>🌿</div>
      <div className="absolute bottom-20 left-1/4 text-5xl opacity-15" style={{ animation: 'float 7s ease-in-out infinite 2s' }}>🏡</div>
      <div className="absolute bottom-40 right-1/3 text-3xl opacity-20" style={{ animation: 'float 9s ease-in-out infinite 0.5s' }}>☀️</div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-500/40 bg-forest-800/60 px-4 py-2 text-sm text-forest-200 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Open Source · Collaborative · For Everyone
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Humanity{' '}
            <span className="bg-gradient-to-r from-forest-300 via-green-300 to-sun-400 bg-clip-text text-transparent">
              OS
            </span>
          </h1>

          <p className="mb-4 text-xl font-medium text-forest-200 sm:text-2xl lg:text-3xl">
            The Operating System for an Abundant World
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-forest-300 sm:text-lg">
            We have all the knowledge to build a better world. What's missing are the links.
            This hub connects open source technology, permaculture, collective living, and
            post-monetary economics — everything you need to start building the alternative.
            <span className="mt-2 block font-semibold text-forest-200">
              Not by fighting, but by creating.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('starter-packs')}
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-sun-500 to-sun-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-sun-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-sun-500/30"
            >
              🚀 Start Your Journey
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => onNavigate('open-source-tech')}
              className="rounded-xl border-2 border-forest-500/40 px-8 py-4 text-lg font-semibold text-forest-200 transition-all hover:border-forest-400 hover:bg-forest-800/50 hover:text-white"
            >
              📚 Browse Resources
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { num: '100+', label: 'Curated Resources', emoji: '🔗' },
              { num: '10', label: 'Categories', emoji: '📂' },
              { num: '50+', label: 'Countries Covered', emoji: '🌍' },
              { num: '∞', label: 'Potential', emoji: '✨' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-forest-600/30 bg-forest-800/40 px-4 py-4 backdrop-blur-sm">
                <div className="text-2xl">{stat.emoji}</div>
                <div className="mt-1 text-2xl font-bold text-white">{stat.num}</div>
                <div className="text-xs text-forest-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            className="fill-earth-50"
          />
        </svg>
      </div>
    </section>
  );
}
