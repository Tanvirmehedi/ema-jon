import React from "react";
import "./Cart.css";
const Cart = ({ detail }) => {
  const { name, seller, price, img, ratings } = detail;
  const nameSlice = name.slice(0, 4);
  return (
    <div>
      <div className="sticky top-4 ">
        <div className="text-slate-50 grid grid-cols-3 border items-center gap-5">
          <img src={img} alt={name} />
          <span className="font-bold">${price}</span>
          <span>{nameSlice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
