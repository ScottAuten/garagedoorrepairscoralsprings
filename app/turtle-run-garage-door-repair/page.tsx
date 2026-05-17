import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Turtle Run Coral Springs FL | (754) 318-5005',
  description:
    'Garage door repair in Turtle Run, Coral Springs FL. Gated community service — springs, openers, cables & more. Same-day, HOA-compliant, licensed. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/turtle-run-garage-door-repair' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Turtle Run?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — same-day service is available in Turtle Run 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment. Our technicians are familiar with the community and can arrive promptly.' },
    },
    {
      '@type': 'Question',
      name: 'What garage door issues are most common in Turtle Run?',
      acceptedAnswer: { '@type': 'Answer', text: 'Turtle Run is an upscale gated community with high-quality homes and active HOA oversight. We most frequently handle spring replacement, opener upgrades, and new door installations for homeowners upgrading to hurricane-rated doors that meet both Broward County code and HOA aesthetic requirements.' },
    },
    {
      '@type': 'Question',
      name: 'Are you familiar with Turtle Run HOA requirements?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Turtle Run HOA maintains strict standards for garage door appearance. We provide complete documentation packages for architectural review submissions and have experience navigating the approval process for replacement doors in the community.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install hurricane-rated doors in Turtle Run?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Florida Building Code requires wind-load rated garage doors in all of Broward County. For Turtle Run, we install premium hurricane-rated doors that satisfy both the building code and the community\'s aesthetic standards, including Miami-Dade NOA certified options.' },
    },
    {
      '@type': 'Question',
      name: 'Can sensor issues from Florida lizards occur in Turtle Run?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — gecko and anole interference with garage door safety sensors is common throughout Coral Springs, including Turtle Run. Florida lizards are attracted to warm sensor housings and LED lights, perching directly on the sensor eye and blocking the infrared beam. We clean, realign, and reposition sensors to reduce recurring issues.' },
    },
  ],
}

const faqs = [
  {
    question: 'Do you offer same-day garage door repair in Turtle Run?',
    answer: 'Yes — same-day service is available in Turtle Run 7 days a week, 7 AM–8 PM. Call (754) 318-5005 for an appointment.',
  },
  {
    question: 'What garage door issues are most common in Turtle Run?',
    answer: "Turtle Run is an upscale gated community with active HOA oversight. We most frequently handle spring replacement, opener upgrades, and new door installations for homeowners upgrading to hurricane-rated doors that meet both Broward County code and HOA aesthetic requirements.",
  },
  {
    question: 'Are you familiar with Turtle Run HOA requirements?',
    answer: 'Yes. The Turtle Run HOA maintains strict architectural standards. We provide complete documentation packages for HOA architectural review submissions and have experience navigating the approval process for replacement doors in the community.',
  },
  {
    question: 'Do you install hurricane-rated doors in Turtle Run?',
    answer: 'Yes. We install premium hurricane-rated doors that satisfy both Broward County building code and Turtle Run aesthetic standards, including Miami-Dade NOA certified options.',
  },
  {
    question: 'Can sensor issues from Florida lizards occur in Turtle Run?',
    answer: "Yes — gecko and anole interference with garage door safety sensors is common throughout Coral Springs, including Turtle Run. Florida lizards perch directly on sensor eyes, blocking the infrared beam and causing the door to reverse. We clean, realign, and reposition sensors to address recurring issues.",
  },
]

const otherNeighborhoods = NEIGHBORHOODS.filter((n) => n.slug !== 'turtle-run')

export default function TurtleRunPage() {
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === 'turtle-run')!

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">Coral Springs, FL</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Garage Door Repair in Turtle Run, Coral Springs FL
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Professional garage door service for Turtle Run&apos;s gated upscale community. We know the HOA
              requirements, handle premium hardware, and provide same-day service 7 days a week. Licensed and
              insured. Serving Coral Springs Since 2010.
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
            <Image src={neighborhood.image} alt="Garage door repair in Turtle Run Coral Springs FL" width={480} height={320} className="rounded-xl shadow-lg w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">Who repairs garage doors in Turtle Run?</p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs serves Turtle Run with same-day spring, opener, cable, and off-track repairs. We are familiar with the community&apos;s HOA process and provide documentation for architectural review on new door installations. Call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Garage Door Service in Turtle Run</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Turtle Run is a gated, upscale single-family community in Coral Springs, known for its manicured streets,
            well-maintained homes, and strong HOA that sets and enforces high community standards. For garage door
            service, this means working with a provider who understands not just the technical requirements of the
            repair — but also the aesthetic and approval requirements of the community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our technicians are experienced with Turtle Run&apos;s premium home stock and HOA oversight. Whether you
            need a spring replaced, a cable repaired, an opener upgraded, or a full new door installation, we bring
            the right materials, the right documentation, and the professional standard that Turtle Run homeowners
            expect. We use galvanized springs and cables as standard to address South Florida&apos;s humidity, and
            we can provide same-day service 7 days a week so a garage door problem doesn&apos;t disrupt your schedule.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Services Available in Turtle Run</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.url}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-400 hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-navy text-sm">{s.name}</p>
                  <p className="text-gray-500 text-xs">Turtle Run &amp; Coral Springs</p>
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

      <CTASection heading="Need Garage Door Service in Turtle Run?" subheading="Same-day appointments available. HOA-familiar technicians. Call now." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="Turtle Run's Local Garage Door Team" subheading="Serving Coral Springs Since 2010. Licensed, insured, same-day service." variant="navy" />
    </>
  )
}
