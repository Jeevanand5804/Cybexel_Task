import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="shadow-sm py-3 mx-auto" style={{ backgroundColor: "#c6bfbfff",width:"70%",marginTop:"10px", zIndex:"1000", position:"fixed", left:"0", right:"0" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary">
            eTrade
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="gap-4">
              <Nav.Link as={Link} to="/" className="text-dark fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="text-dark fw-semibold">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/pages" className="text-dark fw-semibold">
                Pages
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-dark fw-semibold">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-dark fw-semibold">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-dark fw-semibold">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center gap-3">
            <FaSearch className="text-dark fs-5" style={{ cursor: "pointer" }} />
            <FaHeart className="text-dark fs-5" style={{ cursor: "pointer" }} />
            <FaShoppingCart className="text-dark fs-5" style={{ cursor: "pointer" }} />
            <FaUser className="text-dark fs-5" style={{ cursor: "pointer" }} />
          </div>
        </Container>
      </Navbar>
      <div className="bg-light" >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
