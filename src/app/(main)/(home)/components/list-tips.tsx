import React from "react";
import SugTip from "./suggested-tip";
import { tipType } from "@/lib/type";

type Prop = {
  ListTip: tipType[];
};

const ListTips = ({ ListTip }: Prop) => {
  return (
    <div className="flex justify-start lg:gap-6 items-center overflow-hidden lg:-ml-1 ml-10">
      {ListTip.map((tip) => (
        <SugTip
          key={tip._id}
          title={tip.title}
          image={tip.images[0]}
          id={tip._id}
        ></SugTip>
      ))}
    </div>
  );
};

export default ListTips;
