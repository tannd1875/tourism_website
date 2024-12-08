import { useGlobalHeadingContext } from "@/lib/context/headingContext";
import React from "react";

const HeadingInfo = () => {
  const { count } = useGlobalHeadingContext();
  return (
    <div>
      <p className="font-bold lg:text-4xl text-2xl">
        Danh sách điểm đến du lịch
      </p>
      <p className="mt-2">
        <b className="text-2xl">{count}</b> địa điểm được tìm thấy
      </p>
    </div>
  );
};

export default HeadingInfo;
