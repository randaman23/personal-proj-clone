import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

class Store extends Component {
  render() {
    return (
      <div>
        <div className="main_header">
          <Header />
        </div>
        <div className="store_main">
          {/* <div>
          <img src="https://cdn.shopify.com/s/files/1/1668/0025/files/Glass_Ecomm_1200x.jpg?v=1532721248" alt=""/>
        </div> */}

          <div className="one">
            <Link to={`/store/category/apparel`}>
              {/* <div>Sundance Apparel</div> */}
              <img
                src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_1_cover_400x400.jpg?1347631453863321391"
                alt=""
              />
              <h2 className="sun_apparel">SUNDANCE APPAREL</h2>
            </Link>
          </div>

          <div className="two">
            <Link to={`/store/category/soap`}>
              {/* <div>Handmade Soap</div> */}
              <img
                src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_2_cover_400x400.jpg?1347631453863321391"
                alt=""
              />
              <h2 className="hand_soap">HANDMADE SOAP</h2>
            </Link>
          </div>

          <div className="three">
            <Link to={`/store/category/accessories`}>
              {/* <div>Shop Accessories</div> */}
              <img
                src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_3_cover_400x400.jpg?1347631453863321391"
                alt=""
              />
              <h2 className="accessories">SHOP ACCESSORIES</h2>
            </Link>
          </div>

          <div className="four">
            <Link to={`/store/category/glass`}>
              {/* <div>Shop Glass</div> */}
              <img
                src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_4_cover_400x400.jpg?1347631453863321391"
                alt=""
              />
              <h2 className="glass">SHOP GLASS</h2>
            </Link>
          </div>

          <div className="five">
            <Link to={`/store/category/hats`}>
              {/* <div>Shop Hats</div> */}
              <img
                src="https://cdn.shopify.com/s/files/1/1668/0025/t/8/assets/home_featured_collection_5_cover_800x800.jpg?1347631453863321391"
                alt=""
              />
              <h2 className="hats">SHOP HATS</h2>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Store;
