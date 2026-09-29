"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      {" "}
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
              <a
                href="#menu"
                className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-semibold
                         hover:scale-105 transition flex items-center gap-2"
              >
                Order Now <ArrowRight size={18} />
              </a>

              <a
                href="#menu"
                className="px-8 py-4 rounded-xl border border-white/20
                         hover:bg-white/10 transition"
              >
                Explore Menu
              </a>
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
              src="/hero.JPG"
              alt="Food Delivery"
              width={520}
              height={520}
              className="relative z-10 drop-shadow-2xl rounded"
              priority
            />
          </motion.div>
        </div>{" "}
      </section>
    </div>
  );
};

export default Home;
