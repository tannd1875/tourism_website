import React from "react";

type Prop = {
  count: number;
};

const Heading = ({ count }: Prop) => {
  return (
    <div className="pt-8 pb-6 flex justify-between items-center ml-6 lg:ml-0">
      <div className="">
        <p className="font-bold lg:text-4xl text-2xl">
          Các mẹo du lịch hữu ích
        </p>
        <p className="mt-2">
          <b className="text-2xl mx-1">{count}</b>mẹo du lịch được đề xuất
        </p>
      </div>
    </div>
  );
};

export default Heading;
