import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Emergency Garage Door Repair Coral Springs FL | 7 Days (754) 318-5005',
  description:
    "Emergency garage door repair in Coral Springs, FL. Door stuck open, car trapped inside, won't close — fast response, same-day service, 7AM–8PM. Call (754) 318-5005.",
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/emergency-garage-door-repair-coral-springs' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency Garage Door Repair',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Coral Springs', containedIn: 'Broward County, FL' },
  description: 'Emergency same-day garage door repair in Coral Springs, FL. Available 7 days a week, 7AM–8PM.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What counts as a garage door emergency in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any situation that leaves your home unsecured or your vehicle inaccessible is an emergency: door stuck open (home exposed), car trapped inside, door off its tracks and blocking the opening, spring snapped with door in closed position (can\'t open), or door closing but not latching properly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you respond to an emergency in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We target same-day response for all emergency calls received before 6 PM, Monday through Sunday. We serve all Coral Springs neighborhoods including Wyndham Lakes, Ridgewood, Eagle Trace, Turtle Run, Maplewood, and Heron Bay in Parkland. Call (754) 318-5005 for the current available window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge extra for emergency service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We do not charge a separate emergency fee. You pay for the repair — whatever the issue requires — and that\'s it. Pricing is provided upfront before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'My car is stuck inside the garage — can I release the door manually?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pull the red emergency release cord hanging from the opener trolley — this disconnects the door from the opener and lets you lift manually. If the spring is broken, the door will be very heavy and may require two people. Do not force it if it won\'t move freely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my home safe if my garage door is stuck open?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A garage door stuck in the open position is a security and weather vulnerability. In Coral Springs during hurricane season, this is especially urgent. Most stuck-open situations are resolved by re-engaging the opener trolley or addressing a tripped limit switch — often fixable in under an hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle storm damage to garage doors in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. South Florida hurricane and tropical storm seasons frequently cause garage door damage — from wind pressure failures to debris impact to panel damage. We assess and repair storm-damaged doors throughout Coral Springs and can advise on hurricane-rated upgrades that meet Broward County wind load standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is same-day emergency garage door service available in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day emergency service across Coral Springs Monday through Sunday, 7 AM to 8 PM. No emergency surcharge — you pay for the repair only. Call (754) 318-5005.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'What counts as a garage door emergency in Coral Springs?',
    answer:
      'Any situation that leaves your home unsecured or your vehicle inaccessible is an emergency: door stuck open, car trapped inside, door off its tracks, spring snapped with door in closed position, or door closing but not latching properly.',
  },
  {
    question: 'How fast can you respond to an emergency in Coral Springs?',
    answer:
      'We target same-day response for all emergency calls received before 6 PM, 7 days a week. We serve Wyndham Lakes, Ridgewood, Eagle Trace, Turtle Run, Maplewood, and Heron Bay in Parkland. Call (754) 318-5005 for the current available window.',
  },
  {
    question: 'Do you charge extra for emergency service?',
    answer:
      'No. We do not charge a separate emergency fee. You pay for the repair — whatever the issue requires — and that\'s it. Pricing is provided upfront before any work begins.',
  },
  {
    question: 'My car is stuck inside the garage — can I release the door manually?',
    answer:
      'Yes. Pull the red emergency release cord hanging from the opener trolley — this disconnects the door from the opener and lets you lift manually. If the spring is broken, the door will be very heavy. Do not force it if it won\'t move freely.',
  },
  {
    question: 'Is my home safe if my garage door is stuck open?',
    answer:
      'A garage door stuck open is a security and weather vulnerability. In Coral Springs during hurricane season, this is especially urgent. Most stuck-open situations are resolved in under an hour — call us for same-day service.',
  },
  {
    question: 'Do you handle storm damage to garage doors in Coral Springs?',
    answer:
      'Yes. South Florida hurricane and tropical storm seasons frequently cause garage door damage — from wind pressure failures to debris impact. We assess and repair storm-damaged doors throughout Coral Springs and can advise on hurricane-rated upgrades that meet Broward County wind load standards.',
  },
  {
    question: 'Is same-day emergency service available 7 days a week?',
    answer:
      'Yes. We offer same-day emergency service across Coral Springs Monday through Sunday, 7 AM to 8 PM. No emergency surcharge — you pay for the repair only.',
  },
]

export default function EmergencyRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-red-700 text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-wide mb-2">Same-Day Emergency Service — 7 Days a Week</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Emergency Garage Door Repair in Coral Springs, FL
          </h1>
          <p className="text-lg text-red-100 mb-6 leading-relaxed max-w-2xl">
            Door stuck open? Car trapped? Spring snapped? Don&apos;t wait — call now. Fast response, same day,
            7 days a week across all of Coral Springs, including Wyndham Lakes, Eagle Trace, Turtle Run, Maplewood,
            Ridgewood, and Heron Bay in Parkland. Serving Coral Springs Since 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
              Call Now: {SITE.phone}
            </a>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-700 font-bold py-3 px-7 rounded-lg text-lg transition-colors text-center">
              Get a Callback
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Is same-day emergency garage door service available in Coral Springs?</p>
          <p className="text-gray-700 leading-relaxed">
            Yes. We offer same-day emergency service across Coral Springs Monday–Sunday, 7 AM–8 PM. No emergency surcharge — you pay for the repair only. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Emergency Situations We Handle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🔓', title: 'Door Stuck Open', body: 'Home exposed to weather and security risk in Coral Springs. We prioritize these calls.' },
              { icon: '🚗', title: 'Car Trapped Inside', body: 'Can\'t get your vehicle out? We\'ll get the door moving safely — same day.' },
              { icon: '💥', title: 'Spring Snapped', body: 'Loud bang + door won\'t open = broken torsion spring. The most common emergency we handle.' },
              { icon: '🛤️', title: 'Door Off Track', body: 'Door hanging at an angle or stuck mid-travel. Do not force it — call for safe realignment.' },
              { icon: '🔗', title: 'Cable Snapped', body: 'One side of the door dropped suddenly. Urgent safety issue — stop using the door.' },
              { icon: '⛈️', title: 'Storm Damage', body: 'Post-hurricane or severe weather door damage — Broward County storm season is real.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex gap-4 items-start">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">All Emergency Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.url}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{s.name}</p>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Serving All of Coral Springs Including:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NEIGHBORHOODS.map((n) => (
              <Link key={n.slug} href={n.url}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">Coral Springs, FL</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Don't Wait — Call Now for Emergency Service" subheading="Same-day response across Coral Springs. No emergency surcharge. Call (754) 318-5005." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Available 7 Days. Licensed & Insured." subheading="Coral Springs emergency garage door service — call (754) 318-5005." variant="navy" />
    </>
  )
}
