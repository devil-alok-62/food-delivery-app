"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResturantSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="
        w-105 rounded-2xl 
        bg-white/10 backdrop-blur-2xl 
        border border-white/20 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
        p-8
      "
    >
      <h3 className="text-2xl font-semibold text-white text-center mb-6">
        Restaurant Signup
      </h3>

      <form className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Email</label>
          <input
            type="email"
            placeholder="restaurant@email.com"
            className="input-style"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="input-style pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="eye-btn"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="input-style pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-btn"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Restaurant Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Restaurant Name</label>
          <input
            type="text"
            placeholder="Foodies Hub"
            className="input-style"
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">City</label>
          <input type="text" placeholder="Mumbai" className="input-style" />
        </div>

        {/* Full Address */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Full Address</label>
          <textarea
            rows={2}
            placeholder="Street, Area, Landmark..."
            className="input-style resize-none"
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/70">Contact Number</label>
          <input type="tel" placeholder="9876543210" className="input-style" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            mt-2 rounded-lg 
            bg-yellow-500 py-2 font-semibold text-white
            hover:bg-yellow-600
            transition-all duration-300
            shadow-lg shadow-yellow-500/30
          "
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default ResturantSignUp;
