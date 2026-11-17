import React from "react";

function ProductCard({ product, inCart, onAddToCart }) {
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{product.name}</span>
      <span className="category">{product.category}</span>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </li>
  );
}

export default ProductCard;
