import React from "react";
import "./team.css";
import {
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
} from "../../assets/profiles/team";
import { Profile } from "../../components/index";
export const Team = () => (
  <div id="team">
    <div className="theta_team-heading">
      <h1>Team</h1>
    </div>
    <div className="theta_team-imgs">
      <Profile name="Kai" img={t1} link="https://devrim.tech" />
      <Profile name="Kai" img={t2} link="https://devrim.tech" />
      <Profile name="Kai" img={t3} link="https://devrim.tech" />
      <Profile name="Kai" img={t4} link="https://devrim.tech" />
      <Profile name="Kai" img={t5} link="https://devrim.tech" />
      <Profile name="Kai" img={t6} link="https://devrim.tech" />
      <Profile name="Kai" img={t7} link="https://devrim.tech" />
      <Profile name="Kai" img={t8} link="https://devrim.tech" />
      <Profile name="Kai" img={t9} link="https://devrim.tech" />
      <Profile name="Kai" img={t10} link="https://devrim.tech" />
    </div>
  </div>
);

export default Team;
