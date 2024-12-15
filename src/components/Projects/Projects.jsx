import React from 'react';
import './projects.css';
import {projects} from "../../data/projects"

const ProjectPage = () => {
 

  return (
    <div className="project-container">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
