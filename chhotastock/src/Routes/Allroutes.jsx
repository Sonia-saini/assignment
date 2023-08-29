import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../Component/UserPage";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
