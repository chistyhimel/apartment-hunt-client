import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const BookingList = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col md={9}>
          <h4 className="pt-4 pb-4">Booking List</h4>

          <table className="table table-borderless">
            <thead>
              <tr className="border " style={{ backgroundColor: "#F5F6FA" }}>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Phone</th>
                <th scope="col">Message</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingList;
