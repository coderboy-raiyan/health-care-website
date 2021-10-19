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
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../hooks/useAuth";

const Signup = () => {
  const { signup, signUperror, setsignUpError } = useAuth();
  const [userName, setUserName] = useState("");
  const [userEamil, setUserEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // console.log(userPassword, confPassword);

  // getting the user values
  const handelSubmit = (e) => {
    e.preventDefault();

    if (userPassword !== confPassword) {
      setsignUpError("Password not matching");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: `${signUperror}`,
      });
      return;
    }
    if (userPassword.length < 6) {
      setsignUpError("Password should be at least 6 characters");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: `${signUperror}`,
      });
      return;
    }

    signup(userName, userPhoto, userEamil, userPassword);
    setsignUpError("");
    console.log(signUperror.length);
  };

  // getting the user values
  const handelName = (e) => {
    setUserName(e.target.value);
  };
  const handelEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handelPhoto = (e) => {
    setUserPhoto(e.target.value);
  };
  const handelPassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handelConfPass = (e) => {
    setConfPassword(e.target.value);
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
                    {signUperror.length ? (
                      <Col xs={12} md={12} lg={12}>
                        <Alert
                          className="animate__animated animate__wobble"
                          variant="danger"
                        >
                          {signUperror}
                        </Alert>
                      </Col>
                    ) : (
                      ""
                    )}
                    <Col xs={12} md={12} lg={12}>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Name"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          required
                          type="text"
                          className="main-inputs"
                          onBlur={handelName}
                        />
                      </InputGroup>
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
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Photo URL"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          required
                          type="link"
                          className="main-inputs"
                          onBlur={handelPhoto}
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
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Confirm Password"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                          required
                          type="password"
                          className="main-inputs"
                          onBlur={handelConfPass}
                        />
                      </InputGroup>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="login-btn">
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          Sign up
                        </motion.button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={12}>
                      <div className="have-account">
                        <p className="text-center text-muted mt-5">
                          Already have a account? <Link to="login">Login</Link>{" "}
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

export default Signup;
