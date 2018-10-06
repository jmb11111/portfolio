import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="card col-lg-3 bg-dark text-center shadow order-0 ">
        <div className="card-header cardBackground text-center text-dark mt-3 ">
          <h5 className="card-title mb-0 ">Projects</h5>
        </div>
        <ul class="list-group list-group-flush mb-0 highfive rounded">
          <a
            href="https://jmb11111.github.io/TechDegreeProject1/"
            target="_"
            class="list-group-item bg-dark text-light"
          >
            Random Quote Generator
          </a>
          <a
            href="https://jmb11111.github.io/project-2/"
            target="_"
            class="list-group-item bg-dark text-light "
          >
            Pagination &amp; Content Filter{" "}
          </a>
          <a
            href="https://jmb11111.github.io/treehoushee-project-3/index.html"
            target="_"
            class="list-group-item bg-dark text-light"
          >
            Build an Interactive Form
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://jmb11111.github.io/Treehouse-Project-4/Project%204%20Tic%20Tac%20Toe/tic-tac-toe-v3/"
            target="_blank"
          >
            Tic Tac Toe
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://jmb11111.github.io/Treehouse-Project-5/employee_directory_v1/"
            target="_blank"
          >
            Use a Public API to Create an Employee Directory
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://github.com/jmb11111/Techdegree-Project-6"
            target="_blank"
          >
            Build a Content Scraper
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://github.com/jmb11111/Treehouse-Project-7"
            target="_blank"
          >
            Build a Twitter Interface
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://github.com/jmb11111/Treehouse-Project-8"
            target="_blank"
          >
            Using Gulp to Build a Front End Website
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://project9.herokuapp.com/"
            target="_blank"
          >
            Create a Gallery App with React
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://github.com/jmb11111/treehouse-project-10"
            target="_blank"
          >
            Build a Library Manager
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://github.com/jmb11111/treehouse-project-11"
            target="_blank"
          >
            Build a Course Rating API With Express
          </a>
          <a
            class="list-group-item bg-dark text-light "
            href="https://fullrange-dashboard.herokuapp.com"
            target="_blank"
          >
            My Web App
          </a>
        </ul>
      </div>
    );
  }
}

export default Projects;
