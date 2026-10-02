export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.srikrishnatour.in').replace(/\/$/, '')

export const BUSINESS_INFO = {
  name: 'Sri Krishna Tour and Adventures',
  legalName: 'Sri Krishna Tour and Adventures',
  alternateName: 'Sri Krishna Tours Ranchi',
  phone: '+91 9563526445',
  phoneRaw: '+919563526445',
  phoneDisplay: '9563526445',
  email: 'srikrishnatoursranchi@gmail.com',
  address: {
    streetAddress: 'Main Road',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834001',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 23.3441,
    longitude: 85.3096,
  },
  priceRange: '₹₹',
  rating: {
    ratingValue: '4.9',
    reviewCount: '120',
  },
  areaServed: [
    'Ranchi',
    'Jharkhand',
    'Netarhat',
    'Patratu Valley',
    'Baidyanath Dham (Deoghar)',
    'Parasnath',
    'Dassam Falls',
    'Hundru Falls',
    'Jonha Falls',
  ],
  openingHours: 'Mo-Su 00:00-23:59',
}

export const SEO_PAGES = {
  home: {
    path: '/',
    title: 'Sri Krishna Tour and Adventures | Best Tour & Taxi Service in Ranchi',
    description:
      'Book affordable tour packages, local & outstation taxi services in Ranchi with Sri Krishna Tour and Adventures. 24/7 cab booking, family trips & weekend getaways. Call +91 9563526445.',
    keywords:
      'tour and travels in Ranchi, taxi service in Ranchi, car rental Ranchi, cab hire Ranchi, outstation cab Ranchi, Netarhat tour package, Patratu valley taxi, Sri Krishna Tour and Adventures, Jharkhand tourism',
    breadcrumbName: 'Home',
  },
  services: {
    path: '/services',
    title: 'Travel Services & Taxi Hire in Ranchi | Sri Krishna Tour and Adventures',
    description:
      'Explore reliable travel services in Ranchi: outstation taxi service, curated tour packages, hotel bookings, weekend adventure trips, group travel, and 24/7 on-trip assistance.',
    keywords:
      'taxi services Ranchi, car hire Ranchi, outstation cab Ranchi, hotel booking Jharkhand, tour packages Ranchi, group tour travel agency, cab booking Ranchi',
    breadcrumbName: 'Services',
  },
  reviews: {
    path: '/reviews',
    title: 'Customer Reviews & Ratings | Sri Krishna Tour and Adventures',
    description:
      'Read authentic customer reviews for Sri Krishna Tour and Adventures. Rated 4.9/5 by travelers for polite drivers, clean cars, punctual service, and memorable itineraries.',
    keywords:
      'Sri Krishna Tour reviews, Ranchi travel agency ratings, best taxi service Ranchi feedback, trusted tour operator Jharkhand',
    breadcrumbName: 'Reviews',
  },
  experiences: {
    path: '/experiences',
    title: 'Past Customer Experiences & Travel Stories | Sri Krishna Tour and Adventures',
    description:
      'Discover memorable travel stories from our guests: spiritual family pilgrimages, scenic Netarhat hill trips, and corporate outings planned seamlessly in Jharkhand.',
    keywords:
      'Netarhat trip experience, spiritual tour Baidyanath dham, corporate travel Ranchi, Jharkhand tour stories, travel memories Ranchi',
    breadcrumbName: 'Experiences',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Book Taxi & Tour Packages in Ranchi - Call 9563526445',
    description:
      'Contact Sri Krishna Tour and Adventures in Ranchi, Jharkhand. Call +91 9563526445 for immediate taxi booking, family tour packages, outstation cabs, and custom trip planning.',
    keywords:
      'contact Sri Krishna Tour, cab booking number Ranchi, travel agency phone Ranchi, book taxi Jharkhand, Ranchi travel contact',
    breadcrumbName: 'Contact Us',
  },
}
