"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const movies = [
  { id: 1, title: "Action", img: "/assets/MovieContainer.png" },
  { id: 2, title: "Adventure", img: "/assets/MovieContainer2.png" },
  { id: 3, title: "Comedy", img: "/assets/MovieContainer3.png" },
  { id: 4, title: "Drama", img: "/assets/MovieContainer4.png" },
  { id: 5, title: "Horror", img: "/assets/MovieContainer5.png" },
];

const Category = () => {
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction * 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        setScrollProgress((scrollLeft / maxScrollLeft) * 100);
      }
    };

    sliderRef.current.addEventListener("scroll", handleScroll);
    return () => sliderRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container px-5 md:px-10 mx-auto mt-20">
      <div className="flex max-md:flex-col justify-between items-center">
        <div>
          <h2 className="text-white font-bold text-3xl max-md:text-2xl text-left">
            Explore our wide variety of categories
          </h2>
          <p className="text-[#999999] text-sm">
            Whether you`re looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="top-4 max-md:hidden bg-[#0F0F0F] p-2 border rounded-lg border-[#1F1F1F] right-4 flex items-center space-x-2">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="p-2 text-white bg-[#1F1F1F] rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Progress Bar */}
          <div className="w-16 h-1 bg-gray-500 rounded overflow-hidden">
            <div
              style={{ width: `${scrollProgress}%` }}
              className="h-full bg-[#E50000] transition-all "
            ></div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="p-2 text-white bg-[#1F1F1F] rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="relative w-full py-4">
        {/* Movie Slider */}
        <div className="relative overflow-hidden">
          {/* Movie Cards */}
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="snap-start flex-shrink-0 w-48 sm:w-60 md:w-72 bg-[#262626] rounded-lg p-4 shadow-lg transition-transform duration-300"
              >
                <Image
                  width={200}
                  height={300}
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-48 md:h-60 object-cover rounded-md"
                />
                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-center text-lg font-semibold text-white">
                    {movie.title}
                  </h3>
                  <Link href='/' className="text-white hover:text-black transition-all duration-500">
                    <FaArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Progress Bar */}
        <div className="md:hidden flex justify-center mt-5">
          <div className="w-24 h-1 bg-gray-500 rounded-full overflow-hidden">
            <div
              style={{ width: `${scrollProgress}%` }}
              className="h-full bg-[#E50000] transition-all"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
