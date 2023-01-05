import React from "react";
// import "./cartItem.css";
import { useCart } from "../CartContext";

export default function CartItem(props) {
  const { removeFromCart } = useCart();

  return (
    <div className="cartItem">
      <div className="padding">
        <button onClick={() => removeFromCart(props.id)}>
          <div className="image"></div>
        </button>
        <div className="name">{props.name}</div>
        <div className="row">
          <div className="price">{props.price}</div>
          <div className="color">{props.color}</div>
        </div>
        <div className="row">
          <div className="price">{props.cat}</div>
          <div className="color">{props.type}</div>
        </div>
        <div className="quant">{props.quant}</div>

        <div className="onSale">
          {props.isOnSale && props.isInStock && (
            <img src="./public/sale-badge.png" width={50} />
          )}
        </div>
      </div>
    </div>
  );
}
