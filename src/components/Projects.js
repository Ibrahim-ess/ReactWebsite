import React from "react";
import projects from "../data/iot-projects/iot-projects.json";
import "../style/Projects.css";
import { Link } from "react-router-dom";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-content">
        {projects.map((element, i) => (
          <div key={i}>
            <h1> {element.title} </h1>

            {element.projects.map((topic) => (
              <div className="project" key={topic.id}>
                <div className="description">
                  <Link className="link-descr" to={"/project/" + topic.id}>
                    <p className="title"> {topic.title} </p>
                    <p className="authors"> {topic.authors} </p>
                  </Link>
                  <div className="links">
                    <p>
                      {topic.links.PDF &&
                        <a href={topic.links.PDF} target="_blank" rel="noopener noreferrer">PDF</a>}
                    </p>
                    <p>
                      {topic.links.Slides && (
                        <a href={topic.links.Slides} target="_blank" rel="noopener noreferrer">SLIDES</a>
                      )}
                    </p>
                    <p>
                      {topic.links.Code && (
                        <a href={topic.links.Code} target="_blank" rel="noopener noreferrer">CODE</a>
                      )}
                    </p>
                  </div>
                </div>
                <Link className="link-descr" to={"/project/" + topic.id}>
                  <div className="illustration">
                    {topic.illustration !== "" && (
                      <img
                        src={require(`../data/iot-projects/${topic.illustration}`)}
                        alt="illustration"
                      />
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
