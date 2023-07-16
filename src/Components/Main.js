import React, { useEffect, useState } from 'react';
import resumeData from '../AllData';
import '../index.css';
import Lakshman from '../images/lakshman.jpg';

function Main() {
  const aboutMeText = resumeData.aboutme;
  const aboutMeWords = aboutMeText.split(' ');
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    if (visibleWords < aboutMeWords.length) {
      const interval = setInterval(() => {
        setVisibleWords((prevVisibleWords) =>
          prevVisibleWords + 1 <= aboutMeWords.length ? prevVisibleWords + 1 : prevVisibleWords
        );
      }, 100);

      return () => clearInterval(interval);
    }
  }, [visibleWords, aboutMeWords.length]);

  return (
    <section id="Home">
      <div className="Main">
      {window.innerWidth >= 800 && (
        <div className="image-container">
          <img src={Lakshman} alt="Profile" className="profile-image" />
        </div>
      )}
        <div className="container">
        {window.matchMedia('(max-width: 600px)').matches ? (
          <h1 style={{textAlign:'center'}}>{resumeData.name}</h1>
        ) : (
          <h1>This is {resumeData.name}</h1>
        )}
          <p>
            {resumeData.role}.
            <span className="about-me-text">
              {aboutMeWords.map((word, index) => (
                <span
                  key={index}
                  style={{
                    opacity: index < visibleWords ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
