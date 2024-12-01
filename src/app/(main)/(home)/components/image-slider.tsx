"use client";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
interface Prop {
  images: string[];
  autoSlide: boolean;
  autoSlideInterval: number;
}
function ImageSlide({
  images: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Prop) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="w-full relative overflow-hidden mb-4">
      <div
        className="flex transition-transform duration-1000 w-max"
        style={{
          transform: `translateX(-${(curr * 100) / slides.length}%)`,
        }}
      >
        {slides.map((s, index) => (
          <div key={index} className="h-96 overflow-hidden">
            <img className="w-full h-full object-cover object-center" src={s} />
          </div>
        ))}
      </div>
      <div className="absolute inset-1 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-6" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-6" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((index, i) => (
            <div
              key={index}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlide;
