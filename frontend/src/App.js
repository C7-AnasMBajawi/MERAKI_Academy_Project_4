import "./App.css";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, createContext} from "react";
export const UserContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <UserContext.Provider value={{token , setToken}}>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
