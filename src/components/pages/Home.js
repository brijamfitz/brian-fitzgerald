import React from "react";
import "./style.css";

const Home = props => {
  return (
    <div>
      <img src="./images/profile-image.jpg" alt="Brian Fitzgerald" className="profile-image" />
      <div className="contact-info">
        <p className="name">(Brian Fitzgerald) &#123;</p>
          <p className="github">
            GitHub: <a href="https://github.com/brijamfitz" target="_blank" rel="noopener noreferrer">https://github.com/brijamfitz</a>
          </p>
        <p className="linkedin">
          LinkedIn: <a href="https://www.linkedin.com/in/brian-james-fitzgerald/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/brian-james-fitzgerald/</a>
        </p>
        <p className="resume">
          Resume: <a href="https://docs.google.com/document/d/1RFq0aYONTrID6kJ_hd1Y962fK9sgBwcsu1A_i2ipGn8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Google Docs</a>
        </p>
        <p className="email">
          Email: <a href="mailto: brianjfitzgerald@gmail.com">brianjfitzgerald@gmail.com</a>
        </p>
        <p className="curly-bracket">&#125;</p>
      </div>
        <div className="projects-link">
        <br />
        <a href="/projects">(Projects) &#61;&gt; </a>
      </div>
    </div>
  );
};

export default Home;
