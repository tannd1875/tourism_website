import React from "react";

interface Prop {
  title: string;
}

const Heading = ({ title }: Prop) => {
  return (
    <div className="pt-8 pb-6 flex justify-start items-center lg:w-2/3 mx-auto">
      <p className="font-bold text-4xl">{title}</p>
    </div>
  );
};

export default Heading;
