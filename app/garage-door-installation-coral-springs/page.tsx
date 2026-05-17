import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import { SITE, NEIGHBORHOODS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'New Garage Door Installation Coral Springs FL | (754) 318-5005 Free Estimate',
  description:
    'New garage door installation in Coral Springs, FL. Hurricane-rated, HOA-compliant options. All major brands. Free estimate, same-week installation. Call (754) 318-5005.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/garage-door-installation-coral-springs' },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Garage Door Installation',
  provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneRaw },
  areaServed: { '@type': 'City', name: 'Coral Springs', containedIn: 'Broward County, FL' },
  description: 'Professional new garage door installation in Coral Springs, FL. Hurricane-rated and HOA-compliant options.',
  offers: { '@type': 'Offer', priceRange: '$800 - $3000+', priceCurrency: 'USD' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does new garage door installation cost in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New garage door installation in Coral Springs typically costs $800–$3,000+ depending on door size, material, style, and whether you need a new opener. A standard single-car steel door installed is $800–$1,500. A premium double-car carriage-house door with opener runs $2,000–$3,000+.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a hurricane-rated door in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Florida Building Code requires wind-load rated garage doors in all of Broward County. Any door we install meets FL product approval standards. We also offer fully impact-rated doors with Miami-Dade NOA certification for maximum storm protection beyond the minimum code requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get HOA approval for a new garage door in Coral Springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Coral Springs HOAs — including Eagle Trace, Turtle Run, Wyndham Lakes, and Heron Bay in Parkland — require written pre-approval before replacing a garage door. HOAs specify allowable colors, panel styles, and materials. We provide product spec sheets and manufacturer brochures to assist with your HOA submission before we order the door.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard installation of a pre-ordered door takes 4–6 hours. If we need to order your specific door, lead time is 1–3 weeks depending on the model and supplier. Doors we stock locally can often be installed within days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install the opener as well, or just the door?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We handle complete installation — door, springs, cables, tracks, hardware, and opener if needed. We also carry smart openers with WiFi and battery backup, which are particularly useful in South Florida during hurricane season power outages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Miami-Dade NOA and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami-Dade Notice of Acceptance (NOA) is a certification that a product has been tested to withstand the extreme wind loads and impact requirements of South Florida\'s High Velocity Hurricane Zone. Many Coral Springs communities and insurance carriers specifically require NOA-certified doors for new installations.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I replace my garage door instead of repairing it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consider replacement when: the door is 15+ years old with multiple failing components, repair costs exceed 50% of a new door\'s price, the door lacks hurricane-rated certification required by your HOA or insurer, panels are significantly dented or damaged, or you want to upgrade to a style that better suits your home\'s curb appeal.',
      },
    },
  ],
}

const faqs = [
  {
    question: 'How much does new garage door installation cost in Coral Springs?',
    answer:
      'New garage door installation in Coral Springs typically costs $800–$3,000+ depending on door size, material, style, and opener. A standard single-car steel door installed is $800–$1,500. A premium double-car carriage-house door with opener runs $2,000–$3,000+.',
  },
  {
    question: 'Do I need a hurricane-rated door in Coral Springs?',
    answer:
      'Yes. Florida Building Code requires wind-load rated garage doors in all of Broward County. Any door we install meets FL product approval standards. We also offer fully impact-rated doors with Miami-Dade NOA certification for maximum storm protection.',
  },
  {
    question: 'How do I get HOA approval for a new garage door?',
    answer:
      'Most Coral Springs HOAs — including Eagle Trace, Turtle Run, Wyndham Lakes, and Heron Bay in Parkland — require written pre-approval. We provide product spec sheets and manufacturer brochures to assist with your HOA submission before we order the door.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Standard installation of a pre-ordered door takes 4–6 hours. If we need to order your specific door, lead time is 1–3 weeks depending on the model. Doors we stock locally can often be installed within days.',
  },
  {
    question: 'Do you install the opener as well, or just the door?',
    answer:
      'We handle complete installation — door, springs, cables, tracks, hardware, and opener if needed. We carry smart openers with WiFi and battery backup, particularly useful in South Florida during hurricane season power outages.',
  },
  {
    question: 'What is Miami-Dade NOA and why does it matter?',
    answer:
      'Miami-Dade Notice of Acceptance (NOA) certifies that a product has been tested to withstand South Florida\'s High Velocity Hurricane Zone wind loads. Many Coral Springs HOAs and insurance carriers specifically require NOA-certified doors for new installations.',
  },
  {
    question: 'When should I replace my garage door instead of repairing it?',
    answer:
      'Consider replacement when: the door is 15+ years old with multiple failing components, repair costs exceed 50% of a new door\'s price, the door lacks hurricane-rated certification, panels are significantly dented, or you want to upgrade for better curb appeal and HOA compliance.',
  },
]

export default function NewInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-navy text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">New Installation</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            New Garage Door Installation in Coral Springs, FL
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Ready to upgrade? We help Coral Springs homeowners select the right door for their home, HOA, and
            budget — then handle the full installation from removing the old door to final tuning. Hurricane-rated,
            Miami-Dade NOA certified options available. Serving Coral Springs Since 2010.
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
          <p className="text-gray-800 text-lg font-semibold mb-1">How much does new garage door installation cost in Coral Springs?</p>
          <p className="text-gray-700 leading-relaxed">
            New installation costs <strong>$800–$3,000+</strong> depending on door size, material, and opener. Single-car steel doors start around $800 installed. Premium double-car carriage-house doors with smart opener run $2,000–$3,000+. Free estimate — call <a href={`tel:${SITE.phoneRaw}`} className="text-orange-600 font-semibold hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Door Styles for Coral Springs Homes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                name: 'Raised Panel Steel',
                price: '$800 – $1,800',
                desc: 'The most popular choice in Coral Springs. Durable, low-maintenance, and available in dozens of colors. Works with virtually all HOA guidelines including Wyndham Lakes and Maplewood.',
              },
              {
                name: 'Carriage-House Style',
                price: '$1,200 – $2,800',
                desc: 'The premium look for upscale communities like Eagle Trace and Turtle Run. Overlay or full carriage design in steel or composite with decorative hardware.',
              },
              {
                name: 'Contemporary Flush',
                price: '$1,500 – $3,000+',
                desc: 'Clean modern lines preferred by Heron Bay in Parkland and newer construction throughout Coral Springs. Aluminum frames with glass sections or solid steel panels.',
              },
            ].map((style) => (
              <div key={style.name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-navy mb-1">{style.name}</h3>
                <p className="text-orange-500 font-semibold text-sm mb-2">{style.price} installed</p>
                <p className="text-gray-600 text-sm leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-4">Hurricane-Rated Doors — Required in Broward County</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every door we install in Coral Springs meets Florida Building Code wind-load requirements. But code minimum
            is not the same as maximum protection. For homeowners in flood zones or those who want full storm confidence,
            we install FL-approved impact-rated doors with reinforced panels, heavier gauge steel, and wind-rated hardware
            throughout.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            These doors can withstand the wind loads of a Category 3 hurricane — a meaningful upgrade in Broward County,
            which has experienced direct hurricane impacts. Many homeowners in Eagle Trace, Turtle Run, and Heron Bay in
            Parkland have upgraded to impact-rated doors in recent years, and some insurance carriers offer premium
            discounts for wind-rated improvements certified under Miami-Dade NOA.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">HOA Pre-Approval: What Coral Springs Homeowners Need to Know</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coral Springs has some of the most active HOA communities in Broward County. Eagle Trace, Turtle Run, Heron Bay
            (in Parkland), and Wyndham Lakes all maintain strict architectural review processes. Submitting the wrong door
            for HOA approval — wrong color, wrong panel style, wrong material — means starting over after potentially weeks
            of waiting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We help homeowners navigate this process. Before ordering your door, we provide manufacturer spec sheets,
            color chip documentation, and technical data sheets in the format your HOA architectural review committee
            typically requires. We have experience with the most common HOA requirements throughout Coral Springs and can
            flag potential issues before you submit.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">Repair vs. Replace: When to Install New</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every problem requires a new door. But certain situations make replacement the better value:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Door is 15+ years old with multiple components failing — springs, cables, rollers all near end of life simultaneously</li>
            <li>Panels are dented, warped, or visually damaged and affecting HOA compliance</li>
            <li>Door lacks hurricane-rated certification required by your HOA or insurance carrier</li>
            <li>Repair costs exceed 50–60% of a new door&apos;s installed price</li>
            <li>You want to upgrade style for curb appeal or home resale value</li>
          </ul>

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

      <CTASection heading="Ready to Upgrade? Get a Free Estimate." subheading="New garage door installation across Coral Springs. Hurricane-rated and HOA-compliant options." variant="orange" />
      <FAQSection faqs={faqs} />
      <CTASection heading="All Styles. All Brands. Full Installation." subheading="Licensed and insured. HOA-compliant options. Same-week installs available. Call (754) 318-5005." variant="navy" />
    </>
  )
}
