import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Garage Door Sensor Repair Coral Springs FL | Won't Close Fix (754) 318-5005",
  description:
    "Garage door won't close in Coral Springs? Safety sensor repair and alignment — same day. Lizard interference, sunlight issues, misalignment fixed fast. Call (754) 318-5005.",
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/services/sensor-repair' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Safety Sensor Repair',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Coral Springs', containedIn: 'Broward County, FL' },
  description: 'Professional garage door safety sensor repair, alignment, and replacement in Coral Springs, FL. Specializing in South Florida lizard and sunlight interference issues.',
  offers: { '@type': 'Offer', priceRange: '$75 - $200', priceCurrency: 'USD' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my garage door go down and then come back up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is almost always a safety sensor issue. The infrared beam between the two sensors is being interrupted — by misalignment, a dirty lens, direct sunlight interference, or a physical obstruction. In Coral Springs, lizards and geckos sitting on the sensor eye are one of the most common causes. The opener reverses as a safety response.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can lizards or geckos cause my garage door sensor to malfunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and this is one of the most frequent sensor complaints we hear throughout Coral Springs. Florida\'s geckos (especially the Mediterranean gecko and Indo-Pacific gecko), green anoles, and brown anoles are attracted to the warm housing and LED glow of garage door sensor eyes. When a lizard parks itself directly in front of the sensor lens, it blocks the infrared beam completely. The opener interprets this as an obstacle and reverses. The door may seem to work intermittently — working at night but not during the day, or vice versa, depending on when lizards are most active.',
      },
    },
    {
      '@type': 'Question',
      name: 'The sensor lights are blinking — what does that mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A blinking or off sensor light means the sensors aren\'t properly aligned or one sensor is malfunctioning. The sending sensor (usually yellow light) and receiving sensor (green light) must be precisely aimed at each other. We realign and test in under an hour in most cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can sunlight cause sensor problems in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and it\'s especially common in Coral Springs. The city\'s west-facing and south-facing garages receive intense afternoon sunlight directly on the receiving sensor during certain times of year. This overwhelms the infrared receiver, causing the opener to behave as if an obstacle is present even when the path is clear. We can reposition sensors, add a sun visor, or replace older sensors with models that have better ambient-light rejection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does sensor repair cost in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sensor alignment and cleaning is typically $75–$100. If a sensor needs replacement, cost runs $100–$200 including parts and labor. It\'s one of the more affordable garage door repairs, often resolved in a single 45-minute visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bypass the sensors to close my door?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can temporarily close most openers by holding the wall button continuously — the opener overrides the sensor signal if pressure is maintained. However, this bypasses a critical safety feature. Get it repaired promptly, especially if children or pets use the area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can humidity damage garage door sensors in South Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. High humidity can cause condensation inside sensor housings, fogging the lens and degrading the infrared emitter or receiver over time. Coral Springs homeowners sometimes see sensor failures accelerate after rainy season. Cleaning the lens and ensuring proper weatherstripping on the sensor housing can extend their life significantly.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Why does my garage door go down and then come back up?',
    answer:
      'This is almost always a safety sensor issue. The infrared beam between the two sensors is being interrupted — by misalignment, a dirty lens, direct sunlight, or a physical obstruction. In Coral Springs, lizards and geckos sitting on the sensor eye are one of the most common causes.',
  },
  {
    question: 'Can lizards or geckos cause my garage door sensor to malfunction?',
    answer:
      'Yes — and this is one of the most frequent sensor complaints throughout Coral Springs. Florida\'s geckos, green anoles, and brown anoles are attracted to the warm housing and LED glow of sensor eyes. When a lizard parks itself in front of the sensor lens, it blocks the infrared beam completely — the opener reverses as a safety response. The door may seem to work intermittently depending on when lizards are most active.',
  },
  {
    question: 'The sensor lights are blinking — what does that mean?',
    answer:
      'A blinking or off sensor light means the sensors aren\'t properly aligned or one sensor is malfunctioning. The sending sensor (yellow light) and receiving sensor (green light) must be precisely aimed at each other. We realign and test in under an hour in most cases.',
  },
  {
    question: 'Can sunlight cause sensor problems in Coral Springs?',
    answer:
      'Yes — intense afternoon sunlight hitting the receiving sensor can overwhelm its infrared receiver, causing the opener to behave as if an obstacle is present. We can reposition sensors, add a sun visor, or replace older sensors with models that have better ambient-light rejection.',
  },
  {
    question: 'How much does sensor repair cost in Coral Springs?',
    answer:
      'Sensor alignment and cleaning is typically $75–$100. If a sensor needs replacement, cost runs $100–$200 including parts and labor. Most sensor issues are resolved in a single 45-minute visit.',
  },
  {
    question: 'Can I bypass the sensors to close my door?',
    answer:
      'You can temporarily close most openers by holding the wall button continuously — the opener overrides the sensor signal if pressure is maintained. However, this bypasses a critical safety feature. Get it repaired promptly, especially if children or pets use the area.',
  },
  {
    question: 'Can humidity damage garage door sensors in South Florida?',
    answer:
      'Yes. High humidity can cause condensation inside sensor housings, fogging the lens and degrading the infrared emitter or receiver over time. Cleaning the lens and ensuring proper weatherstripping on the sensor housing can extend their life significantly.',
  },
]

export default function SensorRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Sensor Repair</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Sensor Repair in Coral Springs, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Door won&apos;t close — or closes and reverses immediately? Misaligned sensors, afternoon sunlight
            interference, or a gecko blocking the sensor eye are the top causes in Coral Springs. We diagnose
            and fix sensor issues the same day for $75–$200. Serving Coral Springs Since 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
              Call {SITE.phone}
            </a>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Why won&apos;t my garage door close in Coral Springs?</p>
          <p className="text-gray-700 leading-relaxed">
            The most common reason a garage door won&apos;t close in Coral Springs is a blocked or misaligned safety sensor.
            In South Florida, lizards and geckos blocking the sensor eye are an extremely common cause. Afternoon sunlight
            interference and humidity on the lens are also frequent culprits. Most sensor issues are resolved in under an hour
            for <strong>$75–$200</strong> — call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a> for same-day service.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">How Garage Door Safety Sensors Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Safety sensors consist of two small units mounted at the base of your door tracks — one on each side, about 4–6
            inches off the ground. The sending sensor (usually identified by a yellow indicator light) projects an infrared
            beam across the doorway. The receiving sensor (green light when aligned) detects that beam continuously. If
            anything interrupts the beam while the door is closing, the opener reverses immediately.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This safety system was mandated by federal law for all residential openers manufactured after January 1993.
            While it prevents serious injuries, it&apos;s also one of the more sensitive components of a garage door system —
            easily knocked out of alignment by a stray bicycle, a garden hose, or even accumulated dust on the lens.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">The Coral Springs Lizard Problem: A Real and Common Issue</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Of all the South Florida sensor problems we encounter, lizards blocking garage door sensor eyes are arguably
            the most uniquely local. Florida is home to several gecko species — including the Mediterranean gecko, the
            Indo-Pacific gecko, and the ubiquitous green and brown anoles — that are nocturnal or crepuscular, attracted
            to light sources and warm surfaces.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Garage door sensor housings check every box on a gecko&apos;s wish list: they&apos;re warm from the LED indicator
            light, they glow in the dark, and they&apos;re located low to the ground away from foot traffic. A gecko parked
            directly in front of the sensor lens — even one just an inch long — completely interrupts the infrared beam and
            triggers the auto-reverse. The door tries to close, immediately reverses, and repeats this cycle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We hear this complaint from Wyndham Lakes to Eagle Trace to Heron Bay in Parkland. The immediate fix is simple:
            gently remove the lizard and clean the sensor lens. If the problem recurs frequently, we can install a sensor
            guard or reposition the sensors to make them less accessible. In some cases, replacing older sensors with
            enclosed-housing models that don&apos;t have exposed LED faces reduces the problem significantly.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">South Florida Sensor Problem #2: Afternoon Sunlight</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coral Springs experiences intense afternoon sun from the west and southwest — the direction many garage door
            openings face in residential neighborhoods. During certain times of year, direct sunlight hits the receiving
            sensor at exactly the angle needed to overwhelm its infrared receiver, causing the opener to behave as if an
            obstacle is present even when the doorway is completely clear.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We see this consistently in communities like Turtle Run and Maplewood where west-facing garages are common.
            Solutions include repositioning the sensor slightly, adding a small visor or hood over the receiving sensor, or
            replacing older sensors with newer models that have better ambient-light rejection circuitry. We diagnose which
            approach is right for your setup without replacing parts unnecessarily.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Other Common Sensor Issues in Coral Springs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { issue: 'Humidity condensation on lens', solution: 'Clean and dry lens; apply silicone protectant' },
              { issue: 'Physical impact knocking sensor out of aim', solution: 'Realign to factory beam angle' },
              { issue: 'Sensor wiring corroded or damaged', solution: 'Replace wiring or sensor unit' },
              { issue: 'Spider webs on sensor face', solution: 'Clean and inspect — very common in FL garages' },
              { issue: 'Sensor mounting bracket bent or loose', solution: 'Remount and realign properly' },
              { issue: 'Sensor unit failed internally', solution: 'Replace sensor — compatible units $75–$150 installed' },
            ].map((item) => (
              <div key={item.issue} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-navy text-sm mb-1">{item.issue}</p>
                <p className="text-gray-600 text-sm">Fix: {item.solution}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Serving All of Coral Springs Including:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NEIGHBORHOODS.map((n) => (
              <Link key={n.slug} href={`/areas/${n.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">Coral Springs, FL</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Door Won't Close? We Fix Sensors Same Day." subheading="Lizards, sunlight, misalignment — we've seen it all in Coral Springs. Fast fix, affordable price." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Quick Fix. Upfront Price. Same Day." subheading="Licensed technicians serving Coral Springs and all of Northwest Broward County." variant="navy" />
    </>
  )
}
