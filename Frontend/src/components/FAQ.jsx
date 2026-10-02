import { useState, useEffect } from 'react'

const faqs = [
  {
    question: 'How do I book a taxi or tour package in Ranchi with Sri Krishna Tour?',
    answer:
      'Booking is quick and simple. You can call us directly at +91 9563526445 or fill out our online contact form. Our travel team is available 24/7 to confirm vehicle availability, share instant pricing quotes, and tailor an itinerary to your schedule.',
  },
  {
    question: 'Which popular tourist destinations do you cover from Ranchi?',
    answer:
      'We provide curated tour packages and round-trip taxi services to Netarhat (Queen of Chotanagpur), Patratu Valley, Baidyanath Dham (Deoghar), Parasnath, Dassam Falls, Hundru Falls, Jonha Falls, Betla National Park, and Rajrappa Temple, along with customized inter-state outstation routes.',
  },
  {
    question: 'Is 24/7 outstation taxi service available from Ranchi?',
    answer:
      'Yes, Sri Krishna Tour and Adventures operates 24 hours a day, 7 days a week. Whether you require an early morning airport drop, late-night emergency pickup, or multi-day outstation journey, our clean cabs and professional drivers are always on standby.',
  },
  {
    question: 'Can you customize tour packages for families, elders, and corporate groups?',
    answer:
      'Absolutely. We specialize in personalized itineraries that cater to your pace and preferences. For spiritual pilgrimages, we ensure comfortable travel with minimal walking for senior citizens. For corporate or family groups, we coordinate multi-vehicle convoys and spacious seating.',
  },
  {
    question: 'Do you provide hotel booking assistance along with cab services?',
    answer:
      'Yes, we provide end-to-end travel solutions including verified hotel and resort bookings at competitive rates across Jharkhand and nearby tourist destinations, ensuring clean rooms, good hospitality, and safe locations.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  // Inject FAQPage Schema for Google Rich Results
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.id = 'faq-jsonld-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      const existing = document.getElementById('faq-jsonld-schema')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <section className="content-section faq-section" id="faq">
      <div className="section-heading">
        <p className="section-kicker">Frequently Asked Questions</p>
        <h2>Everything you need to know about our tours & taxi services</h2>
        <p className="supporting-text">
          Got questions about routes, pricing, or bookings? Here are answers to common questions
          travelers ask us.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.question}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
