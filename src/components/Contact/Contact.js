import { motion } from "framer-motion";
import React from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ShareBanner from "./../Shared/SharedBanner/ShareBanner";
import "./Contact.css";

const Contact = () => {
  const handelContact = (e) => {
    e.preventDefault();
    Swal.fire("Thanks ! We will let you soon");
  };
  return (
    <section className="main-contact">
      <ShareBanner>
        <div className="banner-services">
          <h1>Contacts</h1>
          <div className="service-links">
            <li>
              <Link className="text-decoration-none" to="/home">
                Home
              </Link>
            </li>
          </div>
        </div>
      </ShareBanner>
      {/* Contact details inner */}
      <div className="contact-inner">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="contact-des">
                <div className="contact-title">
                  <span className="sub-title">OUR CONTACT INFORMATION</span>
                </div>
                <h1>
                  Contact Us Now By <span>Phone Number or Email Address</span>{" "}
                </h1>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center">
                <Card.Body>
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h5 className="contact-des">Our Location :</h5>
                  <Card.Text>
                    35 West Dental Street Nyz California 1004
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center">
                <Card.Body>
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h5 className="contact-des">Email Address :</h5>
                  <Card.Text>contactinfo@rola.com support@rola.com</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center">
                <Card.Body>
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h5 className="contact-des">Phone Number :</h5>
                  <Card.Text>+088 123 654 987 +088 123 654 612</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Card className="mb-2 contact-card text-center">
                <Card.Body>
                  <div className="contact-icon">
                    <i className="far fa-clock"></i>
                  </div>
                  <h5 className="contact-des">Open Hour :</h5>
                  <Card.Text>09:00 AM to 18:00 PM Sunday to Thursday</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact form starts */}
      <div className="main-contact-form">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="contact-des">
                <div className="contact-title">
                  <span className="sub-title">MAKE AN CONTACT</span>
                </div>
                <h1>
                  Fill In Your <span>Information & We Will Be In Touch </span>{" "}
                  As Soon As We Can{" "}
                </h1>
              </div>
            </Col>
          </Row>
          <Form onSubmit={handelContact}>
            <Row>
              {/* All forms */}

              <Col xs={12} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    type="email"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Phone"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Subject"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Your message"
                  className=""
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "200px" }}
                    className="contact-text"
                  />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ scale: 1.3 }}
                  className="mt-5"
                >
                  Send Message
                </motion.button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
