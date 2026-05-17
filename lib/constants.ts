export const SITE = {
  name: 'Garage Door Repair of Coral Springs',
  domain: 'https://garagedoorrepairscoralsprings.us',
  phone: '(754) 318-5005',
  phoneRaw: '7543185005',
  address: '8019 Liberty Way',
  city: 'Parkland',
  state: 'FL',
  zip: '33067',
  county: 'Broward',
  hours: 'Monday–Sunday 7:00 AM – 8:00 PM',
  hoursSchema: 'Mo-Su 07:00-20:00',
  formspree: 'https://formspree.io/f/mqejzwza',
  founded: '2010',
}

export const SERVICES = [
  { slug: 'spring-replacement', url: '/garage-door-spring-replacement-coral-springs', name: 'Spring Replacement', shortName: 'Springs', icon: '🔧', description: 'Loud bang? Door won\'t open? A broken torsion spring is the #1 garage door emergency in South Florida.' },
  { slug: 'opener-repair', url: '/garage-door-opener-repair-coral-springs', name: 'Opener Repair', shortName: 'Openers', icon: '📡', description: 'Door hums but won\'t move? Remote stopped working? We diagnose and fix all major brands same day.' },
  { slug: 'off-track-repair', url: '/garage-door-off-track-repair-coral-springs', name: 'Off-Track Repair', shortName: 'Off-Track', icon: '🛤️', description: 'Door hanging crooked or stuck sideways? Don\'t force it — call us before it gets worse.' },
  { slug: 'cable-replacement', url: '/garage-door-cable-replacement-coral-springs', name: 'Cable Replacement', shortName: 'Cables', icon: '⚙️', description: 'Frayed or snapped cable? Door lifting unevenly? This is dangerous — let our techs handle it safely.' },
  { slug: 'sensor-repair', url: '/garage-door-sensor-repair-coral-springs', name: 'Sensor Repair', shortName: 'Sensors', icon: '👁️', description: 'Door reverses for no reason? In South Florida, heat, humidity, and lizards blocking sensor eyes are common culprits.' },
  { slug: 'roller-replacement', url: '/garage-door-roller-replacement-coral-springs', name: 'Roller Replacement', shortName: 'Rollers', icon: '🔩', description: 'Grinding, squeaking, or rattling every time the door moves? Worn nylon rollers are usually the cause.' },
  { slug: 'emergency-repair', url: '/emergency-garage-door-repair-coral-springs', name: 'Emergency Repair', shortName: 'Emergency', icon: '🚨', description: 'Can\'t get your car out? Door stuck open overnight? We prioritize same-day emergency calls across Coral Springs.' },
  { slug: 'new-installation', url: '/garage-door-installation-coral-springs', name: 'New Door Installation', shortName: 'Installation', icon: '🏠', description: 'Ready for a new door? We install hurricane-rated sectional doors that meet Broward County wind load requirements and HOA standards.' },
]

export const NEIGHBORHOODS = [
  {
    slug: 'wyndham-lakes',
    url: '/wyndham-lakes-garage-door-repair',
    name: 'Wyndham Lakes',
    image: '/images/wyndham-lakes.png',
    description: 'Established family community with an active HOA and well-maintained homes across Coral Springs.',
  },
  {
    slug: 'ridgewood',
    url: '/ridgewood-garage-door-repair',
    name: 'Ridgewood',
    image: '/images/ridgewood.png',
    description: 'Mature neighborhood with larger lots and many original garage doors ready for upgrade or replacement.',
  },
  {
    slug: 'eagle-trace',
    url: '/eagle-trace-garage-door-repair',
    name: 'Eagle Trace',
    image: '/images/eagle-trace.png',
    description: 'Upscale golf community with premium homes, strict HOA, and discerning homeowners.',
  },
  {
    slug: 'turtle-run',
    url: '/turtle-run-garage-door-repair',
    name: 'Turtle Run',
    image: '/images/turtle-run.png',
    description: 'Gated upscale community with strong HOA oversight and manicured streets throughout.',
  },
  {
    slug: 'maplewood',
    url: '/maplewood-garage-door-repair',
    name: 'Maplewood',
    image: '/images/maplewood.png',
    description: 'Family-friendly, well-established neighborhood with an active community association.',
  },
  {
    slug: 'heron-bay',
    url: '/heron-bay-garage-door-repair',
    name: 'Heron Bay',
    image: '/images/heron-bay.png',
    description: 'Luxury gated community in Parkland — the highest-end garage door market in the area with very strict HOA standards.',
  },
]

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: 'US',
  },
  telephone: SITE.phone,
  url: SITE.domain,
  areaServed: [
    'Coral Springs', 'Wyndham Lakes', 'Ridgewood', 'Eagle Trace',
    'Turtle Run', 'Maplewood', 'Heron Bay', 'Parkland', 'Broward County',
  ],
  priceRange: '$$',
  openingHours: SITE.hoursSchema,
  description:
    'Professional garage door repair and installation serving Coral Springs FL and surrounding communities including Heron Bay and Parkland.',
}
