import React from 'react';
import ProfilePicture from './ProfilePicture.jpg';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={ProfilePicture} className="Profile-Picture" alt="ProfilePicture" />
        <p className="Bio-Text">
          Hi I'm Ciarán, A Computer Science student with a passion tech, challenges and adventure.
        </p>
      </header>
    </div>
  );
}

export default HomePage;
