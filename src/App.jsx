
import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import products from "./data/products.js";

function App() {
  // Cart states from Lab 3
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Lab 4 states
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Add product to cart
  function handleAddToCart(productTitle) {
    setCartCount((currentCount) => currentCount + 1);
    setLastAdded(productTitle);
  }

  // Debounce effect: wait 300ms before updating search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    // Clear the previous timer when searchText changes
    return () => clearTimeout(timer);
  }, [searchText]);

  // Filter products based on keyword and category
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.trim().toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sort products without modifying the original array
  filteredProducts = [...filteredProducts];

  if (sortOrder === "low-to-high") {
    filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortOrder === "high-to-low") {
    filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  // Update browser tab title when result count changes
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  // Clear all filters
  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  }

  return (
    <main className="page-container">
      <header className="site-header">
        <div>
          <p className="eyebrow">PRODUCT CATALOG</p>
          <h1>CVSU Mini Store</h1>
          <p className="subtitle">
            Browse useful items for school and everyday life.
          </p>
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
            <span className="last-added">
              {" "}(Last added: {lastAdded})
            </span>
          </p>
        )}
      </section>

      <section className="catalog-section">
        <div className="section-heading">
          <div>
            <h2>Available Products</h2>
            <p>Choose an item and add it to your cart.</p>
          </div>
          <span className="product-count">
            {products.length} products
          </span>
        </div>

        {/* Search and filter controls */}
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          category={category}
          setCategory={setCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onClear={handleClearFilters}
        />

        {/* Display matching product count */}
        <p className="showing-count">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Display products or empty state */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 1 && (
                  <span className="product-badge new-badge">New</span>
                )}

                {product.id === 5 && (
                  <span className="product-badge sale-badge">Sale</span>
                )}
              </ProductCard>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>🔍</span>
            <h3>No products found.</h3>
            <p>Try a different keyword or category.</p>
          </div>
        )}
      </section>

      <footer className="site-footer">
        <p>CvSU Mini Store · React useState and useEffect</p>
      </footer>
    </main>
  );
}

export default App;
