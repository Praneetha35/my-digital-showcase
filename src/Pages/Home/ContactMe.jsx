import React from 'react';
import TwitterIcon from '../../images/twitter-icon.png';
import LinkedInIcon from '../../images/linkedin-icon.png';
import GitHubIcon from '../../images/github-icon.png';

export default function ContactMe() {
  // Function to handle button click to redirect to email
  const redirectToEmail = () => {
    window.location.href = "mailto:praneethacp35@gmail.com";
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <p className="text-lg">
          Whether you're brewing up a project plan or just looking for some engaging conversation, shoot me an email and let's connect!
        </p>
      </div>  
      <div>
        <button onClick={redirectToEmail} className="btn btn-primary">Say Hello!</button>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/praneethacp35" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/praneethachandraprakash/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Praneetha35" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="social-icon" />
        </a>
      </div>
      <div>
        <p className="text-lg" style={{ fontSize: '12px' }} >© PraneethaChandraPrakash 2024</p>
      </div>
    </section>
  );
}
