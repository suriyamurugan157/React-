import React from "react";
import { Routes, Route } from "react-router-dom";
// import SignIn from "./Components/SignIn";
// import TripDetails from "./Components/Tripdetails";
import UserProfile from "./Components/UserProfile";


function App() {
  return (
    <Routes>
    {/* <Route path="/" element={<SignIn />} />
    <Route path="/trip-details" element={<TripDetails />} /> */}
    <Route path="/" element={<UserProfile />} />
  </Routes>
  );
}

export default App;
