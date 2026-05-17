import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Ridgewood Coral Springs FL | (754) 318-5005',
  description:
    'Garage door repair in Ridgewood, Coral Springs FL. Springs, openers, cables & more. Same-day service for established homes with older doors. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/ridgewood-garage-door-repair' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Ridgewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — same-day service is available in Ridgewood 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.' },
    },
    {
      '@type': 'Question',
      name: 'What garage door issues are most common in Ridgewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ridgewood is a mature Coral Springs neighborhood with many original garage doors still in service. We frequently handle spring replacement, cable replacement, and full door upgrades for homes where the original hardware has reached the end of its service life. Many Ridgewood homeowners are also upgrading from basic steel doors to carriage-house or contemporary styles.' },
    },
    {
      '@type': 'Question',
      name: 'Should I repair or replace my older garage door in Ridgewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'For doors 15+ years old with multiple failing components — springs, cables, rollers — replacement often makes more financial sense than repeated repairs. We provide an honest assessment and can show you current door options at various price points.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated doors in Ridgewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Florida Building Code requires wind-load rated doors in all of Broward County. We install FL-approved doors that meet and exceed code requirements, including fully impact-rated options for maximum storm protection.' },
    },
    {
      '@type': 'Question',
      name: 'Can you upgrade an old garage door opener in Ridgewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many Ridgewood homes still have older chain-drive openers without battery backup or smart home connectivity. We install and program modern LiftMaster, Chamberlain, and Genie openers with WiFi, battery backup (essential for Florida storm seasons), and rolling code security.' },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Ridgewood?',
    answer: 'Yes — same-day service is available in Ridgewood 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.',
  },
  {
    question: 'What garage door issues are most common in Ridgewood?',
    answer: "Ridgewood is a mature neighborhood with many original garage doors still in service. We frequently handle spring replacement, cable replacement, and full door upgrades for homes where original hardware has reached the end of its service life. Many Ridgewood homeowners are also upgrading to carriage-house or contemporary door styles.",
  },
  {
    question: 'Should I repair or replace my older garage door in Ridgewood?',
    answer: 'For doors 15+ years old with multiple failing components — springs, cables, rollers — replacement often makes more financial sense than repeated repairs. We provide an honest assessment and can show you current door options at various price points.',
  },
  {
    question: 'Do you install hurricane-rated doors in Ridgewood?',
    answer: 'Yes. Florida Building Code requires wind-load rated doors in all of Broward County. We install FL-approved doors that meet and exceed code requirements, including fully impact-rated options.',
  },
  {
    question: 'Can you upgrade an old garage door opener in Ridgewood?',
    answer: "Yes. Many Ridgewood homes still have older chain-drive openers without battery backup or smart connectivity. We install modern LiftMaster, Chamberlain, and Genie openers with WiFi, battery backup (essential for Florida storms), and rolling code security.",
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'ridgewood')

export default function RidgewoodPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'ridgewood')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Coral Springs, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Ridgewood, Coral Springs FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Expert garage door repair and replacement for Ridgewood homeowners. Mature neighborhood,
              original doors ready for upgrade — we handle it all with same-day service and honest pricing.
              Serving Coral Springs Since 2010.
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
            <Image src={neighborhood.image} alt="Garage door repair in Ridgewood Coral Springs FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Ridgewood?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs serves Ridgewood with same-day spring, opener, cable, and off-track repairs. We also handle full door upgrades and new installations for Ridgewood&apos;s many homes with original garage doors. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Ridgewood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ridgewood is one of Coral Springs&apos; more mature residential areas, characterized by larger lots,
            established trees, and homes that have been in the community for decades. This maturity is an asset — and
            it also means that a significant number of homes still have original garage doors, openers, and hardware
            that are now well past their designed service life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In South Florida&apos;s humid climate, garage door springs, cables, and rollers degrade faster than in
            drier regions. Ridgewood homeowners frequently contact us for spring replacements on doors that have seen
            15–20 years of Broward County summers. We also see a growing number of full door replacements as
            homeowners take the opportunity to upgrade to hurricane-rated, energy-efficient doors with modern styling —
            carriage-house and contemporary flush designs are particularly popular in Ridgewood&apos;s larger, more
            traditional home stock.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Ridgewood</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.url}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Ridgewood &amp; Coral Springs</p>
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

      <CTASection heading="Need Garage Door Service in Ridgewood?" subheading="Same-day appointments available. Honest repair vs. replace guidance." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Ridgewood's Local Garage Door Team" subheading="Serving Coral Springs Since 2010. Licensed, insured, same-day service." variant="navy" />
    </>
  )
}
