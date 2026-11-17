import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import ProductList from "./ProductList";
import itemData from "../data/items"; // adjust to wherever your item data lives
import Cart from "./Cart";

// ...inside the returned JSX, after <ProductList ... />
<Cart cart={cart} />  

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function handleToggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function handleAddToCart(product) {
    // don't add the same product twice
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const itemsToDisplay = itemData.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h1>Grocery App</h1>
        <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
        <select
          name="filter"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </header>
      <ProductList
        products={itemsToDisplay}
        cart={cart}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;