import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  // Hero section starts
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center ">
          <Col xs={12} md={6} lg={6}>
            <div className="left-side-hero mb-4">
              <h5 className="default-title shadow">
                <span>#</span> Keeping Teeth Clean
              </h5>
              <h1 className="animate__animated animate__backInLeft">
                The World Best <span>Dental Specialist</span> Treatment
              </h1>
              <p className="animate__animated animate__backInUp">
                We provide a best treatment for your teeth. And we never
                compromise with our services
              </p>

              <div className="animate__animated  animate__bounceInLeft btn-grp">
                <Link to="/services">
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: 1.2 }}
                    className="book me-3"
                  >
                    Book Appointment
                  </motion.button>
                </Link>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="consult"
                >
                  Consult A dentist
                </motion.button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="p-0">
            <div className="hero-img">
              <img src="https://i.ibb.co/SXCrWJs/main-banner-1.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
