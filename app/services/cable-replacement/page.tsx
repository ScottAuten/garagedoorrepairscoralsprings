import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Cable Replacement Coral Springs FL | (754) 318-5005 Same-Day',
  description:
    'Garage door cable snapped or fraying in Coral Springs? Licensed technicians replace galvanized lift cables same day. Upfront pricing. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/services/cable-replacement' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Cable Replacement',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Coral Springs', containedIn: 'Broward County, FL' },
  description: 'Professional garage door lift cable replacement in Coral Springs, FL. Galvanized cables for South Florida climate.',
  offers: { '@type': 'Offer', priceRange: '$150 - $400', priceCurrency: 'USD' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my garage door cable is broken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signs of a broken cable: the door hangs at an angle (one side lower than the other), you can see a loose cable coiled at the bottom of the door, or the door won\'t open at all despite the opener running. A snapped cable is often visible as a loose wire on the floor or side of the track.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use the door with a frayed cable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A fraying cable is near failure. If it snaps while the door is open, the door can crash down suddenly. Stop using the door and call for same-day service.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does cable replacement cost in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cable replacement in Coral Springs typically costs $150–$400 including both cables and labor. We replace both cables simultaneously — if one has failed, the other is near end-of-life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do garage door cables fail faster in South Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South Florida\'s high humidity and salt air accelerate corrosion on steel lift cables. Cables that aren\'t lubricated annually develop surface rust that progressively weakens the strands. Coral Springs homes near retention ponds and water features face near-constant moisture exposure. Galvanized cables with regular maintenance significantly extend service life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you replace cables on both sides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always. Cables wear at the same rate. Replacing only the snapped cable leaves the other within weeks of failure. Replacing both ensures balanced tension and saves a second service call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a galvanized cable and why does it matter in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Galvanized cables have a zinc coating applied over the steel strands, which dramatically slows corrosion in humid, salt-laden environments. In Coral Springs and Broward County, galvanized cables can last 2–3 times longer than uncoated steel cables under the same conditions. We use galvanized cables as our standard on all replacements — not as an upgrade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a snapped cable cause other parts to fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When a cable snaps suddenly, the door drops on one side, overloading the springs, straining the other cable, and potentially causing rollers to jump the track. A single cable failure can cascade into a much more expensive repair if the door is operated in this state.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'How do I know if my garage door cable is broken?',
    answer:
      'Signs of a broken cable: the door hangs at an angle (one side lower than the other), you can see a loose cable coiled at the bottom of the door, or the door won\'t open at all despite the opener running. A snapped cable is often visible as a loose wire on the floor or side of the track.',
  },
  {
    question: 'Is it safe to use the door with a frayed cable?',
    answer:
      'No. A fraying cable is near failure. If it snaps while the door is open, the door can crash down suddenly. Stop using the door and call for same-day service.',
  },
  {
    question: 'How much does cable replacement cost in Coral Springs?',
    answer:
      'Cable replacement in Coral Springs typically costs $150–$400 including both cables and labor. We replace both cables simultaneously — if one has failed, the other is near end-of-life.',
  },
  {
    question: 'Why do garage door cables fail faster in South Florida?',
    answer:
      'South Florida\'s high humidity and salt air accelerate corrosion on steel lift cables. Cables that aren\'t lubricated annually develop surface rust that progressively weakens the strands. Galvanized cables with regular maintenance significantly extend service life.',
  },
  {
    question: 'Do you replace cables on both sides?',
    answer:
      'Yes, always. Cables wear at the same rate. Replacing only the snapped cable leaves the other within weeks of failure. Replacing both ensures balanced tension and saves a second service call.',
  },
  {
    question: 'What is a galvanized cable and why does it matter in Coral Springs?',
    answer:
      'Galvanized cables have a zinc coating that slows corrosion in humid, salt-laden environments. In Coral Springs, galvanized cables last 2–3 times longer than uncoated steel cables. We use galvanized cables as our standard on all replacements.',
  },
  {
    question: 'Can a snapped cable cause other parts to fail?',
    answer:
      'Yes. When a cable snaps, the door drops on one side, overloading the springs, straining the other cable, and potentially causing rollers to jump the track. A single cable failure can cascade into a much more expensive repair if the door is operated in this state.',
  },
]

export default function CableReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Cable Replacement</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Cable Replacement in Coral Springs, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Lift cables are the critical link between your springs and door. A snapped or fraying cable means your
            door can crash without warning. Same-day cable replacement with galvanized cables available across
            Coral Springs — call now. Serving Coral Springs Since 2010.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">How much does garage door cable replacement cost in Coral Springs?</p>
          <p className="text-gray-700 leading-relaxed">
            Cable replacement in Coral Springs costs <strong>$150–$400</strong> including both cables and labor. We always replace both lift cables simultaneously with galvanized steel cables rated for South Florida&apos;s humidity. Call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a> for same-day service.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">How Lift Cables Work — and Why They Fail in South Florida</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Garage door lift cables connect the bottom corner of each door panel to the cable drum mounted on the torsion
            spring shaft (or to the extension spring directly). When the spring releases tension to open the door, the
            cables transmit that force through the drums and down to the door, lifting it smoothly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In Coral Springs and across Broward County, the combination of high humidity, salt air, and temperature
            cycling creates ideal conditions for cable corrosion. Steel cables that aren&apos;t treated with a protective
            lubricant develop surface oxidation — visible as reddish-brown discoloration — that progressively weakens
            individual strands until the cable snaps under load. Homes in Wyndham Lakes, Maplewood, and Ridgewood near
            retention ponds and canal systems face especially humid conditions that accelerate this process.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Galvanized Cables: Why They Matter in Coral Springs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard steel lift cables are adequate in dry climates but underperform in South Florida&apos;s coastal
            humidity. Galvanized cables feature a zinc coating over the steel strands that forms a barrier against
            oxidation — dramatically extending cable life in Broward County&apos;s environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We use galvanized cables as our default on all Coral Springs cable replacements — not an upgrade. For homes
            in Eagle Trace, Turtle Run, and Heron Bay in Parkland, where premium hardware is expected and deferred
            maintenance is not, galvanized cables with annual lubrication deliver 8–12 years of service life versus
            4–6 years for standard steel cables in the same conditions.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Warning Signs Before Cables Snap</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Visible rust or reddish discoloration on the cable strands</li>
            <li>Frayed or unraveling strands at the end loops or drum connection</li>
            <li>Door opening unevenly — one side visibly higher than the other</li>
            <li>Clicking or snapping sounds during door travel</li>
            <li>Cable visible as slack or hanging loose along the track</li>
            <li>Door that suddenly feels very heavy to lift manually</li>
          </ul>

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

      <CTASection heading="Cable Snapped? We Can Fix It Today." subheading="Same-day galvanized cable replacement across all Coral Springs neighborhoods." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Galvanized Cables. Proper Calibration. Same Day." subheading="Licensed and insured. Upfront pricing before any work. Call (754) 318-5005." variant="navy" />
    </>
  )
}
