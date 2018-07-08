import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="app-navbar">
        <Link exact="true" to="/" className="title">
          Tweet Hashtag Search
        </Link>
      </div>
    );
  }
}

export default Navbar;
