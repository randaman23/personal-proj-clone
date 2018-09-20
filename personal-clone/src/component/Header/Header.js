import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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
    return (
      <div>
        <h1>Header</h1>
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/Sundance.svg?14038820506006361377"
            alt=""
          />
        </Link>

        <button onClick={this.showMenu}>Menu</button>
        {this.state.showMenu ? (
          <div
            className="menu-btn"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
              <Link to="/store">
              <button>Shop</button> <br/>
              </Link>
              <button>Activities</button> <br/>
              <button>Events</button> <br/>
              <button>Stay</button>
            
          </div>
        ) : null}
        <Link to="/login">
        <button>Login</button>
        </Link>
        <Link to="/cart">
        <button>Cart</button>
        </Link>
      </div>
    );
  }
}

export default Header;
