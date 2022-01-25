import React from "react";
import "./sponsors.css";
import { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 } from "../../assets/sponsors";
import { Profile } from "../../components/index";
export const Sponsors = () => (
  <div id="sponsors">
    <div className="theta_sponsor-heading">
      <h1>Sponsors</h1>
    </div>
    <div className="theta_sponsor-imgs">
      <Profile img={s1} link="https://devrim.tech" />
      <Profile img={s2} link="https://devrim.tech" />
      <Profile img={s3} link="https://devrim.tech" />
      <Profile img={s4} link="https://devrim.tech" />
      <Profile img={s5} link="https://devrim.tech" />
      <Profile img={s6} link="https://devrim.tech" />
      <Profile img={s7} link="https://devrim.tech" />
      <Profile img={s8} link="https://devrim.tech" />
      <Profile img={s9} link="https://devrim.tech" />
      <Profile img={s10} link="https://devrim.tech" />
    </div>
  </div>
);

export default Sponsors;
