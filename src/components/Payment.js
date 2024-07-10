import React from 'react';
import Razorpay from 'razorpay';

const Payment = ({ amount }) => {
    const handlePayment = () => {
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Enter the Key ID generated from the Dashboard
            amount: amount * 100, // Amount is in currency subunits. Default currency is INR.
            currency: "INR",
            name: "Your Company Name",
            description: "Test Transaction",
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Ajay Chaudhary",
                email: "ajaychaudhary@example.com",
                contact: "9999999999"
            },
            notes: {
                address: "Your Company Address"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const rzp = new Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <button className="p-2 m-2 bg-green-500 text-white rounded-lg"
                onClick={handlePayment}
            >
                Pay Now
            </button>
        </div>
    )
}

export default Payment;
