import React, { Component } from "react";
import Header from "../Header/Header";
import {addToCart} from "../../ducks/reducer"
import {connect} from "react-redux"
import axios from 'axios'

class Cart extends Component {

componentDidMount(){
  axios.get()
}
// want an image, name of product, color, and size and quantity, price

  render() {
    return (
      <div>
          <Header/>
        <h1>Cart</h1>
        <button>+</button>
        <button>-</button>
        <button>Delete</button>
        <button>CHECKOUT</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps, {addToCart})(Cart);
