import React from "react";
import { useProduct } from "./ContextUsing";

function Cart() {
  let Values = useProduct();
  return (
    <div>
      <h1>Added items to cart</h1>
      {Values.addItems.map((user, index) => (
        <div className="cart-card" key={index}>
          <p>
            {user.username} <br /> {user.email} <br /> {user.password} <br />{" "}
            initial value: {user.cost}$ <br />
            total value: {user.cost * user.qty}$
          </p>
          <button onClick={() => Values.addToCart(user)}>+</button>{" "}
          <p>Quantity: {user.qty}</p>{" "}
          <button onClick={() => Values.decItemQuantity(user)}>-</button>
          <button onClick={() => Values.removeCartItems(index)}>
            Remove from cart
          </button>{" "}
        </div>
      ))}
    </div>
  );
}

export default Cart;
