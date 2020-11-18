import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ApartmentInfo = (props) => {
  const { name, price } = props.apartment;
  console.log(name, price);
  return (
    <Container>
      <Row>
        <Col md={8} style={{ fontFamily: "poppins, sans-serif" }}>
          <div className="d-flex justify-content-between mt-4">
            <h2 className="font-weight-bold">{name}</h2>
            <h2 className="font-weight-bold text-color">$ {price}</h2>
          </div>
          <h6 className="pb-3">
            3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing
            Apartment for Rent in Rangs Malancha, Melbourne.
          </h6>
          <div className="flex-column property-details pb-3">
          <h5 className="font-weight-bold price-details pb-3">Price Details-</h5>
          <h5>Rent/Month: $550 (negotiable)</h5>
          <h5>Service Charge : 8,000/= Tk per month, subject to change</h5>
          <h5>Security Deposit : 3 month’s rent</h5>
          <h5>Flat Release Policy : 3 months earlier notice required</h5>
          </div>

          
          <div className="flex-column property-details">
          <h5 className="font-weight-bold pb-3">Property Details-</h5>
            <h5>
              {" "}
              Address & Area : Rangs Malancha, House-68, Road-6A (Dead End
              Road), Dhanmondi Residential Area.
            </h5>
            <h5>Flat Size : 3000 Sq Feet. </h5>
            <h5>
              Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            </h5>
            <h5>
              Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious
              Drawing, Dining & Family Living Room, Highly Decorated Kitchen
              with Store Room and Servant room with attached Toilet.{" "}
            </h5>
            <h5>
              Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            </h5>
            <h5>
              Additional Facilities : a. Electricity with full generator load,
              b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s
              Accommodation, d. Community Conference Hall, e. Roof Top
              Beautified Garden and Grassy Ground, f. Cloth Hanging facility
              with CC camera
            </h5>
            <h5></h5>
            <h5></h5>
          </div>
          <h5></h5>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default ApartmentInfo;
