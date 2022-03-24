import React from "react";
import "./Cart.css";
const Cart = ({ detail }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const item of detail) {
    quantity = quantity + item.quantity;
    total = total + item.price * item.quantity;
    shipping = shipping + item.shipping * item.quantity;
  }
  const tax = parseFloat((((total + shipping) * 5) / 100).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <div className="sticky top-4 text-slate-50 font-bold">
        <h3>Product Summary</h3>
        <hr />
        <div className="mt-4">
          <h3>Selected Product: {quantity}</h3>
          <h3>Total Price: {total}</h3>
          <h3>Total Shipping Charge: ${shipping}</h3>
          <h3>Tax: ${tax}</h3>
          <h3 className="mt-4 text-slate-800">Grand Total : ${grandTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
