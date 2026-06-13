import { BookOpen, ExternalLink } from 'lucide-react';
import { essentialReading } from '../data/directories';

export default function Reading() {
  return (
    <section id="reading" className="py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Knowledge Commons</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Reading</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            The theoretical foundations — from Kropotkin to Graeber, from Le Guin to Doctorow. Ideas that shaped the movement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {essentialReading.map((book) => (
            <div
              key={book.title}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-emerald-400/70 mb-2">{book.author}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {book.description}
                  </p>
                  {book.url && (
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Read free <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
