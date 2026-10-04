import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import SEO from './components/SEO'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import { SEO_PAGES, BUSINESS_INFO } from './seoConfig'
import {
  IconTaxi,
  IconLuggage,
  IconHotel,
  IconMountain,
  IconUsers,
  IconHeadset,
  IconPhone,
  IconMapPin,
  IconShield,
  IconStar,
  IconWhatsApp,
  IconCalendar,
  IconClock,
  IconArrowRight,
  IconCheck,
} from './components/Icons'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services & Cabs' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/experiences', label: 'Travel Stories' },
  { to: '/contact', label: 'Contact & Booking' },
]

const services = [
  {
    title: 'Curated Tour Packages',
    description: 'Bespoke, unhurried itineraries for family holidays, spiritual yatras, and scenic hill retreats across Jharkhand.',
    Icon: IconLuggage,
    tag: 'All-Inclusive',
  },
  {
    title: 'Local & Outstation Taxi Service',
    description: 'Punctual, sanitized cabs with vetted chauffeurs for Ranchi city commutes, airport transfers, and intercity travel.',
    Icon: IconTaxi,
    tag: '24/7 Dispatch',
  },
  {
    title: 'Verified Hotel Bookings',
    description: 'Handpicked heritage stays, boutique resorts, and clean budget hotels reserved at guaranteed competitive rates.',
    Icon: IconHotel,
    tag: 'Curated Stays',
  },
  {
    title: 'Scenic Hill & Waterfall Drives',
    description: 'Carefully paced road trips through the hairpin turns of Patratu Valley, misty Netarhat, and cascading waterfalls.',
    Icon: IconMountain,
    tag: 'Scenic Trails',
  },
  {
    title: 'Family & Corporate Delegations',
    description: 'End-to-end multi-vehicle convoy management for large families, pilgrim groups, and executive corporate offsites.',
    Icon: IconUsers,
    tag: 'Group Travel',
  },
  {
    title: '24/7 Concierge & On-Trip Support',
    description: 'Round-the-clock live dispatch assistance for route updates, chauffeur coordination, and immediate emergency care.',
    Icon: IconHeadset,
    tag: '24/7 Standby',
  },
]

const featuredDestinations = [
  {
    name: 'Patratu Valley & Dam',
    subtitle: 'Winding Serpentine Ghats & Lake Boating',
    distance: '40 km from Ranchi',
    duration: '~1.5 Hours Drive',
    image: '/destinations/patratu-valley.jpg',
    description:
      'Celebrated for its sweeping hairpin curves, lush forest canopies, and serene reservoir boating. Perfect for refreshing day excursions and breathtaking photography.',
    highlights: ['Scenic Ghat Lookout Points', 'Speedboating at Patratu Lake', 'Island Resort Dining'],
  },
  {
    name: 'Netarhat Hill Retreat',
    subtitle: 'The Queen of Chotanagpur',
    distance: '156 km from Ranchi',
    duration: '~4.5 Hours Drive',
    image: '/destinations/netarhat-hills.jpg',
    description:
      'Perched at 3,600 feet, Netarhat offers crisp mountain air, dense sal and pine groves, and unforgettable panoramic sunrises over rolling misty valleys.',
    highlights: ['Magnolia Sunset Point', 'Koil View Point', 'Upper & Lower Ghaghri Falls'],
  },
  {
    name: 'Baba Baidyanath Dham (Deoghar)',
    subtitle: 'Sacred Jyotirlinga Spiritual Pilgrimage',
    distance: '250 km from Ranchi',
    duration: '~5.5 Hours Drive',
    image: '/destinations/baidyanath-dham.jpg',
    description:
      'One of the twelve sacred Jyotirlingas. We curate peaceful, comfortable family pilgrimages with comfortable AC vehicles and special elder assistance.',
    highlights: ['Baidyanath Jyotirlinga Darshan', 'Trikut Pahar Ropeway', 'Tapovan Caves'],
  },
]

const fleetData = [
  {
    category: 'Prime Sedan',
    models: 'Maruti Dzire / Toyota Etios',
    capacity: '4 Passengers + 1 Driver',
    luggage: '2 Large Bags',
    features: ['Chilled AC', 'Clean Fabric Seating', 'Smooth Highway Ride', 'Ideal for Couples & Small Families'],
  },
  {
    category: 'Family MUV',
    models: 'Maruti Ertiga / Triber',
    capacity: '6 Passengers + 1 Driver',
    luggage: '3-4 Medium Bags',
    features: ['Dual AC Vents', 'Generous Legroom', 'Hill-Ready Suspension', 'Best for Family Hill Getaways'],
  },
  {
    category: 'Executive Luxury SUV',
    models: 'Toyota Innova Crysta',
    capacity: '7 Passengers + 1 Driver',
    luggage: '5 Large Bags',
    features: ['Captain Seats', 'Superior Ride Comfort', 'High Ground Clearance', 'VIP & Long-Distance Choice'],
  },
]

const reviews = [
  {
    name: 'Amit Kumar',
    location: 'Ranchi, Jharkhand',
    comment:
      'Exceptional service. The driver arrived 15 minutes early, the Dzire was pristine, and his driving through the tricky Patratu curves was extremely gentle and safe. Highly recommend for families!',
    rating: 5,
    trip: 'Patratu Valley Family Day Tour',
  },
  {
    name: 'Priya Sinha',
    location: 'Patna, Bihar',
    comment:
      'Booked a 3-day round trip to Netarhat. The hotel reservation and driver coordination were handled with true professionalism. We never had to worry about a thing.',
    rating: 5,
    trip: 'Netarhat 3D/2N Tour Package',
  },
  {
    name: 'Vikas Verma',
    location: 'Kolkata, West Bengal',
    comment:
      'We visited Baidyanath Dham with my elderly parents. The driver was deeply respectful and accommodated frequent rest stops without any hesitation. Outstanding hospitality.',
    rating: 5,
    trip: 'Deoghar Pilgrimage Tour',
  },
]

const experiences = [
  {
    title: 'Peaceful Spiritual Pilgrimage to Deoghar',
    duration: '2 Days / 1 Night',
    detail:
      'Customized spiritual itinerary covering Baba Baidyanath Temple and Basukinath with round-the-clock driver availability, sanitized AC Innova transport, and doorstep pickup in Ranchi.',
    highlights: 'Senior-citizen pace, dedicated darshan assistance, comfortable highway transit.',
  },
  {
    title: 'The Netarhat & Patratu Weekend Hill Circuit',
    duration: '3 Days / 2 Nights',
    detail:
      'A revitalizing nature tour weaving through the winding hairpin roads of Patratu Valley to the pine plateaus of Netarhat, capturing dawn over misty ridges.',
    highlights: 'Magnolia Point sunrise, hotel coordination, scenic tea plantation stops.',
  },
  {
    title: 'Chotanagpur Waterfalls & Heritage Trail',
    duration: 'Full Day Excursion',
    detail:
      'Comprehensive day outing exploring Hundru Falls, Dassam Falls, and Jonha Falls with experienced local chauffeurs who know the best viewpoints and safe dining stops.',
    highlights: 'Cascade viewpoints, family-friendly routes, punctual airport/station drops.',
  },
]

function BrandMark() {
  return (
    <img
      className="brand-mark"
      src="/logo.jpeg"
      alt="Sri Krishna Tour and Adventures logo - Ranchi Tour & Taxi Service"
      width="180"
      height="54"
      loading="eager"
    />
  )
}

function QuickBookingWidget() {
  const [destination, setDestination] = useState('Netarhat')
  const [serviceType, setServiceType] = useState('Outstation Cab')
  const [vehicle, setVehicle] = useState('Sedan (Dzire/Etios)')
  const [travelDate, setTravelDate] = useState('')

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Sri Krishna Tour & Adventures, I would like to book a trip from Ranchi:\n- Service: ${serviceType}\n- Destination: ${destination}\n- Vehicle: ${vehicle}\n- Date: ${travelDate || 'Flexible'}\nPlease share quote & availability.`
    )
    window.open(`https://wa.me/919563526445?text=${text}`, '_blank')
  }

  return (
    <div className="concierge-booking-box">
      <div className="concierge-badge">
        <IconShield size={16} />
        <span>Instant Concierge Dispatch • Zero Booking Fees</span>
      </div>

      <div className="booking-fields-grid">
        <div className="field-group">
          <label>Select Service</label>
          <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option>Outstation Cab (Round / One-Way)</option>
            <option>Curated Tour Package</option>
            <option>Local Ranchi Full Day Rental</option>
            <option>Airport Pickup & Drop</option>
          </select>
        </div>

        <div className="field-group">
          <label>Destination from Ranchi</label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option>Netarhat (Queen of Chotanagpur)</option>
            <option>Patratu Valley & Dam</option>
            <option>Baidyanath Dham (Deoghar)</option>
            <option>Hundru & Dassam Waterfalls</option>
            <option>Betla National Park</option>
            <option>Parasnath (Shikharji)</option>
            <option>Jamshedpur / Bokaro / Dhanbad</option>
            <option>Other Custom Location</option>
          </select>
        </div>

        <div className="field-group">
          <label>Preferred Vehicle</label>
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
            <option>Sedan (Dzire / Etios - 4 Seater)</option>
            <option>Family MUV (Ertiga - 6 Seater)</option>
            <option>Luxury SUV (Innova Crysta - 7 Seater)</option>
            <option>Tempo Traveller (12-17 Seater)</option>
          </select>
        </div>

        <div className="field-group">
          <label>Travel Date</label>
          <div className="input-with-icon">
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              placeholder="Select date"
            />
          </div>
        </div>
      </div>

      <div className="booking-actions-row">
        <button type="button" className="btn-whatsapp-booking" onClick={handleWhatsAppBooking}>
          <IconWhatsApp size={19} />
          <span>Inquire & Book via WhatsApp</span>
        </button>

        <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="btn-call-booking">
          <IconPhone size={18} />
          <span>Call Dispatch ({BUSINESS_INFO.phoneDisplay})</span>
        </a>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <SEO {...SEO_PAGES.home} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="luxury-kicker">
              <span className="kicker-line" />
              <span>Premier Travel Concierge • Ranchi, Jharkhand</span>
              <span className="kicker-line" />
            </div>

            <h1 className="hero-heading">
              Curated Journeys & Scenic Hill Escapes in Jharkhand
            </h1>

            <p className="hero-lead">
              From the misty pine summits of Netarhat and the hairpin turns of Patratu Valley to sacred
              Baidyanath Jyotirlinga yatras. Travel in private, pristine AC vehicles with vetted hill
              chauffeurs and personalized itineraries.
            </p>

            <div className="trust-metrics-strip">
              <div className="metric-pill">
                <strong>4.9/5</strong>
                <span>
                  <IconStar size={13} /> 120+ Reviews
                </span>
              </div>
              <div className="metric-pill">
                <strong>24/7</strong>
                <span>Live Dispatch</span>
              </div>
              <div className="metric-pill">
                <strong>100%</strong>
                <span>Sanitized AC Cabs</span>
              </div>
            </div>

            {/* Quick Booking Concierge Card */}
            <QuickBookingWidget />
          </div>
        </div>
      </section>

      {/* Featured Destinations Showcase */}
      <section id="destinations" className="content-section destinations-section">
        <div className="section-header-centered">
          <div className="luxury-kicker">
            <span className="kicker-line" />
            <span>Handpicked Destinations</span>
            <span className="kicker-line" />
          </div>
          <h2>Breathtaking Landscapes of Jharkhand</h2>
          <p className="section-subtext">
            Each excursion is planned with local expertise, flexible timing, and experienced hill drivers
            for an authentic and relaxing journey.
          </p>
        </div>

        <div className="destinations-showcase-grid">
          {featuredDestinations.map((dest) => (
            <article key={dest.name} className="destination-spotlight-card">
              <div className="destination-image-wrap">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="destination-badge-overlay">
                  <span>{dest.duration}</span>
                </div>
              </div>
              <div className="destination-body">
                <div className="destination-meta">
                  <span className="distance-pill">{dest.distance}</span>
                </div>
                <h3>{dest.name}</h3>
                <p className="destination-subtitle">{dest.subtitle}</p>
                <p className="destination-desc">{dest.description}</p>
                <div className="destination-highlights">
                  {dest.highlights.map((item) => (
                    <span key={item} className="highlight-tag">
                      <IconCheck size={12} /> {item}
                    </span>
                  ))}
                </div>
                <div className="destination-card-footer">
                  <a
                    href={`https://wa.me/919563526445?text=Hello%2C%20I%20am%20interested%20in%20a%20tour%20to%20${encodeURIComponent(
                      dest.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="destination-inquire-link"
                  >
                    <span>Inquire Custom Tour</span>
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="content-section services-section">
        <div className="section-header-centered">
          <div className="luxury-kicker">
            <span className="kicker-line" />
            <span>Our Travel Offerings</span>
            <span className="kicker-line" />
          </div>
          <h2>Comprehensive Travel & Taxi Services</h2>
          <p className="section-subtext">
            Engineered around passenger safety, transparent pricing, and effortless comfort across
            every kilometer.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.Icon
            return (
              <article key={service.title} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="content-section fleet-section">
        <div className="section-header-centered">
          <div className="luxury-kicker">
            <span className="kicker-line" />
            <span>Chauffeur Fleet Standards</span>
            <span className="kicker-line" />
          </div>
          <h2>Sanitized, Well-Maintained Travel Fleet</h2>
          <p className="section-subtext">
            Choose the ideal ride for your party size. All vehicles are commercially registered, fully
            air-conditioned, and maintained to safety benchmarks.
          </p>
        </div>

        <div className="fleet-grid">
          {fleetData.map((car) => (
            <article key={car.category} className="fleet-card">
              <div className="fleet-card-header">
                <span className="fleet-cat">{car.category}</span>
                <h3>{car.models}</h3>
              </div>
              <div className="fleet-specs">
                <div className="spec-item">
                  <IconUsers size={16} />
                  <span>{car.capacity}</span>
                </div>
                <div className="spec-item">
                  <IconLuggage size={16} />
                  <span>{car.luggage}</span>
                </div>
              </div>
              <ul className="fleet-features">
                {car.features.map((feat) => (
                  <li key={feat}>
                    <IconCheck size={14} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919563526445?text=Hello%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(
                  car.category
                )}%20(${encodeURIComponent(car.models)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="fleet-book-btn"
              >
                <span>Book This Vehicle</span>
                <IconWhatsApp size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Trust Standards Banner */}
      <section className="trust-strip-section">
        <div className="trust-strip-container">
          <div className="trust-item">
            <IconShield size={28} />
            <div>
              <strong>Verified Chauffeurs</strong>
              <p>Experienced with hill hairpin turns and ghat road safety.</p>
            </div>
          </div>
          <div className="trust-item">
            <IconCheck size={28} />
            <div>
              <strong>Transparent Billing</strong>
              <p>No hidden fuel or driver extras. Clear upfront pricing.</p>
            </div>
          </div>
          <div className="trust-item">
            <IconClock size={28} />
            <div>
              <strong>Punctuality Assured</strong>
              <p>On-time airport pickups and coordinated hotel departures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion with Schema */}
      <FAQ />

      {/* Luxury CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <div className="luxury-kicker light">
            <span className="kicker-line light" />
            <span>Ready for Departure?</span>
            <span className="kicker-line light" />
          </div>
          <h2>Share your travel plans with our Ranchi concierge team.</h2>
          <p>
            Instant quotes, custom multi-day packages, and guaranteed dispatch assistance across
            Jharkhand.
          </p>
          <div className="cta-buttons-wrap">
            <a
              className="btn-cta-primary"
              href={`https://wa.me/919563526445?text=Hello%20Sri%20Krishna%20Tour%2C%20I%20would%20like%20to%20plan%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={18} />
              <span>WhatsApp Booking</span>
            </a>
            <a className="btn-cta-secondary" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
              <IconPhone size={18} />
              <span>Call +91 9563526445</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <section className="page-section">
      <SEO {...SEO_PAGES.services} />
      <div className="page-header-block">
        <div className="luxury-kicker">
          <span className="kicker-line" />
          <span>Our Travel Portfolio</span>
          <span className="kicker-line" />
        </div>
        <h1>Travel Services & Taxi Hire in Ranchi</h1>
        <p className="page-lead">
          From local city transfers and 24/7 outstation car rentals to curated family packages and
          hotel accommodations, Sri Krishna Tour and Adventures delivers dependable excellence.
        </p>
      </div>

      <div className="services-grid detailed-services-grid">
        {services.map((service) => {
          const IconComponent = service.Icon
          return (
            <article key={service.title} className="service-card detail-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  <IconComponent size={26} />
                </div>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a
                href={`https://wa.me/919563526445?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                  service.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="service-inquire-link"
              >
                <span>Book This Service</span>
                <IconArrowRight size={15} />
              </a>
            </article>
          )
        })}
      </div>

      <div className="cta-banner" style={{ marginTop: '56px' }}>
        <div className="cta-banner-content">
          <h2>Need a Custom Multi-City Tour?</h2>
          <p>Talk directly with our Ranchi travel specialists to structure an itinerary that fits your family&apos;s schedule.</p>
          <div className="cta-buttons-wrap">
            <a className="btn-cta-primary" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
              <IconPhone size={18} />
              <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewsPage() {
  return (
    <section className="page-section">
      <SEO {...SEO_PAGES.reviews} />
      <div className="page-header-block">
        <div className="luxury-kicker">
          <span className="kicker-line" />
          <span>Verified Traveler Reviews</span>
          <span className="kicker-line" />
        </div>
        <h1>Guest Feedback & Testimonials</h1>
        <p className="page-lead">
          Proudly rated 4.9/5 by travelers across Jharkhand for polite chauffeurs, punctuality,
          meticulously clean vehicles, and transparent quotes.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((rev) => (
          <article key={rev.name} className="review-spotlight-card">
            <div className="review-card-stars">
              {[...Array(rev.rating)].map((_, i) => (
                <IconStar key={i} size={16} />
              ))}
            </div>
            <p className="review-quote">&ldquo;{rev.comment}&rdquo;</p>
            <div className="review-author-info">
              <div>
                <strong>{rev.name}</strong>
                <span>{rev.location}</span>
              </div>
              <span className="review-trip-badge">{rev.trip}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperiencePage() {
  return (
    <section className="page-section">
      <SEO {...SEO_PAGES.experiences} />
      <div className="page-header-block">
        <div className="luxury-kicker">
          <span className="kicker-line" />
          <span>Curated Travel Journals</span>
          <span className="kicker-line" />
        </div>
        <h1>Customer Experiences & Itineraries</h1>
        <p className="page-lead">
          Explore how we design stress-free travel memories for families, spiritual seekers, and
          group getaways across Ranchi and nearby heritage circuits.
        </p>
      </div>

      <div className="experiences-grid">
        {experiences.map((exp) => (
          <article key={exp.title} className="experience-journal-card">
            <div className="journal-tag">
              <IconCalendar size={14} />
              <span>{exp.duration}</span>
            </div>
            <h2>{exp.title}</h2>
            <p className="journal-desc">{exp.detail}</p>
            <div className="journal-highlights">
              <strong>Key Highlights:</strong>
              <p>{exp.highlights}</p>
            </div>
            <a
              href={`https://wa.me/919563526445?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                exp.title
              )}%20itinerary.`}
              target="_blank"
              rel="noopener noreferrer"
              className="journal-cta-link"
            >
              <span>Inquire This Itinerary</span>
              <IconArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="page-section contact-shell">
      <SEO {...SEO_PAGES.contact} />
      <div className="page-header-block">
        <div className="luxury-kicker">
          <span className="kicker-line" />
          <span>24/7 Booking & Support</span>
          <span className="kicker-line" />
        </div>
        <h1>Contact Sri Krishna Tour and Adventures</h1>
        <p className="page-lead">
          Our dispatch team is standing by 24 hours a day to assist with immediate cab bookings,
          weekend getaways, and customized Jharkhand tour itineraries.
        </p>
      </div>

      <div className="contact-layout-grid">
        <div className="contact-details-panel">
          <h2>Direct Contact & Office</h2>
          <p className="contact-subhead">Reach out anytime for instant fare estimates and reservations.</p>

          <ul className="contact-info-list">
            <li>
              <div className="info-icon"><IconPhone size={20} /></div>
              <div>
                <strong>Phone Dispatch (24/7):</strong>
                <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="contact-link">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </li>
            <li>
              <div className="info-icon"><IconMapPin size={20} /></div>
              <div>
                <strong>Office Address:</strong>
                <span>
                  {BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} - {BUSINESS_INFO.address.postalCode}
                </span>
              </div>
            </li>
            <li>
              <div className="info-icon"><IconTaxi size={20} /></div>
              <div>
                <strong>Coverage Area:</strong>
                <span>Ranchi Local, Netarhat, Patratu, Deoghar, Parasnath & Outstation</span>
              </div>
            </li>
            <li>
              <div className="info-icon"><IconShield size={20} /></div>
              <div>
                <strong>Quality Commitment:</strong>
                <span>100% Verified Chauffeurs, Sanitized Vehicles, No Hidden Costs</span>
              </div>
            </li>
          </ul>

          <div className="contact-direct-actions">
            <a
              href={`https://wa.me/919563526445?text=Hello%20Sri%20Krishna%20Tour%2C%20I%20would%20like%20to%20book%20a%20trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-booking"
            >
              <IconWhatsApp size={18} />
              <span>Direct WhatsApp Concierge</span>
            </a>
            <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="btn-call-booking">
              <IconPhone size={18} />
              <span>Call +91 9563526445</span>
            </a>
          </div>
        </div>

        <div className="contact-form-panel">
          <h2>Request a Quick Itinerary Quote</h2>
          <p>Leave your details and destination. We will get back to you within 15 minutes.</p>

          <form className="concierge-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Full Name</label>
              <input type="text" placeholder="e.g. Rajesh Kumar" required />
            </div>
            <div className="form-group">
              <label>Phone Number (WhatsApp Preferred)</label>
              <input type="tel" placeholder="e.g. 9876543210" required />
            </div>
            <div className="form-group">
              <label>Travel Requirements</label>
              <textarea
                rows="4"
                placeholder="Mention destination (e.g. Netarhat), dates, vehicle preference, and party size..."
              />
            </div>
            <button
              type="button"
              className="btn-submit-quote"
              onClick={() => {
                window.location.href = `tel:${BUSINESS_INFO.phoneDisplay}`
              }}
            >
              <IconPhone size={18} />
              <span>Request Instant Callback</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navButtons = navItems.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.to === '/'}
      className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      onClick={() => setMobileMenuOpen(false)}
    >
      {item.label}
    </NavLink>
  ))

  return (
    <div className="page-shell">
      {/* Refined Navigation Bar */}
      <header className="topbar">
        <div className="desktop-header">
          <div className="brand-lockup">
            <BrandMark />
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navButtons}
          </nav>

          <div className="header-actions">
            <a
              href="https://wa.me/919563526445?text=Hello%20Sri%20Krishna%20Tour%2C%20I%20would%20like%20to%20inquire%20about%20a%20cab%20or%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="header-wa-btn"
              title="Chat on WhatsApp"
            >
              <IconWhatsApp size={16} />
              <span>WhatsApp</span>
            </a>
            <a className="header-cta" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
              <IconPhone size={15} />
              <span>Call Dispatch</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="mobile-header">
          <div className="brand-lockup mobile-brand">
            <BrandMark />
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={mobileMenuOpen ? 'mobile-menu-overlay open' : 'mobile-menu-overlay'}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu Navigation</span>
          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {navButtons}
        </nav>

        <div className="mobile-menu-footer">
          <p>24/7 Ranchi Travel & Taxi Dispatch</p>
          <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="header-cta">
            <IconPhone size={16} />
            <span>Call +91 9563526445</span>
          </a>
        </div>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* SEO-Rich Footer */}
      <Footer />

      {/* Floating Mobile Bottom Action Bar (Thumb-friendly conversion bar) */}
      <aside className="mobile-bottom-bar" aria-label="Quick mobile booking">
        <a
          href="https://wa.me/919563526445?text=Hello%20Sri%20Krishna%20Tour%2C%20I%20would%20like%20to%20inquire%20about%20a%20cab%20or%20tour."
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-bar-action btn-bottom-wa"
        >
          <IconWhatsApp size={18} />
          <span>WhatsApp</span>
        </a>
        <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="bottom-bar-action btn-bottom-call">
          <IconPhone size={17} />
          <span>Call 24/7</span>
        </a>
      </aside>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
