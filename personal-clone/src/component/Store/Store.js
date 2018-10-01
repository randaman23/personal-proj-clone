import React, { Component } from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom'

class Store extends Component {
  render() {
    return (
      <section className="store_main">
          <Header/>
    
        <Link to={`/store/category/apparel`}>
        <div>Sundance Apparel</div>
        <img src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_1_cover_400x400.jpg?1347631453863321391" alt=""/>
        </Link>
        <Link to={`/store/category/soap`}>  
        <div>Handmade Soap</div>
        <img src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_2_cover_400x400.jpg?1347631453863321391" alt=""/>
        </Link>
        <Link to={`/store/category/accessories`}>
        <div>Shop Accessories</div>
        <img src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_3_cover_400x400.jpg?1347631453863321391" alt=""/>
        </Link>
        <Link to={`/store/category/glass`}>
        <div>Shop Glass</div>
        <img src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_4_cover_400x400.jpg?1347631453863321391" alt=""/>
        </Link>
        <Link to={`/store/category/hats`}>
        <div>Shop Hats</div>
        <img src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_5_cover_800x800.jpg?1347631453863321391" alt=""/>
        </Link>
        
      </section>
    );
  }
}

export default Store;
