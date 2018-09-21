import React, { Component } from "react";
import Header from "../Header/Header";
import axios from 'axios'

class Home extends Component {

  async componentDidMount() {
    let res = await axios.get("/api/user-data");
   console.log(res.data)
  }

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
