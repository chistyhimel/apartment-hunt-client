import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import availableRentData from "../../availableRentData/availableRentData";
import NavBar from "../NavBar/NavBar";
import "./ApartmentDetails.css";
import RequestBookingForm from "./RequestBookingForm";
import bottomImg1 from "../../images/Rectangle 407.png";
import bottomImg2 from "../../images/Rectangle 408.png";
import bottomImg3 from "../../images/Rectangle 409.png";
import bottomImg4 from "../../images/Rectangle 410.png";
import ApartmentInfo from "./ApartmentInfo";

const ApartmentDetails = () => {
  const { apartmentName } = useParams();
  console.log(apartmentName);
  const apartment = availableRentData.find(
    (apartment) =>
      apartment.name.toLocaleLowerCase() === apartmentName.toLocaleLowerCase()
  );
  return (
    <>
      <NavBar></NavBar>
      <div className="apartment-details-banner">
        <div className="align-self-center">
          {" "}
          <h1 className="font-weight-bold text-center">Apartment</h1>
        </div>
      </div>
      <Container>
        <Row className="pt-4">
          <Col md={8}>
            <img src={apartment.img} alt="" className="img-fluid" />
            <Row className="mt-3">
              <Col md={6} lg={3}>
                <img src={bottomImg1} alt="" className="img-fluid" />
              </Col>
              <Col md={6} lg={3}>
                <img src={bottomImg2} alt="" className="img-fluid" />
              </Col>
              <Col md={6} lg={3}>
                <img src={bottomImg3} alt="" className="img-fluid" />
              </Col>
              <Col md={6} lg={3}>
                <img src={bottomImg4} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Col>
          <Col md={4} className="bg-color pt-5">
            <RequestBookingForm apartment={apartment}></RequestBookingForm>
          </Col>
        </Row>
        
          </Container>
          <ApartmentInfo apartment={apartment}></ApartmentInfo>
    </>
  );
};

export default ApartmentDetails;
