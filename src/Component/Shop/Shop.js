import React, { useEffect, useState } from "react";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch("products.json").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);

  //   Lode Local Store id
  useEffect(() => {
    const storedCart = getStoreCart();
    const savedCart = [];
    for (const id in storedCart) {
      const data = products.find((product) => product.id === id);
      if (data) {
        const quantity = storedCart[id];
        data.quantity = quantity;
        savedCart.push(data);
      }
    }
    setProductDetails(savedCart);
  }, [products]);

  const clickHandle = (details) => {
    let newData = [];
    const exist = productDetails.find((item) => item.id === details.id);
    if (!exist) {
      details.quantity = 1;
      newData = [...productDetails, details];
    } else {
      const rest = productDetails.filter((item) => item.id !== details.id);
      exist.quantity = exist.quantity + 1;
      newData = [...rest, exist];
    }
    setProductDetails(newData);
    addToDb(details.id);
  };

  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-4 my-4">
        <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto">
          {products.map((product) => (
            <Products
              key={product.id}
              clickHandle={clickHandle}
              product={product}
            ></Products>
          ))}
        </div>
      </div>
      <div className="col-span-1 bg-orange-500 flex justify-center relative ">
        <Cart detail={productDetails}></Cart>
      </div>
    </div>
  );
};

export default Shop;
