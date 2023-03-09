import "./App.css";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AddCarAd } from "./components/AddCarAd";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, createContext} from "react";
export const UserContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <UserContext.Provider value={{token , setToken , isLoggedIn , setIsLoggedIn}}>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addAd" element={<AddCarAd />}/>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
