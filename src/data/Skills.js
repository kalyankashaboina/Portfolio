import html from "../Images/Icons/html-1.svg";
import css from "../Images/Icons/css-3.svg";
import js from "../Images/Icons/logo-javascript.svg";
import react from "../Images/Icons/react-2.svg";
import redux from "../Images/Icons/redux.svg";
import mongo from "../Images/Icons/mysql-original-wordmark.svg";
import node from "../Images/Icons/nodejsLight.svg";
import exp from "../Images/Icons/download (2).png";
import github from "../Images/Icons/GitHub-Mark.png";
import postman from "../Images/Icons/postman.svg";
import vscode from "../Images/Icons/Visual_Studio_Code_1.35_icon.svg.png";

const skillsArray = {
  languages: [
    { skill: "HTML", img: html },
    { skill: "CSS", img: css },
    { skill: "JavaScript", img: js },
  ],
  frameworks: [
    { skill: "React", img: react },
    { skill: "Redux", img: redux },
    { skill: "Node.js", img: node },
    { skill: "Express", img: exp },
  ],
  databases: [
    { skill: "MongoDB", img: mongo },
  ],
  tools: [
    { skill: "GitHub", img: github },
    { skill: "Postman", img: postman },
    { skill: "VS Code", img: vscode },
  ],
};

export default skillsArray;
