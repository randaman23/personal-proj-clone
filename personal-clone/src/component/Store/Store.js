import React, { Component } from "react";
import Header from "../Header/Header";
// import {Link} from 'react-router-dom'

class Store extends Component {
  render() {
    return (
      <div>
          <Header/>
        <h1>Store</h1>
        {/* <Link> */}
        <div>Sundance Apparel</div>
        <div>Handmade Soap</div>
        <div>Shop Accessories</div>
        <div>Shop Glass</div>
        <div>Shop Hats</div>
        {/* </Link> */}
      </div>
    );
  }
}

export default Store;
