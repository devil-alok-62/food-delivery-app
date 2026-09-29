// components/Menu/Menu.tsx
"use client";
import React, { useState } from "react";
import { menuItems } from "@/data/menuData";
import MenuItem, { type MenuItemData } from "./MenuItem";
import CartModal from "./CartModal";

type CartItem = MenuItemData & { quantity: number };

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItemData) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
    setModalOpen(true);
  };

  const handleQuantityChange = (itemName: string, quantity: number) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => item.name === itemName ? { ...item, quantity } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <section
      id="menu"
      className="min-h-screen flex items-center bg-linear-to-bl from-black via-zinc-900 to-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            Our <span className="text-yellow-300">Menu</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Choose from our best selling delicious meals
          </p>
        </div>

        {/* MENU GRID */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        items={cartItems}
        onQuantityChange={handleQuantityChange}
        onPaymentSuccess={() => {
          setCartItems([]);
          setModalOpen(false);
        }}
      />
    </section>
  );
};

export default Menu;
