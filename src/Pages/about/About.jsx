import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-us">
        <h2>ABOUT US.</h2>
        <div className="left">
          <p>About us.</p>
          <p>Our team.</p>
          <p>press.</p>
        </div>
        <div className="right">
          <p>
            Pratibimb-The Reflection of Art, is the official Fine Arts and
            Photography Club of SGSITS, Indore. The club was formed on the 19th
            of August 2011, i.e on the occasion of World Photography Day. The
            word 'pratibimb' means reflection. With these historic badges that
            SGSITS has in the technology arena, we embarked on a journey to
            promote Fine Arts and Photography. The club is working under the
            guidance of Prof. D.S. Ajnar and Mr. Alex Kutty.
          </p>
        </div>
      </div>

      <div className="background-img-container">
        <div className="background-img-2"></div>
      </div>

      <div className="team">
        <div className="left2"></div>
        <div className="right2">
          <h2>THE TEAM.</h2>
          <p>
            A group of enthusiasts, under the guidance of Director Dr. Sudhir D.
            Bhadauria, were behind this mesmerizing idea. The main motto of the
            club is to promote art amongst the students of the college by
            organizing world-class events and workshops by the oracles in the
            field.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
