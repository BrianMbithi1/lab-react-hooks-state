import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, cart, onAddToCart }) {
  return (
    <ul className="Items">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.some((item) => item.id === product.id)}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
}

export default ProductList;