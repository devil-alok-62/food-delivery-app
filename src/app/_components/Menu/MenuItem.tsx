// components/Menu/MenuItem.tsx
"use client";
import { Clock3 } from "lucide-react";
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
    <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)]">
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-amber-200 backdrop-blur-sm">
          {item.rating} ★
        </span>

        <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
          Popular
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{item.name}</h3>
          <span className="text-lg font-black text-amber-300">₹{item.price}</span>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-300">{item.desc}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-200">
            <Clock3 className="h-3.5 w-3.5 text-amber-300" />
            15-20 min
          </div>

          <button
            className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:brightness-105"
            onClick={() => onAddToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
