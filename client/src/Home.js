import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: []
    };
  }
  getBadges = () => {
    axios
      .get(`/badges`)
      .then(response => {
        // console.log(response.data.badges);
        this.setState({ badges: response.data.badges });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  componentDidMount() {
    this.getBadges();
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
        <div className="container card-columns ml-auto mr-auto mt-5 row d-flex justify-content-between ">
          <div className="card col-lg-3 bg-dark text-center shadow ">
            <div className="card-header bg-secondary text-center text-white mt-3">
              <h5 className="card-title mb-0">Projects</h5>
            </div>
            <ul class="list-group list-group-flush highfive">
              <a
                href="https://jmb11111.github.io/TechDegreeProject1/"
                target="_"
                class="list-group-item list-group-item-action text-dark"
              >
                Random Quote Generator
              </a>
              <a
                href="https://jmb11111.github.io/project-2/"
                target="_"
                class="list-group-item list-group-item-action"
              >
                Pagination &amp; Content Filter{" "}
              </a>
              <a
                href="https://jmb11111.github.io/treehoushee-project-3/index.html"
                target="_"
                class="list-group-item list-group-item-action"
              >
                Build an Interactive Form
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://jmb11111.github.io/Treehouse-Project-4/Project%204%20Tic%20Tac%20Toe/tic-tac-toe-v3/"
                target="_blank"
              >
                Tic Tac Toe
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://jmb11111.github.io/Treehouse-Project-5/employee_directory_v1/"
                target="_blank"
              >
                Use a Public API to Create an Employee Directory
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://github.com/jmb11111/Techdegree-Project-6"
                target="_blank"
              >
                Build a Content Scraper
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://github.com/jmb11111/Treehouse-Project-7"
                target="_blank"
              >
                Build a Twitter Interface
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://github.com/jmb11111/Treehouse-Project-8"
                target="_blank"
              >
                Using Gulp to Build a Front End Website
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://project9.herokuapp.com/"
                target="_blank"
              >
                Create a Gallery App with React
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://github.com/jmb11111/treehouse-project-10"
                target="_blank"
              >
                Build a Library Manager
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://github.com/jmb11111/treehouse-project-11"
                target="_blank"
              >
                Build a Course Rating API With Express
              </a>
              <a
                class="list-group-item list-group-item-action"
                href="https://fullrange-dashboard.herokuapp.com"
                target="_blank"
              >
                My Web App
              </a>
            </ul>
          </div>

          <div className="card col-lg-5 bg-dark text-center  ">
            <img
              class="card-img-top rounded-circle mt-3"
              src="/profileImage.png"
              alt="Card image cap"
              style={{ width: 40 + "%" }}
            />
            <div class="card-body text-white">
              <h5 class="card-title">About Me</h5>
              <p class="card-text">
                My goal is to become a first rate full stack developer with the
                skills to tackle any job requested of me. I am currently skilled in HTML, CSS, JavaScript, React, node.js, mongoDB, gulp, among other technologies. My aim is to never
                stop learning and expanding my abilities as a developer. I’d
                like to work for a fitness technology company to help others
                lead a healthy, informed, and inspired life!
              </p>
              <a
                href="mailto:joshua.blasbalg@gmail.com"
                class="btn btn-primary"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="card col-lg-3 bg-dark  shadow">
            <div className="card-header bg-secondary text-center text-white mt-3">
              <h5 className="card-title ">Treehouse Badges</h5>
              <div className="highfive">
                {this.state.badges.map((badge, index) => (
                  <h6 className="card-title cardBackground rounded text-white p-2 ">
                    <strong>{badge.name}</strong>
                    <br />
                    <a href={badge.url} target="_">
                      <img
                        src={badge.icon_url}
                        alt="Badge"
                        class="ml-auto"
                        width="30px"
                      />
                    </a>
                  </h6>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container card-columns ml-auto mr-auto mt-5 row d-flex justify-content-around ">
          <div className="card col-lg-6 bg-dark text-center" />
        </div>
      </div>
    );
  }
}

export default Home;
