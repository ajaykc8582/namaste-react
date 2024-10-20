import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import Payment from "./Payment";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      (item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100),
    0
  );

  console.log("from cart", totalAmount);

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { totalAmount } });
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 mt-20 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add item to the cart.</h1>
        )}
        <ItemList items={cartItems} />
        <h2 className="text-xl font-bold">Total Amount: ₹{totalAmount}</h2>
        <button
          className="p-2 m-2 bg-green-500 text-white rounded-lg"
          onClick={handleProceedToPayment}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
