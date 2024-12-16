import React from "react";
import { div, Typography } from "@mui/material";
import kalyan from "../../Images/kalyan.JPG";
import kalyan1 from "../../Images/kalyan1.jpg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard-main">
        <div className="text-box">
          <h1>
            Hello, I'm <span>Kalyan</span> <span>Kashaboina</span>
          </h1>
          <h3>Fullstack Web Developer</h3>
          <p>
            Building awesome web experiences with the latest technologies.
            Passionate about creating seamless user interfaces and scalable
            back-end systems.
          </p>
        </div>

        <div className="image-box">
          <img src={kalyan1} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
