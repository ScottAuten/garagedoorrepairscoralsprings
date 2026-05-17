import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Garage Door Repair of Coral Springs FL | (754) 318-5005',
  description:
    'Contact Garage Door Repair of Coral Springs. Call (754) 318-5005 for same-day service or submit our online form for a free estimate. Serving all Coral Springs neighborhoods.',
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us/contact' },
}

export default function ContactPage() {
  return <ContactForm />
}
