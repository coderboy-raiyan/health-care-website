import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAllService from "./../../hooks/useAllService";
import SingalService from "./../SingalServices/SingalService";
import "./Services.css";
const Services = () => {
  // All services starts
  const { services } = useAllService();

  return (
    <section className="main-services">
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="banner-services">
                <h1>Services</h1>
                <div className="service-links">
                  <li>
                    <Link className="text-decoration-none" to="/home">
                      Home
                    </Link>
                  </li>
                </div>
              </div>
              <div className="page-banner">
                <img src="https://i.ibb.co/qFJK1SH/shape-1.png" alt="" />
              </div>
              <div className="page-banner-2">
                <img
                  src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/09/shape-2.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="services">
        <Container>
          <Row>
            <span className="sub-title">
              <i className="fas fa-hashtag me-3"></i>
              OUR DENTAL SERVICES{" "}
            </span>
            <Col xs={12} md={12} lg={12}>
              <h1 className="services-title">
                Enjoy Specialized Care Through Precision, Artistry, And
                Experience
              </h1>
            </Col>
          </Row>
          <Row className="all-services g-4">
            {services.map((service) => {
              return <SingalService service={service} key={service.id} />;
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Services;
