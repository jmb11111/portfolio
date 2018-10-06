import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Bio from "./cards/Bio.js";
import Projects from "./cards/Projects.js";
import Badges from "./cards/Badges.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container card-columns  ml-auto mr-auto mt-3 row d-flex justify-content-between ">
          <Bio />
          <Projects />
          <Badges />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
