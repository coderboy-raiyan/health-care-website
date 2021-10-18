import { motion } from "framer-motion";
import React from "react";
import {
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./BookAppoinment.css";

const BookAppoinment = () => {
  const handelAppoin = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Congrats! Your appointment has been fixed",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <section className="main-appointment">
      <div className="banner">
        <Container>
          {/* appointments banner */}
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="banner-services">
                <h1>Appointment</h1>
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
      {/* Appointment title and des */}
      <div className="appointment-titles py-5">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="contact-des">
                <div className="contact-title">
                  <span className="sub-title"> OUR SPECIAL FEATURES</span>
                </div>
                <h1>
                  Features That You Will{" "}
                  <span>Love Us and Enjoy Specialized Care</span>{" "}
                </h1>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center appointment-card shadow h-100">
                <Card.Body>
                  <div className="appointment-des">
                    <div className="contact-icon">
                      <span>
                        <i className="fas fa-hospital-user"></i>
                      </span>{" "}
                    </div>
                    <h4>Patient care</h4>
                  </div>
                  <Card.Text>
                    We have a special treatment for the most specific patient
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center appointment-card shadow h-100">
                <Card.Body>
                  <div className="appointment-des">
                    <div className="contact-icon">
                      <span>
                        <i className="far fa-gem"></i>
                      </span>{" "}
                    </div>
                    <h4>Experience</h4>
                  </div>
                  <Card.Text>
                    We give you the best experience that you can't thought
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center appointment-card shadow h-100">
                <Card.Body>
                  <div className="appointment-des">
                    <div className="contact-icon">
                      <span>
                        <i className="fas fa-tooth"></i>
                      </span>{" "}
                    </div>
                    <h4>Certified Dentists</h4>
                  </div>
                  <Card.Text>
                    We have the best doctors and the most effective treatment
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center appointment-card shadow h-100">
                <Card.Body>
                  <div className="appointment-des">
                    <div className="contact-icon">
                      <span>
                        <i className="fas fa-tooth"></i>
                      </span>{" "}
                    </div>
                    <h4>Quality Brackets</h4>
                  </div>
                  <Card.Text>We never compromise with our customers</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Appoinment form starts */}
      <div className="appointment-form">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="form-inner my-5">
                <Form onSubmit={handelAppoin}>
                  <Row>
                    <Col xs={12} md={12} lg={12}>
                      <h4>Make An Appointment</h4>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Name"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          required
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Email"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          type="email"
                          required
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Phone"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          type="number"
                          required
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Date"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          type="date"
                          required
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        Book appointment
                      </motion.button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default BookAppoinment;
