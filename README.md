# Miguel Guzmán — Portfolio

Personal website showcasing my work experience and the services I offer: web development, UX/UI design, videography, aerial drone footage, photogrammetry and 360° virtual tours.

**Live site:** https://mikehgm.github.io/mguzman/

## Tech stack

- [React 18](https://react.dev) + [Vite 5](https://vitejs.dev)
- [React Hook Form](https://react-hook-form.com) + [EmailJS](https://www.emailjs.com) for the contact form
- [Font Awesome](https://fontawesome.com) icons
- Layout based on the [Landed](https://html5up.net/landed) template by HTML5 UP (CC BY 3.0)

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deployment

The site is deployed to GitHub Pages from the `gh-pages` branch:

```bash
npm run deploy    # builds and publishes dist/ to the gh-pages branch
```

In the repository settings, **Pages → Source** must be set to *Deploy from a branch → `gh-pages` / root*.

### Using a custom domain (e.g. mguzman.dev)

1. Create `public/CNAME` containing the domain (files in `public/` are copied into every build, so the domain survives each deploy).
2. Change `base` in `vite.config.js` to `'/'`, and update `homepage` in `package.json`, and the canonical/`og:` URLs in `index.html`.
3. At the DNS provider, add A records for the apex domain pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and/or a `CNAME` record for `www` pointing to `mikehgm.github.io`).
4. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once the certificate is issued.

## Project structure

```
src/
  components/   page sections (Banner, SectionOne…Four, Contact, Footer, Header, VideoPlayer)
  hooks/        small DOM helpers (smooth scroll, body class)
  views/Home/   page composition
  assets/       template CSS, images and background videos
public/         files copied as-is (favicon, social preview image)
```
