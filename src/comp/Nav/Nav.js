import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="header">
      <div className="top-header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping When Shopping Upto $1000</p>
        </div>
      </div>
      <div className="mid-header">
        <div className="logo">
          <img src="../images/Logo.png" alt="Logo" />
        </div>
        <div className="search-box">
          <input type="text" placeholder="search" />
          <button>
            <IoSearchOutline />
          </button>
        </div>
        {isAuthenticated ? ( // logout button (boton de salida)
          <div className="user">
            <div className="icon">
              <CiLogout />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          //login button (boton de inicio )
          <div className="user">
            <div className="icon">
              <CiLogin />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        )}
      </div>
      <div className="last-header">
        <div className="user-profile">
          {isAuthenticated ? (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <h2>{String(user.name)}</h2>
                <p>{String(user.email)}</p>
              </div>
            </>
          ) : (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <p>Please Login</p>
              </div>
            </>
          )}
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/collection" className="link">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="offer">
          <p>Flat 10% Over All Iphone</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
