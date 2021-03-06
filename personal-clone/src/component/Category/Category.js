import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Products from "../Products/Products";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/products/${this.props.match.params.name}`)
      .then(res => this.setState({ category: res.data }));
  }

  render() {
    let categoryDisplay = this.state.category.map((e, i) => {
      return (
        <Products
          key={e.product_id}
          id={e.product_id}
          name={e.product_name}
          price={e.price}
          image={e.image_url}
        />
      );
    });
    return (
      <div>
        <Header />
        <div className="main_category">
          <div className="category_display">
          {/* <div> */}
          {categoryDisplay}

          {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
