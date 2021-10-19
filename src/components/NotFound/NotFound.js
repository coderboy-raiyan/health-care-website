import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NotFound.css";
const NotFound = () => {
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
        <Col></Col>
      </Row>
    </Container>
  );
};

export default NotFound;
