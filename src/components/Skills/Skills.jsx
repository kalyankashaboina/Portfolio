import React from 'react';
import "./Skills.css";
import skillsArray from "../../data/Skills"; 
const SkillsPage = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">My Skills</h1>
      <div className="main-cards">
        {Object.keys(skillsArray).map((category, index) => (
          <div key={index} className="main-card">
            <h2 className="category-title">{category}</h2>
            <div className="skill-cards-container">
              {skillsArray[category].map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <img src={skill.img} alt={skill.skill} className="skill-image" />
                  <h3 className="skill-name">{skill.skill}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
