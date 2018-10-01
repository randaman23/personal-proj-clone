import React, { Component } from "react";
import Header from "../Header/Header";
import { addToCart } from "../../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    axios.get("/api/getusercart").then(res =>
      this.setState({
        cart: res.data
      })
    );
  }

  deleteItem() {
    axios
      .delete(`/api/item/${this.props.match.params.id}`)
      .then(res => this.setState({ cart: res.data }));
  }

  handleIncrease() {

  }

  handleDecrease(){

  }

  render() {
    console.log(this.state);
    let items = this.state.cart.map((e, i) => {
      return (
        <div className="cart_display" key={i}>
          <img src={e.image_url} alt="product" className="cart_image"/>
          <h1 className="cart_name">{e.product_name}</h1>
          <p>{e.name}</p>
          <p>{e.size}</p>
          <p>{e.quantity}</p>
          <p>{e.price}</p>

          <button>+</button>
          <button>-</button>
          <button onClick={this.deleteItem}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <Header />
        {items}
        <button>CHECKOUT</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  { addToCart }
)(Cart);
