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
    let cart = this.state.cart.map((e) => e.cart_id)
    axios
      .delete('/api/delete', {cart})
      .then(res => this.setState({ cart: res.data }));
  }

  handleIncrease() {}

  handleDecrease() {}

  render() {
    console.log(this.state);
    let items = this.state.cart.map((e) => {
      return (
        <div className="cart_display" key={e.cart_id}>
          <img src={e.image_url} alt="product" className="cart_image" />
          <h1 className="cart_name">{e.product_name}</h1>
          <p>{e.name}</p> 
           <p>{e.size}</p> 
          <span>{e.price} x {e.quantity} = ${(+e.price.slice(1) * e.quantity).toFixed(2)}  <button onClick={this.deleteItem}>Delete</button></span>
          <span> <button>+</button> <button>-</button> </span> 
        </div>
      );
    });

    return (
      <div>
        <Header />
        <p>Subtotal </p>
        <button>CHECKOUT</button>
        {this.state.cart.length ? items : null}
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
