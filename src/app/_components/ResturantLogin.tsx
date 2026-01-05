"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResturantLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-95 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl p-8">
      <h3 className="text-2xl font-semibold text-white text-center mb-6">
        Restaurant Login
      </h3>

      <form className="flex flex-col gap-5">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Email</label>
          <input
            type="email"
            placeholder="restaurant@email.com"
            className="px-4 py-2 rounded-lg bg-black/30 text-white placeholder:text-white/40 
                       border border-white/10 focus:outline-none focus:ring-2 
                       focus:ring-pink-500/50"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-2 pr-10 rounded-lg bg-black/30 text-white placeholder:text-white/40 
                         border border-white/10 focus:outline-none focus:ring-2 
                         focus:ring-pink-500/50"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 rounded-lg bg-yellow-500 py-2 font-semibold text-white hover:bg-yellow-600 transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ResturantLogin;
