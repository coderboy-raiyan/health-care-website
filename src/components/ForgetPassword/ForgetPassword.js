import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const ForgetPAssword = () => {
  const { updatePassword } = useAuth();
  const [updateEmail, setUpdateEmail] = useState();
  const handelUpdate = (e) => {
    e.preventDefault();
    updatePassword(updateEmail);
  };

  const handelEmail = (e) => {
    setUpdateEmail(e.target.value);
  };

  return (
    <section className="main-login">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} lg={6}>
            <div className="main-form shadow">
              <Form onSubmit={handelUpdate}>
                <Row>
                  <div className="form-login-inner">
                    <Col xs={12} md={12} lg={12}>
                      <div className="brand-img">
                        <Link to="/home">
                          <img
                            src="https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/logo.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Email"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          required
                          type="email"
                          className="main-inputs"
                          onBlur={handelEmail}
                        />
                      </InputGroup>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="login-btn">
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          Next
                        </motion.button>
                      </div>
                    </Col>
                  </div>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForgetPAssword;
