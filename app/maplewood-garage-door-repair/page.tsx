import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Maplewood Coral Springs FL | (754) 318-5005',
  description:
    'Garage door repair in Maplewood, Coral Springs FL. Springs, openers, cables & more. Same-day service for family homes of all ages. Licensed & insured. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/maplewood-garage-door-repair' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Maplewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — same-day service is available in Maplewood 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment. Our technicians are local to Coral Springs and can usually reach Maplewood the same day you call.' },
    },
    {
      '@type': 'Question',
      name: 'What garage door problems are most common in Maplewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Maplewood has a mix of home ages — some built in the 1980s, many in the 1990s and 2000s. The most common calls we get from Maplewood are spring replacement on older doors, opener upgrades from older chain-drive units, and cable replacement on homes where the original galvanized cable has corroded from Broward County\'s coastal humidity.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work in Maplewood with homes that have older garage doors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is a significant part of our work in Maplewood. For older doors, we assess whether repair or full replacement is the better value. We can replace individual springs and cables to extend the life of a good door, or help you select a new hurricane-rated door if the original has reached the end of its service life.' },
    },
    {
      '@type': 'Question',
      name: 'Does Maplewood have an HOA that requires approval for new garage doors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Maplewood\'s community association maintains standards for exterior appearance including garage doors. If you are replacing a door, we recommend checking with your community association before ordering. We can provide product spec sheets and documentation to support your submission.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated garage doors in Maplewood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Florida Building Code requires wind-load rated garage doors throughout Broward County, including Maplewood. Every door we install meets FL product approval standards. We also offer fully impact-rated options with Miami-Dade NOA certification for maximum hurricane protection.' },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Maplewood?',
    answer: 'Yes — same-day service is available in Maplewood 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.',
  },
  {
    question: 'What garage door problems are most common in Maplewood?',
    answer: "Maplewood has a mix of home ages from the 1980s through the 2000s. The most common calls are spring replacement on older doors, opener upgrades from chain-drive units, and cable replacement on homes where original hardware has corroded from Broward County's coastal humidity.",
  },
  {
    question: 'Do you work with homes that have older garage doors in Maplewood?',
    answer: "Yes — this is a significant part of our work in Maplewood. We assess whether repair or replacement is the better value. We can replace individual components to extend a good door's life, or help you select a new hurricane-rated door if the original has reached end of service life.",
  },
  {
    question: 'Does Maplewood have HOA requirements for garage doors?',
    answer: "Maplewood's community association maintains standards for exterior appearance including garage doors. If you're replacing a door, check with your community association first. We provide product spec sheets and documentation to support your submission.",
  },
  {
    question: 'Do you install hurricane-rated garage doors in Maplewood?',
    answer: 'Yes. Florida Building Code requires wind-load rated garage doors throughout Broward County. Every door we install meets FL product approval standards. We also offer impact-rated options with Miami-Dade NOA certification for maximum hurricane protection.',
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'maplewood')

export default function MaplewoodPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'maplewood')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Coral Springs, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Maplewood, Coral Springs FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Trusted garage door repair for Maplewood homeowners. From spring replacement on older doors to
              opener upgrades and new hurricane-rated installations — same-day service, honest pricing, licensed
              and insured. Serving Coral Springs Since 2010.
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
            <Image src={neighborhood.image} alt="Garage door repair in Maplewood Coral Springs FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Maplewood?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs serves Maplewood with same-day spring, opener, cable, and off-track repairs. We work on homes of all ages — from original hardware that needs replacement to full new door installations. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Maplewood</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Maplewood is one of Coral Springs&apos; well-established family neighborhoods, featuring a mix of
            home ages that spans from homes built in the 1980s through the 1990s and into the 2000s. This range
            of construction eras means a corresponding range of garage door hardware — some homes still have their
            original door, springs, and opener from decades ago, while others have been updated over the years.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maplewood&apos;s family-oriented community has active homeowners who take pride in their properties,
            and a well-functioning garage door is part of that. When things go wrong — a broken spring, a cable
            that snaps, a door that won&apos;t close, or an opener that&apos;s been acting up — our technicians can
            reach Maplewood with same-day service. We carry the most common spring sizes and opener models on our
            trucks, which means most repairs are completed on the first visit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            South Florida&apos;s climate plays a real role in how garage door hardware holds up over time. Broward
            County&apos;s humidity — combined with the salt air that reaches inland from the coast — accelerates
            corrosion on steel springs, cables, and rollers. Homes in Maplewood that still have original hardware
            from the 1990s are frequently past the designed service life of that equipment. We use galvanized
            springs and cables as our standard installation — not an optional upgrade — because South Florida&apos;s
            conditions demand it. When a spring fails in Coral Springs, it&apos;s almost always corrosion-related
            fatigue, not just normal wear.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Maplewood</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.url}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Maplewood &amp; Coral Springs</p>
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

      <CTASection heading="Need Garage Door Service in Maplewood?" subheading="Same-day appointments available. Honest repair vs. replace guidance. Call now." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Maplewood's Local Garage Door Team" subheading="Serving Coral Springs Since 2010. Licensed, insured, same-day service." variant="navy" />
    </>
  )
}
