import { motion } from "framer-motion";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <Navbar bg="white" className="shadow-sm" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/home">
          <img
            src="https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/logo.png"
            alt=""
            width="130px"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100%" }}
          >
            <li className="nav-item me-3">
              <Link className="nav-link " to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <NavHashLink smooth className="nav-link " to="/home#about">
                About
              </NavHashLink>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/login">
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.3 }}
                  className="btn btn-light"
                >
                  Login
                </motion.button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="me-4"
                >
                  Sign up
                </motion.button>
              </Link>
            </li>
            <li className="nav-item">
              <motion.button
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                className=" btn my-3"
              >
                Log out
              </motion.button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
