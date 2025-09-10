# Playfield Landing Site

A premium, retro-futurist landing site for Playfield - Superintelligence for Enterprise.

## Features

- **Design System**: Custom design tokens with Source Serif 4 and Inter fonts
- **Motion Language**: Consistent fade-up animations with cubic-bezier easing
- **Abstract Visuals**: Dot matrix, halftone, and metallic orb visual systems
- **Responsive Design**: Mobile-first approach with generous spacing
- **Accessibility**: Focus states, proper contrast, and semantic HTML
- **Premium Aesthetics**: Paper background, subtle grain, and asymmetric layouts

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Design Tokens

### Colors

- Accent: `#88B772`
- Paper: `#F6F3EE`
- Ink: `#0B0B0C`
- Ink Soft: `#2B2B2B`

### Typography

- Display XL: Source Serif 4, 4rem
- Display L: Source Serif 4, 2.5rem
- Body M: Inter, 1.125rem
- Caption S: Inter, 0.875rem

### Motion

- Duration: 0.8s
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Transform: fade + 24px rise

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Sections

1. **Hero** - Main value proposition with abstract background
2. **What Is** - Core concept explanation
3. **Pillars** - Three key capabilities
4. **About** - Company positioning
5. **Why Now** - Market timing
6. **Technology** - Four-step process
7. **How It Works** - Detailed explanations
8. **Day One** - Immediate value
9. **Who For** - Target use cases
10. **Security** - Enterprise features
11. **Integrations** - Microsoft 365 focus
12. **Learning** - Continuous improvement
13. **CTA** - Contact and waitlist
14. **Footer** - Links and legal

## Contact Form Data Collection

The contact form in the CTA section captures name and email data. Currently, it logs submissions to the console. To actually collect and store this data, you can configure one of these options:

### Option 1: Webhook Integration (Recommended)

Set up a webhook URL in your environment variables:

```bash
CONTACT_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-url
```

### Option 2: Email Service

Configure SendGrid or similar email service:

```bash
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=noreply@yourdomain.com
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

### Option 3: Database Storage

Use Vercel Postgres or similar:

```bash
POSTGRES_URL=your-postgres-connection-string
```

### Option 4: CRM Integration

Connect to HubSpot, Salesforce, or other CRM systems.

**Note**: Uncomment the relevant code blocks in `app/api/contact/route.ts` and configure your environment variables in Vercel's dashboard.

## Customization

The design system is built with Tailwind CSS and can be easily customized by modifying the design tokens in `tailwind.config.js` and `app/globals.css`.
