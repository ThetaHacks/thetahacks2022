import React from "react";
import "./accomplishments.css";
import stats from "../../assets/stats.png";
export const Accomplishments = () => (
  <div
    className="theta_accomplishments-heading section_margin section_padding"
    id="accomplishments"
  >
    <h1>ThetaHacks 1 Was Amazing!</h1>
    <img src={stats} alt="ThetaHacks 1 Stats" class="stats_img" />
  </div>
);

export default Accomplishments;
