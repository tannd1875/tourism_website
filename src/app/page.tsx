/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "./(main)/(home)/components/search-box";
import Slider from "./(main)/(home)/components/slider";
import { useRouter } from "next/navigation";
import { directionType, tipType } from "../lib/type";

const page = () => {
  const [directionList, setDirectionList] = useState<directionType[]>([]);
  const [tipList, setTipList] = useState<tipType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getDirectionList = async (): Promise<any> => {
      try {
        const response = await fetch("http://localhost:5001/direction");
        if (!response.ok) {
          throw new Error(`Failed to fetch directions: ${response.statusText}`);
        }
        const data = await response.json();
        setDirectionList(data);
      } catch (error: any) {
        throw new Error("Failed to fetch directions: " + error.message);
      }
    };

    const getTipList = async (): Promise<any> => {
      try {
        const response = await fetch("http://localhost:5001/tip");
        if (!response.ok) {
          throw new Error(`Failed to fetch directions: ${response.statusText}`);
        }
        const data = await response.json();
        setTipList(data);
      } catch (error: any) {
        throw new Error("Failed to fetch directions: " + error.message);
      }
    };

    getDirectionList();
    getTipList();
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
