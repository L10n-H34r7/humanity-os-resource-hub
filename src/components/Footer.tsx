import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fork It. Build It. <span className="text-emerald-400">Live It.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            This is a living document. Every link, project, and framework listed here is a seed. 
            Plant it. Fork the repo. Add your collective. Share your legal structure. 
            The revolution is open source.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/topics/humanity"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all hover:scale-105"
            >
              ⭐ Star on GitHub
            </a>
            <a
              href="https://github.com/topics/sharing-economy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all"
            >
              🍴 Fork & Contribute
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-3">Key Projects</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://github.com/stateless-minds/cyber-autonomy" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Cyber Autonomy</a></li>
              <li><a href="https://github.com/stateless-minds/cyber-stasis" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Cyber Stasis</a></li>
              <li><a href="https://github.com/decidim/decidim" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Decidim</a></li>
              <li><a href="https://github.com/loomio/loomio" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Loomio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Networks</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://www.ic.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">ic.org — Communities</a></li>
              <li><a href="https://ecovillage.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Global Ecovillage Network</a></li>
              <li><a href="https://thefec.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Egalitarian Communities</a></li>
              <li><a href="https://platform.coop" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Platform Cooperativism</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://www.cltweb.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Community Land Trusts</a></li>
              <li><a href="https://www.syndikat.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Mietshäuser Syndikat</a></li>
              <li><a href="https://terredeliens.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Terre de Liens</a></li>
              <li><a href="https://www.les-scop.coop" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">SCOPs (France)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Movement</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://theanarchistlibrary.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">The Anarchist Library</a></li>
              <li><a href="https://transitionnetwork.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Transition Network</a></li>
              <li><a href="https://www.opensourceecology.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Open Source Ecology</a></li>
              <li><a href="https://www.radicalroutes.org.uk" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Radical Routes</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-xl">🌍</span>
            <span>
              Humanity<span className="text-emerald-400 font-semibold">OS</span> — No Copyright. No Permission Needed. Fork Everything.
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            Made with <Heart size={14} className="text-red-500" fill="currentColor" /> for the commons
          </div>
        </div>
      </div>
    </footer>
  );
}
