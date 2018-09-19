import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Products from '../Products/Products'

class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/item/${this.props.match.params.id}`)
      .then(res => this.setState({item: res.data}))
  }

  render() {
    let itemDisplay = this.state.item.map((e, i) => {
      return(
        <Products
              key={e.product_id}
              id={e.category}
              name={e.product_name}
              price={e.price}
              image={e.image_url}
              info={e.product_info}
              />
      )
    })
    return (
      <div>
          <Header/>
        <h1>Item</h1>

        <select >
          <option>FADED RED</option>
        </select>
        <select>
          <option>SMALL</option>
        </select>
        <select>
          <option>ONE</option>
        </select>

        <button>Add To Cart</button>
        {itemDisplay}
      </div>
    );
  }
}

export default Item;
