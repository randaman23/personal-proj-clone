import React, { Component } from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom'

class Store extends Component {
  render() {
    return (
      <div>
          <Header/>
        <h1>Store</h1>
        <Link to={`/store/category/apparel`}>
        <div>Sundance Apparel</div>
        </Link>
        <Link to={`/store/category/soap`}>  
        <div>Handmade Soap</div>
        </Link>
        <Link to={`/store/category/accessories`}>
        <div>Shop Accessories</div>
        </Link>
        <Link to={`/store/category/glass`}>
        <div>Shop Glass</div>
        </Link>
        <Link to={`/store/category/hats`}>
        <div>Shop Hats</div>
        </Link>
        
      </div>
    );
  }
}

export default Store;
