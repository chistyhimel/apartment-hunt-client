import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-bg">
      <Container>
        <div className="header-content d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-center display-4 text-white font-weight-bold">
            FIND YOUR HOUSE RENT
          </h1>
          <div className="input-group input-group-lg search-box">
            <input
              type="text"
              className="form-control "
              placeholder="Search..."
            />
            <div className="input-group-append ml-3">
              <p>
                <a href="#" class="btn btn-lg btn-colour-1">
                  Find Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
