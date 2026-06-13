export default function Footer() {
  return (
    <footer className="border-t border-forest-200 bg-forest-900 text-forest-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="text-xl font-bold text-white">
                Humanity <span className="text-forest-400">OS</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-400">
              An open source resource hub for building an abundant world without money.
              Connecting permaculture, open technology, collective living, and gift economy
              resources in one place. By the people, for the people.
            </p>
            <p className="mt-4 text-xs text-forest-500">
              This project is open source and community-maintained.
              <br />
              Licensed under Creative Commons (CC BY-SA 4.0)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-200">
              Key Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Open Source Ecology', url: 'https://www.opensourceecology.org/' },
                { label: 'Global Ecovillage Network', url: 'https://ecovillage.org/' },
                { label: 'Low-tech Lab', url: 'https://lowtechlab.org/en' },
                { label: 'Appropedia Wiki', url: 'https://www.appropedia.org/' },
                { label: 'P2P Foundation', url: 'https://wiki.p2pfoundation.net/' },
              ].map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-400 transition-colors hover:text-forest-200"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest-200">
              Contribute
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/l10n-h34r7/humanity-os-resource-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-400 transition-colors hover:text-forest-200"
                >
                  🔗 GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/l10n-h34r7/humanity-os-resource-hub/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-400 transition-colors hover:text-forest-200"
                >
                  📝 Suggest a Resource
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/l10n-h34r7/humanity-os-resource-hub/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-400 transition-colors hover:text-forest-200"
                >
                  🍴 Fork this Project
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-lg border border-forest-700 bg-forest-800/50 p-4">
              <p className="text-xs leading-relaxed text-forest-400">
                <strong className="text-forest-300">Add resources:</strong> Open a PR or issue
                on GitHub. Every link helps someone find their path.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-forest-800 pt-8 text-center text-xs text-forest-500">
          <p>
            Made with 💚 by the community · No copyright, only copyleft ·{' '}
            <a
              href="https://l10n-h34r7.github.io/humanity-os-resource-hub/"
              className="text-forest-400 hover:text-forest-200"
            >
              l10n-h34r7.github.io/humanity-os-resource-hub
            </a>
          </p>
          <p className="mt-2 text-forest-600">
            "Another world is not only possible, she is on her way. On a quiet day, I can hear
            her breathing." — Arundhati Roy
          </p>
        </div>
      </div>
    </footer>
  );
}
