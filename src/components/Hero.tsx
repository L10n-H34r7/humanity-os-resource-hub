import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open Source · Community Driven · No Money Required
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6">
          Humanity
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            {' '}OS
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          Open source seeds for a world without money.
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We have all the knowledge to live together in abundance. What's missing are the <span className="text-emerald-400 font-semibold">links</span>. 
          This hub connects projects, collectives, legal frameworks, and starter packs proving that another world is not utopia — <span className="text-white font-semibold">it already exists</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
          >
            Explore the Ecosystem
          </a>
          <a
            href="#starters"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all hover:border-white/20"
          >
            Get a Starter Pack
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '16+', label: 'GitHub Projects' },
            { value: '23+', label: 'Active Collectives' },
            { value: '10+', label: 'Countries Mapped' },
            { value: '4', label: 'Starter Packs' },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#vision"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-emerald-400 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
