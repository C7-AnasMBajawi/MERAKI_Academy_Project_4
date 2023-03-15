import { Link, useNavigate } from "react-router-dom";
// import "./index.css";
import React, { useContext } from "react";
import { UserContext } from "../../App";
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
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  return (
    <>
      {isLoggedIn ? (
        <>
          <MDBNavbar fixed='top' className="bg-primary mb-4">
            <MDBContainer fluid>
              <MDBNavbarBrand>
                <img
                  src="https://t3.ftcdn.net/jpg/04/08/51/18/360_F_408511812_8UGTuX8BieG571jrbmz0PYsqLv1xPrjO.jpg"
                  height="30"
                  width="40"
                />
              </MDBNavbarBrand>
              <MDBNavbarLink
                className="text-white"
                onClick={(e) => {
                  navigate("/addAd");
                }}
              >
                rent my car
              </MDBNavbarLink>

              <MDBNavbarLink
                className="text-white"
                onClick={(e) => {
                  navigate("/cars");
                }}
              >
                vehclies
              </MDBNavbarLink>

              <MDBNavbarLink
                className="text-white"
                onClick={(e) => {
                  navigate("/user/cars");
                }}
              >
                my cars
              </MDBNavbarLink>

              <MDBNavbarLink
                className="text-white"
                onClick={(e) => {
                  localStorage.clear();
                  setIsLoggedIn(false);
                  navigate("/login");
                }}
              >
                log out
              </MDBNavbarLink>

              <MDBInputGroup  tag="form" className="d-flex w-auto">
                <input
                  className="form-control"
                  placeholder="cars for rent"
                  aria-label="Search"
                  type="Search"
                />
                <MDBBtn className="bg-light text-primary">
                  Search
                </MDBBtn>
              </MDBInputGroup>
            </MDBContainer>
          </MDBNavbar>
        </>
      ) : (
        <>
          <MDBNavbar className="bg-primary">
            <MDBContainer fluid>
              <MDBNavbarBrand>
                <img
                  src="https://t3.ftcdn.net/jpg/04/08/51/18/360_F_408511812_8UGTuX8BieG571jrbmz0PYsqLv1xPrjO.jpg"
                  height="30"
                  width="40"
                />
              </MDBNavbarBrand>
              <MDBNavbarLink
                className="text-white"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                rent my car
              </MDBNavbarLink>

              <MDBNavbarLink
                className="text-white"
                onClick={(e) => {
                  navigate("/cars");
                }}
              >
                vehclies
              </MDBNavbarLink>

              <MDBInputGroup tag="form" className="d-flex w-auto">
                <input
                  className="form-control"
                  placeholder="cars for rent"
                  aria-label="Search"
                  type="Search"
                />
                <MDBBtn className="bg-light text-primary">
                  Search
                </MDBBtn>
              </MDBInputGroup>
            </MDBContainer>
          </MDBNavbar>
        </>
      )}
    </>
  );
};
