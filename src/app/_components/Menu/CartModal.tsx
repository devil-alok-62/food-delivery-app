"use client";

import React, { useState } from "react";
import type { MenuItemData } from "./MenuItem";

type CartItem = MenuItemData & { quantity: number };

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onQuantityChange: (itemName: string, quantity: number) => void;
  onPaymentSuccess: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onQuantityChange,
  onPaymentSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error ?? "Unable to create payment order.");
      }
      const { order, keyId } = result;

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Food Delivery",
        description: `${items.length} item(s) in your cart`,
        order_id: order.id,

        handler() {
          onPaymentSuccess();
        },

        theme: {
          color: "#facc15",
        },
      };

      if (!(window as any).Razorpay) {
        throw new Error("Payment checkout did not load. Please try again.");
      }
      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Payment could not be started.");
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

        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="max-h-64 space-y-3 overflow-y-auto">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 text-gray-700">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">₹{item.price} each</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={`Remove one ${item.name}`}
                  onClick={() => onQuantityChange(item.name, item.quantity - 1)}
                  className="h-8 w-8 rounded border border-gray-300"
                >
                  -
                </button>
                <span className="min-w-5 text-center">{item.quantity}</span>
                <button
                  type="button"
                  aria-label={`Add one ${item.name}`}
                  onClick={() => onQuantityChange(item.name, item.quantity + 1)}
                  className="h-8 w-8 rounded border border-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 border-t pt-3 font-semibold text-gray-900">Total: ₹{total}</p>
        {error && <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>}
        <button
          onClick={handlePayment}
          disabled={loading || items.length === 0}
          className="mt-4 w-full rounded-xl bg-green-600 py-3 font-semibold text-white"
        >
          {loading ? "Loading..." : `Pay ₹${total}`}
        </button>      </div>
    </div>
  );
};

export default CartModal;

