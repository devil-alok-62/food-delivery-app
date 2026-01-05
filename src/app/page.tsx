"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { menuItems } from "@/data/menuData";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center bg-linear-to-br from-black via-zinc-900 to-black text-white px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-6xl font-extrabold uppercase leading-tight
                       drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
            >
              Fast <span className="text-yellow-400">Food</span> <br />
              Delivered To You
            </h1>

            <p className="mt-6 text-gray-300 max-w-lg">
              Order delicious food from nearby restaurants and get it delivered
              hot & fresh at your doorstep.
            </p>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => router.push("/login")}
                className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-semibold
                         hover:scale-105 transition flex items-center gap-2"
              >
                Order Now <ArrowRight size={18} />
              </button>

              <button
                className="px-8 py-4 rounded-xl border border-white/20
                         hover:bg-white/10 transition"
              >
                Explore Menu
              </button>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-yellow-400/20 blur-[120px] rounded-full" />

            <Image
              src="/hero.JPG" // 👉 public/food.png
              alt="Food Delivery"
              width={520}
              height={520}
              className="relative z-10 drop-shadow-2xl rounded"
              priority
            />
          </motion.div>
        </div>{" "}
      </section>

      {/* ================= MENU SECTION ================= */}
      <section
        id="Menu"
        className="py-24 bg-linear-to-b from-black via-zinc-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
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
          <div
            className="
        grid gap-10
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white/10 backdrop-blur-xl
                     border border-white/10 overflow-hidden
                     hover:scale-105 transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <span className="text-yellow-300 font-bold">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>

                  {/* RATING */}
                  <div className="flex items-center gap-1 mt-3 text-yellow-400 text-sm">
                    ⭐ {item.rating}
                  </div>

                  {/* BUTTON */}
                  <button
                    className="mt-4 w-full py-2 rounded-xl bg-yellow-300 text-black
                         font-semibold hover:bg-yellow-400 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="Contact"
        className="relative py-28 bg-linear-to-b from-black via-zinc-900 to-black text-white"
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10 bg-pink-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
              Contact <span className="text-yellow-300">Us</span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-lg">
              Have questions, feedback, or want to partner with us? Fill the
              form and our team will get back to you shortly.
            </p>

            <div className="mt-8 space-y-4 text-sm text-gray-300">
              <p>📍 India</p>
              <p>📧 support@fooddelivery.com</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl p-8">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-black/30 text-white
                     placeholder:text-white/40 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-black/30 text-white
                     placeholder:text-white/40 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="px-4 py-3 rounded-lg bg-black/30 text-white
                     placeholder:text-white/40 border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />

              <button
                type="submit"
                className="mt-2 rounded-lg bg-yellow-300 py-3 font-semibold text-black
                     hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIVE FOOTER SECTION ================= */}
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
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">
                Restaurant Login
              </li>
            </ul>
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
              <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm">
                GitHub
              </span>
              <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm">
                Instagram
              </span>
              <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm">
                YouTube
              </span>
              <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-sm">
                Mail
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-4 px-4 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Food Delivery. All rights reserved.
        </div>
      </section>
    </>
  );
}
