import { useState } from 'react';
import { Menu, X, Heart, ExternalLink } from 'lucide-react';
import { categories } from '../data/resources';

export default function Header({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-200/60 bg-forest-900/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <span className="text-2xl">🌱</span>
            <div>
              <h1 className="text-lg font-bold leading-tight text-white">
                Humanity <span className="text-forest-300">OS</span>
              </h1>
              <p className="hidden text-[10px] uppercase tracking-widest text-forest-400 sm:block">
                Open Source Resource Hub
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate(cat.id)}
                className="rounded-lg px-3 py-2 text-sm text-forest-200 transition-colors hover:bg-forest-800 hover:text-white"
              >
                <span className="mr-1">{cat.emoji}</span>
                <span className="hidden xl:inline">{cat.title.split('&')[0].trim()}</span>
                <span className="xl:hidden">{cat.title.split(' ').slice(0, 2).join(' ')}</span>
              </button>
            ))}
            <button
              onClick={() => onNavigate('starter-packs')}
              className="ml-2 rounded-lg bg-sun-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sun-600"
            >
              🚀 Start Here
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="https://github.com/l10n-h34r7/humanity-os-resource-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-300 hover:text-white"
            >
              <ExternalLink size={20} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-forest-200 hover:bg-forest-800"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop GitHub */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/l10n-h34r7/humanity-os-resource-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-forest-700 px-3 py-2 text-sm text-forest-200 transition-colors hover:bg-forest-800 hover:text-white"
            >
              <ExternalLink size={16} />
              <span>Contribute</span>
              <Heart size={14} className="text-red-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="border-t border-forest-800 bg-forest-900 lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            <button
              onClick={() => { onNavigate('starter-packs'); setMenuOpen(false); }}
              className="flex w-full items-center gap-2 rounded-lg bg-sun-500/20 px-4 py-3 text-left text-sun-300 transition-colors hover:bg-sun-500/30"
            >
              🚀 Start Here — Starter Packs
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { onNavigate(cat.id); setMenuOpen(false); }}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-3 text-left text-forest-200 transition-colors hover:bg-forest-800"
              >
                <span>{cat.emoji}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
