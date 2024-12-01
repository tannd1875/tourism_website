import React from "react";
import SugTip from "./suggested-tip";

interface Prop {
  ListTip: object[];
}

const ListTips = ({ ListTip }: Prop) => {
  return (
    <div className="flex justify-start lg:gap-6 gap-10 items-center overflow-hidden lg:-ml-1 ml-12">
      {ListTip.map((tip, index) => (
        <SugTip key={index} name={tip.name} cover={tip.cover}></SugTip>
      ))}
    </div>
  );
};

export default ListTips;
