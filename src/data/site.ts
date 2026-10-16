// Single source of truth for Harbour Fitness marketing copy.
// Feature copy is lifted from the product itself
// (ice/fitness/apps/web/pages/features.vue) so the site and app stay in step.

export const site = {
  name: 'Harbour Fitness',
  company: 'iCentric Systems Ltd',
  studio: 'Harbour SW Development',
  /** The parent studio's own site. Harbour Fitness is one of its products, and
   *  every page links back to it - from the footer, the byline under the closing
   *  call to action, and the structured data's publisher. */
  studioUrl: 'https://www.harbour-sw.co.uk',
  /** The privacy policy is company-wide and lives on the parent site - it names
   *  Harbour Fitness and the other apps explicitly, so this links there rather
   *  than duplicating a second policy that could drift out of step. */
  privacyUrl: 'https://www.harbour-sw.co.uk/privacy/',
  tagline: 'Your whole club online. Under your own name.',
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

/** The three headline pillars - the whole pitch in three cards. */
export const pillars: { accent: string; eyebrow: string; title: string; body: string; points: string[] }[] = [
  {
    accent: '#0d9488',
    eyebrow: 'For your members',
    title: 'Their own app to log & track',
    body:
      'Members get a branded, focused app to log every set, rep, weight, time and speed straight from their phone - and watch their progress build session over session.',
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
      'We publish a fully white-labelled iOS and Android app under your club’s name and branding on the App Store and Google Play - all running on one shared backend that scales across sites.',
    points: [
      'Your logo, colours and identity',
      'Live on the App Store & Google Play',
      'One backend, ready for multi-site operators',
    ],
  },
];

/** Full feature grid - verbatim from the product's features.vue. */
export const features: Feature[] = [
  {
    icon: 'mobile',
    title: 'Your own branded mobile app',
    body:
      'We publish a fully branded iOS and Android app for your club, under your club’s name on the App Store and Google Play. Your logo, your colours, your identity - members find and download your app, not a generic one.',
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
    icon: 'store',
    title: 'Demonstration videos',
    body:
      'Upload a short clip to any exercise - a couple of reps, the angle that matters - and it appears on that exercise in your members’ app. They see how the movement should look at the moment they’re about to do it, instead of guessing or copying the person next to them.',
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
      'Coaches, managers, and members each see exactly what they need - no clutter, no unfamiliar admin tools.',
  },
];

/** Why clubs do this at all - the retention argument, placed before a single
 *  feature is mentioned. Deliberately argued from the reader's own experience
 *  rather than from statistics we have no source for. */
export const reasons: { title: string; body: string }[] = [
  {
    title: 'The wins go unseen',
    body:
      'Six weeks of hard-won progress lives in the coach’s head and on a paper card. The member never sees the line going up - so they never feel it. Nothing to be proud of, nothing to show a friend, nothing to stay for.',
  },
  {
    title: 'You’re guessing at drift',
    body:
      'You can feel who’s slipping, but you can’t see it. By the time you notice someone hasn’t been in for three weeks, the retention conversation is already a month late - and usually over.',
  },
  {
    title: 'Someone else’s logo',
    body:
      'Your members finish your session and open a stranger’s app to record it. That app gets the habit, the data and the credit for their progress. Your name is on the door and nowhere else.',
  },
];

/** The club app tiles. Sam Wilson Zara is real; Ironline is the demo club that
 *  already exists in the product (ice/fitness/brands/ironline). The empty slots
 *  stay empty on purpose - inventing two club logos would be the one thing on
 *  the page a prospect could catch us out on. */
export type ClubTile = { name: string; note: string; kind: 'swz' | 'harbour' | 'ironline' | 'empty' };
export const clubTiles: ClubTile[] = [
  { name: 'Sam Wilson Zara', note: 'Live on both stores', kind: 'swz' },
  { name: 'Harbour Fitness', note: 'Our own build', kind: 'harbour' },
  { name: 'Ironline', note: 'Demo build', kind: 'ironline' },
  { name: 'Your club here', note: '', kind: 'empty' },
];

/** Website -> portal -> app -> one record. The band that justifies the price:
 *  any club can buy a website and any club can buy a booking tool, but not the
 *  three talking to each other. */
export const flow: { k: string; title: string; body: string }[] = [
  { k: 'Your website', title: 'They find you and pay',
    body: 'Programmes, events, prices and a checkout. Booking and card payment happen on your own domain.' },
  { k: 'Your portal', title: 'You approve and schedule',
    body: 'They land in Club today as a pending member. Approve once and the membership, the class place and the payment are all recorded.' },
  { k: 'Your app', title: 'They train and log it',
    body: 'The session is already built and waiting on their phone the first time they walk in.' },
  { k: 'One record', title: 'No re-typing, ever',
    body: 'One member, one history, one place to look - instead of a booking tool, a spreadsheet and a memory.' },
];

/** Eight weeks, shaped so the website goes live around the halfway mark and the
 *  club has something earning before the apps have cleared store review. */
export const launch: { when: string; title: string; body: string }[] = [
  { when: 'Weeks 1–2', title: 'We design it',
    body: 'Send your logo, colours and photos. We design the site and brand the app, and show you both running on a real phone before anything is committed.' },
  { when: 'Weeks 3–4', title: 'Your website goes live',
    body: 'Programmes, events, prices and booking, on your own domain. This is the part that starts earning before anything else has shipped.' },
  { when: 'Weeks 5–6', title: 'Your programme goes in',
    body: 'Exercise library, classes and the schedule. Most clubs get through it in an afternoon with us sitting alongside.' },
  { when: 'Weeks 7–8', title: 'Apps hit the stores',
    body: 'Store accounts, listings, screenshots and the review process - all ours. Then the launch pack: posters, a QR code and the words to say.' },
];

/** What it replaces. No competitor is named: naming one puts their name on our
 *  page and invites a rebuttal we don't get to write. */
export const alternatives: { title: string; body: string }[] = [
  { title: 'A website that just sits there',
    body: 'Built once by somebody who has moved on, no way to take a booking, and a price list that has been wrong since March.' },
  { title: 'A generic tracking app',
    body: 'Your programming inside someone else’s brand. They own the relationship, the data and the notification that brings the member back.' },
  { title: 'A booking platform bolt-on',
    body: 'Built to take a payment and hold a slot. Training is an afterthought bolted to the side of a till, and it never speaks to your site.' },
];

/** The operator journey for the How it works page. */
export const steps: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'We brand it to your gym',
    body:
      'Send us your logo and colours. We build your app around your identity - the same navy-grade polish, wearing your name. No design project, no dev team required on your side.',
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
      'Your app goes live on the App Store and Google Play under your club’s own name. Members search for your gym and download your app - not a generic third-party one.',
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
      'Watch your roster, per-member history and class-wide consistency from one branded portal - so you know exactly where to step in and who needs a nudge.',
  },
];

/** Pricing. One offer with three lines on it - there are no tiers, and every
 *  club gets every feature. `perMember` is charged per member who actually uses
 *  the app, not per member on the club's books. */
export type Pricing = {
  setup: string;
  monthly: string;
  perMember: string;
  /** A worked example, because per-member pricing is impossible to feel until
   *  somebody does the arithmetic at a real headcount. */
  example: { members: number; base: string; members_cost: string; total: string };
};

export const pricing: Pricing = {
  setup: '£1,000',
  monthly: '£250',
  perMember: '£2.50',
  example: { members: 60, base: '£250.00', members_cost: '£150.00', total: '£400.00' },
};

/** What the monthly fee covers. The last line is the strongest claim on the
 *  site: no competitor selling seats on a fixed product can make it. */
export const covers: string[] = [
  'Your website, hosted and kept up',
  'iOS and Android apps, and every store resubmission',
  'The management portal for you and your coaches',
  'Help for your members, so their problems aren’t yours',
  'Ask for a feature - and get every feature anyone else asks for',
  'OS updates and store policy changes, handled quietly',
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
    'Sam Wilson Zara run their small-group training from their own branded app - members book in, log every session, and watch their strength and progress grow, in a studio where women’s training is the focus.',
  quote:
    'Their own app, their own name on the App Store - with the whole platform running quietly behind it.',
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

/** FAQ - doubles as long-tail SEO content + FAQPage structured data. */
export const faqs: { q: string; a: string }[] = [
  {
    q: 'Who owns the member data?',
    a: 'Your club does. Every member record, every session logged, every booking and every payment belongs to the club. We hold it and run it for you - we don’t own it.',
  },
  {
    q: 'Can any gym have its own website and app?',
    a: 'Yes. Whether you run a single studio or a multi-site club, we build your website and publish a fully branded iOS and Android app for your gym - your name, your logo, your colours - with members booking on the site and logging every session in the app.',
  },
  {
    q: 'Do members download it under our own name?',
    a: 'They do. Your app is published on the App Store and Google Play under your club’s name, so members search for your gym and download your app - not a generic third-party one.',
  },
  {
    q: 'Do we need a developer or designer?',
    a: 'No. You send us your logo and colours and we handle the build, the store submissions and the platform behind it. You manage classes, workouts and members from a simple branded web portal.',
  },
  {
    q: 'What does it cost to get started?',
    a: 'A £1,000 one-off setup fee covers your new website, your branded iOS and Android apps and your club set up in the portal. After that it is £250 a month plus £2.50 per member who actually uses the app. Every club gets every feature - there are no tiers.',
  },
  {
    q: 'Is it available on both iOS and Android?',
    a: 'Yes - every club gets native iOS and Android apps, plus a web portal for coaches and managers, all running on one shared backend.',
  },
  {
    q: 'Can we manage classes and members ourselves?',
    a: 'Absolutely. Build a reusable exercise library, create your class catalogue once, schedule recurring sessions, and manage your member roster and access - all from your branded management web app.',
  },
];

export const nav = [
  { href: '/features/', label: 'What you get' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: 'Contact' },
];

/** GA4 web stream for the Harbour Fitness site. Loaded only after consent. */
export const gaMeasurementId = 'G-2GE6VDV9JX';
