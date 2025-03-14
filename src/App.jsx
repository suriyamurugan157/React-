import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import UserProfile from "./Components/UserProfile";
import TripDetails from "./Components/Tripdetails";



function App() {
  return (
 
    <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/user-profile" element={<UserProfile />} />
    <Route path="/trip-details" element={<TripDetails />} />
  </Routes>

  );
}

export default App;
