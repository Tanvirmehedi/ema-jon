import React from "react";
import "./Cart.css";
const Cart = ({ detail }) => {
  console.log(detail);
  return (
    <div>
      <div className="sticky top-4 text-slate-50 font-bold">
        <h3>Product Summary</h3>
        <hr />
        <div className="mt-4">
          <h3>Selected Product: {detail.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
