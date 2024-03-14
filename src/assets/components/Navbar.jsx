import React from "react";
import { NavLink } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import { useState } from "react";
import { movies } from "../data/data.js";

const Navbar = () => {
  return (
    <div className="max-w-[1680px] m-auto px-10 py-1 bg-black flex justify-between font-bold ">
      <div className="flex items-center justify-between">
        <TheatersIcon className="bg-white " />
        <h1 className="text-red-400 p-5 text-2xl">Showtime</h1>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full p-2 w-[900px]"
        />
      </div>
      <div className="flex ">
        <NavLink to="/Login" className="text-red-400 p-5">
          Login
        </NavLink>
        <NavLink to="/Signup" className="text-red-400 p-5">
          Sign up
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
