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

  addItem(){
    axios.post('/api/additem',{})
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
          <option value="">BLACK</option>
          <option value="">FADED RED</option>
          <option value="">BLUE</option>
        </select>
        <select>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
          <option value="">XS</option>
        </select>
        <select>
          <option value="">ONE</option>
          <option value="">TWO</option>
          <option value="">THREE</option>
          <option value="">FOUR</option>
          <option value="">FIVE</option>
          <option value="">SIX</option>
          <option value="">SEVEN</option>
          <option value="">EIGHT</option>
          <option value="">NINE</option>
          <option value="">TEN</option>
        </select>

        <button onClick={this.addItem}>Add To Cart</button>
        {itemDisplay}
      </div>
    );
  }
}

export default Item;
