import React from "react";
import { Routes, Route } from "react-router-dom";
import RaceTrack from "../pages/RaceTrack";
import RunnerDetails from "../pages/RunnerDetails";
import ScoreCard from "../pages/ScoreCard";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RunnerDetails />} />
        <Route path="/race" element={<RaceTrack />} />
        <Route path="/score" element={<ScoreCard />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
