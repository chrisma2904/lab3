import React, { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import products from "./data/products.js";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  function handleAddToCart(productTitle) {
    setCartCount((currentCount) => currentCount + 1);
    setLastAdded(productTitle);
  }

  return (
    <main className="page-container">
      <header className="site-header">
        <div>
          <p className="eyebrow">PRODUCT CATALOG</p>
          <h1>CVSU Mini Store</h1>
          <p className="subtitle">Browse useful items for school and everyday life.</p>
        </div>
        <div className="store-icon" aria-hidden="true">🛍️</div>
      </header>

      <section className="cart-message" aria-live="polite">
        <span className="cart-icon" aria-hidden="true">🛒</span>
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: <strong>{cartCount}</strong>
            <span className="last-added"> (Last added: {lastAdded})</span>
          </p>
        )}
      </section>

      <section className="catalog-section">
        <div className="section-heading">
          <div>
            <h2>Available Products</h2>
            <p>Choose an item and add it to your cart.</p>
          </div>
          <span className="product-count">{products.length} products</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span className="product-badge new-badge">New</span>}
              {product.id === 5 && <span className="product-badge sale-badge">Sale</span>}
            </ProductCard>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>CVSU Mini Store · React Props and Component Communication</p>
      </footer>
    </main>
  );
}

export default App;