import React from "react";
import "./volunteers.css";
import {
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
} from "../../assets/profiles/volunteers";
import { Profile } from "../../components/index";
export const Volunteers = () => (
  <div id="volunteers">
    <div className="theta_volunteers-heading">
      <h1>Volunteers</h1>
    </div>
    <div className="theta_volunteers-imgs">
      <Profile name="Kai" img={v1} link="https://devrim.tech" />
      <Profile name="Kai" img={v2} link="https://devrim.tech" />
      <Profile name="Kai" img={v3} link="https://devrim.tech" />
      <Profile name="Kai" img={v4} link="https://devrim.tech" />
      <Profile name="Kai" img={v5} link="https://devrim.tech" />
      <Profile name="Kai" img={v6} link="https://devrim.tech" />
      <Profile name="Kai" img={v7} link="https://devrim.tech" />
      <Profile name="Kai" img={v8} link="https://devrim.tech" />
      <Profile name="Kai" img={v9} link="https://devrim.tech" />
      <Profile name="Kai" img={v10} link="https://devrim.tech" />
    </div>
  </div>
);

export default Volunteers;
