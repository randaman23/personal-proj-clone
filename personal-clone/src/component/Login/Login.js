import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "../../../node_modules/axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    let res = await axios.get("/api/user-data");
    this.setState({ user: res.data });
  }

  login(){
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }



  render() {
    return (
      <div>
        <Header />
        <h1>Login</h1>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
