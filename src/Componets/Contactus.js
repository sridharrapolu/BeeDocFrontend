import React from 'react';
import './Contactus.css';
import Beedocapp from './Beedocapp';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Contactus = () => {
  return (
    <>
    <Navbar/>
    <div className="docapp-bg">
      <div className="container py-5 contact-container">
        <div className="row shadow-lg contact-card">

          {/* Left Section */}
          <div className="col-md-5 text-white p-5 d-flex flex-column justify-content-center contact-info">
            <h2 className="fw-bold mb-3">Contact Us</h2>
            <p className="mb-4">
              Have questions or need help? Feel free to reach out anytime.
            </p>

            <p><i className="bi bi-geo-alt"></i> Hyderabad, India</p>
            <p><i className="bi bi-envelope"></i> support@BeeDOC.com</p>
            <p><i className="bi bi-telephone"></i> +91 98765 43210</p>
          </div>

          {/* Right Section */}
          <div className="col-md-7 bg-white p-5 contact-form">
            <h3 className="mb-4 fw-semibold">Send Message</h3>

            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-dark w-100 fw-semibold contact-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    <Beedocapp/>
    <Footer/>
    </>
  );
};

export default Contactus;