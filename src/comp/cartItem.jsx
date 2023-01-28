import React from "react";
import "./cartItem.css";
import { useCart } from "../CartContext";

export default function CartItem(props) {
  const { removeFromCart, addToCart } = useCart();

  return (
    <div className="cartItem">
      <div className="padding">
        <button onClick={() => removeFromCart(props.item.id)}>
          <div className="image">
          <div className="name">{props.item.name}</div>
          </div>
        </button>
        <div className="row">
          <div className="price">{props.item.price}</div>

          <div className="onSale">
          {props.item.isOnSale && props.item.isInStock && (
            <img src="./sale-badge.png" width={50} />
          )}
        </div>

          <div className="color">{props.item.color}</div>
        </div>
        <div className="row">
          <div className="price">{props.item.category}</div>
          <div className="color">{props.item.type}</div>
        </div>
        <div className="quant" onClick={() => addToCart(props.item.id)}>{props.item.quant}</div>

        <div className="onSale">
          {props.item.isOnSale && props.item.isInStock && (
            <img src="./public/sale-badge.png" width={50} />
          )}
        </div>
      </div>
      <div className="onSale">
          {props.item.isOnSale && props.item.isInStock && (
            <img src="./public/sale-badge.png" width={50} />
          )}
        </div>
    </div>
  );
}
