import React from "react";
import "../styles/styles.css";

const FAQ = () => {
  return (
    <main className="faq-content">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-div">
        <section className="faq-1">
          <h3>Do you sell to the public?</h3>
          <p>Yes! Anyone can stop by our location and purchase meat from our storefront.</p>
        </section>
        <section className="faq-2">
          <h3>Where does your meat come from?</h3>
          <p>All of our beef and pork is locally sourced from farms right here in South Carolina.</p>
        </section>
        <section className="faq-3">
          <h3>Do you dry age your beef?</h3>
          <p>Yes, our beef is dry aged to enhance tenderness and flavor.</p>
        </section>
        <section className="faq-4">
          <h3>What are your business hours?</h3>
          <p>We are open Monday to Friday from 8 AM - 5 PM and Saturday from 10 AM - 2 PM.</p>
        </section>
      </div>
    </main>
  );
};

export default FAQ;