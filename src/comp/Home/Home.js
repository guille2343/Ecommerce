import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeProducts from "../HomeProducts/HomeProducts";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Home = () => {
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
    <>
      <div className="home">
        <div className="top-banner">
          <div className="content">
            <h3>Elegance-Comfort</h3>
            <h2>Knitted Dress</h2>
            <p>30% Off At Your First Order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left-box">
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
      </div>
    </>
  );
};

export default Home;
