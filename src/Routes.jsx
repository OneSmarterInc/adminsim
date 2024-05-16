import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./uiComponents/Navbar";
import InitialAdmin from "./uiComponents/initialAdmin";
import Procurement from "./decisionComponents/Procurement";
import DemandGeneration from "./decisionComponents/DemandGeneration";
import Distribution from "./decisionComponents/Distribution";
import Forecasting from "./decisionComponents/Forecasting";
import InventoryManagement from "./decisionComponents/InventoryManagement";
import IT from "./decisionComponents/IT";
import Manufacturing from "./decisionComponents/Manufacturing";
import Transportation from "./decisionComponents/Transportation";
import Decisions from "./decisionComponents/Decisions";
import Signup from "./uiComponents/Signup";
import Signin from "./uiComponents/Signin";
import Admin from "./uiComponents/Admin";
import Services from "./decisionComponents/Services";

const AppRoutes = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<InitialAdmin />} />
        {/* <Route path="/procurement" element={<Procurement />} />
        <Route path="/demandgeneration" element={<DemandGeneration />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/forecasting" element={<Forecasting />} />
        <Route path="/inventorymanagement" element={<InventoryManagement />} />
        <Route path="/it" element={<IT />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/decisions" element={<Decisions />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/services" element={<Services />}/> */}

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
