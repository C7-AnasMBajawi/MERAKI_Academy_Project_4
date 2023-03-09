import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";import { UserContext } from "../../App";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {setToken} = useContext(UserContext)

  const postLogin = () => {
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then((res) => {
        console.log(res);
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn
          className="mb-4"
          onClick={(e) => {
            postLogin();
          }}
        >
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!" onClick={()=>{navigate("/register")}}>Register</a>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </>
  );
};
