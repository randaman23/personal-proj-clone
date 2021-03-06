import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { addToCart, cartCount } from "../../ducks/reducer";
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      colors: [],
      category: "",
      selectColor: null,
      selectSize: "SMALL",
      selectQuantity: 1,
      images: [],
      selectedImage: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/item/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        item: res.data[0],
        colors: res.data.map(e => {
          return { name: e.color, id: e.color_id };
        }),
        category: res.data[0].category,
        selectSize: res.data[0].category !== "apparel" ? "" : "SMALL",
        selectedImage: res.data[0].image_url,
        selectColor: res.data[0].color_id,
        images: res.data.map(e => {
          return {
            url: e.image_url,
            color: e.color
          };
        })
      });
    });
  }

  addItem() {
    const { product_id } = this.state.item;
    const { selectQuantity, selectColor, selectSize } = this.state;

    axios
      .post("/api/additem", {
        product_id,
        selectQuantity,
        selectColor,
        selectSize
      })
      .then(res => {
        this.props.addToCart(res.data);
        this.props.cartCount(res.data[0].res);
      });
  }

  handleColor(e) {
    console.log(e.target.value);
    let obj = this.state.colors.find(color => color.name === e.target.value);
    this.setState({
      selectColor: obj.id,
      selectedImage: this.state.images.find(
        image => image.color === e.target.value
      ).url
    });
  }

  handleSize(e) {
    this.setState({ selectSize: e.target.value });
  }

  handleQuantity(e) {
    this.setState({ selectQuantity: e.target.value });
  }

  render() {
    // console.log()
    console.log(this.state);
    let colorOptions = this.state.colors.map((e, i) => {
      return (
        <option value={e.color_id} key={i}>
          {e.name}
        </option>
      );
    });
    const { item, selectedImage } = this.state;

    return (
      <div>
        <Header />
        <div>
          <div className="item_main">
            <div>
              <h1 className="product_header">{this.state.item.product_name}</h1>
              <p className="product_price">{item.price}</p>
            </div>
            {this.state.colors.length > 1 ? (
              <div className="selector_wrapper">
                <p className="label">Color</p>
                <select onChange={this.handleColor} className="product_options">
                  {colorOptions}
                </select>
              </div>
            ) : null}
            {item.category === "apparel" ? (
              <div className="selector_wrapper">
                <p className="label">Size</p>
                <select className="product_options" onChange={this.handleSize}>
                  <option value="SMALL">SMALL</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LARGE">LARGE</option>
                  <option value="X-LARGE">X-LARGE</option>
                  <option value="XX-LARGE">XX-LARGE</option>
                  <option value="X-SMALL">XS</option>
                </select>
              </div>
            ) : null}
            <div className="selector_wrapper">
              <p className="label">Qty</p>
              <select
                className="product_options"
                onChange={this.handleQuantity}
              >
                <option value="1">ONE</option>
                <option value="2">TWO</option>
                <option value="3">THREE</option>
                <option value="4">FOUR</option>
                <option value="5">FIVE</option>
                <option value="6">SIX</option>
                <option value="7">SEVEN</option>
                <option value="8">EIGHT</option>
                <option value="9">NINE</option>
                <option value="10">TEN</option>
              </select>
            </div>

            <button className="product_add" onClick={this.addItem}>
              ADD TO CART
            </button>
            <p className="product_information">{item.info}</p>
            <img src={selectedImage} alt="" className="item_img" />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  { addToCart, cartCount }
)(Item);
