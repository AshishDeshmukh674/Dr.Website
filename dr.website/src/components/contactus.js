import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './contactusStyle.css';
const Contactus = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="contact-form">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" id="phone" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-5">
        <p><strong>Mobile:</strong> [Your Mobile Number]</p>
        <p><strong>Email:</strong> [Your Email Address]</p>
        <p><strong>Visit Us:</strong> Dr. Shreepad Bhat is committed to providing comprehensive medical care with a focus on personalized treatment plans. For appointments and further inquiries, please reach out via the contact details provided.</p>
      </footer>
    </>
  );
}

export default Contactus;
