import React from "react";

function Cart({ cart }) {
  return (
    <section className="Cart">
      <h2>Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
