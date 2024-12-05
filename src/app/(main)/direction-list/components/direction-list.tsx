"use client";
import { directionType } from "@/lib/type";

import React from "react";
import Direction from "./direction";

type Props = {
  items: directionType[];
};

const DirectionList = ({ items }: Props) => {
  return (
    <>
      <div className="lg:w-2/3 grow mx-2 lg:ml-6">
        {items.length == 0 ? (
          <p className="italic">Không có kết quả phù hợp nào được tìm thấy</p>
        ) : (
          items.map((item) => {
            return <Direction item={item} key={item._id}></Direction>;
          })
        )}
      </div>
    </>
  );
};

export default DirectionList;
