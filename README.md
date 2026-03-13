# Orbitle — Next.js 14 + Tailwind CSS

Travel business platform landing page by TrigrowTech.

## Features
- Next.js 14 App Router + TypeScript
- Tailwind CSS for all styling
- EN / हिंदी language switch (default English)
- Pricing section locked until form submission
- 4-plan pricing: Monthly / 6-Month / Yearly / ₹25,000 Lifetime
- Lead selling model — operators sell leads to agents
- Countdown timer + organic slot counter
- Contact form → nodemailer email (configurable)

## Setup

```bash
npm install
cp .env.local.example .env.local
# Fill in your SMTP credentials in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Email Setup (Gmail)
1. Go to myaccount.google.com → Security → App Passwords
2. Create an App Password for "Mail"
3. Add to `.env.local`:
   ```
   SMTP_USER=your@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   CONTACT_EMAIL=hello@trigrowtech.com
   ```

## Deploy on Vercel
```bash
npm i -g vercel
vercel
```
Add the `.env.local` variables in Vercel dashboard → Settings → Environment Variables.

## Project Structure
```
app/
  layout.tsx          — Root layout with LangProvider
  page.tsx            — Main page (client, wires all sections)
  globals.css         — Tailwind base + custom animations
  api/contact/
    route.ts          — POST handler → nodemailer
components/
  TopBar.tsx          — Dismissable announcement bar with countdown
  Nav.tsx             — Sticky nav with lang switcher
  LangSwitch.tsx      — EN / हि toggle button
  Hero.tsx            — Hero with floating admin mock
  UrgencyStrip.tsx    — Urgency bar with live countdown
  HowItWorks.tsx      — 3-step process
  Modules.tsx         — 4 platform module cards
  WhyOrbitle.tsx     — Metrics visual + benefit points
  LogoStrip.tsx       — Waitlist business pills
  WaitlistComments.tsx — 3 waitlist comment cards
  Pricing.tsx         — 4-plan pricing (blurred until unlocked)
  Contact.tsx         — Form with intent, all fields, success state
  Footer.tsx          — 4-column footer
lib/
  translations.ts     — Full EN + हिंदी translations
  LangContext.tsx     — React context for language state
```
