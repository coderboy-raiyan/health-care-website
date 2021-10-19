import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push("/home");
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className="not-img">
            <img
              src="https://i.ibb.co/PtdVNf8/404-Error-Page-not-Found-with-people-connecting-a-plug-rafiki.png"
              alt=""
            />
          </div>
        </Col>
        <Col xs={12} md={12} lg={12} className="d-flex justify-content-center">
          <div className="back-btn mb-5">
            <button onClick={() => window.history.back()}>Go Back</button>
            <button className="home-back" onClick={handelClick}>
              Home
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
