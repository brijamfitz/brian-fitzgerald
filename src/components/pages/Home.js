import React from "react";
import "./style.css";

const Home = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
          <img
            src="./images/profile-image.jpg"
            alt="Brian Fitzgerald"
            className="profile-image"
          />
        </div>
        <div className="col-1">
          <div className="curly-bracket-left">&#123;</div>
        </div>
        <div className="col-5" id="info-section">
          <p className="name info">Brian Fitzgerald</p>
          <p className="info">GitHub: <a href="https://github.com/brijamfitz" target="_blank" rel="noopener noreferrer">https://github.com/brijamfitz</a></p>
          <p className="info">LinkedIn: <a href="https://www.linkedin.com/in/brian-james-fitzgerald/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/brian-james-fitzgerald/</a></p>
          <p className="info">Resume: <a href="https://docs.google.com/document/d/1RFq0aYONTrID6kJ_hd1Y962fK9sgBwcsu1A_i2ipGn8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Google Docs</a></p>
          <p className="info">Email: <a href="mailto: brianjfitzgerald@gmail.com">brianjfitzgerald@gmail.com</a></p>
        </div>
        <div className="col-1">
          <div className="curly-bracket-right">&#125;</div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <p style={{ textAlign: "center", marginTop: "10px" }}>An open-mind, creative energy, and an endless passion for programming</p>
          <p style={{ textAlign: "center" }}>Full-stack Web Developer | Versed in JavaScript, React, Node, Express, HTML, and CSS | Data management experience in MySQL and MongoDB</p>
          <p style={{ textAlign: "center" }}>Please enjoy a selection of my current projects at the link below &mdash; and do not hesitate to reach out with any questions, comments, or feedback. I hope you enjoy my portfolio, and I look forward to the opportunities that may come.</p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-12 projects">
            <br />
            <a href="/projects">Click here for my Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
