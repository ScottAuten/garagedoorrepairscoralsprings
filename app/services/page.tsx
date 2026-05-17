import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { SITE, SERVICES } from '@/lib/constants'

const serviceUrlMap = Object.fromEntries(SERVICES.map((s) => [s.slug, s.url]))

export const metadata: Metadata = {
  title: 'Garage Door Services Coral Springs FL | All Repairs & Installation | (754) 318-5005',
  description:
    'Complete garage door services in Coral Springs, FL. Spring replacement, opener repair, cable replacement, sensor repair, new installation & more. Same-day, licensed & insured. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/services' },
}

const serviceDetails = [
  {
    slug: 'spring-replacement',
    name: 'Spring Replacement',
    icon: '🔧',
    price: '$150–$500',
    description:
      'Torsion and extension spring replacement for all residential garage doors. Galvanized springs stocked in every standard size for same-day repairs. South Florida humidity demands galvanized — we never install bare steel springs.',
    highlights: ['Torsion & extension springs', 'High-cycle upgrades available', 'Both springs replaced together'],
  },
  {
    slug: 'opener-repair',
    name: 'Opener Repair',
    icon: '📡',
    price: '$150–$400',
    description:
      'Diagnosis and repair of all major opener brands including LiftMaster, Chamberlain, Genie, and Craftsman. Logic board, motor, and drive repair or full replacement. Battery backup installs available for hurricane season.',
    highlights: ['All major brands serviced', 'Remote & keypad programming', 'WiFi smart opener upgrades'],
  },
  {
    slug: 'off-track-repair',
    name: 'Off-Track Repair',
    icon: '🛤️',
    price: '$200–$450',
    description:
      'Same-day realignment when your door has jumped its tracks. We straighten bent tracks, replace damaged rollers, and test for full safe operation before leaving. Humidity-accelerated corrosion is a common cause in Coral Springs.',
    highlights: ['Same-day emergency service', 'Track straightening & replacement', 'Roller replacement included'],
  },
  {
    slug: 'cable-replacement',
    name: 'Cable Replacement',
    icon: '🔗',
    price: '$150–$400',
    description:
      'Lift cable replacement for frayed, snapped, or corroded cables. We install galvanized steel cables as standard — critical in Broward County where bare steel corrodes rapidly from coastal humidity and salt air.',
    highlights: ['Galvanized steel cables', 'Cable drum inspection', 'Both cables replaced together'],
  },
  {
    slug: 'sensor-repair',
    name: 'Sensor Repair',
    icon: '👁️',
    price: '$75–$200',
    description:
      'Safety sensor alignment, cleaning, and replacement. In Coral Springs, the most common sensor issue is Florida lizard interference — geckos and anoles perch on sensor eyes and block the infrared beam.',
    highlights: ['Same-day diagnosis', 'Lizard interference addressed', 'All opener brands'],
  },
  {
    slug: 'roller-replacement',
    name: 'Roller Replacement',
    icon: '⚙️',
    price: '$150–$350',
    description:
      'Worn or broken rollers cause noisy, rough operation and stress on tracks and springs. Coral Springs garage temps regularly exceed 100°F — heat-rated nylon rollers handle thermal expansion far better than steel.',
    highlights: ['Nylon & steel rollers', 'Quieter operation', 'Extends door system life'],
  },
  {
    slug: 'emergency-repair',
    name: 'Emergency Repair',
    icon: '🚨',
    price: 'Call for pricing',
    description:
      'When your door won\'t open and your car is stuck — or won\'t close and your home is exposed — call us. Same-day emergency response 7 days a week across all of Coral Springs, Parkland, and northwest Broward County.',
    highlights: ['7-day availability', '7 AM – 8 PM response', 'No extra emergency fee'],
  },
  {
    slug: 'new-installation',
    name: 'New Door Installation',
    icon: '🏠',
    price: '$800–$3,000+',
    description:
      'Full garage door replacement and new installation. We help you select the right door for your home\'s style, HOA requirements, and hurricane rating — then handle everything from removal to final tuning.',
    highlights: ['Hurricane-rated options', 'HOA documentation provided', 'Miami-Dade NOA certified doors'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Garage Door Services in Coral Springs, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            From a snapped spring to a full door replacement, our licensed technicians handle every garage door
            service need — same day, upfront pricing, no surprises. Serving Coral Springs Since 2010.
          </p>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Call {SITE.phone}
          </a>
        </div>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-lg font-semibold mb-1">
            What garage door services are available in Coral Springs?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Garage Door Repair of Coral Springs offers spring replacement ($150–$500), opener repair ($150–$400),
            off-track repair ($200–$450), cable replacement ($150–$400), sensor repair ($75–$200), roller replacement,
            emergency service, and new door installation ($800–$3,000+). Same-day service is available 7 days a week — call{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">All Services</h2>
          <p className="text-gray-500 text-center mb-10">
            Every service performed by licensed, insured Coral Springs technicians — familiar with South Florida&apos;s climate challenges
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.map((s) => (
              <div key={s.slug} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-0.5">{s.name}</h3>
                      <p className="text-orange-500 font-semibold text-sm">{s.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                  <ul className="space-y-1 mb-5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={serviceUrlMap[s.slug]}
                    className="inline-block bg-navy hover:bg-blue-900 text-white font-semibold py-2 px-5 rounded-lg text-sm transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Why Coral Springs Homeowners Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📅', title: 'Same-Day Service', body: 'Most calls scheduled the same day you call, 7 days a week, 7 AM–8 PM.' },
              { icon: '💰', title: 'Upfront Pricing', body: 'Written quote before any work begins. No hidden fees, no surprises.' },
              { icon: '🏅', title: 'Licensed & Insured', body: 'Fully licensed for all Broward County garage door work, including Parkland.' },
              { icon: '🌀', title: 'South Florida Specialists', body: 'Galvanized hardware standard. Hurricane-rated doors. HOA documentation ready.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not Sure What You Need? We'll Diagnose It Free."
        subheading="Call us and describe what's happening — we'll tell you exactly what the fix is and what it costs."
        variant="orange"
      />
    </>
  )
}
