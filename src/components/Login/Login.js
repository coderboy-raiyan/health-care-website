import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  Alert,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { googleSignIn, signIn, error, setError } = useAuth();
  const [userEamil, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from || "/home";

  const handelGoogle = () => {
    googleSignIn().then((result) => {
      setError("");
      Swal.fire("Good job!", "Welcome to our family!", "success");
      history.push(redirect_uri);
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 6) {
      setError("Password should be at least 6 characters");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: `${error}`,
      });
      return;
    }
    signIn(userEamil, userPassword)
      .then((result) => {
        setError("");
        Swal.fire("Good job!", "Welcome to our family!", "success");
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    console.log(userPassword, userEamil);
    setError("");
  };

  const handelPassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handelEmail = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <section className="main-login">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} lg={6}>
            <div className="main-form shadow">
              <Form onSubmit={handelSubmit}>
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
                    {/* Alert give here */}
                    {error.length ? (
                      <Col xs={12} md={12} lg={12}>
                        <Alert
                          className="animate__animated animate__wobble"
                          variant="danger"
                        >
                          {error}
                        </Alert>
                      </Col>
                    ) : (
                      ""
                    )}
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
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Password"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          required
                          type="password"
                          className="main-inputs"
                          onBlur={handelPassword}
                        />
                      </InputGroup>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="rem-section">
                        <div className="remember">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              type="checkbox"
                              label="Keep me logged in"
                            />
                          </Form.Group>
                        </div>
                        <div className="forget">
                          <Link to="/forgetPassword">Forget Password</Link>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="login-btn">
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          Log in
                        </motion.button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <h4 className="text-center fs-5 text-muted">
                        Or login with{" "}
                      </h4>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="direct-login" onClick={handelGoogle}>
                        <motion.div
                          whileTap={{ scale: 1.2 }}
                          whileHover={{ scale: 1.3 }}
                          className="google"
                        >
                          <span>
                            <i className="fab fa-google"></i>
                          </span>
                          <span>Google</span>
                        </motion.div>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="have-account">
                        <p className="text-center text-muted mt-5">
                          Don't have an account?{" "}
                          <Link to="signup">Register</Link>{" "}
                        </p>
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

export default Login;
