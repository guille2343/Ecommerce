import React, { useState } from "react";
import "./Shop.css";
import HomeProducts from "../comp/HomeProducts/HomeProducts";
import { FaEye, FaHeart } from "react-icons/fa";
import Footer from "../comp/Footer/Footer";

const Shop = () => {
  const [tredingProduct, setTredingProduct] = useState(HomeProducts);

  const filtercate = (x) => {
    const filterProducto = HomeProducts.filter((curElm) => curElm.type === x);
    setTredingProduct(filterProducto);
  };

  const allTredingProduct = () => {
    setTredingProduct(HomeProducts);
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="left-box">
          <div className="shop-title">
            <h2># Shop</h2>
            <p>Home - Shop</p>
          </div>

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

          {/* Nueva sección de filtros */}
          <hr className="divider" />
          <div className="left-box-filter">
            <div className="box">
              <ul>
                <li onClick={() => allTredingProduct()}># Trending Product</li>
                <li onClick={() => filtercate("new")}># New</li>
                <li onClick={() => filtercate("style")}># Style</li>
                <li onClick={() => filtercate("top")}># Top Selling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-box">
          <div className="products">
            <div className="container">
              {tredingProduct.map((curElm) => (
                <div className="box" key={curElm.id}>
                  <div className="img-box">
                    <img src={curElm.imgen} alt="product" />
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
