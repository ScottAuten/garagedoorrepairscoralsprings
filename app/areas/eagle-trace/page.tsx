import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Eagle Trace Coral Springs FL | (754) 318-5005',
  description:
    'Garage door repair in Eagle Trace, Coral Springs FL. Premium service for upscale golf community homes. HOA-compliant, same-day, licensed & insured. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/areas/eagle-trace' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Eagle Trace?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — same-day service is available in Eagle Trace 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.' },
    },
    {
      '@type': 'Question',
      name: 'What garage door brands do Eagle Trace homeowners typically have?',
      acceptedAnswer: { '@type': 'Answer', text: 'Eagle Trace homes often feature premium garage door brands including Clopay, CHI, Wayne Dalton, and Amarr — many with carriage-house styling and decorative hardware consistent with the community\'s upscale aesthetic. We service all major brands and can source premium replacement hardware to match the original door style.' },
    },
    {
      '@type': 'Question',
      name: 'Are you familiar with Eagle Trace HOA requirements for garage doors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Eagle Trace has a strict HOA with specific architectural standards for garage doors, including approved colors, panel profiles, and hardware. We provide full documentation packages for HOA architectural review submissions and are familiar with the approval process timeline in Eagle Trace.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated doors in Eagle Trace?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Florida Building Code requires wind-load rated doors in all of Broward County. For Eagle Trace, we install premium hurricane-rated doors that meet both Broward County wind load standards and the community\'s aesthetic requirements — including Miami-Dade NOA certified options.' },
    },
    {
      '@type': 'Question',
      name: 'What is the typical cost for garage door service in Eagle Trace?',
      acceptedAnswer: { '@type': 'Answer', text: 'Service costs in Eagle Trace are the same as throughout Coral Springs: spring replacement $150–$500, opener repair $150–$400, cable replacement $150–$400, sensor repair $75–$200. New door installation for premium carriage-house or contemporary doors runs $1,500–$3,000+. We provide upfront written estimates before any work begins.' },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Eagle Trace?',
    answer: 'Yes — same-day service is available in Eagle Trace 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.',
  },
  {
    question: 'What garage door brands do Eagle Trace homeowners typically have?',
    answer: "Eagle Trace homes often feature premium brands including Clopay, CHI, Wayne Dalton, and Amarr — many with carriage-house styling consistent with the community's upscale aesthetic. We service all major brands and can source premium replacement hardware to match the original door style.",
  },
  {
    question: 'Are you familiar with Eagle Trace HOA requirements for garage doors?',
    answer: 'Yes. Eagle Trace has strict architectural standards for garage doors, including approved colors, panel profiles, and hardware. We provide full documentation packages for HOA architectural review submissions.',
  },
  {
    question: 'Do you install hurricane-rated doors in Eagle Trace?',
    answer: 'Yes. We install premium hurricane-rated doors that meet both Broward County wind load standards and Eagle Trace aesthetic requirements — including Miami-Dade NOA certified options.',
  },
  {
    question: 'What is the typical cost for garage door service in Eagle Trace?',
    answer: 'Service costs are the same as throughout Coral Springs: spring replacement $150–$500, opener repair $150–$400, cable replacement $150–$400, sensor repair $75–$200. New premium door installation runs $1,500–$3,000+. Upfront written estimates before any work begins.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'eagle-trace')

export default function EagleTracePage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'eagle-trace')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Coral Springs, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Eagle Trace, Coral Springs FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Premium garage door service for Eagle Trace&apos;s upscale golf community homes. We understand the
              community&apos;s strict HOA standards, premium door hardware, and high expectations — same-day service,
              licensed and insured. Serving Coral Springs Since 2010.
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
            <Image src={neighborhood.image} alt="Garage door repair in Eagle Trace Coral Springs FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Eagle Trace?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs serves Eagle Trace with same-day service for springs, openers, cables, sensors, and new installations. We know the HOA requirements, handle premium door brands, and provide documentation for architectural review. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Eagle Trace</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eagle Trace is one of Coral Springs&apos; premier communities — an upscale golf community with premium
            homes, immaculate landscaping, and a strict HOA that sets high standards for every aspect of property
            appearance, including garage doors. Homeowners in Eagle Trace are accustomed to quality work and expect
            service providers who understand the community&apos;s expectations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eagle Trace&apos;s premium homes frequently feature carriage-house garage doors with decorative hardware,
            insulated panels, and custom colors specifically approved by the architectural review committee. When these
            doors need repair — spring replacement, cable service, or opener upgrade — the replacement hardware and
            workmanship must meet the same standard as the original installation. Our technicians are experienced with
            premium door brands and can source the right components to maintain the appearance your HOA requires.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We also handle new door installations for Eagle Trace homeowners looking to upgrade. We&apos;ve worked with
            Eagle Trace&apos;s HOA process and can help you identify door options most likely to receive quick approval —
            saving you the time and frustration of submitting non-compliant products. All installations meet Florida
            Building Code wind-load requirements, with Miami-Dade NOA certified impact-rated options available.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Eagle Trace</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Eagle Trace &amp; Coral Springs</p>
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

      <CTASection heading="Need Garage Door Service in Eagle Trace?" subheading="Premium service for Eagle Trace homes. HOA-familiar. Same-day appointments." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Eagle Trace's Local Garage Door Team" subheading="Serving Coral Springs Since 2010. Licensed, insured, HOA-compliant work." variant="navy" />
    </>
  )
}
