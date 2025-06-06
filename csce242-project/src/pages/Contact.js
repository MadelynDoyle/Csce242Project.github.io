import React from "react";
import "../styles/styles.css";

const Contact = () => {
  return (
    <main className="main-content contact-page">
      <section className="left-contact">
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?width=520&height=550&hl=en&q=403%20Jordanville%20Rd%20Aynor,%20SC%2029511&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            frameBorder="0"
            className="map-frame"
            allowFullScreen
            title="Palmetto Fresh Meats Location"
          ></iframe>
        </div>
        <p>We are located at 403 Jordanville Rd Aynor, SC 29511</p>
      </section>

      <section className="right-contact">
        <div className="contact-section">
          <div className="contact-info">
            <img src="/images/phone.jpg" alt="Phone" />
            <p>(843) 358-1005</p>
          </div>
          <div className="contact-info">
            <img src="/images/email.jpg" alt="Email" />
            <p>palmettofreshmeats@gmail.com</p>
          </div>
          <div className="contact-info">
            <img src="/images/facebook.jpg" alt="Facebook" />
            <p>@Palmetto Fresh Meats</p>
          </div>
          <div className="contact-info">
            <img src="/images/clock.jpg" alt="Hours" />
            <p>Mon-Fri: 8am-5pm | Sat: 10am-2pm</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
