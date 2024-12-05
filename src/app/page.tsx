/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "./(main)/(home)/components/search-box";
import Slider from "./(main)/(home)/components/slider";
import { useRouter } from "next/navigation";
import { directionType, tipType } from "../lib/type";
import { fetchDirectionList, fetchTipList } from "../lib/api";

const page = () => {
  const [directionList, setDirectionList] = useState<directionType[]>([]);
  const [tipList, setTipList] = useState<tipType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      setDirectionList(await fetchDirectionList());
      setTipList(await fetchTipList());
    };
    getData();
  }, []);

  return (
    <>
      <div className="lg:w-4/5 m-auto">
        <SearchBox></SearchBox>
        <div className="my-12">
          <h1 className="text-center text-3xl font-bold uppercase">
            Điểm đến lý tưởng
          </h1>
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300"></div>
          <button
            className="block mx-auto my-4 border-2 rounded py-4 px-8 text-xl uppercase bg-orange-300 text-white hover:scale-105 hover:font-semibold transition-transform duration-300"
            type="button"
            onClick={() => router.push("/direction-list")}
          >
            Xem thêm
          </button>
          <Slider slideList={directionList} type={"direction"}></Slider>
        </div>
        <div className="my-12">
          <h1 className="text-center text-3xl font-bold uppercase">
            Mẹo du lịch hay
          </h1>
          <div className="h-2 w-16 mx-auto mt-2 border-2 bg-orange-300"></div>
          <button
            className="block mx-auto my-4 border-2 rounded py-4 px-8 text-xl uppercase bg-orange-300 text-white hover:scale-105 hover:font-semibold transition-transform duration-300"
            type="button"
            onClick={() => router.push("/tips")}
          >
            Xem thêm
          </button>
          <Slider slideList={tipList} type={"tip"}></Slider>
        </div>
      </div>
    </>
  );
};

export default page;
