"use client";
import React, { ChangeEvent } from "react";

type Props = {
  count: number;
  sortValue: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Heading = ({ count, sortValue, handleSort }: Props) => {
  const Options = ["Tên", "Giá tiền"];

  return (
    <div className="pt-8 pb-6 flex justify-between items-center flex-col lg:flex-row">
      <div className="">
        <p className="font-bold lg:text-4xl text-2xl">
          Danh sách điểm đến du lịch
        </p>
        <p className="mt-2">
          <b className="text-2xl">{count}</b> địa điểm được tìm thấy
        </p>
      </div>
      <div className="mt-4 lg:mt-0 ml-7">
        <label className="mr-4"> Sắp xếp:</label>
        <select
          name=""
          id=""
          className="py-2 pl-2 pr-16 border-2 rounded-md bg-neutral-200 "
          value={sortValue}
          onChange={handleSort}
        >
          <option value="" selected disabled hidden>
            Chọn thông tin
          </option>
          {Options.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Heading;
