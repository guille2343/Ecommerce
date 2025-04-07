import React, { useState } from "react";
import "./Shop.css";
import HomeProducts from "../comp/HomeProducts/HomeProducts";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Shop = () => {
  const [tredingProduct, setTredingProduct] = useState(HomeProducts);

  const filtercate = (x) => {
    const filterProducto = HomeProducts.filter((curElm) => {
      return curElm.type === x;
    });
    setTredingProduct(filterProducto);
  };

  const allTredingProduct = () => {
    setTredingProduct(HomeProducts);
  };

  return (
    <div className="shop">
      <h2># Shop</h2>
      <p>Home - Shop</p>
      <div className="container">
        <div className="left-box">
          <div className="category">
            <div className="header">
              <h3>All Categories</h3>
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
        <div className="right-box">
          <div className="header">
            <div className="heading">
              <h2 onClick={() => allTredingProduct()}>Trending Product</h2>
            </div>
            <div className="cate">
              <h3 onClick={() => filtercate("style")}>New</h3>
              <h3 onClick={() => filtercate("top")}>Style</h3>
              <h3 onClick={() => filtercate("new")}>Top Selling</h3>
            </div>
          </div>
          <div className="products">
            <div className="container">
              {tredingProduct.map((curElm) => {
                return (
                  <div className="box" key={curElm.id}>
                    <div className="img-box">
                      <img src={curElm.imgen} alt="image" />
                      <div className="icon">
                        <div className="icon-box">
                          <FaEye />
                        </div>
                        <div className="icon-box">
                          <FaHeart />
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <h3>{curElm.Name}</h3>
                      <p>${curElm.Price}</p>
                      <button className="btn">Add To Cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
