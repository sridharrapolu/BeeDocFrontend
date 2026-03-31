import React from 'react';
import './Appointment.css';
import Beedocapp from './Beedocapp';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Appointment = () => {
  return (
    <>
    <Navbar/>
    <div className="app-bg">
    <div className="container py-5 appointment-container">
      <div className="row shadow-lg appointment-card">

        <div className="col-md-5 text-white p-5 d-flex flex-column justify-content-center appointment-info">
          <h2 className="fw-bold mb-3">Book Appointment</h2>
          <p className="mb-4">
            Schedule your consultation with our experts. Quick, easy, and hassle-free.
          </p>

          <ul className="list-unstyled">
            <li>✔ Expert Doctors</li>
            <li>✔ 24/7 Support</li>
            <li>✔ Easy Scheduling</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-md-7 bg-white p-5 appointment-form">
          <h3 className="mb-4 fw-semibold">Make an Appointment</h3>

          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>

              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="tel" className="form-control" placeholder="Phone Number" />
              </div>

              <div className="col-md-6 mb-3">
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <select className="form-control">
                <option>Select Department</option>
                <option>General Checkup</option>
                <option>Dentist</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Additional Notes"
              ></textarea>
            </div>

            <button className="btn btn-primary w-100 fw-semibold appointment-btn">
              Book Now
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

export default Appointment;