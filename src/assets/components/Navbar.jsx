import React from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
const Navbar = () => {
  return (
    <div className="max-w-[1680px] m-auto px-10 py-5 bg-black flex justify-between font-bold">
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
        <p className="text-red-400 p-5">Home</p>
        <p className="text-red-400 p-5">Profile</p>
        <p className="text-red-400 p-5">Settings</p>
      </div>
    </div>
  );
};

export default Navbar;
