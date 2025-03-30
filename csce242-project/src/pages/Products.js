import React, { useEffect, useState } from "react";
import "../styles/styles.css";

const ProductCard = ({ name, image, cutDescription, averageWeight, pricePerPound }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p><strong>Cut:</strong> {cutDescription}</p>
    <p><strong>Weight:</strong> {averageWeight}</p>
    <p><strong>Price:</strong> {pricePerPound}</p>
  </div>
);

const Products = () => {
  const [beef, setBeef] = useState([]);
  const [pork, setPork] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setBeef(data));

    fetch("/data/pork.json")
      .then(res => res.json())
      .then(data => setPork(data));
  }, []);

  return (
    <main className="products-content">
      <h1><strong>Beef</strong></h1>
      <section className="product-images">
        {beef.map((item) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </section>

      <h1><strong>Pork</strong></h1>
      <section className="product-images">
        {pork.map((item) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </section>
    </main>
  );
};

export default Products;
