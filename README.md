# Children's Right Advocate Foundation — Website

A production-ready **Next.js 15** website for the CRA Foundation, fully redesigned with a modern, professional UI.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + custom CSS design system |
| Font | Inter (Google Fonts) |
| Icons | React Icons v5 (Remix Icon set) |
| Forms | React state + custom validation |
| Animations | CSS keyframes + JS transitions |

## Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--brand-600` | `#DC2626` | Primary CTA, accents |
| `--neutral-950` | `#0B0E13` | Hero backgrounds, dark sections |
| `--neutral-900` | `#111827` | Headings |
| `--neutral-600` | `#4B5563` | Body text |
| `--neutral-400` | `#9CA3AF` | Captions, meta |
| `--neutral-50` | `#F9FAFB` | Alternate section backgrounds |
| `--accent-amber` | `#D97706` | Awards, highlights |
| `--accent-green-600` | `#16A34A` | Success states, health |
| `--accent-blue-600` | `#2563EB` | Programs, news |
| `--accent-violet-600` | `#7C3AED` | Sponsorship |
| `--accent-teal-600` | `#0D9488` | Health program |

### Typography
```
h1 — 800 weight, -0.04em tracking, clamp(2.25rem → 3.75rem)
h2 — 700 weight, -0.03em tracking, clamp(1.6rem → 2.5rem)
h3 — 600 weight, -0.02em tracking
h4 — 600 weight, -0.015em tracking
p  — 400 weight, 1.7 line-height, var(--neutral-600)
```

### Button Classes
```css
.btn .btn-primary      /* Red filled CTA */
.btn .btn-secondary    /* White outlined */
.btn .btn-ghost        /* Transparent */
.btn .btn-white        /* White on dark bg */
.btn .btn-outline-white /* Ghost on dark bg */
.btn-sm / .btn-lg      /* Size modifiers */
```

### Form Classes
```css
.form-input     /* Text input */
.form-select    /* Dropdown */
.form-textarea  /* Multi-line */
.form-label     /* Field label */
.form-error     /* Validation error */
```

### Card Classes
```css
.card           /* Base card */
.card-hover     /* Adds lift on hover */
```

## Project Structure

```
├── app/
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About Us
│   ├── programs/page.tsx         # 8 programs detail
│   ├── donate/page.tsx           # Multi-step donation
│   ├── sponsor/page.tsx          # Child sponsorship
│   ├── volunteer/page.tsx        # Volunteer registration
│   ├── news/page.tsx             # News listing
│   ├── news/[id]/page.tsx        # Article detail
│   ├── impact/page.tsx           # Stats + timeline + awards
│   ├── gallery/page.tsx          # Filterable gallery
│   ├── contact/page.tsx          # Contact + map
│   ├── admin/page.tsx            # Admin dashboard
│   ├── auth/login/page.tsx       # Admin login
│   ├── privacy/page.tsx          # Privacy policy
│   ├── terms/page.tsx            # Terms of use
│   ├── not-found.tsx             # Custom 404
│   ├── loading.tsx               # Global loading
│   ├── error.tsx                 # Error boundary
│   └── globals.css               # Full design system
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav with dropdowns
│   │   └── Footer.tsx            # Multi-column dark footer
│   ├── home/
│   │   ├── Hero.tsx              # Auto-sliding hero
│   │   ├── ImpactStats.tsx       # Animated counters
│   │   ├── ProgramsSection.tsx   # 8-program grid
│   │   ├── SponsorshipSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── HowToHelp.tsx
│   │   ├── NewsSection.tsx
│   │   └── AwardsStrip.tsx
│   ├── forms/
│   │   ├── DonationForm.tsx      # 2-step form with tier picker
│   │   ├── SponsorForm.tsx
│   │   ├── VolunteerForm.tsx     # Skill tag selector
│   │   └── ContactForm.tsx
│   ├── shared/
│   │   └── PageHeader.tsx        # Reusable dark page header
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── SectionLabel.tsx
│       ├── Spinner.tsx
│       └── index.ts              # Barrel export
│
├── data/index.ts                 # All static content
├── types/index.ts                # TypeScript interfaces
├── lib/
│   ├── utils.ts                  # cn, formatCurrency, truncate…
│   └── constants.ts              # CONTACT, BANK, COLORS…
└── .env.local.example
```

## Getting Started

```bash
# 1. Extract archive
tar -xzf cra-foundation.tar.gz && cd cra-foundation

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.local.example .env.local

# 4. Start dev server
npm run dev
# → http://localhost:3000

# 5. Production build
npm run build && npm start
```

## All Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage |
| `/about` | Static | Story, mission, board, awards |
| `/programs` | Static | All 8 programs |
| `/donate` | Static | Multi-step donation form |
| `/sponsor` | Static | Child profiles + sponsorship |
| `/volunteer` | Static | Roles + registration |
| `/news` | Static | News listing |
| `/news/[id]` | Dynamic | Article detail |
| `/impact` | Static | Stats + timeline + stories |
| `/gallery` | Static | Filterable photo grid |
| `/contact` | Static | Form + map + bank details |
| `/admin` | Static | Admin dashboard UI |
| `/auth/login` | Static | Admin login |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of use |

## Production Checklist

- [ ] Fill `.env.local` with real credentials
- [ ] Integrate **Paystack** or **Flutterwave** for live payments
- [ ] Set up transactional email (**Resend** recommended)
- [ ] Add real photography to `/public/images/`
- [ ] Implement proper auth (**NextAuth.js** with credentials provider)
- [ ] Connect a database (**PostgreSQL + Prisma** recommended)
- [ ] Deploy to **Vercel** (zero-config for Next.js)

## Foundation Contact

| | |
|---|---|
| Address | 40B Ayilara Street, Surulere, Lagos |
| Phone | 08063811840 |
| Email | nurtureadream@yahoo.com |
| Bank | Zenith Bank — 1012771274 |
