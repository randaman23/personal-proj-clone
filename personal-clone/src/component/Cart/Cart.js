import React, { Component } from "react";
import Header from "../Header/Header";
import { addToCart, cartCount } from "../../ducks/reducer";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      grand: 0
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  componentDidMount() {
    axios.get("/api/getusercart").then(res => {
     this.total(res)
    });
  }
  total(res){
    let grandTotal = 0
    let mapTotal = res.data.map(e => {
      e.subtotal = +e.price.slice(1) * e.quantity;
      grandTotal += e.subtotal
      console.log(typeof grandTotal)
      return e;
      
    });
    this.setState({
      cart: mapTotal,
      grand: grandTotal.toFixed(2)
    });
  }

  deleteItem(id) {
    axios.delete(`/api/delete/${id}`).then(res => {
      this.total(res)
      this.props.cartCount(res.data[0].res);
    });
  }

  handleIncrease(id) {
    axios.put(`/api/increase/${id}`).then(res => {
      this.total(res)
    });
  }

  handleDecrease(id) {
    axios.put(`/api/decrease/${id}`).then(res => {
      this.total(res);
    });
  }

  onToken = token => {
    token.card = void 0;
    axios.post("/api/payment", { token, grand: this.state.grand }).then(res => {
      this.props.history.push("/")
    });
  };

  render() {
    console.log(this.state);
    let items = this.state.cart.map(e => {
      return (
        <div className="cart_display" key={e.cart_id}>
          <img src={e.image_url} alt="product" className="cart_image" />
          <h1 className="cart_name">{e.product_name}</h1>
          <p>{e.name}</p>
          <p>{e.size}</p>
          <span>
            {e.price} x {e.quantity} = $
            {(+e.price.slice(1) * e.quantity).toFixed(2)}{" "}
            <button onClick={() => this.deleteItem(e.cart_id)}>Remove</button>
          </span>
          <span>
            {" "}
            <button onClick={() => this.handleIncrease(e.cart_id)}>
              +
            </button>{" "}
            <button onClick={() => this.handleDecrease(e.cart_id)}>-</button>{" "}
          </span>
        </div>
      );
    });

    return (
      <div>
        <div className="main_header">
          <Header />
        </div>
        <div>
          <div className="subtotal">
            <p>Subtotal ${this.state.grand} </p>
            <StripeCheckout
              name="Sunbance Mountain Resort"
              description="Payment for Items"
              image="http://via.placeholder.com/100x100"
              token={this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              amount={this.state.total}
            />
          </div>
          {this.state.cart.length ? items : null}
        </div>
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
  { addToCart, cartCount }
)(Cart);
