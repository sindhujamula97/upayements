import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Plp from "./components/Plp";
import Pdp from "./components/Pdp";
import Create from "./components/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
     
<Plp/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Plp />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
