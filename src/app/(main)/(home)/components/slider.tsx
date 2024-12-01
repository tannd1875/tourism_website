"use client";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ListDirection from "./list-direction";
import ListTips from "./list-tips";
interface Prop {
  slideList: object[];
  autoSlide: boolean;
  autoSlideInterval: number;
  type: string;
}

const Slider = ({
  slideList: slides,
  autoSlide = true,
  autoSlideInterval = 500,
  type,
}: Prop) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 3 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 4 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="relative overflow-hidden mb-4">
      <button
        onClick={prev}
        className="absolute z-10 w-8 h-8 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white top-1/2 ml-4"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-6" />
      </button>
      <button
        onClick={next}
        className="absolute z-10 w-8 h-8 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white top-1/2 mr-4 right-0"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-6" />
      </button>
      <div
        className="flex transition-transform duration-500 w-max"
        style={{
          transform: `translateX(-${(curr * 98 + curr * 2) / slides.length}%)`,
        }}
      >
        {type == "tip" ? (
          <ListTips ListTip={slides}></ListTips>
        ) : (
          <ListDirection ListDir={slides}></ListDirection>
        )}
      </div>
    </div>
  );
};

export default Slider;
