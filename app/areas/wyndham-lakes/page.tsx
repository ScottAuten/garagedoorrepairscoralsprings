import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Wyndham Lakes Coral Springs FL | (754) 318-5005',
  description:
    'Garage door repair in Wyndham Lakes, Coral Springs FL. Springs, openers, cables & more. Same-day service, HOA-compliant work. Licensed & insured. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/areas/wyndham-lakes' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Wyndham Lakes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — same-day service is available in Wyndham Lakes 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.' },
    },
    {
      '@type': 'Question',
      name: 'What is the most common garage door issue in Wyndham Lakes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Spring replacement leads the list in Wyndham Lakes. The community\'s established homes — many built in the late 1990s and early 2000s — have original springs that are now at or past their service life. South Florida\'s humidity accelerates corrosion, making galvanized spring upgrades a smart choice.' },
    },
    {
      '@type': 'Question',
      name: 'Are you familiar with Wyndham Lakes HOA guidelines?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Wyndham Lakes HOA maintains standards for garage door appearance including approved colors, panel styles, and materials. We provide product spec sheets and documentation for HOA architectural review submissions before ordering any new door.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated doors in Wyndham Lakes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Florida Building Code requires wind-load rated doors in all of Broward County. We install FL-approved doors that meet and exceed code requirements, including fully impact-rated options for maximum storm protection.' },
    },
    {
      '@type': 'Question',
      name: 'Can lizards cause sensor problems in Wyndham Lakes homes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — gecko and anole interference with garage door sensors is very common throughout Coral Springs, including Wyndham Lakes. Florida\'s geckos are attracted to the LED glow of sensor eyes and will perch directly in front of the sensor, blocking the infrared beam and causing the door to reverse. We clean, realign, and can reposition sensors to reduce recurring lizard interference.' },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Wyndham Lakes?',
    answer: 'Yes — same-day service is available in Wyndham Lakes 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.',
  },
  {
    question: 'What is the most common garage door issue in Wyndham Lakes?',
    answer: "Spring replacement leads the list in Wyndham Lakes. The community's established homes — many built in the late 1990s and early 2000s — have original springs now at or past their service life. South Florida's humidity accelerates corrosion, making galvanized spring upgrades a smart choice.",
  },
  {
    question: 'Are you familiar with Wyndham Lakes HOA guidelines?',
    answer: 'Yes. The Wyndham Lakes HOA maintains standards for garage door appearance. We provide product spec sheets and documentation for HOA architectural review submissions before ordering any new door.',
  },
  {
    question: 'Do you install hurricane-rated doors in Wyndham Lakes?',
    answer: 'Yes. Florida Building Code requires wind-load rated doors in all of Broward County. We install FL-approved doors that meet and exceed code requirements, including fully impact-rated options.',
  },
  {
    question: 'Can lizards cause sensor problems in Wyndham Lakes homes?',
    answer: "Yes — gecko and anole interference with garage door sensors is very common in Wyndham Lakes. Florida's geckos are attracted to the LED glow of sensor eyes and will perch directly in front of the sensor, blocking the infrared beam and causing the door to reverse.",
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'wyndham-lakes')

export default function WyndhamLakesPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'wyndham-lakes')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Coral Springs, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Wyndham Lakes, Coral Springs FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fast, professional garage door repair for Wyndham Lakes homeowners. Springs, openers, cables, off-track
              doors — same-day service, licensed and insured, HOA-compliant work. Serving Coral Springs Since 2010.
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
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
            <Image src={neighborhood.image} alt="Garage door repair in Wyndham Lakes Coral Springs FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Wyndham Lakes?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs serves Wyndham Lakes with same-day spring, opener, cable, and off-track repairs. Licensed, insured, HOA-familiar, locally based. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>{' '}
            for same-day service.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Wyndham Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wyndham Lakes is one of Coral Springs&apos; most established family communities, featuring well-maintained
            single-family homes and an active HOA that keeps the neighborhood looking sharp. The community&apos;s homes,
            many built in the late 1990s and early 2000s, are now at an age where original garage door components —
            particularly springs and cables — are reaching the end of their service life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            South Florida&apos;s humidity accelerates this process significantly. Steel springs and cables that would
            last 10 years in a dry climate often show corrosion and fatigue in 5–7 years in Broward County. Our
            Wyndham Lakes customers frequently contact us for spring replacement, and we install galvanized springs
            as standard — not an upgrade — to address the area&apos;s coastal humidity conditions. We also handle
            opener upgrades, sensor repairs (including the very common lizard interference issue), and new door
            installations that meet Wyndham Lakes HOA requirements.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Wyndham Lakes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Wyndham Lakes &amp; Coral Springs</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">We Also Serve These Coral Springs Communities:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherNeighborhoods.map((n) => (
              <Link key={n.slug} href={`/areas/${n.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Need Garage Door Service in Wyndham Lakes?" subheading="Same-day appointments available. Licensed, insured, HOA-compliant. Call now." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Wyndham Lakes' Local Garage Door Team" subheading="Serving Coral Springs Since 2010. Licensed, insured, same-day service." variant="navy" />
    </>
  )
}
