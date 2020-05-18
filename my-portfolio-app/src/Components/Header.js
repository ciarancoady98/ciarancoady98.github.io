import React, { Component } from "react";
import ProfilePicture from './ProfilePicture.jpg'

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

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
            <img src={ProfilePicture} className="github" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/ciarancoady/">
            <img src={ProfilePicture} className="linkedin" alt="linkedin" />
          </a>
        </div>
      </header>
    </div>
    );
  }
}

export default Header;
