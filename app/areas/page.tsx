import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Garage Door Repair Areas in Coral Springs FL | All Neighborhoods | (754) 318-5005',
  description:
    'Garage door repair service across all Coral Springs neighborhoods: Wyndham Lakes, Ridgewood, Eagle Trace, Turtle Run, Maplewood & Heron Bay in Parkland. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/areas' },
}

export default function AreasPage() {
  return (
    <>
      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Garage Door Repair Across All of Coral Springs
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            We provide fast, licensed garage door repair and installation throughout every Coral Springs neighborhood
            — from Wyndham Lakes and Eagle Trace to Turtle Run and Heron Bay in Parkland. Serving Coral Springs Since 2010.
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
            What areas in Coral Springs do you service?
          </p>
          <p className="text-gray-700 leading-relaxed">
            We service all Coral Springs neighborhoods including Wyndham Lakes, Ridgewood, Eagle Trace, Turtle Run,
            Maplewood, and Heron Bay in Parkland, plus surrounding northwest Broward County communities. Same-day service
            available 7 days a week — call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">Neighborhoods We Serve</h2>
          <p className="text-gray-500 text-center mb-10">
            Local technicians who know Coral Springs — not a dispatch center routing outside crews
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.slug}
                href={n.url}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-44 bg-gray-100">
                  <Image
                    src={n.image}
                    alt={`Garage door repair in ${n.name}, Coral Springs FL`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-orange-500 transition-colors">
                    {n.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">Coral Springs, FL</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{n.description}</p>
                  <p className="text-orange-500 font-semibold text-sm mt-3">View area details →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Serving All of Coral Springs and Northwest Broward County</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coral Springs is one of Broward County&apos;s most desirable cities — known for its well-maintained
            neighborhoods, strong HOA communities, and a mix of established homes and upscale newer construction.
            We&apos;ve been serving Coral Springs since 2010, long enough to know the specific HOA requirements in
            Eagle Trace and Turtle Run, the mix of home ages in Wyndham Lakes and Maplewood, the mature street
            character of Ridgewood, and the premium standards of Heron Bay in Parkland.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unlike national franchise services that dispatch technicians from distant counties, our team is based
            in northwest Broward County. That means faster response times, familiarity with local building codes
            and HOA requirements, and technicians who understand South Florida&apos;s specific challenges — extreme
            humidity that corrodes bare steel hardware, hurricane wind-load requirements that apply to every door
            we install in Broward County, and Florida lizard interference with safety sensors that affects garages
            throughout the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also serve communities adjacent to Coral Springs including Parkland, Coconut Creek, Margate, and
            Tamarac. If you&apos;re not sure whether you&apos;re in our service area, call us — chances are we can help.
          </p>
        </div>
      </section>

      <CTASection
        heading="Local Service for Every Coral Springs Neighborhood"
        subheading="Same-day availability. Licensed and insured. Upfront pricing on every job. Serving Coral Springs Since 2010."
        variant="navy"
      />
    </>
  )
}
