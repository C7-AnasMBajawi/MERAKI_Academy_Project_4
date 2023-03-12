// import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./index.css";
import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    // <div className='navbar'>
    //     <button className='rent' onClick={(e)=>{navigate("/register")}}>rent my car</button>
    //     <button className='rent1'  onClick={(e)=>{navigate("/cars")}}>cars for rent</button>
    //     <input class="search-bar" type="text" />
    // </div>
    <MDBNavbar className="bg-primary">
      <MDBContainer fluid>
        <MDBNavbarBrand><img src="https://t3.ftcdn.net/jpg/04/08/51/18/360_F_408511812_8UGTuX8BieG571jrbmz0PYsqLv1xPrjO.jpg" height="30" width="40"/></MDBNavbarBrand>
        <MDBNavbarLink className="text-white" 
          onClick={(e) => {
            navigate("/login");
          }}
        >
          rent my car
        </MDBNavbarLink>

        <MDBNavbarLink className="text-white" onClick={(e)=>{navigate("/cars")}}>vehclies</MDBNavbarLink>

        <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <input
            className="form-control"
            placeholder="cars for rent"
            aria-label="Search"
            type="Search"
          />
          <MDBBtn outline className="bg-light">Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
};
