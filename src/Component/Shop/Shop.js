import React, { useEffect, useState } from "react";
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

  const clickHandle = (details) => {
    const newData = [...productDetails, details];
    setProductDetails(newData);
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
        {console.log(productDetails)}
        <div>
          <h2>Product Summary</h2>
          <div className="sticky top-0">
            <p>Selected Product = {productDetails.length}</p>
            <p>Total Price: $</p>
          </div>
          {/* {productDetails.map((detail) => (
            <Cart key={detail.id} detail={detail}></Cart>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Shop;