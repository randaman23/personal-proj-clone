import React from "react";
import { Link } from "react-router-dom";

export default function Products(props) {
  const { name, price, image, id } = props;
  return (
    <div className="products_main">
      <div className="products_displayed">
        <Link to={`/store/item/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div className="name_price">
           <p className="name">{name}</p>
        <p className="price">{price}</p>
        </div>
       
      </div>
    </div>
  );
}
