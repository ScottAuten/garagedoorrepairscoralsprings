import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Opener Repair Coral Springs FL | All Brands | (754) 318-5005',
  description:
    'Garage door opener repair in Coral Springs, FL. LiftMaster, Chamberlain, Genie & all brands. Logic board, motor, remote repair. Same-day service. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/garage-door-opener-repair-coral-springs' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Opener Repair',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Coral Springs', containedIn: 'Broward County, FL' },
  description: 'Professional garage door opener repair and replacement in Coral Springs, FL.',
  offers: { '@type': 'Offer', priceRange: '$150 - $400', priceCurrency: 'USD' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my garage door opener run but the door doesn\'t move?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This usually means the trolley carriage has disconnected from the drive rail — often after manually pulling the emergency release cord. Re-engaging the carriage is a simple fix. It can also indicate a stripped drive gear or broken drive belt/chain.',
      },
    },
    {
      '@type': 'Question',
      name: 'My remote stopped working — is the opener broken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually not. Check the battery first (most remotes use CR2032 or AA). If fresh batteries don\'t help, the remote may need reprogramming or replacement. Interference from LED bulbs in the opener housing can also kill remote range.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a garage door opener repair cost in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most opener repairs run $150–$400. Full replacement with a new unit costs $250–$500 installed. Logic board failure, drive gear replacement, and motor repair are the most common service scenarios.',
      },
    },
    {
      '@type': 'Question',
      name: 'My opener reverses immediately after hitting the floor — what\'s wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The close-force sensitivity or down-travel limit is set too low. This is usually a calibration adjustment, not a parts replacement. Misaligned safety sensors — sometimes caused by geckos or lizards blocking the beam in Coral Springs homes — can cause the same behavior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you upgrade my old opener to a smart WiFi model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We install and program smart openers from LiftMaster (myQ), Chamberlain, and Genie. Smart openers let you open and close via smartphone, get alerts when the door opens, and integrate with home automation systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a power surge damage garage door openers in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Florida\'s frequent lightning storms and power outages are a major cause of logic board failures in garage door openers throughout Coral Springs. A surge protector on the outlet significantly reduces this risk. We recommend battery backup openers for all Coral Springs homeowners given South Florida\'s hurricane season.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I repair or replace my garage door opener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Openers under 7 years old are generally worth repairing. Openers 10+ years old without battery backup, rolling code technology, or modern safety features are often better replaced — especially in South Florida where power outages during storms make battery backup essential.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Why does my garage door opener run but the door doesn\'t move?',
    answer:
      'This usually means the trolley carriage has disconnected from the drive rail — often after manually pulling the emergency release cord. Re-engaging the carriage is a simple fix. It can also indicate a stripped drive gear or broken drive belt/chain.',
  },
  {
    question: 'My remote stopped working — is the opener broken?',
    answer:
      'Usually not. Check the battery first (most remotes use CR2032 or AA). If fresh batteries don\'t help, the remote may need reprogramming or replacement. Interference from LED bulbs in the opener housing can also kill remote range.',
  },
  {
    question: 'How much does a garage door opener repair cost in Coral Springs?',
    answer:
      'Most opener repairs run $150–$400. Full replacement with a new unit costs $250–$500 installed. Logic board failure, drive gear replacement, and motor repair are the most common service scenarios.',
  },
  {
    question: 'My opener reverses immediately after hitting the floor — what\'s wrong?',
    answer:
      'The close-force sensitivity or down-travel limit is set too low. This is usually a calibration adjustment. Misaligned sensors — or a gecko blocking the beam in South Florida — can cause the same behavior.',
  },
  {
    question: 'Can you upgrade my old opener to a smart WiFi model?',
    answer:
      'Yes. We install and program smart openers from LiftMaster (myQ), Chamberlain, and Genie. These let you open and close via smartphone, get alerts, and integrate with home automation — and include battery backup for Florida storms.',
  },
  {
    question: 'Does a power surge damage garage door openers in Florida?',
    answer:
      'Yes. Florida\'s frequent lightning storms are a major cause of logic board failures in Coral Springs. A surge protector reduces this risk. Battery backup openers are highly recommended for all South Florida homes given hurricane season.',
  },
  {
    question: 'Should I repair or replace my garage door opener?',
    answer:
      'Openers under 7 years old are generally worth repairing. Openers 10+ years old without battery backup, rolling code technology, or modern safety features are often better replaced — especially in South Florida where power outages are common during storms.',
  },
]

export default function OpenerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Opener Repair</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Opener Repair in Coral Springs, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Opener not responding? Grinding, humming, or reversing on its own? We diagnose and repair all major
            opener brands — LiftMaster, Chamberlain, Genie, Craftsman, Ryobi, and more — with same-day service
            across Coral Springs. Serving Coral Springs Since 2010.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">How much does garage door opener repair cost in Coral Springs?</p>
          <p className="text-gray-700 leading-relaxed">
            Opener repair in Coral Springs typically costs <strong>$150–$400</strong> depending on the fault. Remote programming and sensor calibration are on the low end; logic board and motor replacement are higher. Full opener replacement runs $250–$500 installed. Call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a> for a free estimate.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Common Opener Problems We Fix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { symptom: 'Opener hums but door doesn\'t move', cause: 'Stripped drive gear or disconnected trolley' },
              { symptom: 'Door reverses before closing fully', cause: 'Limit setting, sensor misalignment, or lizard on sensor' },
              { symptom: 'Remote has no range', cause: 'LED interference or antenna fault' },
              { symptom: 'Opener makes grinding noise', cause: 'Worn drive gear or chain/belt issue' },
              { symptom: 'Wall button works, remote doesn\'t', cause: 'Remote or receiver fault' },
              { symptom: 'Opener died after storm', cause: 'Power surge — logic board replacement needed' },
            ].map((item) => (
              <div key={item.symptom} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-navy text-sm mb-1">{item.symptom}</p>
                <p className="text-gray-600 text-sm">Likely cause: {item.cause}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Brands We Service</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our technicians are trained on all major residential opener brands. We stock common logic boards, drive gears, trolleys, and remotes for fast same-day repair:
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['LiftMaster', 'Chamberlain', 'Genie', 'Craftsman', 'Ryobi', 'Sommer', 'Marantec', 'Guardian', 'Stanley', 'Linear'].map((brand) => (
              <span key={brand} className="bg-navy text-white text-sm font-medium px-3 py-1 rounded-full">{brand}</span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">South Florida Opener Issues: Power Surges and Battery Backup</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coral Springs and the broader Broward County area experience frequent lightning strikes and power outages
            during South Florida&apos;s intense afternoon thunderstorm season. These electrical events are a leading cause
            of logic board failures in residential garage door openers. A power surge can destroy a $300 logic board
            in milliseconds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We strongly recommend battery backup openers for all Coral Springs homeowners — particularly those in
            Wyndham Lakes, Eagle Trace, Turtle Run, and Heron Bay in Parkland, where gated community access makes
            a dead opener especially inconvenient. Current-generation LiftMaster and Chamberlain battery backup units
            provide 2–3 days of normal operation on a single charge, so you&apos;re never locked out during extended
            outages from a major storm.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Repair vs. Replace — How We Decide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every opener problem requires a new unit. A logic board failure on a 3-year-old LiftMaster makes sense to repair. A stripped drive gear on a 15-year-old Craftsman chain-drive is often better addressed with a new smart opener. We give you an honest recommendation and let you choose.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Openers older than 10 years that lack modern safety features (auto-reverse, rolling code technology, battery backup) are worth upgrading even if the immediate repair is simple. For HOA communities like Eagle Trace and Heron Bay, where aesthetic and operational standards are high, a quiet belt-drive or DC motor opener with smart home integration is often the right upgrade.
          </p>

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

      <CTASection heading="Opener Not Working? Call Us Now." subheading="Same-day opener repair across all Coral Springs neighborhoods. (754) 318-5005." variant="orange" />

      <FAQSection faqs={faqs} />

      <CTASection heading="All Major Brands. Same-Day Service." subheading="Licensed and insured. Upfront pricing before any work begins." variant="navy" />
    </>
  )
}
