"use client";
import React, { useState } from "react";
import ResturantLogin from "../_components/ResturantLogin";
import ResturantSignUp from "../_components/ResturantSignUp";

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <h1>Food Delivery App</h1>
      <div className="my-4">
        {login ? <ResturantLogin /> : <ResturantSignUp />}

        <button
          className="bg-zinc-500 px-2 py-4 rounded"
          onClick={() => setLogin(!login)}
        >
          {login ? "Create a new account?" : "Go to login page?"}
          Already have an account?
        </button>
      </div>
    </>
  );
};

export default page;
