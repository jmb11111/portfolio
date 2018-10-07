import React, { Component } from "react";
import { projectsArray } from "./projectArray";
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: projectsArray()
    };
  }
  render() {
    return (
      <div className="card col-lg-3 bg-dark text-center shadow order-0 ">
        <div className="card-header cardBackground text-center text-dark mt-3 ">
          <h5 className="card-title mb-0 ">Projects</h5>
        </div>
        <ul class="list-group list-group-flush mb-0 highfive rounded">
          {this.state.projects.map((project, index) => (
            <a
              href={project.link}
              target="_"
              class="list-group-item bg-dark text-light"
            >
              {project.name}
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
