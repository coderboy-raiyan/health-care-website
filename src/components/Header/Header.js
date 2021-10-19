import { motion } from "framer-motion";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "./../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { logout, userData } = useAuth();

  return (
    <Navbar bg="white" className="shadow-sm" sticky="top" expand="lg">
      <Container fluid className="px-4">
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
            <li className="nav-item me-3">
              <Link className="nav-link " to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link " to="/bookappoinment">
                Book Appointment
              </Link>
            </li>
            {!userData.email && (
              <>
                {" "}
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
                </li>{" "}
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
              </>
            )}
            {userData.email && (
              <>
                <li className="nav-item d-flex align-items-center">
                  <img
                    className="nav-link profile-img"
                    src={userData.photoURL}
                    alt=""
                  />
                  <span className="me-3">{userData.displayName}</span>
                  <motion.button
                    whileTap={{ scale: 1.3 }}
                    whileHover={{ scale: 1.1 }}
                    className=" btn btn-light my-3 "
                    onClick={logout}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </motion.button>
                </li>{" "}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
