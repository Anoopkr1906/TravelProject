import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import SEO from './components/SEO'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import { SEO_PAGES, BUSINESS_INFO } from './seoConfig'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/experiences', label: 'Past Customers Experience' },
  { to: '/contact', label: 'Contact Us' },
]

const highlights = [
  {
    value: '120+',
    label: 'Curated journeys across heritage, wildlife, hills, and waterfalls',
  },
  {
    value: '24/7',
    label: 'Travel support for cab bookings, changes, and on-trip assistance',
  },
  {
    value: '4.9/5',
    label: 'Guest satisfaction built on thoughtful itineraries and trusted drivers',
  },
]

const services = [
  {
    title: 'Tour Packages',
    description: 'Comfortable and well-paced packages for family trips, spiritual travels, and scenic escapes across Jharkhand.',
    icon: '🧳',
  },
  {
    title: 'Local & Outstation Taxi Service',
    description: 'Clean, secure, and punctual cab services for Ranchi local travel, airport drops, and outstation trips.',
    icon: '🚗',
  },
  {
    title: 'Hotel Bookings',
    description: 'Trusted hotel stays tailored to your budget, comfort level, and destination requirements.',
    icon: '🏨',
  },
  {
    title: 'Adventure & Weekend Trips',
    description: 'Exciting hill drives to Netarhat, Patratu Valley tours, waterfall visits, and recreational getaways.',
    icon: '⛰️',
  },
  {
    title: 'Group & Corporate Tours',
    description: 'Organized travel for friends, families, schools, and corporate groups with shared itineraries.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: '24/7 Travel Support',
    description: 'Round-the-clock emergency support for route updates, driver coordination, and on-trip assistance.',
    icon: '📞',
  },
]

const destinations = [
  {
    name: 'Netarhat',
    description: 'The Queen of Chotanagpur, known for cool hill breezes, sunrise & sunset viewpoints, and lush forests.',
  },
  {
    name: 'Patratu Valley',
    description: 'A winding ghat road favorite with scenic hairpin turns, lake boating, and picturesque photo stops.',
  },
  {
    name: 'Baidyanath Dham (Deoghar)',
    description: 'A sacred Jyotirlinga spiritual journey filled with comfort, faith, and thoughtful darshan planning.',
  },
  {
    name: 'Dassam Falls',
    description: 'A refreshing natural cascade near Ranchi with scenic viewpoints and peaceful picnic spots.',
  },
  {
    name: 'Parasnath',
    description: 'A serene mountain pilgrimage and trekking destination, celebrated for its spiritual tranquility.',
  },
  {
    name: 'Hundru Falls',
    description: 'A majestic 320-foot waterfall on the Subarnarekha River, ideal for sightseeing and family day outings.',
  },
]

const reviews = [
  {
    name: 'Amit Kumar',
    comment:
      'Excellent taxi service and very polite driver. The trip planning from Ranchi to Netarhat was smooth, and the vehicle was spotlessly clean.',
    rating: 5,
  },
  {
    name: 'Priya Sinha',
    comment:
      'Their family tour package was well organized and budget-friendly. We had a fantastic and peaceful time in Netarhat and Patratu.',
    rating: 5,
  },
  {
    name: 'Vikas Verma',
    comment:
      'The team understood exactly what we needed for a weekend adventure. Professional, safe hill driving, and prompt 24/7 customer support.',
    rating: 5,
  },
]

const experiences = [
  {
    title: 'Spiritual Family Pilgrimage',
    detail: 'Planned a smooth pilgrimage covering Baidyanath Dham and nearby temples with comfortable AC car travel and extra care for elderly family members.',
  },
  {
    title: 'Weekend Escape to Netarhat & Patratu',
    detail: 'A stress-free hill getaway with seamless driver coordination, scenic stops along the winding ghats, and comfortable hotel booking.',
  },
  {
    title: 'Corporate Team Retreat',
    detail: 'Handled a full corporate team outing in Ranchi with multi-vehicle coordination, punctual pickups, and excellent on-ground logistics.',
  },
]

function BrandMark() {
  return (
    <img
      className="brand-mark"
      src="/logo.jpeg"
      alt="Sri Krishna Tour and Adventures logo - Ranchi Tour & Taxi Service"
      width="200"
      height="60"
      loading="eager"
    />
  )
}

function HomePage() {
  return (
    <>
      <SEO {...SEO_PAGES.home} />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-kicker">Premier Travel Planning in Ranchi</p>
          <h1>Sri Krishna Tour and Adventures</h1>
          <p className="hero-text">
            Elegant tour packages and reliable 24/7 outstation taxi services across Ranchi and
            Jharkhand. We design journeys that feel seamless, safe, and memorable from the first
            call to your final destination.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#destinations">
              Explore Destinations
            </a>
            <a className="secondary-action" href="#services">
              View Services
            </a>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.value} className="highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-stage">
            <BrandMark />
          </div>
          <div className="floating-card floating-card-top">
            <span>Custom Itineraries</span>
            <strong>Spiritual, Hill & Waterfall Tours</strong>
          </div>
          <div className="floating-card floating-card-bottom">
            <span>24/7 Cab Support</span>
            <strong>Clean Cabs & Expert Local Drivers</strong>
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">What We Offer</p>
          <h2>Travel services built around comfort, safety, and reliability.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="destinations" className="content-section split-section">
        <div className="section-heading">
          <p className="section-kicker">Curated Destinations</p>
          <h2>Explore the natural beauty and sacred heritage of Jharkhand.</h2>
          <p className="supporting-text">
            Each tour is planned with local knowledge, reliable timings, and experienced drivers so
            your journey is relaxing, safe, and truly unforgettable.
          </p>
        </div>
        <div className="destination-list">
          {destinations.map((destination) => (
            <article key={destination.name} className="destination-card">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive FAQ Section with FAQPage Schema */}
      <FAQ />

      <section className="cta-banner">
        <div>
          <p className="section-kicker light">Start Planning Today</p>
          <h2>Tell us your destination, budget, and travel dates. We take care of the rest.</h2>
        </div>
        <a className="primary-action dark" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
          Call {BUSINESS_INFO.phone}
        </a>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <section className="page-section">
      <SEO {...SEO_PAGES.services} />
      <div className="page-header">
        <p className="section-kicker">Our Travel Services</p>
        <h1>Travel Services & Taxi Hire in Ranchi</h1>
        <p className="page-lead">
          From local city rides and outstation cab bookings to all-inclusive family tour packages and
          hotel reservations, Sri Krishna Tour and Adventures is your trusted travel partner.
        </p>
      </div>
      <div className="service-grid detailed-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card detail-card">
            <div className="service-icon" aria-hidden="true">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="cta-banner" style={{ marginTop: '48px' }}>
        <div>
          <p className="section-kicker light">Need a Custom Package?</p>
          <h2>Talk directly to our Ranchi travel specialists today.</h2>
        </div>
        <a className="primary-action dark" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
          Book a Cab Now
        </a>
      </div>
    </section>
  )
}

function ReviewsPage() {
  return (
    <section className="page-section">
      <SEO {...SEO_PAGES.reviews} />
      <div className="page-header">
        <p className="section-kicker">Client Feedback</p>
        <h1>Traveler Reviews & Testimonials</h1>
        <p className="page-lead">
          Rated 4.9/5 by travelers across Jharkhand for polite drivers, punctuality, well-maintained
          vehicles, and transparent pricing.
        </p>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <article key={review.name} className="review-card">
            <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
              {'★'.repeat(review.rating)}
            </div>
            <p className="review-text">“{review.comment}”</p>
            <strong>{review.name}</strong>
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
      <div className="page-header">
        <p className="section-kicker">Real Customer Stories</p>
        <h1>Past Customer Experiences & Journeys</h1>
        <p className="page-lead">
          Discover how we design stress-free travel memories for families, spiritual seekers, and
          group getaways across Ranchi and nearby regions.
        </p>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article key={experience.title} className="experience-card">
            <div className="experience-badge">Travel Story</div>
            <h2>{experience.title}</h2>
            <p>{experience.detail}</p>
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
      <div className="page-header">
        <p className="section-kicker">Contact Us</p>
        <h1>Contact Sri Krishna Tour and Adventures</h1>
        <p className="page-lead">
          We are ready 24/7 to help plan your next trip or arrange an outstation cab in Ranchi.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card info-card">
          <h2>Reach Us Directly</h2>
          <ul className="contact-list">
            <li>
              <span className="label">Phone (24/7):</span>
              <a href={`tel:${BUSINESS_INFO.phoneDisplay}`}>{BUSINESS_INFO.phone}</a>
            </li>
            <li>
              <span className="label">Location:</span>
              <span>{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion}</span>
            </li>
            <li>
              <span className="label">Service Area:</span>
              <span>Serving Ranchi, Netarhat, Patratu, Deoghar & all Jharkhand</span>
            </li>
            <li>
              <span className="label">Support:</span>
              <span>Open 24/7 for booking and on-trip assistance</span>
            </li>
          </ul>
          <a className="primary-action contact-cta" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
            Call Now: {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

        <div className="contact-card form-card">
          <h2>Plan Your Trip</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Full Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Phone Number
              <input type="tel" placeholder="Your phone number" required />
            </label>
            <label>
              Travel Need
              <textarea rows="4" placeholder="Destination, travel date, number of passengers..." />
            </label>
            <button
              type="button"
              className="primary-action submit-btn"
              onClick={() => {
                window.location.href = `tel:${BUSINESS_INFO.phoneDisplay}`
              }}
            >
              Request Quick Callback
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
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <div className="desktop-header">
          <div className="brand-lockup">
            <BrandMark />
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navButtons}
          </nav>

          <div className="header-cta-wrap desktop-cta">
            <a className="header-cta" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
              Call Now
            </a>
          </div>
        </div>

        <div className="mobile-header">
          <div className="mobile-top-row">
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

          <div className="header-cta-wrap mobile-cta">
            <a className="header-cta" href={`tel:${BUSINESS_INFO.phoneDisplay}`}>
              Call Now
            </a>
          </div>
        </div>
      </header>

      <div className={mobileMenuOpen ? 'mobile-menu-overlay open' : 'mobile-menu-overlay'}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
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
