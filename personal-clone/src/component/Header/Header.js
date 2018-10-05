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
componentDidUpdate(prevProps){
if(prevProps.count !== this.props.count) {
  console.log(prevProps.count)
  axios
  .get(`/api/cartcount`)
  .then(count => this.props.cartCount(count.data[0].count));
}
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
        <button onClick={this.showMenu}>
          <img
            className="mini_menu"
            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
            alt=""
          />
        </button>
        {this.state.showMenu ? (
          <div
            className="menu-btn"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <div className="dropdown">
              <Link to="/">
                {" "}
                <button className="dropdown">Home</button>
              </Link>{" "}
              <br />
              <Link to="/store">
                <button className="dropdown">Shop</button> <br />
              </Link>
              <button className="dropdown">Activities</button> <br />
              <button className="dropdown">Events</button> <br />
              <button className="dropdown">Stay</button> <br />
              <a href={process.env.REACT_APP_HOME}>
                <button className="dropdown">
                  Sign Out
                </button>
              </a>
            </div>
          </div>
        ) : null}

        <Link to="/">
          <img
            id="home_link"
            src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/Sundance.svg?14038820506006361377"
            alt=""
          />
        </Link>
          <Link to="/cart">
        <div className="cart_btn">
            <button className="cart_btn2">
              <img
                className="shop_bag"
                src="https://www.freeiconspng.com/uploads/bag-png-13.png"
                alt=""
              />
            </button>
        </div>
          </Link>
          <span className="counter">{count}</span>
        <Link to="/login" className="login_link">
          <button>
            <img
              className="mini_login"
              src="https://mbtskoudsalg.com/images/login-icon-png-8.png"
              alt=""
            />
          </button>
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
