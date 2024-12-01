import { faFilter, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Prop {
  onSubmitFilter: (filteredList: Array<string>) => void;
}

const FilterBox = ({ onSubmitFilter }: Prop) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [activeFilterResponsive, setActiveFilterResponsive] = useState(false);
  const [classifyValue, setClassifyValue] = useState({
    scenicSpots: false,
    historicalSites: false,
    amusement: false,
    shoppingMall: false,
  });

  const [city, setCity] = useState({
    HoChiMinh: false,
    BinhDuong: false,
    DongNai: false,
    BaRiaVungTau: false,
  });

  const cityMap = {
    HoChiMinh: "Thành phố Hồ Chí Minh",
    BinhDuong: "Bình Dương",
    DongNai: "Đồng Nai",
    BaRiaVungTau: "Bà Rịa - Vũng Tàu",
  };
  const classifyMap = {
    scenicSpots: "Danh lam thắng cảnh",
    historicalSites: "Di tích lịch sử",
    amusement: "Khu vui chơi giải trí",
    shoppingMall: "Trung tâm thương mại",
  };

  const submitButtonMap = {
    true: "bg-teal-500",
    false: "hover:cursor-not-allowed bg-gray-200",
  };

  const resetButtonMap = {
    true: "bg-red-500",
    false: "hover:cursor-not-allowed bg-gray-200",
  };

  const filterResponsiveMap = {
    true: "visible",
    false: "hidden",
  };
  const handleClassifyInputChange = (e) => {
    const { name, checked } = e.target;
    setClassifyValue((prevFormData) => ({ ...prevFormData, [name]: checked }));
    let flag = false;
    for (const item in city) if (city[item] === true) flag = true;
    for (const item in classifyValue)
      if (classifyValue[item] === true && item != name) flag = true;
    if (checked == true) setActiveFilter(true);
    else if (flag == false) {
      setActiveFilter(false);
      setClickSubmit(false);
    }
  };

  const handleCityInputChange = (e) => {
    const { name, checked } = e.target;
    if (checked == true) setActiveFilter(true);
    setCity((prevFormData) => ({ ...prevFormData, [name]: checked }));
    let flag = false;
    for (const item in classifyValue)
      if (classifyValue[item] === true) flag = true;
    for (const item in city)
      if (city[item] === true && item != name) flag = true;
    if (checked == true) setActiveFilter(true);
    else if (flag == false) {
      setActiveFilter(false);
      setClickSubmit(false);
    }
  };

  const handleSubmit = (e) => {
    setClickSubmit(true);
    if (activeFilter) {
      if (e.target.value == "Filter") {
        setActiveFilterResponsive(false);
        const cityFilteredList = [];
        for (const item in city) {
          if (city[item] === true) cityFilteredList.push(item);
        }

        const classifyFilteredList = [];
        for (const item in classifyValue) {
          if (classifyValue[item] === true) classifyFilteredList.push(item);
        }
        const res = [
          cityFilteredList.map((item) => cityMap[item]),
          classifyFilteredList.map((item) => classifyMap[item]),
        ];
        onSubmitFilter(res);
      } else {
        onSubmitFilter(["Reset"]);
        for (const item in classifyValue) {
          classifyValue[item] = false;
        }
        for (const item in city) {
          city[item] = false;
        }
        setActiveFilter(false);
        setClickSubmit(false);
      }
    } else onSubmitFilter(["NoAction"]);
  };

  return (
    <>
      <button
        onClick={() => setActiveFilterResponsive(true)}
        className="px-4 py-2 border rounded-sm mb-4 right-0 -mt-4 ml-60 sm:hidden"
      >
        <FontAwesomeIcon icon={faFilter} className="inline-block mr-2" />
        Bộ lọc
      </button>
      <button
        className={`lg:hidden max-sm:${filterResponsiveMap[activeFilterResponsive]} w-screen h-screen z-10 inset-0 bg-gray-300 fixed`}
        onClick={() => setActiveFilterResponsive(false)}
      ></button>
      <div
        className={`lg:w-1/4 max-sm:${filterResponsiveMap[activeFilterResponsive]}
        max-sm:w-4/5 max-sm:mx-auto max-sm:absolute max-sm:z-20 max-sm:top-8 
        max-sm:left-8`}
      >
        <div className="bg-white shadow-md rounded-md mb-4 border-2">
          <p className="border-b-2 p-4 text-xl font-bold ">Loại hình du lịch</p>
          <div className="px-4 pt-6">
            <form
              name="ClassifyFilterForm"
              action=""
              className="flex flex-col justify-between items-left mb-4 ml-6"
            >
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={classifyValue.scenicSpots}
                  name="scenicSpots"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleClassifyInputChange}
                />
                <p className="label inline">Danh lam thắng cảnh</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={classifyValue.historicalSites}
                  name="historicalSites"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleClassifyInputChange}
                />
                <p className="label inline">Di tích lịch sử</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={classifyValue.amusement}
                  name="amusement"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleClassifyInputChange}
                />
                <p className="label inline">Khu vui chơi giải trí</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={classifyValue.shoppingMall}
                  name="shoppingMall"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleClassifyInputChange}
                />
                <p className="label inline">Trung tâm thương mại</p>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white shadow-md  rounded-md mb-4 border-2">
          <p className="border-b-2 p-4 text-xl font-bold ">Tỉnh/ Thành phố</p>
          <div className="px-4 pt-6">
            <form
              name="CityFilterForm"
              action=""
              className="flex flex-col justify-between items-left mb-4 ml-6"
            >
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={city.HoChiMinh}
                  name="HoChiMinh"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleCityInputChange}
                />
                <p className="label inline">Thành phố Hồ Chí Minh</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={city.DongNai}
                  name="DongNai"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleCityInputChange}
                />
                <p className="label inline">Đồng Nai</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={city.BinhDuong}
                  name="BinhDuong"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleCityInputChange}
                />
                <p className="label inline">Bình Dương</p>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  checked={city.BaRiaVungTau}
                  name="BaRiaVungTau"
                  id=""
                  className="inline mr-4 scale-150 hover:cursor-pointer"
                  onChange={handleCityInputChange}
                />
                <p className="label inline">Bà Rịa - Vũng Tàu</p>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
        {clickSubmit && !activeFilter ? (
          <p className="text-red-500 text-center mb-2">
            Vui lòng chọn các bộ lọc trước khi lọc kết quả!
          </p>
        ) : null}
        <button
          value={"Filter"}
          onClick={handleSubmit}
          type="submit"
          className={`block py-4 w-full ${submitButtonMap[activeFilter]} rounded-md text-white mb-2 font-bold`}
        >
          Lọc kết quả
        </button>
        {activeFilter ? (
          <button
            value={"Reset"}
            onClick={handleSubmit}
            type="submit"
            className={`block py-4 w-full ${resetButtonMap[activeFilter]} rounded-md text-white mb-2 font-bold`}
          >
            Xóa bộ lọc
          </button>
        ) : null}
      </div>
    </>
  );
};

export default FilterBox;
