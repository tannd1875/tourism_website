import React from "react";

interface Prop {
  name: string;
  cover: string;
}

const SugTip = ({ name, cover }: Prop) => {
  return (
    <a
      className="transition-all duration-200 w-72 rounded my-4 hover:scale-105"
      href={`/information?title=${name}&type=tip`}
    >
      <div className="w-64 h-64 overflow-hidden mx-auto rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src={cover}
          alt={name}
        />
      </div>
      <div className="text-xl mx-4 mb-4 mt-8">
        <h1 className="font-bold mb-2 truncate">{name}</h1>
      </div>
    </a>
  );
};

export default SugTip;
