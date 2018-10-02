import React from "react";
import { Link } from "react-router-dom";

export default function Products(props) {
  const { name, price, image, id } = props;
  return (
    <div className="products_main">
      <Link to={`/store/item/${id}`}>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
}
