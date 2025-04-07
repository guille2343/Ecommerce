import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <h2># Shop</h2>
      <p>Home - Shop</p>
      <div className=" container">
        <div className="left-box">
          <div className="category">
            <div className="header">
              <h2>All Categories</h2>
            </div>
            <div className="box">
              <ul>
                <li># women's fashion</li>
                <li># Men's fashion</li>
                <li># footwear</li>
                <li># Bags</li>
                <li># Accessories</li>
                <li># Cosmetics</li>
                <li># Perfumes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
