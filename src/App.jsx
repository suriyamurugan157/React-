import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import TripDetails from "./Components/Tripdetails";


function App() {
  return (
    <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/trip-details" element={<TripDetails />} />
  </Routes>
  );
}

export default App;
