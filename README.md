# SofáLimpo - React Source Reconstruction

This is a complete React + Vite application reconstructed from the production build. It's a modern, professional web application for a cleaning services company in Portugal.

## Project Structure

```
src/
├── main.jsx                    # React entry point
├── App.jsx                     # Main app with routing
├── components/
│   ├── Navigation.jsx          # Top navigation bar
│   ├── Footer.jsx              # Footer with company info
│   ├── PricingCalculator.jsx   # Service pricing calculator
│   └── ContactOverlay.jsx      # Contact modal for custom services
├── pages/
│   ├── HomePage.jsx            # Services & pricing (/)
│   ├── EmpresasPage.jsx        # Corporate solutions (/empresas)
│   ├── SobrePage.jsx           # About us (/sobre)
│   ├── ContactoPage.jsx        # Contact form (/contacto)
│   └── AdminPage.jsx           # Admin dashboard (/admin)
├── config/
│   └── supabase.js             # Supabase API configuration
└── styles/
    └── globals.css             # Tailwind + custom styles

Configuration Files:
├── vite.config.js              # Vite build configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
├── index.html                  # HTML entry point
└── .gitignore                  # Git ignore rules
```

## Features

### 1. Service Selection & Pricing
- **Sofás**: Configurable seat count (2-6) with dynamic pricing
- **Colchões**: Size selection (Solteiro/Casal) with different prices
- **Vidros**: Per square meter calculation
- **Outros**: Redirect to contact overlay for custom services

### 2. Dynamic Pricing System
- Real-time price calculation based on:
  - Service type and configuration
  - Quantity (number of sofas, etc.)
  - Optional extras with individual pricing
  - Custom extras quantity selectors (almofadas, puffs, bancos)

### 3. Admin Dashboard
- Manage pricing by seat count for sofas
- Edit service pricing and extras
- Configure business hours and contact info
- Integration with Supabase for data persistence

### 4. Responsive Design
- Mobile-first approach with Tailwind CSS
- Professional branding with gold accent color (#deb052)
- Smooth animations and transitions
- Accessibility-focused markup

### 5. Supabase Integration
- Authentication tokens from localStorage
- Fetch pricing rules from database
- Update pricing in real-time
- Support for prices and services tables

## Getting Started

### Prerequisites
- Node.js 16+ (or install via nvm)
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Environment Variables

No `.env` file needed for basic functionality. For Supabase integration:

```javascript
// src/config/supabase.js contains the hardcoded credentials:
SUPABASE_URL = 'https://xctdeqkazwdaxhgtyqoo.supabase.co'
ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

**Note**: These are public credentials (anonymous key) only. For production, consider moving to environment variables.

## Key Technologies

- **React 18**: UI library
- **React Router v6**: Client-side routing
- **Vite 5**: Build tool and dev server
- **Tailwind CSS 3**: Utility-first CSS framework
- **Supabase**: Backend as a Service
- **JavaScript (ES6+)**: Modern JavaScript

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | HomePage | Main service listing and calculator |
| `/empresas` | EmpresasPage | Corporate/business solutions |
| `/sobre` | SobrePage | Company information |
| `/contacto` | ContactoPage | Contact form |
| `/admin` | AdminPage | Admin dashboard for pricing/settings |

## Pricing System

### Default Pricing Rules

```javascript
{
  sofa: {
    base: 71.00,
    seats: { '2': 71.00, '3': 81.00, '4': 91.00, '5': 99.00, '6': 109.00 }
  },
  colchao: {
    solteiro: 50.00,
    casal: 74.00
  }
}
```

### Calculations

```javascript
totalPrice = (basePrice + extrasTotal) * quantity
```

Where:
- `basePrice` = service price (per seats, size, or sqm)
- `extrasTotal` = sum of selected extras with quantities
- `quantity` = number of units to be serviced

## Extras with Quantity Selectors

These items display quantity +/- controls when selected:
- Almofadas (Pillows)
- Puffs
- Bancos (Benches)

## Component Architecture

### PricingCalculator
Handles all service configuration and price calculation. Supports:
- Numeric seat selection with +/- buttons
- Service-specific options (size, dimensions)
- Real-time price updates
- Form state management

### ContactOverlay
Modal dialog triggered by "Outros" service selection:
- Contact methods (phone, WhatsApp, email)
- Business hours
- Smooth animations
- Click-outside to close

### Navigation
Sticky header with:
- Logo/branding
- Route links
- Active route highlighting
- CTA button

### Footer
Company information footer with:
- Navigation links
- Service listing
- Contact details
- Social links

## Admin Panel Features

### Pricing Management
- Edit prices for sofa seat counts
- Update colchão (mattress) pricing
- Video dimensions pricing for vidros (glass cleaning)

### Settings
- Company contact information
- Business hours
- Service area configuration

## Customization

### Colors
Primary color is `#deb052` (gold). Update in:
- `tailwind.config.js` theme colors
- `src/styles/globals.css` CSS variables
- Individual component classes

### Branding
- Logo text: Update Navigation component
- Footer text: Update Footer component
- Business info: Update supabase.js config

### Pricing Rules
- Edit `DEFAULT_PRICING_RULES` in `src/config/supabase.js`
- Or manage via Admin Dashboard and Supabase

## Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

**Build optimizations:**
- Minified JS and CSS
- Asset chunking
- Source map generation (optional)
- Vite automatically optimizes imports

## Deployment

### Option 1: Vercel
```bash
vercel
```

### Option 2: Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### Option 3: Traditional Hosting
- Build locally: `npm run build`
- Upload `dist/` folder to web server
- Configure server for SPA (single-page app routing)

## Contact Information

- Phone: 935 798 081
- Email: geral@sofalimpo.pt
- WhatsApp: https://wa.me/351935798081
- Hours: Mon-Fri 08:00-18:00, Sat 09:00-15:00

## Notes

### Reverse Engineering Process

This project was reconstructed from a production build using:
1. Analysis of compiled HTML and inline scripts
2. CSS examination (Tailwind classes)
3. JavaScript behavior detection
4. Component structure inference
5. Routing pattern analysis

### Data Persistence

Currently uses localStorage for auth tokens and Supabase for pricing data.

For full functionality:
- Ensure Supabase project is set up
- Services table must exist with pricing_rules column
- Optional: prices table for legacy support

### Testing

No test files included. To add tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Create test files alongside components
# src/components/__tests__/Navigation.test.jsx
```

## Future Enhancements

- Add form submissions to backend
- Implement user authentication
- Add booking/scheduling system
- Payment integration
- Email notifications
- Analytics tracking
- Multi-language support
- Dark mode theme

## License

This is a reconstructed project for educational purposes.

## Support

For questions or issues, contact the development team.
