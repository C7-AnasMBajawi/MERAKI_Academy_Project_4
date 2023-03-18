import React from 'react'
import {  useNavigate } from "react-router-dom";
import "./index.css"
export const Home = () => {
    const navigate = useNavigate();
  return (
    <header style={{ paddingLeft: 0 }}>
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://ferrorental.com/wp-content/uploads/2022/06/1-8.jpg')",
        height: 1000,
      }}
    >
      <div
        className="mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Welcome to LUXCAR</h1>
            <h4 className="mb-3">you can start now as :</h4>
            <a
              className="home-btn1 btn btn-outline-light btn-lg"
              href="#!"
              role="button"
              onClick={(e)=>{navigate("/login")}}
            >
              Renter
            </a>
            <a
              className="home-btn2 btn btn-outline-light btn-lg"
              href="#!"
              role="button"
              onClick={(e)=>{navigate("/cars")}}
            >
              Customer
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
