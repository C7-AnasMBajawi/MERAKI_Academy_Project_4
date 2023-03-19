import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DoB, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const role = "64075efb9e44d62bd11f48bd";


  const successfullyNotify = ()=>{
    toast.success('succussfly Registerd', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  const errorNotify =() =>{
    toast.error('fields are invalid', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const postUser = () => {
    axios
      .post("http://localhost:5000/user/register", {
        firstName,
        lastName,
        DoB,
        phoneNumber,
        email,
        password,
        role,
      })
      .then((res) => {
        console.log(res);
        successfullyNotify()
      })
      .catch((err) => {
        console.log(err);
        errorNotify()
      });
  };

  return (
    <MDBContainer breakpoint="md">
      <MDBContainer fluid className="my-5">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="date of birth"
                  id="form5"
                  type="date"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="phone Number"
                  id="form6"
                  type="text"
                  onClick={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn
                  className="w-100 mb-4"
                  size="md"
                  onClick={(e) => {
                    postUser();
                  }}
                >
                  sign up
                </MDBBtn>

                <MDBBtn
                  className="w-100 mb-4"
                  size="md"
                  onClick={(e) => {
                    navigate("/login");
                  }}
                >
                  log in
                </MDBBtn>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/2019-bentley-continental-gt-placement-1525814986.jpg"
              class="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer/>
    </MDBContainer>
  );
};
