"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (href: string, label: string) => {
    const active = pathname === href;

    return (
      <Link
        href={href}
        className={`relative mx-4 uppercase text-sm font-semibold transition-all
          ${active ? "text-yellow-300" : "text-white/70 hover:text-white"}
        `}
      >
        {label}

        {/* Active underline */}
        {active && (
          <>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300" />
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 blur-md opacity-70" />
          </>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* ================= SCROLL PROGRESS ================= */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-100 bg-white/10">
        <div
          className="h-full bg-linear-to-r from-yellow-400 to-amber-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-xl bg-zinc-900/40 border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img className="h-8 w-8 rounded-full" src="/logo.JPG" alt="logo" />
            <h1 className="text-white font-bold text-lg uppercase tracking-wide">
              <span className="text-yellow-300 drop-shadow-lg">FOOD</span>{" "}
              Delivery
            </h1>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center">
            {navItem("/", "Home")}
            {navItem("/menu", "Menu")}
            {navItem("/contact", "Contact")}
          </div>

          {/* LOGIN BUTTON */}
          <Link
            href="/resturant"
            className="px-4 py-2 rounded-full bg-amber-300 text-black
                       font-bold shadow-lg shadow-amber-300/40
                       hover:bg-amber-400 hover:scale-105 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
