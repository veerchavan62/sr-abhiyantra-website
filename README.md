# SR Abhiyantra Systems Pvt. Ltd. — Website

> Authorized dealer of premium office infrastructure, enterprise seating, network systems, and electrical contracting for corporate clients across India.

---

## 📁 Project Structure

```
sr-abhiyantra/
├── index.html              # Main HTML entry point
├── css/
│   └── style.css           # All styles (variables, layout, components, responsive)
├── js/
│   └── script.js           # All interactivity (data, builders, navbar, animations)
├── assets/
│   ├── logo-orbital.jpg    # Company logo (navbar + footer)
│   └── logo-hero.jpg       # Hero section center logo
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Deployment

### Option 1 — GitHub Pages (Recommended, free)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch → `/ (root)` folder
4. Click **Save** — your site goes live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

### Option 2 — Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag the entire project folder onto the Netlify dashboard
3. Done — Netlify gives you a live URL instantly

### Option 3 — Local Development

No build step needed. Just open `index.html` in any browser:

```bash
# Using Python (built-in)
python3 -m http.server 3000
# Then open http://localhost:3000

# Or using Node.js (npx)
npx serve .
```

---

## ✅ Features

- **Fully responsive** — mobile, tablet, desktop
- **Zero build step** — pure HTML, CSS, JS, no frameworks required
- **No external runtime dependencies** — fonts loaded from Google Fonts CDN, everything else local
- **Scroll animations** — IntersectionObserver-based reveal transitions
- **Animated marquees** — auto-scrolling logo strip and testimonials carousel
- **Sticky navbar** — blur + border on scroll
- **Mobile hamburger menu** — full-screen overlay
- **WhatsApp FAB** — floating action button with pulse animation
- **Accessible** — ARIA labels, semantic HTML, keyboard-navigable

---

## 🎨 Customisation

### Change Contact Details

Edit `js/script.js` or search `index.html` for:
- **Email:** `ravi@srabhiyantra.com`
- **Phone:** `+91 93258 37755`
- **WhatsApp:** `wa.me/919325837755`
- **Address:** `Kolaj Business Center, Model Colony, Shivaji Nagar, Pune 411016`

### Change Accent Colour

In `css/style.css`, update the `:root` variables:
```css
--acc:  #1d4ed8;   /* dark blue  */
--accb: #2563eb;   /* main blue  */
--accl: #3b82f6;   /* light blue */
```

### Add / Edit Services

In `js/script.js`, find the `services` array and add or modify entries.

### Add / Edit Testimonials

In `js/script.js`, find the `testimonials` array.

---

## 📞 Contact

| Channel | Details |
|---------|---------|
| Email   | ravi@srabhiyantra.com |
| Phone   | +91 93258 37755 |
| WhatsApp | +91 93258 37755 |
| Address | Kolaj Business Center, Model Colony, Shivaji Nagar, Pune 411016, MH |
| LinkedIn | [SR Abhiyantra Systems](https://www.linkedin.com/company/sr-abhiyantra-systems-pvt.-ltd./about/) |

---

© 2025 SR Abhiyantra Systems Pvt. Ltd. All rights reserved.
