import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
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
      <Footer />
    </div>
  );
};

export default Home;
