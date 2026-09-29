// components/Menu/Menu.tsx
"use client";
import React, { useState } from "react";
import { menuItems } from "@/data/menuData";
import MenuItem, { type MenuItemData } from "./MenuItem";
import CartModal from "./CartModal";

type CartItem = MenuItemData & { quantity: number };

const categories = ["Bestsellers", "Pizza", "Burgers", "Snacks", "Desserts"];

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
      className="relative overflow-hidden bg-[#0b0b0f] px-6 py-24 text-white"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at top, rgba(251,191,36,0.12), transparent 30%), radial-gradient(circle at bottom left, rgba(251,191,36,0.08), transparent 25%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
            Popular picks
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-black uppercase tracking-tight">
            Menu made for <span className="text-amber-300">every craving</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-300 text-base md:text-lg">
            Freshly made favorites from crowd-pleasing classics to flavorful comfort bites.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${index === 0
                ? "border-amber-300/60 bg-amber-300/15 text-amber-100"
                : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/25 hover:bg-white/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

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
