import React from "react";
import SugDirection from "./sugguested-direction";
import { directionType } from "@/lib/type";

type Props = {
  directions: directionType[];
};

const ListDirection = ({ directions }: Props) => {
  return (
    <div className="flex justify-start lg:gap-6 items-center overflow-hidden lg:-ml-1 ml-8">
      {directions.map((direction) => (
        <SugDirection
          key={direction._id}
          id={direction._id}
          name={direction.title}
          address={direction.address}
          classify={direction.classify}
          score={5}
          price={direction.price}
          image={direction.images[0]}
        ></SugDirection>
      ))}
    </div>
  );
};

export default ListDirection;
