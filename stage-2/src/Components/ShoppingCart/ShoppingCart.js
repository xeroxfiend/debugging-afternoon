import React, { Component } from "react";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  render() {
    // console.log(this.props.shoppingCart)
    let shoppingCartDisplay = this.props.shoppingCart.map((element, index) => {
      return (
        <div className="shopping-cart-product-container" key={index}>
          <img src={element.image} alt="" />
          <div className="shopping-cart-info">
            <h2>{element.title}</h2>
            <h2>{"$" + element.price + ".00"}</h2>
            <div className="shopping-cart-button-container">
              <button
                className="shopping-cart-button"
                onClick={() => this.props.removeFromCart(index)}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="shopping-cart-container">
        {shoppingCartDisplay[0] ? (
          shoppingCartDisplay
        ) : (
          <div className="go-buy-something">
            <h1>Your shopping cart is empty! Go choose something!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
