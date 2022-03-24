import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Products.css";
const Products = ({ product, clickHandle }) => {
  const { name, seller, price, img, ratings } = product;
  return (
    <div className="relative">
      <div className="border p-1 rounded-md relative ">
        <img
          src={img}
          alt={name}
          className=" transition-all hover:rounded-lg hover:z-50 "
        />
        <h4 className="text-left">{name}</h4>
        <p className="text-left font-semibold">Price: ${price}</p>
        <p className="text-left">Manufacturer: {seller}</p>
        <p className="text-left mb-10">Rating : {ratings}</p>
      </div>
      <button
        onClick={() => {
          clickHandle(product);
        }}
        className="absolute flex bottom-0 justify-center items-center w-full py-1 rounded-b-md font-semibold bg-orange-300"
      >
        Add to Cart{" "}
        <MdOutlineAddShoppingCart className="ml-2 text-orange-900" />
      </button>
    </div>
  );
};

export default Products;
