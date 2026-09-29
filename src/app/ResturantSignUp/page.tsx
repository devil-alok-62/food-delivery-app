"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Backtohome from "../_components/Backtohome";

const ResturantSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setnumber] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");

  const handleSingup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-gray-900">
      <div
        className="
        w-105 lg:w-160 rounded-2xl mt-10 
        bg-white/10 backdrop-blur-2xl 
        border border-white/20 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
        p-8
      "
      >
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Restaurant Signup
        </h3>

        <form onSubmit={handleSingup} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* User Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/70">Name</label>
            <input
              type="text"
              placeholder="Alok Raj"
              className="input-style"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="restaurant@email.com"
              className="input-style"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
                value={password}
                onChange={(e) => setpassword(e.target.value)}
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

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/70">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input-style pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="eye-btn"
              >
                {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/70">Contact Number</label>
            <input
              type="tel"
              placeholder="+91"
              className="input-style"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          {/* City */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/70">City</label>
            <input
              type="text"
              placeholder="Mumbai"
              className="input-style"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>

          {/* Full Address */}
          <div className="flex flex-col gap-1 lg:col-span-2">
            <label className="text-sm text-white/70">Full Address</label>
            <textarea
              rows={2}
              placeholder="Street, Area, Landmark..."
              className="input-style resize-none"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
    lg:col-span-2 mt-2 rounded-lg 
    bg-yellow-500 py-2 font-semibold text-white
    hover:bg-yellow-600 transition-all duration-300
    shadow-lg shadow-yellow-500/30
  "
          >
            Create Account
          </button>
          <p className="text-sm text-white/70 text-center mt-4 lg:col-span-2">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/ResturantLogin")}
              className="text-yellow-400 hover:text-yellow-500 font-medium"
            >
              Login
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

export default ResturantSignUp;
