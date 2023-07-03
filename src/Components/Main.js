import React from 'react';
import resumeData from '../AllData';
import '../index.css';
import Lakshman from '../images/lakshman.jpeg';

function Main() {
  return (
    <section id="Home">
      <div className="Main">
        {window.innerWidth >= 800 && (
          <div className="image-container">
            <img src={Lakshman} alt="Profile" className="profile-image" />
          </div>
        )}
        <div className="container">
          <h1>This is {resumeData.name}</h1>
          <p>{resumeData.role}. {resumeData.aboutme}</p>
        </div>
      </div>
    </section>
  );
}

export default Main;
