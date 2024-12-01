"use client";
import React, { useEffect, useState } from "react";
import Header from "./component/header";
import SearchBox from "./(main)/(home)/components/search-box";
import Slider from "./(main)/(home)/components/slider";
import Footer from "./component/footer";
import { useRouter } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [directionList, setDirectionList] = useState((): object[] => {
    fetch("http://localhost:8080/direction")
      .then((response) => response.json())
      .then((data) => {
        setDirectionList(handleDirectionList(data));
        return data;
      });
    return [];
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tipsList, setTipsList] = useState((): object[] => {
    fetch("http://localhost:8080/tip")
      .then((response) => response.json())
      .then((data) => {
        setTipsList(handleTipsList(data));
        return data;
      });
    return [];
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleDirectionList = (directionList: object[]): object[] => {
    return directionList.map((direction) => {
      return {
        title: direction.title,
        address: direction.address,
        cover: direction.images[0],
        classify: direction.classify,
        price: direction.price,
      };
    });
  };

  const handleTipsList = (tipsList: object[]) => {
    return tipsList.map((tip) => {
      return {
        name: tip.title,
        cover: tip.images[0],
      };
    });
  };

  return (
    <>
      <Header></Header>
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
          <Slider
            slideList={directionList}
            autoSlide={false}
            autoSlideInterval={2000}
            type={"direction"}
          ></Slider>
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
          <Slider
            slideList={tipsList}
            autoSlide={false}
            autoSlideInterval={3000}
            type={"tip"}
          ></Slider>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default page;
