import React from "react";
import "./styles.css";

const ProductCard = ({ image, name, cutDescription, averageWeight, pricePerPound }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4>{name}</h4>
      <p><strong>Cut:</strong> {cutDescription}</p>
      <p><strong>Weight:</strong> {averageWeight}</p>
      <p><strong>Price:</strong> {pricePerPound}</p>
    </div>
  );
};

export default ProductCard;