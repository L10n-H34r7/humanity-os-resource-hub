# 🌱 Humanity OS — Vanilla HTML Version

https://l10n-h34r7.github.io/humanity-os-resource-hub/

This is the **simple vanilla HTML/CSS/JS version** of Humanity OS.

## Why Vanilla?

- ✅ **Zero build step** — just upload files
- ✅ **Easy to edit** — anyone can add resources
- ✅ **Lightweight** — single file ~50KB
- ✅ **Works everywhere** — any browser, any server

## Deployment

### Option 1: GitHub Pages (simplest)

1. Create a new repo or use existing
2. Upload `index.html` to the root
3. Go to **Settings → Pages**
4. Source: **Deploy from branch** → `main` → `/ (root)`
5. Done! Live at `yourusername.github.io/reponame`

### Option 2: Any web host

Just upload `index.html`. That's it.

## How to Add Resources

1. Open `index.html` in any text editor
2. Find the category section (search for `id="tech"`, `id="collectives"`, etc.)
3. Copy an existing resource block:

```html
<div class="resource" data-tags="your tags here">
  <div class="resource-title">
    <a href="https://example.com" target="_blank">Resource Name</a>
    <span class="resource-type">project</span>
  </div>
  <p class="resource-desc">Short description here.</p>
  <div class="resource-tags"><span>tag1</span><span>tag2</span></div>
</div>
```

4. Edit the values
5. Commit and push

## Resource Types

Use one of these for `resource-type`:
- `project` — Open source projects
- `community` — Communities, networks, collectives
- `legal` — Legal frameworks, CLTs, co-ops
- `tool` — Tools and platforms
- `education` — Books, courses, theory
- `video` — Films, documentaries, video courses
- `map` — Maps and directories
- `library` — Wikis, collections, resource libraries

## License

CC BY-SA 4.0 — Share freely, keep it open.
