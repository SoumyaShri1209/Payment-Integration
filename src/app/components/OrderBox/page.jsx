
'use client';

import { useState } from "react";

export default function OrderBox({ name, price, image }) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = price * quantity;

  const onOrder = async () => {
    const res = await fetch("/api/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      order_id: data.order.id,
      amount: data.order.amount,
      currency: "INR",
      name,
      description: "Order Payment",

      handler: async function (response) {
        const verifyRes = await fetch("/api/verifyOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          }),
        });

        const verifyData = await verifyRes.json();

        if (verifyData.isOk) {
          alert("Payment successful 🎉");
        } else {
          alert("Payment failed ❌");
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 flex justify-center">
        <img
          src={image}
          alt={name}
          className="h-48 w-full rounded-lg object-contain"
        />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">₹{price} per item</p>
        <p className="mt-2 font-semibold">Total: ₹{totalPrice}</p>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          className="rounded bg-gray-300 px-4 py-1"
        >
          −
        </button>

        <span>{quantity}</span>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="rounded bg-gray-300 px-4 py-1"
        >
          +
        </button>
      </div>

      <button
        onClick={onOrder}
        className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
      >
        Order Now
      </button>
    </div>
  );
}

