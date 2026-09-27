"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Backtohome from "../_components/Backtohome";

const ResturantLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-gray-900">
      <div className="w-95 lg:w-105 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl p-8">
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 pr-10 rounded-lg bg-black/30 text-white placeholder:text-white/40 
                         border border-white/10 focus:outline-none focus:ring-2 
                         focus:ring-pink-500/50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-btn"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
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

          {/* Register Link */}
          <p className="text-sm text-white/70 text-center mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/ResturantSignUp")}
              className="text-yellow-400 hover:text-yellow-500 font-medium"
            >
              Register
            </button>
          </p>
        </form>
      </div>
      <div className="absolute top-15 left-15">
        <Backtohome />
      </div>
    </div>
  );
};

export default ResturantLogin;
