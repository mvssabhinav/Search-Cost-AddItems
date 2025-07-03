import React from "react";
import { useProduct } from "./ContextUsing";

function Cart() {
  let items = useProduct();
  return (
    <div>
      {items.addItems.map((user) => (
        <p>
          {user.username} <br />
          {user.email} {user.password}
        </p>
      ))}
    </div>
  );
}

export default Cart;
