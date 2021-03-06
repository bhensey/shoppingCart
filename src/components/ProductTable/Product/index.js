import React, { Component } from "react";
import "./index.css";

export default class Product extends Component {
  render() {
    let PRODUCT = this.props.product;
    let buttons = [];
    if (PRODUCT.sizes["s"]) {
      buttons.push(
        <button
          key="small-button"
          onClick={() => this.props.addCart(`${PRODUCT.id}-s`)}
        >
          S
        </button>
      );
    }
    if (PRODUCT.sizes["m"]) {
      buttons.push(
        <button
          key="medium-button"
          onClick={() => this.props.addCart(`${PRODUCT.id}-m`)}
        >
          M
        </button>
      );
    }
    if (PRODUCT.sizes["l"]) {
      buttons.push(
        <button
          key="large-button"
          onClick={() => this.props.addCart(`${PRODUCT.id}-l`)}
        >
          L
        </button>
      );
    }
    return (
      <div className="product">
        <img
          src={require(`../../../static/data/products/${PRODUCT.sku}_1.jpg`)}
        />
        <h4>{PRODUCT.title}</h4>
        <h3>${PRODUCT.price}</h3>
        <h4>Add to cart:</h4>
        {buttons}
      </div>
    );
  }
}
