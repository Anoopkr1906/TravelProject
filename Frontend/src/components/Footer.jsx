import { Link } from 'react-router-dom'
import { BUSINESS_INFO, SITE_URL } from '../seoConfig'
import { IconPhone, IconMapPin, IconClock, IconTaxi, IconStar, IconWhatsApp } from './Icons'

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
            <strong>Sri Krishna Tour and Adventures</strong> is Ranchi&apos;s premier travel concierge and taxi operator. Specializing in scenic Jharkhand hill escapes, sacred pilgrimages, and reliable 24/7 outstation car rentals with vetted chauffeurs.
          </p>
          <div className="footer-badge">
            <span className="star-rating">
              <IconStar size={15} /> 4.9/5
            </span>
            <span>Based on 120+ verified guest journeys</span>
          </div>
          <div className="footer-quick-cta">
            <a
              href={`https://wa.me/919563526445?text=Hello%20Sri%20Krishna%20Tour%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20or%20taxi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-btn"
            >
              <IconWhatsApp size={18} />
              <span>Instant WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home Overview</Link>
            </li>
            <li>
              <Link to="/services">Travel & Cab Services</Link>
            </li>
            <li>
              <Link to="/reviews">Guest Testimonials</Link>
            </li>
            <li>
              <Link to="/experiences">Curated Travel Stories</Link>
            </li>
            <li>
              <Link to="/contact">Concierge & Booking</Link>
            </li>
          </ul>
        </div>

        {/* Popular Destinations Column */}
        <div className="footer-col">
          <h3 className="footer-title">Curated Escapes</h3>
          <ul className="footer-links">
            <li>
              <Link to="/services">Netarhat Sunrise & Valley</Link>
            </li>
            <li>
              <Link to="/services">Patratu Ghats & Boating</Link>
            </li>
            <li>
              <Link to="/services">Baidyanath Dham Darshan</Link>
            </li>
            <li>
              <Link to="/services">Hundru & Dassam Waterfalls</Link>
            </li>
            <li>
              <Link to="/services">Parasnath Hill Pilgrimage</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Hours Column */}
        <div className="footer-col contact-col">
          <h3 className="footer-title">Contact & Dispatch</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="icon-wrap"><IconPhone size={18} /></span>
              <div>
                <strong>Call Dispatch (24/7):</strong>
                <a href={`tel:${BUSINESS_INFO.phoneDisplay}`} className="contact-highlight">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </li>
            <li>
              <span className="icon-wrap"><IconMapPin size={18} /></span>
              <div>
                <strong>Base Office:</strong>
                <span>{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion}</span>
              </div>
            </li>
            <li>
              <span className="icon-wrap"><IconClock size={18} /></span>
              <div>
                <strong>Availability:</strong>
                <span>Open 24 Hours / 7 Days a Week</span>
              </div>
            </li>
            <li>
              <span className="icon-wrap"><IconTaxi size={18} /></span>
              <div>
                <strong>Operational Reach:</strong>
                <span>Ranchi, All Jharkhand & Outstation</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} <a href={SITE_URL}>Sri Krishna Tour and Adventures</a>. All rights reserved.
          </p>
          <p className="footer-seo-meta">
            Premier Tour Operator & Outstation Taxi Service in Ranchi | Official Portal:{' '}
            <a href="https://www.srikrishnatour.in">www.srikrishnatour.in</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
