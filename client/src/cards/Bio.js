import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <div className="card col-lg-5 bg-dark text-center order-lg-1  ">
        <img
          class="card-img-top rounded-circle mt-3 mx-auto"
          src="/profileImage.png"
          alt="Card image cap"
          style={{ width: 30 + "%" }}
        />
        <div class="card-body text-white">
          <h5 class="card-title">About Me</h5>
          <p class="card-text">
            My goal is to become a first rate full stack developer with the
            skills to tackle any job requested of me.
            <br />
            <br /> I am currently skilled in HTML, CSS, JavaScript, React,
            node.js, mongoDB, gulp, among other technologies. <br />
            <br /> My aim is to never stop learning and expanding my abilities
            as a developer. I’d like to work for a fitness technology company to
            help others lead a healthy, informed, and inspired life!
          </p>

          <a
            href="mailto:joshua.blasbalg@gmail.com"
            class="btn btn-primary mr-1 button cardBackground border-0"
          >
            Contact Me
          </a>
          <a
            href="https://www.credential.net/3m9ugpww"
            class="btn btn-primary ml-1 button cardBackground border-0"
          >
            Techdegree
          </a>
        </div>
      </div>
    );
  }
}

export default Bio;
