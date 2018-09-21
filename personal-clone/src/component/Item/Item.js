import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      colors: [],
      category: '',
      selectColor: '',
      selectSize: '',
      selectQuantity: 0,
      images: [],
      selectedImage: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleColor = this.handleColor.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/item/${this.props.match.params.id}`)
      .then(res => 
        this.setState({ item: res.data[0], 
          colors: res.data.map(e => e.color), 
          category: res.data[0].category,
          selectedImage: res.data[0].image_url,
          images: res.data.map(e => {return {url: e.image_url,
           color: e.color }})
        })
      );
  }

  addItem() {
    const {product_id} = this.state.item
    const {selectColor, selectSize, selectQuantity} = this.state
    axios.post("/api/additem", {product_id, selectColor, selectSize, selectQuantity})
    .then()
    .catch();
  }

  handleColor(e) {
    this.setState({selectColor: e.target.value, selectedImage: this.state.images.find((image) => image.color === e.target.value).url})
  }

  handleSize(e){
    this.setState({selectSize: e.target.value})
  }

  handleQuantity(e){
    this.setState({selectQuantity: e.target.value})
  }

  render() {
    // console.log()
    console.log(this.state);
    let colorOptions = this.state.colors.map((e, i) => {
      return <option key={i}>{e}</option>;
    });
    const {item, selectedImage} = this.state
    
    return (
      <div>
        <Header />
        <h1>{this.state.item.product_name}</h1>
        <p>{item.price}</p>
        <p>{item.info}</p>
        

        {colorOptions.length ? <select onChange={this.handleColor}>{colorOptions}</select> : null}

       { item.category === 'apparel' ?
       <select>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
          <option value="">XS</option>
       </select> : null
       }
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

        <button onClick={this.addItem}>ADD TO CART</button>

        <img src={selectedImage} alt=""/>
        
      </div>
    );
  }
}

export default Item;
