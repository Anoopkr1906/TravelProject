import { Link } from 'react-router-dom'
import { BUSINESS_INFO, SITE_URL } from '../seoConfig'

export default function Footer() {
  return (
    <footer className="site-footer" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-container">
        {/* Brand & Overview Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand-lockup">
            <img
              src="/logo.jpeg"
              alt="Sri Krishna Tour and Adventures Logo"
              className="footer-logo"
              width="180"
              height="60"
              loading="lazy"
            />
          </div>
          <p className="footer-about">
            <strong>Sri Krishna Tour and Adventures</strong> is your premier travel partner in Ranchi,
            Jharkhand. We provide reliable 24/7 outstation taxi services, personalized tour packages,
            hotel accommodations, and memorable weekend getaways.
          </p>
          <div className="footer-badge">
            <span className="star-rating">★ 4.9/5</span>
            <span>Based on 120+ happy travelers</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Our Travel Services</Link>
            </li>
            <li>
              <Link to="/reviews">Customer Reviews</Link>
            </li>
            <li>
              <Link to="/experiences">Travel Experiences</Link>
            </li>
            <li>
              <Link to="/contact">Contact & Cab Booking</Link>
            </li>
          </ul>
        </div>

        {/* Popular Destinations Column */}
        <div className="footer-col">
          <h3 className="footer-title">Popular Destinations</h3>
          <ul className="footer-links">
            <li>
              <Link to="/services">Netarhat Hill Tour</Link>
            </li>
            <li>
              <Link to="/services">Patratu Valley Taxi Tour</Link>
            </li>
            <li>
              <Link to="/services">Baidyanath Dham (Deoghar)</Link>
            </li>
            <li>
              <Link to="/services">Dassam & Hundru Falls</Link>
            </li>
            <li>
              <Link to="/services">Parasnath Pilgrimage</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Hours Column */}
        <div className="footer-col contact-col">
          <h3 className="footer-title">Contact & Support</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="icon">📞</span>
              <div>
                <strong>Phone (24/7):</strong>
                <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="contact-highlight">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </li>
            <li>
              <span className="icon">📍</span>
              <div>
                <strong>Location:</strong>
                <span>{BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion}, India</span>
              </div>
            </li>
            <li>
              <span className="icon">⏰</span>
              <div>
                <strong>Operating Hours:</strong>
                <span>Open 24 Hours / 7 Days</span>
              </div>
            </li>
            <li>
              <span className="icon">🚗</span>
              <div>
                <strong>Service Area:</strong>
                <span>Ranchi, Jharkhand & Outstation</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} <a href={SITE_URL}>Sri Krishna Tour and Adventures</a>. All
            rights reserved.
          </p>
          <p className="footer-seo-meta">
            Best Taxi Service & Tour Packages in Ranchi | Deployed at{' '}
            <a href="https://www.srikrishnatour.in">www.srikrishnatour.in</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
