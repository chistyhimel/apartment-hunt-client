import {
  faBath,
  faBed,
  faMapMarked,
  faMapMarkedAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, CardColumns, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import availableRent from "../../availableRentData/availableRentData";

const AvailableRent = () => {
  return (
    <div className="bg-color">
      <Container style={{ fontFamily: "poppins, sans-serif" }}>
        <p className="lead text-center text-color pt-4">House Rent</p>
        <h2 className="text-center font-weight-bold">
          Discover the latest Rent <br />
          available today
        </h2>
        <CardColumns>
          {availableRent.map((rent) => (
            <Card className="border-0" key={rent.id}>
              <Card.Img variant="top" src={rent.img} />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  {rent.name}
                </Card.Title>
                <Card.Text className="text-secondary">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {rent.location}
                  <div className=" d-flex justify-content-between mt-2">
                    <div>
                      <FontAwesomeIcon icon={faBed} /> 3 Bedrooms
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faBath} /> 2 Bathroom
                    </div>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <h2 className="font-weight-bold text-color">
                    $ {rent.price}
                  </h2>
                  <div>
                    <a href="#" class="btn btn-colour-1">
                      <NavLink to={`/details/${rent.name}`} className="text-white text-decoration-none">View Details</NavLink>
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default AvailableRent;
