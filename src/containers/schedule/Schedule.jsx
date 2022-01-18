import React from "react";
import "./schedule.css";
import CardFri from "../../components/Cards/CardFri";
import CardSat from "../../components/Cards/CardSat";
import CardSun from "../../components/Cards/CardSun";
import CardMon from "../../components/Cards/CardMon";
export const Schedule = () => (
  <div className="theta_schedule" id="schedule">
    <div className="theta_schedule-header">
      <h1>Schedule</h1>
    </div>
    <div className="schedule_card-container">
      <CardFri className="Fri" />
      <CardSat className="Sat" />
      <CardSun className="Sun" />
      <CardMon className="Mon" />
    </div>
  </div>
);

export default Schedule;
