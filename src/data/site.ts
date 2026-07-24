// Single source of truth for Harbour Fitness marketing copy.
// Feature copy is lifted from the product itself
// (ice/fitness/apps/web/pages/features.vue) so the site and app stay in step.

export const site = {
  name: 'Harbour Fitness',
  company: 'iCentric Systems Ltd',
  studio: 'Harbour SW Development',
  tagline: 'Your gym. Your app. Their sessions, tracked.',
  email: 'support@icentricsystems.com',
  // Login tagline from the product's Harbour brand (brands.ts).
  motto: 'Train smarter. Every session, tracked.',
};

export type IconName =
  | 'mobile'
  | 'calendar'
  | 'book'
  | 'dumbbell'
  | 'users'
  | 'chart'
  | 'sliders'
  | 'store'
  | 'sparkles'
  | 'shield';

export type Feature = { icon: IconName; title: string; body: string };

/** The three headline pillars — the whole pitch in three cards. */
export const pillars: { accent: string; eyebrow: string; title: string; body: string; points: string[] }[] = [
  {
    accent: '#0d9488',
    eyebrow: 'For your members',
    title: 'Their own app to log & track',
    body:
      'Members get a branded, focused app to log every set, rep, weight, time and speed straight from their phone — and watch their progress build session over session.',
    points: [
      'Log workouts between sets, no clipboard',
      'Personal history and progress charts',
      'Downloaded under your gym’s name',
    ],
  },
  {
    accent: '#254886',
    eyebrow: 'For you',
    title: 'A management web app to run it all',
    body:
      'A branded web portal for coaches and managers: build a reusable exercise library, create your class catalogue once, schedule recurring sessions, and manage members and access.',
    points: [
      'Build workouts and class schedules',
      'Manage members, classes and access',
      'Progress and consistency reports',
    ],
  },
  {
    accent: '#d97706',
    eyebrow: 'On the stores',
    title: 'Published under your own name',
    body:
      'We publish a fully white-labelled iOS and Android app under your club’s name and branding on the App Store and Google Play — all running on one shared backend that scales across sites.',
    points: [
      'Your logo, colours and identity',
      'Live on the App Store & Google Play',
      'One backend, ready for multi-site operators',
    ],
  },
];

/** Full feature grid — verbatim from the product's features.vue. */
export const features: Feature[] = [
  {
    icon: 'mobile',
    title: 'Your own branded mobile app',
    body:
      'We publish a fully branded iOS and Android app for your club, under your club’s name on the App Store and Google Play. Your logo, your colours, your identity — members find and download your app, not a generic one.',
  },
  {
    icon: 'calendar',
    title: 'Class & session management',
    body:
      'Build a class catalogue once, then schedule recurring sessions without rebuilding them every week. Coaches walk into a session that is already set up.',
  },
  {
    icon: 'book',
    title: 'Exercise library',
    body:
      'A reusable exercise library shared across every class. Define each move once with description and defaults; pull it into any session.',
  },
  {
    icon: 'dumbbell',
    title: 'Mobile-first workout logging',
    body:
      'Members capture sets, reps, weight, time, and speed straight from their phone between sets. No clipboards, no end-of-week catch-up.',
  },
  {
    icon: 'users',
    title: 'Member roster & admin',
    body:
      'See every member, who is in which class, and who has joined recently. Manage access, update profiles, and keep the roster clean.',
  },
  {
    icon: 'chart',
    title: 'Progress tracking & reports',
    body:
      'Per-member workout history and class-wide views surface consistency, drop-off, and improvement so you know where to step in.',
  },
  {
    icon: 'sliders',
    title: 'Built for the way clubs work',
    body:
      'Coaches, managers, and members each see exactly what they need — no clutter, no unfamiliar admin tools.',
  },
];

/** The operator journey for the How it works page. */
export const steps: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'We brand it to your gym',
    body:
      'Send us your logo and colours. We build your app around your identity — the same navy-grade polish, wearing your name. No design project, no dev team required on your side.',
  },
  {
    n: '02',
    title: 'You build your programme',
    body:
      'In the management web app, define your exercise library once, assemble it into classes, and schedule recurring sessions. Set it up once; it’s ready every week.',
  },
  {
    n: '03',
    title: 'We publish to the stores',
    body:
      'Your app goes live on the App Store and Google Play under your club’s own name. Members search for your gym and download your app — not a generic third-party one.',
  },
  {
    n: '04',
    title: 'Members log & track',
    body:
      'Your members log sets, reps, weight, time and speed from their phones between sets, and follow their own progress. The habit that keeps them coming back.',
  },
  {
    n: '05',
    title: 'You see the whole picture',
    body:
      'Watch your roster, per-member history and class-wide consistency from one branded portal — so you know exactly where to step in and who needs a nudge.',
  },
];

/** Pricing tiers. All tiers include the complete feature set. */
export type Plan = {
  name: string;
  members: string;
  blurb: string;
  setup: string;
  club: string;
  perMember: string;
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Basic',
    members: '1–20 members',
    blurb: 'For a single studio or small gym getting started.',
    setup: '£500',
    club: '£50',
    perMember: '£3',
  },
  {
    name: 'Standard',
    members: '20–99 members',
    blurb: 'For an established club with a growing membership.',
    setup: '£1,000',
    club: '£150',
    perMember: '£2.50',
    highlight: true,
  },
  {
    name: 'Pro Plus',
    members: '100+ members',
    blurb: 'For large clubs and multi-site operators.',
    setup: '£1,000',
    club: '£150',
    perMember: '£2',
  },
];

export const pricingNote =
  'Bespoke website redesign, booking systems and class management available on request.';

/** Clubs live (or launching) on Harbour Fitness. `logoBg` is the club's own
 *  brand chrome, so each logo sits on its real brand colour like an app tile. */
export type Customer = {
  name: string;
  descriptor: string;
  logo?: string;
  logoBg?: string;
  website?: string;
};

export const customers: Customer[] = [
  {
    name: 'Sam Wilson Zara',
    descriptor: 'Women’s health, fitness & wellness',
    logo: '/customers/samwilsonzara.png',
    logoBg: '#545454',
    website: 'https://www.samwilsonzara.com',
  },
];

/** Number of empty "Your gym here" slots shown after the live customers. */
export const customerPlaceholders = 3;

/** Full-width customer spotlight. Drop real screenshots at the `shots` paths
 *  (they swap in automatically over the branded placeholders). Colours are the
 *  club's own brand seeds (from the fitness app's brands.ts). */
export const spotlight = {
  eyebrow: 'Customer spotlight',
  name: 'Sam Wilson Zara',
  descriptor: 'Women’s health, fitness & wellness',
  blurb:
    'Sam Wilson Zara run their small-group training from their own branded app — members book in, log every session, and watch their strength and progress grow, in a studio where women’s training is the focus.',
  quote:
    'Their own app, their own name on the App Store — with the whole platform running quietly behind it.',
  website: 'https://www.samwilsonzara.com',
  logo: '/customers/samwilsonzara.png',
  // Sam Wilson Zara brand seeds (lime + dark chrome).
  accent: '#a6d13a',
  band: '#3b3b3b',
  note: 'Live on the App Store & Google Play',
  appStore: 'https://apps.apple.com/gb/app/sam-wilson-zara/id6769157763',
  playStore: 'https://play.google.com/store/apps/details?id=com.icentric.samwilson',
  shots: {
    web: '/screenshots/customers/samwilsonzara/web.png',
    mobile: [
      '/screenshots/customers/samwilsonzara/mobile-1.png',
      '/screenshots/customers/samwilsonzara/mobile-2.png',
    ],
  },
};

/** FAQ — doubles as long-tail SEO content + FAQPage structured data. */
export const faqs: { q: string; a: string }[] = [
  {
    q: 'Can any gym have its own app?',
    a: 'Yes. Whether you run a single studio or a multi-site club, we build and publish a fully branded iOS and Android app for your gym — your name, your logo, your colours — with members logging and tracking every session inside it.',
  },
  {
    q: 'Do members download it under our own name?',
    a: 'They do. Your app is published on the App Store and Google Play under your club’s name, so members search for your gym and download your app — not a generic third-party one.',
  },
  {
    q: 'Do we need a developer or designer?',
    a: 'No. You send us your logo and colours and we handle the build, the store submissions and the platform behind it. You manage classes, workouts and members from a simple branded web portal.',
  },
  {
    q: 'What does it cost to get started?',
    a: 'Plans start at a £500 one-off setup fee plus a £50/month club subscription and £3/month per member on Basic, with lower per-member rates as you grow. See the pricing page for full details.',
  },
  {
    q: 'Is it available on both iOS and Android?',
    a: 'Yes — every club gets native iOS and Android apps, plus a web portal for coaches and managers, all running on one shared backend.',
  },
  {
    q: 'Can we manage classes and members ourselves?',
    a: 'Absolutely. Build a reusable exercise library, create your class catalogue once, schedule recurring sessions, and manage your member roster and access — all from your branded management web app.',
  },
];

export const nav = [
  { href: '/features/', label: 'Features' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: 'Contact' },
];
