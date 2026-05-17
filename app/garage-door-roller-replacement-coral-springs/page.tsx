import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Roller Replacement Coral Springs FL | Quiet Nylon (754) 318-5005',
  description:
    'Noisy, rough garage door in Coral Springs? Roller replacement with quiet nylon rollers — same-day service. Licensed technicians, upfront pricing. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/garage-door-roller-replacement-coral-springs' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Roller Replacement',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Coral Springs', containedIn: 'Broward County, FL' },
  description: 'Professional garage door roller replacement with nylon and steel rollers in Coral Springs, FL.',
  offers: { '@type': 'Offer', priceRange: '$150 - $350', priceCurrency: 'USD' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my garage door so loud when it opens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Noise during operation is the most common symptom of worn rollers. Old steel rollers with dry or rusted bearings create grinding, rattling, and squealing. Nylon roller upgrades dramatically reduce noise — often by 50–70%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between nylon and steel rollers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nylon rollers run much quieter than steel, require less lubrication, and don\'t rust — making them ideal for South Florida\'s humidity. Steel rollers are more durable under heavy commercial loads. For residential use in Coral Springs, nylon sealed-bearing rollers are our standard recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does roller replacement cost in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replacing all rollers on a standard two-car door typically costs $150–$350 including parts and labor. The full set of 10–12 rollers is usually replaced at once — piecemeal replacement just means more service calls as the remaining rollers wear out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should garage door rollers be replaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard steel rollers last 5–7 years with maintenance. Nylon sealed-bearing rollers last 10–15 years. In high-humidity environments like Coral Springs, steel rollers without regular lubrication may wear faster — heat expansion in summer also causes increased friction and accelerates bearing wear.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can worn rollers damage other parts of the door system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rollers with flat spots or damaged bearings put uneven pressure on tracks, causing them to bend or loosen over time. They also put excess strain on the opener motor and springs as they compensate for increased friction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does South Florida heat affect garage door rollers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Coral Springs summer temperatures regularly exceed 90°F, and garages can reach 110°F or higher. This heat causes metal roller stems to expand slightly in the hinges, increasing friction and wear. Nylon rollers handle this thermal expansion better than steel and maintain smoother operation year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does roller replacement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete roller replacement for a standard two-car garage door takes 1–1.5 hours. We replace all rollers in a single visit, lubricate the tracks and hinges, and test the door through multiple cycles before leaving.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'Why is my garage door so loud when it opens?',
    answer:
      'Noise during operation is the most common symptom of worn rollers. Old steel rollers with dry or rusted bearings create grinding, rattling, and squealing. Nylon roller upgrades dramatically reduce noise — often by 50–70%.',
  },
  {
    question: 'What is the difference between nylon and steel rollers?',
    answer:
      'Nylon rollers run much quieter than steel, require less lubrication, and don\'t rust — making them ideal for South Florida\'s humidity. For residential use in Coral Springs, nylon sealed-bearing rollers are our standard recommendation.',
  },
  {
    question: 'How much does roller replacement cost in Coral Springs?',
    answer:
      'Replacing all rollers on a standard two-car door typically costs $150–$350 including parts and labor. The full set of 10–12 rollers is usually replaced at once — piecemeal replacement just means more service calls as the remaining rollers wear out.',
  },
  {
    question: 'How often should garage door rollers be replaced in South Florida?',
    answer:
      'Standard steel rollers last 5–7 years with maintenance. Nylon sealed-bearing rollers last 10–15 years. In Coral Springs\'s high humidity, steel rollers without regular lubrication wear faster — and summer heat expansion accelerates bearing wear.',
  },
  {
    question: 'Can worn rollers damage other parts of the door system?',
    answer:
      'Yes. Rollers with flat spots or damaged bearings put uneven pressure on tracks, causing them to bend or loosen over time. They also put excess strain on the opener motor and springs as they compensate for increased friction.',
  },
  {
    question: 'Does South Florida heat affect garage door rollers?',
    answer:
      'Yes. Coral Springs summers regularly exceed 90°F, and garages can reach 110°F+. This heat causes metal roller stems to expand in the hinges, increasing friction and wear. Nylon rollers handle thermal expansion better than steel and maintain smoother operation year-round.',
  },
  {
    question: 'How long does roller replacement take?',
    answer:
      'A complete roller replacement for a standard two-car garage door takes 1–1.5 hours. We replace all rollers in a single visit, lubricate the tracks and hinges, and test the door through multiple cycles before leaving.',
  },
]

export default function RollerReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Roller Replacement</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Garage Door Roller Replacement in Coral Springs, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Grinding, rattling, and rough door movement are signs your rollers are overdue for replacement. Nylon
            roller upgrades eliminate noise and extend the life of your tracks, springs, and opener — same-day
            service available across Coral Springs. Serving Coral Springs Since 2010.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">Why is my garage door making so much noise in Coral Springs?</p>
          <p className="text-gray-700 leading-relaxed">
            Grinding, rattling, and squealing during door travel almost always points to worn or dry rollers. In South Florida,
            summer heat and high humidity accelerate roller wear significantly. Nylon roller replacement eliminates most door
            noise and costs <strong>$150–$350</strong> for a full set — typically completed in under 90 minutes. Call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Nylon vs. Steel Rollers: What We Recommend for Coral Springs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standard residential garage doors come from the factory with steel rollers — functional but noisy, and
            susceptible to rust in South Florida&apos;s high-humidity environment. We recommend upgrading to sealed-bearing
            nylon rollers for virtually all residential applications in Coral Springs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-navy mb-3">Steel Rollers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Noisy operation</li>
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Rust-prone in humidity</li>
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Expand in Florida summer heat</li>
                <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span>Require regular lubrication</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Better for very heavy commercial doors</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-navy mb-3">Nylon Rollers (Recommended)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Dramatically quieter</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Rust-resistant for FL climate</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Less thermal expansion in summer heat</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>Sealed bearings — less maintenance</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span>10–15 year lifespan</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Heat Expansion: A Uniquely South Florida Roller Issue</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coral Springs homeowners in Wyndham Lakes, Eagle Trace, and Maplewood often notice their garage doors become
            noisier and rougher during summer months — not just from humidity, but from thermal expansion. Steel roller
            stems expand slightly in their hinge brackets as temperatures climb inside the garage, increasing friction
            and accelerating bearing wear.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nylon rollers with sealed precision bearings handle this thermal cycling significantly better than exposed
            steel bearings. The nylon wheel body itself has a lower coefficient of thermal expansion than steel, so
            fit and clearance remain consistent whether it&apos;s 70°F in January or 110°F inside your garage in August.
            This translates to smoother, quieter operation year-round — a meaningful quality-of-life improvement for
            homeowners in premium communities like Eagle Trace and Heron Bay in Parkland.
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

      <CTASection heading="Quiet Your Noisy Garage Door Today." subheading="Nylon roller upgrades available same day across Coral Springs. Call (754) 318-5005." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Smooth, Quiet, Long-Lasting" subheading="Licensed technicians. Upfront pricing. Coral Springs and all of Northwest Broward County." variant="navy" />
    </>
  )
}
