import React from "react";
import "../styles/styles.css";

function Home() {
  return (
    <main className="main-content">
      <section className="column left-img">
        <img src="/images/meatcase1.jpg" alt="Meatcase" />
      </section>
      <section className="column middle-content">
        <h2>The Freshest Meat Around!</h2>
        <p>
          Are you tired of getting low quality beef and pork from the grocery store? ...
        </p>
      </section>
      <section className="column right-img">
        <img src="/images/front2.jpg" alt="Store Front" />
      </section>
    </main>
  );
}

export default Home;
