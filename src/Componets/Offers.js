import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Offers.css'

const Offers = () => {
  return (
    <>
      <Navbar />

      <div className="offers-container">
        <div className="offers-hero">
          <h1>Exclusive Health Packages</h1>
          <p>Premium care at unbeatable prices. Prioritize your health with BeeDoc.</p>
        </div>

        <div className="offers-grid">

          <div className="offer-card">
            <h2>Full Body Checkup</h2>
            <p className="price">₹999</p>
            <ul>
              <li>Blood Test</li>
              <li>Heart Screening</li>
              <li>Diabetes Check</li>
            </ul>
            <button>Book Now</button>
          </div>

          <div className="offer-card">
            <h2>Dental Care Package</h2>
            <p className="price">₹499</p>
            <ul>
              <li>Teeth Cleaning</li>
              <li>Consultation</li>
              <li>Basic X-Ray</li>
            </ul>
            <button>Book Now</button>
          </div>

          <div className="offer-card">
            <h2>Women Wellness</h2>
            <p className="price">₹799</p>
            <ul>
              <li>Hormone Tests</li>
              <li>Consultation</li>
              <li>Nutrition Advice</li>
            </ul>
            <button>Book Now</button>
          </div>

          <div className="offer-card highlight">
            <h2>Premium Family Plan</h2>
            <p className="price">₹1999</p>
            <ul>
              <li>4 Members Coverage</li>
              <li>Annual Checkups</li>
              <li>Priority Support</li>
            </ul>
            <button>Get Started</button>
          </div>

        </div>

        <div className="offers-banner">
          <h2>Flat 20% OFF on First Booking</h2>
          <p>Use Code: <span>BEE20</span></p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Offers