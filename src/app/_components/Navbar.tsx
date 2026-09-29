"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const sections = ["home", "menu", "contact"];
  const [active, setActive] = useState("home");

  // Scroll handler for progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // current scroll from top
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // total scrollable height

      // Fix: Ensure progress never exceeds 100%
      const scrollPercent = Math.min(
        Math.max((scrollY / height) * 100, 0),
        100
      );
      setProgress(scrollPercent);

      setScrolled(scrollY > 50);

      // Update active section based on scroll position
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "MENU", id: "menu" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <>
      {/* ================= SCROLL PROGRESS ================= */}
      <div className="fixed top-0 left-0 w-full h-1 z-54 bg-white/10">
        <div
          className="h-full bg-linear-to-r from-yellow-400 to-amber-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
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
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={
                    pathname === "/"
                      ? `#${link.id}`
                      : link.id === "menu"
                        ? "/menu"
                        : `/#${link.id}`
                  }
                  className={`relative text-sm font-semibold transition-all
                    ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <>
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400" />
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 blur-md opacity-70" />
                    </>
                  )}
                </a>
              );
            })}
          </div>

          {/* LOGIN BUTTON */}
          <Link
            href="/ResturantLogin"
            className="px-4 py-2 rounded-full bg-amber-300 text-black
                       font-bold shadow-lg shadow-amber-300/40
                       hover:bg-amber-400 hover:scale-105 transition-transform"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
