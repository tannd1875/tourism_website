import React from "react";

interface Prop {
  title: string;
}

const Heading = ({ title }: Prop) => {
  return (
    <div className="pt-8 pb-6 flex justify-between items-center">
      <div className="">
        <p className="font-bold text-4xl">{title}</p>
      </div>
    </div>
  );
};

export default Heading;
