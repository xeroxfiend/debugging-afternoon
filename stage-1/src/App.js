import React, { Component } from "react";
import StoreFront from "./Components/StoreFront/StoreFront.js";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart.js";
import NavBar from "./Components/NavBar/NavBar.js";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      showCart: false
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/products/")
      .then(response => {
        this.setState({
          products: response.data
        });
      });
  }
  addToCart(item) {
    // console.log('hello', item)
    this.setState({
      cart: [...this.state.cart, item]
    });
  }
  removeFromCart(index) {
    // console.log('removefromcart')
    let cartCopy = this.state.cart.slice();
    cartCopy.splice(index, 1);
    this.setState({
      cart: cartCopy
    });
  }
  navigate(location) {
    if (location === "cart") {
      this.setState({
        showCart: true
      });
    } else {
      this.setState({
        showCart: false
      });
    }
  }
  render() {
    const { products, showCart } = this.state;
    return (
      <div className="App">
        <NavBar navigate={this.navigate} />
        <div className="main-container">
          {showCart ? (
            <ShoppingCart removeFromCart={this.removeFromCart} cart={this.state.cart} />
          ) : (
            <StoreFront addToCart={this.addToCart} products={products} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
