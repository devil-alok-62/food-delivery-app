import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="relative bg-zinc-900/90 backdrop-blur-xl border-t border-white/10 text-white">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-yellow-400/10 via-transparent to-pink-500/10 blur-3xl" />

        <div
          className="
      max-w-7xl mx-auto px-6 py-14
      grid gap-12
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-2
      lg:grid-cols-4
    "
        >
          {/* LOGO */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <img src="/logo.JPG" className="h-9 w-9 rounded-full" />
              <h2 className="text-xl font-bold uppercase">
                <span className="text-yellow-300">FOOD</span> Delivery
              </h2>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
              Fast & fresh food delivery from your favorite restaurants.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link className="hover:text-white cursor-pointer" href="/">
                Home
              </Link>
              <Link className="hover:text-white cursor-pointer" href="/menu">
                Menu
              </Link>
              <Link
                className="hover:text-white cursor-pointer"
                href="/#contact"
              >
                Contact
              </Link>
              <Link
                className="hover:text-white cursor-pointer"
                href="/ResturantLogin"
              >
                Restaurant Login
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm"
              >
                YouTube
              </a>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm"
              >
                Mail
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-4 px-4 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Food Delivery. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Footer;
