import {
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#275A53" }} className="footer-container">
      <Container
        style={{ fontFamily: "poppins, sans-serif" }}
        className="text-white"
      >
        <Row>
          <Col md={4}>
            <div className="d-flex justify-content-between">
              <div className="mr-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="" />
              </div>
              <div>
                {" "}
                <h6>
                  H#340 (4th Floor), Road #24, <br />
                  New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                  Phone: 018XXXXXXXX <br />
                  E-mail: info@company.com <br />
                </h6>
              </div>
            </div>
          </Col>
          <Col md={2} className="flex-column">
            <h5 className="pb-2">Company</h5>
            <h6>About</h6>
            <h6>Sitemap</h6>
            <h6>Support Center</h6>
            <h6>Terms Conditions</h6>
            <h6>Submit Listing</h6>
          </Col>
          <Col md={2} className="flex-column">
            <h5 className="pb-2">Quick Links</h5>
            <h6>Quick Links</h6>
            <h6>Rentals</h6>
            <h6>Sales</h6>
            <h6>Contact</h6>
            <h6>Terms Conditions</h6>
            <h6>Our blog</h6>
          </Col>
          <Col md={4} className="flex-column">
            <h5 className="pb-2">About us</h5>
            <h6>
              We are the top real estate <br />
              agency in Sydney, with agents <br />
              available to answer any <br />
              question 24/7.
            </h6>
            <div
              className="d-flex justify-content-between"
              style={{ width: "200px" }}
            >
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
