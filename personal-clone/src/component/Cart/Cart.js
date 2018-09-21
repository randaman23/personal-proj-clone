import React, { Component } from "react";
import Header from "../Header/Header";

class Cart extends Component {
  render() {
    return (
      <div>
          <Header/>
        <h1>Cart</h1>
        <button>CHECKOUT</button>
      </div>
    );
  }
}

export default Cart;
