// components/Menu/Menu.tsx
"use client";
import React, { useState } from "react";
import { menuItems } from "@/data/menuData";
import MenuItem from "./MenuItem";
import CartModal from "./CartModal";

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleAddToCart = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
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
        itemName={selectedItem?.name}
        price={selectedItem?.price}
      />
    </section>
  );
};

export default Menu;
