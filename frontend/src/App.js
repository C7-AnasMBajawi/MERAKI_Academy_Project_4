import "./App.css";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Navbar/Register";
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
      </Routes>
    </div>
  );
}

export default App;