import React, { Component } from "react";
import Header from "../Header/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home</h1>
        <div className="home-top">
          <img
            src="https://www.sundanceresort.com/wp-content/uploads/2017/05/Fly_Fishing_May_Blog_2017-4-600x900-c-default.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}  

export default Home;
