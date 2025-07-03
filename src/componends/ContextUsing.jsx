import { createContext, useContext, useEffect, useState } from "react";

export let Context = createContext();

export let ProductProvider = ({ children }) => {
  let data = {
    product: [
      {
        idNo: 1234,
        proName: "nailcutter",
        proCost: 300,
      },
      {
        idNo: 2345,
        proName: "box",
        proCost: 250,
      },
    ],
  };
  let [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetchingValues();
  }, []);
  let fetchingValues = async () => {
    let value = await fetch(`http://localhost:3000/order`);
    let value1 = await value.json();
    setFetchedData(value1);
  };
  let [addItems, setAddItems] = useState([]);

  const addToCart = (item) => {
    const ProductExisting = addItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (ProductExisting) {
      const updatedCart = addItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setAddItems(updatedCart);
    } else {
      setAddItems((prev) => [...prev, { ...item, qty: 1 }]);
    }
  };
  
 
const decItemQuantity = (item) => {
  const ProductExisting = addItems.find((cartItem) => cartItem.id === item.id);

  if (ProductExisting) {
    const updatedCart = addItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.qty > 1) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        } else {
          return { ...cartItem, qty: 1 }; // or remove it if qty becomes 0
        }
      }
      return cartItem;
    });
    setAddItems(updatedCart);
  }
};
  

 
  let removeCartItems = (indexToRemove) => {
    const filtered = addItems.filter((_, index) => index !== indexToRemove); // for example here indexToRemove is 2 filter will remove 
    setAddItems(filtered);
  };

  return (
    <Context.Provider
      value={{
        data,
        fetchedData,
        addToCart,
        addItems,
        removeCartItems,
        decItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export let useProduct = () => {
  return useContext(Context);
};
