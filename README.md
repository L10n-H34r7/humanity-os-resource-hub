# 🌱 Humanity OS — Open Source Resource Hub

> **The Operating System for an Abundant World**

A central hub connecting open source technology, permaculture, collective living, off-grid solutions, and post-monetary economics. Everything you need to start building the alternative — not by fighting, but by creating.

🌐 **Live site:** [l10n-h34r7.github.io/humanity-os-resource-hub](https://l10n-h34r7.github.io/humanity-os-resource-hub/)

---

## 💡 What Is Humanity OS?

Humanity OS is the idea that we can live together in an abundant world without money, in anarcho-collective ways. We already have all the knowledge — what's missing are the **links** between crucial information so people realise this is not utopia.

This resource hub is a **starter pack / seed** — connecting:

- 🔧 **Open source hardware** — machines anyone can build (Open Source Ecology, Precious Plastic, FarmBot...)
- 🏗️ **Low-tech solutions** — simple, durable, repairable technology (Low-tech Lab, Earthship...)
- 🌿 **Permaculture & regenerative agriculture** — working with nature (WWOOF, seed saving, food forests...)
- 🏘️ **Collectives & ecovillages** — communities already living it (Auroville, Marinaleda, Zapatistas, Calafou...)
- ⚖️ **Legal frameworks** — how to own land collectively in different countries (CLTs, syndicates, co-ops...)
- 🤝 **Gift economy & moneyless living** — alternatives to money (Buy Nothing, timebanking, mutual aid...)
- 🌍 **Funding & land access** — getting started without being rich (crowdfunding, community shares, foundations...)
- ☀️ **Off-grid energy** — solar, wind, biogas open source designs
- 📚 **Education & media** — documentaries, books, libraries, manifestos
- 🤖 **Open source digital tools** — AI, communication, governance platforms
- 🗺️ **Maps & directories** — find communities and projects near you

---

## 🚀 Starter Packs

The site includes 4 guided paths depending on where you are:

| Pack | For whom | First step |
|------|----------|------------|
| 🌱 **Seed Pack** | Solo beginner | Learn permaculture principles, volunteer at a farm |
| 🏡 **Homestead Pack** | Small group (3-10) | Define values, research legal structures, access land |
| 🌍 **Village Pack** | Building community (10+) | Study existing models, join GEN, set up collective ownership |
| 💻 **Digital Nomad Pack** | Remote contributors | Contribute to open source, document projects, build tools |

---

## 🛠️ Tech Stack

This is a **React + Vite + Tailwind CSS** project that builds into a **single HTML file**.

| What | Why |
|------|-----|
| React | Component structure for 100+ resources |
| Vite | Fast builds |
| Tailwind CSS | Styling without separate CSS files |
| vite-plugin-singlefile | Everything compiles into one `index.html` |
| GitHub Actions | Automatic build & deploy on every push |

### How the build works

```
Your code (React/JSX)
    ↓  npm run build
Single index.html file (in dist/)
    ↓  GitHub Actions
Live on GitHub Pages
```

You **never need to run the build locally** — GitHub Actions does it automatically when you push.

---

## 📝 How to Contribute

### Adding a resource (easiest — no coding needed)

1. [Open an issue](https://github.com/l10n-h34r7/humanity-os-resource-hub/issues/new) with:
   - Resource name & URL
   - Short description
   - Which category it belongs to
   - Any tags

### Editing resources directly

Resources live in one file: **`src/data/resources.ts`**

Each resource looks like this:
```typescript
{
  title: 'Open Source Ecology',
  url: 'https://www.opensourceecology.org/',
  description: 'Global Village Construction Set — 50 open source machines.',
  tags: ['hardware', 'machines', 'self-sufficiency'],
  type: 'project',  // project | community | legal | tool | education | video | map | library
}
```

To add one: find the right category array, copy-paste a resource block, edit it, submit a PR.

### Running locally (optional)

```bash
git clone https://github.com/l10n-h34r7/humanity-os-resource-hub.git
cd humanity-os-resource-hub
npm install
npm run dev     # opens at localhost:5173
```

---

## 🚀 Deployment

This site auto-deploys via GitHub Actions. The workflow (`.github/workflows/deploy.yml`) does:

1. Checks out code
2. Installs dependencies (`npm ci`)
3. Builds (`npm run build`)
4. Deploys `dist/` folder to GitHub Pages

### First-time setup

1. Go to your repo **Settings → Pages**
2. Under **Source**, select **"GitHub Actions"**
3. Push to `main` — the workflow runs automatically
4. Your site will be live at `https://l10n-h34r7.github.io/humanity-os-resource-hub/`

That's it. Every future push to `main` will rebuild and redeploy automatically.

---

## 🗺️ Inspired By

- [Ecoclash](https://ecoclash.jimdofree.com/) — Map of alternative living spaces
- [Appropedia](https://www.appropedia.org/) — The sustainability wiki
- [P2P Foundation](https://wiki.p2pfoundation.net/) — Commons encyclopedia
- [Global Ecovillage Network](https://ecovillage.org/) — Ecovillage map & directory

---

## 📜 License

**[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** — Share freely, remix freely, keep it open.

No copyright. Only copyleft. 💚

---

## 🌍 The Vision

> *"Another world is not only possible, she is on her way. On a quiet day, I can hear her breathing."*
> — Arundhati Roy

Every link shared is a seed planted. Every fork is a new garden. 🌱
