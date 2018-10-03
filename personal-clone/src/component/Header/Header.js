import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { cartCount } from "../../ducks/reducer";
import { connect } from "react-redux";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/cartcount`)
      .then(count => this.props.cartCount(count.data[0].count));
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(e) {
    // if (!this.dropdownMenu.contains(e.target)) {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
    // }
  }

  render() {
    console.log(this.props);
    let { count } = this.props;
    return (
      <div className="main_header">
        <button onClick={this.showMenu}>Menu</button>
        {this.state.showMenu ? (
          <div
            className="menu-btn"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <Link to="/store">
              <button>Shop</button> <br />
            </Link>
            <button>Activities</button> <br />
            <button>Events</button> <br />
            <button>Stay</button>
          </div>
        ) : null}

        <Link to="/">
          <img
            id="home_link"
            src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/Sundance.svg?14038820506006361377"
            alt=""
          />
        </Link>
        <div className="cart_btn">
          {count}
          <Link to="/cart">
            <button>cart</button>
          </Link>
        </div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(
  mapStateToProps,
  { cartCount }
)(Header);
