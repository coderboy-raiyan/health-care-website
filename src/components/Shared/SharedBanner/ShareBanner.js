import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SharedBanner.css";
const ShareBanner = ({ children }) => {
  return (
    <section className="shared-banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={6}>
            <div className="shared-banner-inner">{children}</div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="page-banner-image text-end">
              <img src="https://i.ibb.co/9yFRhmH/page-banner.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShareBanner;
