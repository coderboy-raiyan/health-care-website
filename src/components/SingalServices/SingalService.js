import { motion } from "framer-motion";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./SingalService.css";
const SingalService = ({ service }) => {
  console.log(service);
  const { id, title, des, img } = service;
  const history = useHistory();

  const handelDetails = () => {
    history.push(`/service/${id}`);
  };

  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="h-100 main-card text-center ">
        <div className="card-img">
          <Card.Img variant="top" src={img} />
        </div>

        <div className="card-icon">
          <i className="fas fa-tooth"></i>
        </div>

        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-des text-capitalize">
            {des.slice(74, 190)}...
          </Card.Text>
          <motion.button
            onClick={handelDetails}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.2 }}
            className="card-btn"
          >
            More Details
          </motion.button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingalService;
