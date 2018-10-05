import React, { Component } from "react";
import Header from "../Header/Header";

class Login extends Component {
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main_login">
          <figure>
            <img
              src="https://www.sundanceresort.com/wp-content/uploads/2016/07/event-bg-2000x1000-c-center.jpg"
              alt=""
            />
            <div className="login_btn">
              <button onClick={this.login} className="login_btn">
                <h1>Login</h1>
              </button>
            </div>
          </figure>
        </div>
      </div>
    );
  }
}

export default Login;
