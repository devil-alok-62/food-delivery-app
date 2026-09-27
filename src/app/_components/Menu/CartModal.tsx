"use client";

import React, { useState } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
  price?: number;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  itemName,
  price,
}) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price,
        }),
      });

      console.log(res.status);
      console.log(res.url);

      const order = await res.json();

      console.log("Order:", order);
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Food Delivery",
        description: itemName,
        order_id: order.id,

        handler(response: any) {
          alert("Payment Successful");
          console.log(response);
        },

        theme: {
          color: "#facc15",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 w-80 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 cursor-pointer">Added to Cart!</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">{itemName}</span> - ₹{price}
        </p>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-green-600 py-3 font-semibold text-white"
        >
          {loading ? "Loading..." : `Pay ₹${price}`}
        </button>      </div>
    </div>
  );
};

export default CartModal;

