# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`:
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.20.0
- Vite 5.1.0
- Tailwind CSS 3.3.6
- And dev dependencies

## 2. Start Development Server

```bash
npm run dev
```

Visit http://localhost:5173 in your browser. The app will hot-reload on file changes.

## 3. Build for Production

```bash
npm run build
```

Creates optimized production files in the `dist/` folder.

## 4. Preview Production Build

```bash
npm run preview
```

Test the production build locally before deploying.

---

## Project Files Overview

### Core Files
- **index.html** - HTML template for the SPA
- **src/main.jsx** - React app entry point
- **src/App.jsx** - Main app component with routing
- **src/styles/globals.css** - Global styles with Tailwind

### Pages (Routes)
- **src/pages/HomePage.jsx** - `/` route (services & pricing)
- **src/pages/EmpresasPage.jsx** - `/empresas` (corporate)
- **src/pages/SobrePage.jsx** - `/sobre` (about)
- **src/pages/ContactoPage.jsx** - `/contacto` (contact)
- **src/pages/AdminPage.jsx** - `/admin` (admin dashboard)

### Components (Reusable)
- **src/components/Navigation.jsx** - Top navigation
- **src/components/Footer.jsx** - Footer section
- **src/components/PricingCalculator.jsx** - Service calculator
- **src/components/ContactOverlay.jsx** - Contact modal

### Configuration
- **src/config/supabase.js** - Supabase API setup
- **vite.config.js** - Vite build configuration
- **tailwind.config.js** - Tailwind CSS settings
- **postcss.config.js** - PostCSS (for Tailwind)

---

## Making Changes

### Add a New Component
1. Create file in `src/components/YourComponent.jsx`
2. Import in the relevant page
3. Use it in JSX

Example:
```jsx
// src/components/ServiceCard.jsx
export default function ServiceCard({ name, price }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3>{name}</h3>
      <p className="text-[#deb052]">{price}€</p>
    </div>
  )
}

// Use in HomePage.jsx
import ServiceCard from '../components/ServiceCard'
// ... then in JSX:
<ServiceCard name="Sofá" price="71" />
```

### Update Styling
- Edit `src/styles/globals.css` for global styles
- Edit individual component files for scoped styles
- Use Tailwind classes directly in JSX (e.g., `className="text-[#deb052]"`)

### Change Pricing
Edit `src/config/supabase.js`:
```javascript
export const DEFAULT_PRICING_RULES = {
  sofa: {
    base: 75.00,  // Change here
    seats: {
      '2': 75.00,
      // ...
    }
  }
}
```

### Add a New Route
1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Update `Navigation.jsx` to add link

---

## Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Styles not loading?
- Ensure Tailwind classes use proper syntax: `className="flex items-center"`
- Check `src/styles/globals.css` is imported in `src/main.jsx`
- Rebuild: `npm run build`

### Routes not working?
- Ensure all routes are defined in `src/App.jsx`
- Check component paths are correct
- Router must wrap all routes in BrowserRouter

### Supabase not connecting?
- Check `src/config/supabase.js` credentials
- Ensure Supabase project is active
- Check network tab in browser DevTools

---

## Project Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **Build Tool**: Vite 5
- **CSS**: Tailwind CSS 3
- **Package Manager**: npm (or yarn)
- **Node Version**: 16+ recommended

---

## File Size & Performance

Current bundle size (approximate):
- React: ~40 KB (minified)
- React Router: ~15 KB
- Tailwind: ~50 KB (will be much smaller in production after tree-shaking)
- App code: ~20 KB

Total: ~125 KB (will be optimized by Vite during build)

---

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Visit http://localhost:5173
4. Start making changes!

For more details, see README.md
