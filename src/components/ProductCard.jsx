import React from "react";
import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children
}) {
  return (
    <article className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      <div className="card-topline">
        <span className="category">{category}</span>
        {children}
      </div>

      <h2>{title}</h2>
      <p className="price">
        {Number(price).toLocaleString("en-PH", {
          style: "currency",
          currency: "PHP",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </p>

      <div className="card-footer">
        <span className={`stock-label ${inStock ? "available" : "unavailable"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
        <button
          type="button"
          onClick={() => onAddToCart(title)}
          disabled={!inStock}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;