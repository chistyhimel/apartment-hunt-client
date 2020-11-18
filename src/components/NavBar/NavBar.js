import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logos/Logo.png";
const NavBar = () => {
  return (
    <Container style={{ fontFamily: "poppins, sans-serif" }}>
      <Navbar expand="lg" className="pt-md-3 pb-md-3">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="110"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold ">
            <Nav.Link href="#home" className="mr-md-4 text-dark">
            <NavLink to="/" style={{ textDecoration: "none", color:"black"}}>Home</NavLink>
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-4 text-dark">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-4 text-dark">
              Service
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-4 text-dark">
              Concerns
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-4 text-dark">
              Event
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-5 text-dark">
              Contact
            </Nav.Link>
            <p>
              <a href="#" class="btn btn-colour-1">
                <NavLink to="/login" style={{ textDecoration: "none", color:"white"}}>Login</NavLink>
              </a>
            </p>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
