"use client";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListDirection from "./list-direction";
import ListTips from "./list-tips";
import { SliderType } from "@/lib/type";

const Slider = ({ slideList, type }: SliderType) => {
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slideList.length - 3 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slideList.length - 4 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden mb-4 border-y-2">
      <button
        onClick={prev}
        className="absolute z-10 w-8 h-16 rounded shadow bg-stone-300 text-gray hover:bg-white top-1/2 ml-4"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-6" />
      </button>
      <button
        onClick={next}
        className="absolute z-10 w-8 h-16 rounded shadow bg-stone-300 text-gray-800 hover:bg-white top-1/2 mr-4 right-0"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-6" />
      </button>
      <div
        className="flex transition-transform duration-500 w-max"
        style={{
          transform: `translateX(-${
            (curr * 98 + curr * 3) / slideList.length
          }%)`,
        }}
      >
        {type == "tip" ? (
          <ListTips ListTip={slideList}></ListTips>
        ) : (
          <ListDirection directions={slideList}></ListDirection>
        )}
      </div>
    </div>
  );
};

export default Slider;
