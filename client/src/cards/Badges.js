import React, { Component } from "react";
import axios from "axios";

class Badges extends Component {
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
      <div className="card col-lg-3 bg-dark text-center shadow order-3 ">
        <div className="card-header cardBackground text-center text-dark mt-3 ">
          <h5 className="card-title mb-0">Badges</h5>
        </div>

        <div className=" highfive mb-0 ">
          {this.state.badges.map((badge, index) => (
            <div className="main" style={{ width: 45 + "px" }}>
              <div
                class="collapse"
                id={"collapseExample" + index}
                style={{ width: 245 + "px" }}
              />
              <a
                class=""
                data-toggle="collapse"
                href={"#collapseExample" + index}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                {" "}
                <img
                  src={badge.icon_url}
                  alt="Badge"
                  class="ml-auto"
                  width="30px"
                />
              </a>

              <div
                class="collapse mb-3 text-light"
                id={"collapseExample" + index}
                // style={{ width: 245 + "px" }}
              >
                <a className="text-white" href={badge.url} target="_">
                  <strong>{badge.name}</strong>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Badges;
