import { useGlobalHeadingContext } from "@/lib/context/headingContext";
import React, { ChangeEvent } from "react";

const HeadingSort = () => {
  const { sortBy, setSortBy } = useGlobalHeadingContext();
  const Options = ["Tên", "Giá tiền"];
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="mt-4 lg:mt-0 ml-7">
      <label className="mr-4"> Sắp xếp:</label>
      <select
        name=""
        id=""
        className="py-2 pl-2 pr-16 border-2 rounded-md bg-neutral-200 "
        value={sortBy}
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
  );
};

export default HeadingSort;
