import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

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
      <div className="footer">
        <div className="container">
          <div className="column">
            <h3>Your Account</h3>
            <ul>
              <li>About Us</li>
              <li>Account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="column">
            <h3>Products</h3>
            <ul>
              <li>Delivery</li>
              <li>Track Order</li>
              <li>New Product</li>
            </ul>
          </div>
          <div className="column">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/share/16GWCuJukq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/flee_ked?igsh=MWowcXkzbWRxdzlnYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@fleeked6?_t=ZS-8vLVdgso5sF&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok /> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
