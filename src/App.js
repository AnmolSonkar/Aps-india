import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apseligibility from "./components/Apseligibility";
import Apsprocess from "./components/Aps";
import German from "./components/German";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header></Header>

        <Routes>
        <Route path="/" element={<German />} />
          <Route path="/Aps" element={<Apsprocess />} />
          <Route path="/Apseligibility" element={<Apseligibility />} />
        
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
