import React from "react";
import SugDirection from "./sugguested-direction";

interface Prop {
  ListDir: object[];
}
const ListDirection = (prop: Prop) => {
  return (
    <div className="flex justify-start gap-10 lg:gap-6 items-center overflow-hidden lg:-ml-1 ml-12">
      {prop.ListDir.map((Dir, index) => (
        <SugDirection
          key={index}
          name={Dir.title}
          address={Dir.address}
          classify={Dir.classify}
          score={5}
          price={Dir.price}
          cover={Dir.cover}
        ></SugDirection>
      ))}
    </div>
  );
};

export default ListDirection;
