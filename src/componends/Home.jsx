import React, { useState } from 'react';
import { useProduct } from './ContextUsing';
import './Home.css'; 

function Home() {
  const Values = useProduct();
  let [search, setSearch] = useState({
    searchValues: "",
  });
  let handle1=(e)=>{
    setSearch({ ...search, searchValues: e.target.value });
  }
console.log(search);
  return (
    <div className="home-page">
      <h1>This is home page</h1>
      <input
        style={{
          width: "300px",
          marginLeft: "40%",
          padding: "5px",
          borderRadius: "10px",
        }}
        type="text"
        onChange={handle1}
        placeholder="SEARCH BY PRODUCT NAME "
      />

      {Values.fetchedData
        .filter((user) => user.username.includes(search.searchValues))
        .map((user, index) => (
          <div className="user-card" key={user.id || index}>
            <p>
              {user.username} <br />
              {user.email} <br />
              {user.password} <br />
              {user.cost}$
            </p>
            <button onClick={() => Values.addToCart(user)}>Add to cart</button>
          </div>
        ))}

      {/* {Values.data.product
        .filter((user) => user.proName.includes(search.searchValues))
        .map((user, index) => (
          <div className="product-card" key={index}>
            <p>
              {user.proName} <br /> {user.proCost}
            </p>
          </div>
        ))} */}

      {/* <h1>Added items to cart</h1>
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
      ))} */}
    </div>
  );
}

export default Home;
