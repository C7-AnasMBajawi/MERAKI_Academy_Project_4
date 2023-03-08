import "./App.css";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Navbar/Register";
import { Login } from "./components/Navbar/Login"
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project 4 </h1>
      </header>
      <Navbar />
      <Routes>
        <Route path ="/register" element ={<Register/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
