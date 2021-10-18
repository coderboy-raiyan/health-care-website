import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <section className="main-about" id="about">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="about-left-side">
              <h5 className="default-title shadow">
                <span>#</span> About Our Hospital
              </h5>
              <h1>
                Enjoy Specialized <span>Care Through</span>{" "}
                <span className="colored">Precision Experience</span>
              </h1>
              <p>
                One of the first major discoveries relevant to the field of
                pulmonology was the discovery of pulmonary circulation.
                Originally, it was thought that blood reaching the right side of
                the heart passed through small ‘pores’ in the septum.
              </p>
              <div className="list-of-about">
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>{" "}
                    </span>
                    Complete Crown
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>{" "}
                    </span>
                    Dental Implants
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>{" "}
                    </span>
                    Dental X-Ray
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>{" "}
                    </span>
                    Cosmetic Filling
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>{" "}
                    </span>
                    Teeth Whitening
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i>{" "}
                    </span>
                    Root Canal
                  </li>
                </ul>
              </div>
              <div className="experience">
                <div className="years">
                  <div className="years-icon shadow">
                    <i className="fas fa-tooth"></i>
                  </div>
                  <div className="years-des">
                    <h5>25 years</h5>
                    <p>Dental Experienced</p>
                  </div>
                </div>
                <div className="years">
                  <div className="years-icon shadow">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="years-des">
                    <h5>6405+</h5>
                    <p>Dental Services</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="about-img">
              <img
                src="https://i.ibb.co/NCmk9yN/about-3.jpg"
                alt=""
                className="rounded    "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
