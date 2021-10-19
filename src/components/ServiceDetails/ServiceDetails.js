import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useHistory, useParams } from "react-router-dom";
import useAllService from "./../../hooks/useAllService";
import ShareBanner from "./../Shared/SharedBanner/ShareBanner";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const history = useHistory();
  const { services } = useAllService();
  const { serviceId } = useParams();
  const [detailService, setDetailService] = useState({});

  useEffect(() => {
    if (services.length) {
      const flitered = services.find(
        (service) => service.id === Number(serviceId)
      );
      setDetailService(flitered);
    }
  }, [services]);

  //  filter all the popular services
  const handelNestedDetails = (id) => {
    window.scrollTo(0, 0);
    const filterId = services.find((service) => service.id === Number(id));
    setDetailService(filterId);
    history.push(`/service/${id}`);
  };

  // Catch error if dynamic id is not found
  if (detailService === undefined) {
    return (
      <Container>
        <div className="main-error vh-100  d-flex justify-content-center flex-column align-items-center text-danger">
          <img
            src="https://i.ibb.co/jRRLk9K/Oops-404-Error-with-a-broken-robot-bro.png"
            alt=""
            width="300px"
          />
          <h5 className="text-danger">
            <Alert variant="danger">Your Service doesn't exists sorry</Alert>
          </h5>
        </div>
      </Container>
    );
  }

  return (
    <div className="main-service">
      {/* Details banner starts */}
      <ShareBanner>
        <div className="details-banner">
          <h1>{detailService?.title}</h1>
          <div className="detail-links">
            <Link className="fs-5" to="/home">
              Home
            </Link>
          </div>
        </div>
      </ShareBanner>
      {/* All details starts here */}
      <div className="main-details">
        <Container>
          <Row>
            {/* left side details */}
            <Col xs={12} md={5} lg={5}>
              <div className="left-side-details">
                <div className="search-detail">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="py-2 px-4"
                    />
                    <Button disabled id="button-addon2">
                      <i className="fas fa-search"></i>
                    </Button>
                  </InputGroup>
                </div>
                <div className="popular-services">
                  <h5>Popular Services</h5>
                  {/* filter the popular services
                   */}
                  {services.slice(0, 5).map((title, index) => (
                    <button
                      onClick={() => handelNestedDetails(title.id)}
                      key={index}
                      className="filterPopular"
                    >
                      {title.title}
                    </button>
                  ))}
                </div>
                {/* Working time */}
                <div className="working-time">
                  <h6>Working time</h6>
                  <ul>
                    <li>
                      {" "}
                      <span>Monday - Thursday</span> <span>08:00 - 18:00</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span>Friday</span> <span>07:00 - 22:00</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span>Saturday</span> <span>08:00 - 18:00</span>{" "}
                    </li>
                  </ul>
                </div>
                {/* Doctors */}
                <div className="card mb-3 main-doctors-card shadow border-0">
                  <div className="row g-0">
                    <div className="col-md-4 ">
                      <div className="doctor-img">
                        <img
                          src={detailService?.doctor_img}
                          className="img-fluid rounded-circle "
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title mb-0 py-2">
                          {detailService?.doctor_name}
                        </h5>
                        <h6 className="deg">{detailService?.deg}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {/* Right side details */}
            <Col xs={12} md={7} lg={7}>
              <div className="about-service">
                <div className="detail-img">
                  <img src={detailService?.img} alt="" />
                </div>

                <div className="all-major-details">
                  <h1>{detailService?.title}</h1>
                  <p className="des-one">{detailService?.des?.slice(0, 250)}</p>
                  <div className="procedure-img ">
                    <img className="rounded" src={detailService?.img2} alt="" />
                  </div>
                  <h4 className="my-5">
                    Now the procedure of {detailService?.title} :{" "}
                  </h4>
                  <p className="des-two">
                    {detailService?.des?.slice(260, 1000)}
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={12} lg={12}>
              <div className="detail-btn ">
                <Link to="/bookappoinment">
                  <motion.button
                    whileTap={{ scale: 1.3 }}
                    whileHover={{ scale: 1.2 }}
                    className="appointment-button"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Books your appointment Now
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ServiceDetails;
