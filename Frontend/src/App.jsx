import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

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
    label: 'Curated journeys across heritage, wildlife, hills, and beaches',
  },
  {
    value: '24/7',
    label: 'Travel support for planning, changes, and on-trip assistance',
  },
  {
    value: '4.9/5',
    label: 'Guest satisfaction built on thoughtful itineraries and care',
  },
]

const services = [
  {
    title: 'Tour Packages',
    description: 'Comfortable and well-paced packages for family trips, spiritual travels, and scenic escapes.',
    icon: '🧳',
  },
  {
    title: 'Local & Outstation Taxi Service',
    description: 'Clean, secure, and punctual cab services for local movement and outstation travel.',
    icon: '🚗',
  },
  {
    title: 'Hotel Bookings',
    description: 'Trusted hotel stays tailored to your budget, comfort level, and destination requirements.',
    icon: '🏨',
  },
  {
    title: 'Adventure & Weekend Trips',
    description: 'Exciting hill drives, waterfall visits, trekking plans, and recreational getaways.',
    icon: '⛰️',
  },
  {
    title: 'Group Tours',
    description: 'Organized travel for friends, families, schools, and corporate groups with shared itineraries.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: '24/7 Travel Support',
    description: 'Round-the-clock support for route updates, coordination, and quick on-trip assistance.',
    icon: '📞',
  },
]

const destinations = [
  {
    name: 'Dassam Falls',
    description: 'A refreshing weekend favorite with scenic roads, photo stops, and peaceful surroundings.',
  },
  {
    name: 'Patratu Valley',
    description: 'An ideal escape for scenic drives, fresh air, and spontaneous getaway memories.',
  },
  {
    name: 'Baidyanath Dham',
    description: 'A spiritual journey filled with faith, comfort, and thoughtful planning for devotees.',
  },
  {
    name: 'Netarhat',
    description: 'A cooler hill region for relaxed breaks, family time, and panoramic views.',
  },
  {
    name: 'Parasnath',
    description: 'A serene pilgrimage and nature destination, perfect for peaceful exploration.',
  },
  {
    name: 'Hundru Falls',
    description: 'A classic sightseeing outing with dramatic views and a memorable outdoor experience.',
  },
]

const reviews = [
  {
    name: 'Amit Kumar',
    comment:
      'Excellent service and very polite staff. The trip planning was smooth, and the driver was punctual and helpful.',
    rating: 5,
  },
  {
    name: 'Priya Sinha',
    comment:
      'Their family tour package was well organized and budget-friendly. We had a fantastic time in Netarhat.',
    rating: 5,
  },
  {
    name: 'Vikas Verma',
    comment:
      'The team understood exactly what we needed for a weekend adventure. Professional, safe, and very reliable.',
    rating: 5,
  },
]

const experiences = [
  {
    title: 'Spiritual Family Trip',
    detail: 'Planned a smooth pilgrimage covering temples and nearby attractions with comfortable travel and extra care for elders.',
  },
  {
    title: 'Weekend Escape to Netarhat',
    detail: 'A stress-free hill getaway with perfect coordination, hotel support, and a scenic drive throughout the trip.',
  },
  {
    title: 'Corporate Group Travel',
    detail: 'Handled a full team outing with reliable transport, time management, and excellent on-ground support.',
  },
]

const contactDetails = {
  phone: '+91 9563526445',
  phoneDisplay: '9563526445',
  location: 'Ranchi, Jharkhand',
  serviceArea: 'Serving all your travel needs across and around Ranchi',
  hours: 'Open 24/7 for travel support',
}

function BrandMark() {
  return (
    <img
      className="brand-mark"
      src="/logo.jpeg"
      alt="Sri Krishna Tour and Adventures logo"
    />
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-kicker">Premium travel planning</p>
          <h1>Sri Krishna Tour and Adventures</h1>
          <p className="hero-text">
            Elegant tour experiences for families, groups, and spiritual travelers.
            We design journeys that feel seamless, personal, and memorable from the
            first call to the final drop-off.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#destinations">
              Explore packages
            </a>
            <a className="secondary-action" href="#services">
              View services
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
            <span>Custom itineraries</span>
            <strong>Temple, leisure, and adventure blends</strong>
          </div>
          <div className="floating-card floating-card-bottom">
            <span>Trusted support</span>
            <strong>Transparent planning and flexible travel</strong>
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">What we offer</p>
          <h2>Travel services built around comfort and clarity.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="destinations" className="content-section split-section">
        <div className="section-heading">
          <p className="section-kicker">Curated experiences</p>
          <h2>Designed for travelers who want something more polished.</h2>
          <p className="supporting-text">
            Each journey is planned with local knowledge, practical timing, and a
            relaxed pace so your trip feels premium without becoming complicated.
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

      <section className="cta-banner">
        <div>
          <p className="section-kicker light">Start planning</p>
          <h2>Tell us the destination, budget, and pace. We will shape the rest.</h2>
        </div>
        <a className="primary-action dark" href="tel:+919563526445">
          Contact us
        </a>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-kicker">Our Services</p>
        <h2>Travel support for every kind of journey.</h2>
      </div>
      <div className="service-grid detailed-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card detail-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReviewsPage() {
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-kicker">Reviews</p>
        <h2>Travelers trust us for smooth, memorable journeys.</h2>
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
      <div className="page-header">
        <p className="section-kicker">Past Customers Experience</p>
        <h2>Real trips, real stories, and unforgettable memories.</h2>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article key={experience.title} className="experience-card">
            <div className="experience-badge">Travel Story</div>
            <h3>{experience.title}</h3>
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
      <div className="page-header">
        <p className="section-kicker">Contact Us</p>
        <h2>We are ready to help plan your next journey.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card info-card">
          <h3>Reach us directly</h3>
          <ul className="contact-list">
            <li>
              <span className="label">Phone:</span>
              <a href={`tel:${contactDetails.phoneDisplay}`}>{contactDetails.phone}</a>
            </li>
            <li>
              <span className="label">Location:</span>
              <span>{contactDetails.location}</span>
            </li>
            <li>
              <span className="label">Service Area:</span>
              <span>{contactDetails.serviceArea}</span>
            </li>
            <li>
              <span className="label">Support:</span>
              <span>{contactDetails.hours}</span>
            </li>
          </ul>
          <a className="primary-action contact-cta" href={`tel:${contactDetails.phoneDisplay}`}>
            Call Now
          </a>
        </div>

        <div className="contact-card form-card">
          <h3>Plan your trip</h3>
          <form className="contact-form">
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Phone Number
              <input type="tel" placeholder="Your phone number" />
            </label>
            <label>
              Travel Need
              <textarea rows="4" placeholder="Tell us about your trip plans" />
            </label>
            <button type="button" className="primary-action submit-btn">
              Send Request
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
            <a className="header-cta" href={`tel:${contactDetails.phoneDisplay}`}>
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
            <a className="header-cta" href={`tel:${contactDetails.phoneDisplay}`}>
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
