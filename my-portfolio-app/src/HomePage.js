import React from "react";
import ProfilePicture from "./ProfilePicture.jpg";
import github from "./github.png";
import linkedin from "./linkedin.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img
          src={ProfilePicture}
          className="Profile-Picture"
          alt="ProfilePicture"
        />
        <p className="Bio-Text">
          Hi I'm Ciarán, A Computer Science student with a passion for tech,
          challenges and adventure.
        </p>
        <p className="Bio-Text">Checkout my github to see some of my work.</p>
        <p />
        <div className="IconContainer">
          <a href="http://www.github.com/ciarancoady98">
            <img src={github} className="github" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/ciarancoady/">
            <img src={linkedin} className="linkedin" alt="linkedin" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
