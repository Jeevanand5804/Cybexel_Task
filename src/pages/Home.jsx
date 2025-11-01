import React from "react";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import headphoneImage from "../images/headphone.png";
import Category from "../components/Category";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#f6cb67ff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              paddingTop: "10px",
              margin: "0",
              width: "50%",
              textAlign: "center",
            }}
          >
            <h2>Roco Wireless HeadPhone</h2>
            <Button className="bg-light text-black">
              <NavLink to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                <FaShoppingCart className="text-dark fs-5" /> Shop Now
              </NavLink>
            </Button>
          </div>
          <div>
            <img
              src={headphoneImage}
              alt="headphone"
              style={{
                width: "100%",
                paddingTop: "100px",
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <Category />
      <div className="d-flex justify-content-between align-items-center mb-4"
        style={{ margin: '10px 200px', padding: '0px 50px',backgroundColor: "#9bc5ecff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              paddingTop: "10px",
              margin: "0",
              width: "50%",
              textAlign: "center",
            }}
          >
            <h2>Enhance Your Audio Experience</h2>
            <Button className="bg-light text-black">
                <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                  <FaShoppingCart className="text-dark fs-5" /> Shop Now
                </Link>
            </Button>
          </div>
          <div>
            <img
              src={headphoneImage}
              alt="headphone"
              style={{
                width: "100%",
                paddingLeft:"100px",
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
