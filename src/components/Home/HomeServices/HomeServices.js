import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingalService from "../../SingalServices/SingalService";
import useAllService from "./../../../hooks/useAllService";
import "./HomeServices.css";
const HomeServices = () => {
  const { services } = useAllService();
  return (
    <section className="home-services">
      <Container>
        <Row>
          <Col xs={12} md={8} lg={8}>
            <div className="home-services-titles">
              <h5 className="default-title shadow">
                <span>#</span> Our Best Dental Services
              </h5>
              <h1 className="animate__animated animate__bounceInRight">
                <span>Enjoy Specialized Care Through</span> Precision, Artistry,
                and Experience
              </h1>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Link to="/services" className="text-decoration-none">
              <motion.button
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
                className="d-block ms-auto home-services-btn"
                onClick={() => window.scrollTo(0, 0)}
              >
                Vew all Services
              </motion.button>
            </Link>
          </Col>
        </Row>
        <Row className="g-4 mt-5">
          {services.slice(0, 6).map((service) => {
            return <SingalService service={service} key={service.id} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default HomeServices;
