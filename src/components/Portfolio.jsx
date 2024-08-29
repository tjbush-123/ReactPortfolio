import React from "react";
import Project from "./Project";
import gamejams from "../images/gamejams.png";
import taskboard from "../images/taskboard.png";
import weatherdash from "../images/weatherdash.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "GameJams",
              description: "A website that goes through your steam library and recommends playlists and albums based on genre or motifs in game.",
              imgSrc: gamejams,
              deployedLink:
                "https://bunggoylearn.github.io/GameJams/",
              githubLink:
                "https://github.com/BunggoyLearn/GameJams",
            },
            {
              title: "Weather App",
              description: "Current weather and future weather",
              imgSrc: weatherdash,
              deployedLink:
                "https://tjbush-123.github.io/weather-dashboard/",
              githubLink:
                "https://github.com/tjbush-123/weather-dashboard",
            },
            {
              title: "Planner",
              description: "A todo list that will help you with time management.",
              imgSrc: taskboard,
              deployedLink:
                "https://github.com/tjbush-123/task-board",
              githubLink:
                "https://tjbush-123.github.io/task-board/",
            },
          ].map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;