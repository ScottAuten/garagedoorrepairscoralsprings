import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Heron Bay Parkland FL | (754) 318-5005',
  description:
    'Garage door repair in Heron Bay, Parkland FL. Luxury gated community service — HOA-compliant, premium brands, hurricane-rated. Same-day, licensed & insured. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/heron-bay-garage-door-repair' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Heron Bay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — same-day service is available in Heron Bay, Parkland 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment. Our business is based nearby in Parkland, and our technicians are familiar with the Heron Bay community.' },
    },
    {
      '@type': 'Question',
      name: 'Are you familiar with Heron Bay HOA requirements for garage doors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Heron Bay is one of the most strictly managed HOA communities in Broward County. The Heron Bay HOA maintains comprehensive architectural standards for garage door appearance, including approved colors, panel profiles, glass inserts, and hardware finishes. We provide complete documentation packages — product spec sheets, manufacturer brochures, color samples — for architectural review committee submissions and have experience navigating Heron Bay\'s approval timeline.' },
    },
    {
      '@type': 'Question',
      name: 'What premium garage door brands are common in Heron Bay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Heron Bay homes feature some of the highest-end garage door installations in the region. Common brands include Clopay Reserve Wood, Clopay Canyon Ridge, Wayne Dalton, and CHI — many with carriage-house designs, glass sections, and custom hardware that reflect the community\'s contemporary luxury aesthetic. We service all premium door brands and can source matched replacement hardware to maintain the look and HOA approval of your existing door.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated doors in Heron Bay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Florida Building Code requires wind-load rated doors throughout Broward County, including Parkland. For Heron Bay, we install premium impact-rated doors that satisfy both Broward County wind load requirements and the Heron Bay HOA\'s strict aesthetic standards. Miami-Dade NOA certified options are available and are preferred by many Heron Bay homeowners and insurance carriers.' },
    },
    {
      '@type': 'Question',
      name: 'What is the typical cost for garage door service in Heron Bay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Repair costs in Heron Bay are consistent with our Coral Springs-wide pricing: spring replacement $150–$500, opener repair $150–$400, cable replacement $150–$400, sensor repair $75–$200. New door installation for premium contemporary or carriage-house doors common in Heron Bay runs $1,500–$3,000+. We provide upfront written estimates before any work begins.' },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Heron Bay?',
    answer: 'Yes — same-day service is available in Heron Bay, Parkland 7 days a week, 7 AM–8 PM. Call (754) 318-5005. Our business is based nearby in Parkland and our technicians know the Heron Bay community well.',
  },
  {
    question: 'Are you familiar with Heron Bay HOA requirements for garage doors?',
    answer: "Yes. Heron Bay is one of Broward County's most strictly managed HOA communities. We provide complete documentation — product spec sheets, manufacturer brochures, color samples — for architectural review submissions and have experience with Heron Bay's approval process.",
  },
  {
    question: 'What premium garage door brands are common in Heron Bay?',
    answer: "Heron Bay homes feature high-end installations including Clopay Reserve Wood, Clopay Canyon Ridge, Wayne Dalton, and CHI — many with carriage-house or contemporary designs and custom hardware. We service all premium brands and can source matched replacement hardware to maintain your door's look and HOA compliance.",
  },
  {
    question: 'Do you install hurricane-rated doors in Heron Bay?',
    answer: "Yes. We install premium impact-rated doors that meet both Broward County's wind load requirements and Heron Bay HOA aesthetic standards. Miami-Dade NOA certified options are available and preferred by many Heron Bay homeowners and insurance carriers.",
  },
  {
    question: 'What is the typical cost for garage door service in Heron Bay?',
    answer: 'Spring replacement $150–$500, opener repair $150–$400, cable replacement $150–$400, sensor repair $75–$200. New premium door installation runs $1,500–$3,000+. Upfront written estimates before any work begins.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'heron-bay')

export default function HeronBayPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'heron-bay')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Parkland, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Heron Bay, Parkland FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Premium garage door service for Heron Bay&apos;s luxury gated community in Parkland. We know the
              strict HOA requirements, handle high-end door brands, and bring the level of workmanship Heron Bay
              homeowners expect. Same-day service, licensed and insured. Serving Coral Springs Since 2010.
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
            <Image src={neighborhood.image} alt="Garage door repair in Heron Bay Parkland FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Heron Bay, Parkland?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs serves Heron Bay in Parkland with same-day service for springs, openers, cables, sensors, and new installations. We are HOA-familiar, handle premium door brands, and provide complete documentation for Heron Bay&apos;s architectural review process. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Heron Bay</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heron Bay is a luxury gated community in Parkland, FL — one of South Florida&apos;s most prestigious
            residential communities and consistently ranked among the best places to live in Broward County.
            Heron Bay&apos;s master-planned community spans multiple villages, each with its own character, but
            all sharing the same commitment to immaculate presentation and strict HOA oversight. For garage
            door service, that means working with a provider who understands the community&apos;s standards —
            not just as a technicality, but as a baseline expectation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our business is located nearby in Parkland, which means Heron Bay is home territory for us. We
            understand the Heron Bay HOA&apos;s architectural review process, the types of premium door
            installations common in the community, and the standard of workmanship the community expects.
            Heron Bay homes frequently feature contemporary-flush and carriage-house style doors from premium
            brands — many with glass sections, decorative hardware, and custom color finishes approved by the
            architectural review committee.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When these doors need repair — whether it&apos;s a broken torsion spring on a heavy premium door,
            a cable that&apos;s frayed from South Florida&apos;s humidity, or an opener that needs upgrading to
            a smart system with battery backup — we bring the right parts and expertise for the job. For new
            door installations, we help Heron Bay homeowners identify options most likely to receive quick HOA
            approval, and we provide the complete documentation package the architectural review committee
            requires before any door is ordered.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Heron Bay</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.url}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Heron Bay &amp; Parkland</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">We Also Serve These Coral Springs Communities:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherNeighborhoods.map((n) => (
              <Link key={n.slug} href={n.url}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <p className="font-semibold text-navy text-sm">{n.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Need Garage Door Service in Heron Bay?" subheading="Premium service for Heron Bay homes. HOA-familiar technicians. Same-day appointments." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Heron Bay's Local Garage Door Team" subheading="Based in Parkland. Serving Coral Springs Since 2010. Licensed, insured, HOA-compliant." variant="navy" />
    </>
  )
}
