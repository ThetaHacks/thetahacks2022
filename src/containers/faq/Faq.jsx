import React from "react";
import "./faq.css";
import { Accordion } from "../../components/index";
export const Faq = () => {
  return (
    <div id="faq">
      <div className="faq-header">
        <h1>FAQ</h1>
      </div>
      <div className="accordion-section">
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
        <Accordion
          q="What is ThetaHacks"
          a="ThetaHacks is a 36-hour virtual event where students from all over the world can come together to make something together, whether software or hardware"
        />
      </div>
    </div>
  );
};

export default Faq;
