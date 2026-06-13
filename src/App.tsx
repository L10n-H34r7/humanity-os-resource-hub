import { useCallback } from 'react';
import { categories } from './data/resources';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Manifesto from './components/Manifesto';
import QuickNav from './components/QuickNav';
import StarterPacks from './components/StarterPacks';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-earth-50">
      <Header onNavigate={scrollTo} />
      <Hero onNavigate={scrollTo} />
      <SearchBar />
      <Manifesto />
      <QuickNav onNavigate={scrollTo} />
      <StarterPacks />

      {/* Divider */}
      <div className="bg-white py-8 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-forest-300 to-transparent" />
          <p className="mt-6 text-lg font-semibold text-forest-800">
            📚 Full Resource Library
          </p>
          <p className="mt-1 text-sm text-forest-500">
            100+ curated links organized by theme. Every resource hand-picked and verified.
          </p>
        </div>
      </div>

      {/* All Category Sections */}
      {categories.map((category, i) => (
        <div key={category.id}>
          <CategorySection category={category} />
          {i < categories.length - 1 && (
            <div className="h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent" />
          )}
        </div>
      ))}

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-forest-800 to-forest-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-5xl">🌍</span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            This Hub is Yours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-forest-300">
            Humanity OS is open source. Every resource was curated by the community. 
            Found a project that should be here? Know a legal framework we missed? 
            Have a story to share?
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/l10n-h34r7/humanity-os-resource-hub/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-sun-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sun-600 hover:scale-105"
            >
              📝 Suggest a Resource
            </a>
            <a
              href="https://github.com/l10n-h34r7/humanity-os-resource-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-forest-500 px-8 py-4 text-lg font-semibold text-forest-200 transition-all hover:bg-forest-800 hover:text-white"
            >
              🍴 Fork & Contribute
            </a>
          </div>
          <p className="mt-8 text-sm text-forest-500">
            Every link shared is a seed planted. Every fork is a new garden. 🌱
          </p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
