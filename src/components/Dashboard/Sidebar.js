import { faHdd, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logos/Logo.png";

const Sidebar = () => {
  return (
    <>
      <img alt="" src={logo} width="130" className="d-inline-block align-top" />
      <div className="flex-column pt-5">
        <h5 className="pb-2">
          <NavLink to="/bookinglist" style={{ textDecoration: "none", color: "black" }}>
            <FontAwesomeIcon icon={faHdd} /> Booking List
          </NavLink>
        </h5>
        <h5 className="pb-2">
          <NavLink to="/addBooking" style={{ textDecoration: "none", color: "black" }}>
            <FontAwesomeIcon icon={faPlus} /> Add Booking
          </NavLink>
        </h5>
              <h5>
              <NavLink to="/myRent" style={{ textDecoration: "none", color: "black" }}>
              <FontAwesomeIcon icon={faHome} /> My Rent
          </NavLink>
          
        </h5>
      </div>
    </>
  );
};

export default Sidebar;
