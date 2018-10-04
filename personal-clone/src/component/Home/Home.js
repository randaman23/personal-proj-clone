import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";

class Home extends Component {
  async componentDidMount() {
    let res = await axios.get("/api/user-data");
    console.log(res.data);
  }

  render() {
    return (
      <div>
        <div className="main_header">
          <Header />
        </div>
        <div className="home_main">
          <div className="panel_1">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2017/05/Fly_Fishing_May_Blog_2017-4-600x900-c-default.jpg"
              alt=""
            />
            <div className="at_sundance">
              <h1 className="header_1">Fall at Sundance</h1>
              <p className="sundance_quote">
                "To us, Sundance is and always will be a dream. What you see,
                smell, taste and feel here is a dream being carefully nurtured.
                It is an area whose pledge is to people. What we offer in the
                form of art and culture, spirit and service, is homegrown and
                available to all." - Robert Redford
              </p>
              <button className="hours_btn">VIEW HOURS</button>
            </div>
          </div>
          <div className="panel_medium">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2018/06/Mountain_Cabin_0089-600x0-c-default.jpg"
              alt=""
            />
            {/* <div className="mountain_reservation"> */}
              <h2 className="h2_home">
                MOUNTAIN HOME RESERVATION
              </h2>
              <button className="explore_button">EXPLORE</button>
            {/* </div> */}
          </div>
          <div className="panel_medium">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2018/09/Hog_And_Beer_Pour2-600x0-c-default.jpg"
              alt=""
            />
          </div>
          <div className="upcoming_events">
            <h2>UPCOMING EVENTS</h2>
            <p>
              Sundance Mountain Resort is more than just great skiing, amazing
              food and lodging. We offer a full calendar of events and
              activities for you to enjoy. Browse our calendar of events to plan
              your next trip, date or get-a-way.
            </p>
            <button>VIEW EVENT CALENDER</button>
          </div>
          <div className="panel_medium">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2016/08/Spa_Dec_2017-77-1-600x0-c-default.jpg"
              alt=""
            />
          </div>
          <div className="lodging">
            <h2>LODGING SPECIALS</h2>
            <p>
              Fall and Winter are some of the best times to visit Sundance
              Mountain Resort. Enjoy the fresh air and the rejuvenating spirit
              of the mountains. Relax and unwind in your own private mountain
              home or one of our beautiful mountain suites.
            </p>
          </div>
          <div className="panel_medium">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2016/08/Schultz-056-600x0-c-default.jpg"
              alt=""
            />
          </div>
          <div className="panel_medium">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2017/12/Food-Mark-Weinberg-Dec-2017-264-600x0-c-default.jpg"
              alt=""
            />
          </div>
          <div className="reserve_table">
            <h2>RESERVE A TABLE ONLINE</h2>
            <p>
              Sundance Mountain Resort offers a wide variety of dining
              experience for all occasions. Dine in elegance at the Tree Room or
              enjoy the rustic atmosphere in the Foundry Grill or the casual
              scene at the Owl Bar. Our food is fresh and inspired, you’ll find
              yourself falling in love with the tastes, sounds and scene found
              at Sundance.
            </p>
            <button>VIEW DINING OPTIONS</button>
          </div>
          <div className="panel_medium">
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2016/08/TheFoundry_0041-600x0-c-default.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
