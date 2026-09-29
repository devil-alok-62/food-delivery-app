// components/Menu/MenuItem.tsx
"use client";
import React from "react";

export interface MenuItemData {
  name: string;
  price: number;
  img: string;
  desc: string;
  rating: number;
}

interface MenuItemProps {
  item: MenuItemData;
  onAddToCart: (item: MenuItemData) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  return (
    <div className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:scale-105 transition duration-300">
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="text-yellow-300 font-bold">₹{item.price}</span>
        </div>

        <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

        <div className="flex items-center gap-1 mt-3 text-yellow-400 text-sm">
          ⭐ {item.rating}
        </div>

        <button
          className="mt-4 w-full py-2 rounded-xl bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition"
          onClick={() => onAddToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
