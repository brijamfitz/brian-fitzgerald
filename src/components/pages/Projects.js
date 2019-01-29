import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import projects from "../../projects.json";
import "./style.css";

class Projects extends Component {
  state = {
    projects,
  };

  render () {
    return (
      <div className="project-card">
        <h1 style={{ textAlign: "center" }}>My Projects</h1>
        <hr />
        {this.state.projects.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            title={project.title}
            url={project.url}
            github_url={project.github_url}
            description={project.description}
          />
        ))}
        <Link to="/" className="homepage">
          <p style={{ textAlign: "center" }}>Return to Homepage</p>
        </Link>
      </div>
  );
}
};

export default Projects;
