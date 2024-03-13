import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { movies } from "../data/data.js";
const MovieDetails = () => {
  const { moviename } = useParams();
  const movie = movies.find((movie) => movie.title === moviename);
  return (
    <div>
      <div className="px-4 py-6 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto items-start">
          <div className="grid gap-4 md:gap-8 col-span-2">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold leading-none">{movie.title}</h1>
              <div className="relative w-full aspect-[16/9]">
                <span className="absolute inset-0 w-full h-full object-cover rounded-md bg-muted" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50">
                  Play Video
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h2 className="text-xl font-bold">Description</h2>
              <p>{movie.description}</p>
            </div>
            <div className="grid gap-4 md:gap-8">
              <h2 className="text-xl font-bold">Details</h2>
              <div className="grid md:grid-cols-2 gap-4 lg:gap-8 items-start">
                <div className="grid gap-1">
                  <p className="text-sm text-muted">Duration</p>
                  <p>{movie.duration}</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm text-muted">Language</p>
                  <p>{movie.language}</p>
                </div>
                <div className="grid gap-1">
                  <p className="text-sm text-muted">Format</p>
                  <p>{movie.format}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:gap-8">
              <button
                className="bg-yellow-500 hover:bg-yellow-600"
                variant="primary"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="grid gap-4 md:gap-8 items-start">
            <div className="relative w-full aspect-[4/3]">
              <span className="absolute inset-0 w-full h-full object-cover rounded-md bg-muted" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50">
                Play Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
