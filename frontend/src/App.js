import "./App.css";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AddCarAd } from "./components/AddCarAd";
import { Cars } from "./components/Cars";
import { Footer } from "./components/Footer";
import {Home} from "./components/Home"
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, createContext } from "react";
import { UserCars } from "./components/UserCars";
export const UserContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") == null ? false : true
  );
  return (
    <UserContext.Provider
      value={{ token, setToken, isLoggedIn, setIsLoggedIn }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addAd" element={<AddCarAd />} />
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/user/cars" element={<UserCars />}></Route>
          <Route path ="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
