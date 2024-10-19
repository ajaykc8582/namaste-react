import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalAmount } = location.state;

  const openPaymentGateway = () => {
    const options = {
      key: "rzp_test_g2iRzNvJCN0p1A",
      amount: totalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 100 refers to 100 paise
      currency: "INR",
      name: "HUNGARIAN",
      description: "Test Transaction",
      handler: (response) => {
        // console.log(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        dispatch(clearCart());
        navigate("/");
      },
      prefill: {
        name: "Ajay",
        email: "ajaykumar.98.kol@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Payment
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Pay an amount of{" "}
          <span className="text-green-500 font-semibold">₹{totalAmount}</span>
        </p>
        <button
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300"
          onClick={openPaymentGateway}
        >
          Pay Now
        </button>
        <p className="text-gray-500 text-center text-sm mt-6">
          Powered by{" "}
          <a href="https://razorpay.com" className="text-blue-500">
            Razorpay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Payment;
