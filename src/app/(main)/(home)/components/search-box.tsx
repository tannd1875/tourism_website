import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const [addressValue, setAddressValue] = useState("");
  const [directionValue, setDirectionValue] = useState("");
  const [submit, setSubmit] = useState(false);
  return (
    <div className="text-xl py-20 px-12 bg-gradient-to-r from-green-300 to-emerald-500 lg:mt-28 max-sm:pt-36 relative">
      <h1 className="mb-6 font-bold text-2xl text-center">
        Tìm một địa điểm du lịch phù hợp
      </h1>
      <div className="flex justify-between items-center gap-4 rounded flex-col lg:flex-row">
        <select
          className="lg:w-1/6 p-4 hover:cursor-pointer w-full"
          name="city"
          id="city"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            {
              setAddressValue(e.target.value);
            }
          }}
        >
          <option value="" selected disabled hidden>
            Tỉnh/ Thành
          </option>
          <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
          <option value="Đồng Nai">Đồng Nai</option>
          <option value="Bình Dương">Bình Dương</option>
          <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
        </select>
        <input
          required
          className="flex-1 p-4 rounded w-full"
          type="text"
          placeholder="Nhập địa điểm du lịch"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDirectionValue(e.target.value);
          }}
        />
        <a
          className="lg:w-1/6 bg-green-300 p-4 rounded font-bold hover:cursor-pointer text-center"
          href={`/direction-list?direction=${directionValue}&address=${addressValue}`}
          // onClick={() => {
          //   setSubmit(true);
          //   if (addressValue)
          //     router.push(
          //       `/direction-list?direction=${directionValue}&address=${addressValue}`
          //     );
          // }}
        >
          Tìm kiếm
        </a>
      </div>
      {/* <div>
        {addressValue == "" && submit ? (
          <p className="text-red-500 text-center mt-4 absolute left-0 right-0">
            Vui lòng nhập thông tin địa điểm!
          </p>
        ) : null}
      </div> */}
    </div>
  );
};

export default SearchBox;
