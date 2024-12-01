"use client";
import Header from "@/app/component/header";
import React, { useEffect, useState } from "react";
import Heading from "./components/heading";
import InfoDetail from "./components/info";
import RelatedList from "./components/related-list";
import Footer from "@/app/component/footer";
import { useSearchParams } from "next/navigation";
import { url } from "inspector";
import DirectionList from "../direction-list/components/direction-list";

const InformationDetailPage = () => {
  const searchParam = useSearchParams();
  const titleParam = searchParam.get("title");
  const typeParam = searchParam.get("type");
  const [rawData, setRawData] = useState(() => {
    fetch(`http://localhost:8080/${typeParam}/information/${titleParam}`)
      .then((res) => res.json())
      .then((data) => {
        setRawData(data);
      });
  });

  const [directionList, setDirectionList] = useState(() => {
    fetch("http://localhost:8080/direction")
      .then((res) => res.json())
      .then((data) => {
        setDirectionList(data);
        console.log(directionList);
      });
  });

  const [tipsList, setTipsList] = useState(() => {
    fetch("http://localhost:8080/tip")
      .then((res) => res.json())
      .then((data) => {
        setTipsList(data);
      });
  });

  const handleData = (dataList: Array<object>): Array<string> => {
    const res: Array<string> = [];
    dataList.forEach((data) => {
      if (data.title != rawData.title) res.push(data.title);
    });
    return res.slice(0, 3);
  };
  return (
    <>
      <Header></Header>
      {rawData ? (
        <div className="mt-28 w-4/5 mx-auto">
          <Heading title={rawData.title}></Heading>
          <div className="lg:w-2/3 mx-auto">
            {rawData.images ? (
              <InfoDetail
                images={rawData.images}
                description={rawData.description}
              ></InfoDetail>
            ) : null}
            <p className="my-8 text-2xl font-bold">Thông tin liên quan</p>
          </div>
          <div className="lg:w-1/2 max-sm:gap-8 mx-auto flex justify-evenly items-start my-10">
            {directionList ? (
              <RelatedList
                title={"Địa điểm du lịch"}
                type={"direction"}
                relatedList={handleData(directionList)}
              ></RelatedList>
            ) : null}

            {tipsList ? (
              <RelatedList
                title={"Các mẹo du lịch"}
                type={"tip"}
                relatedList={handleData(tipsList)}
              ></RelatedList>
            ) : null}
          </div>
        </div>
      ) : null}

      <Footer></Footer>
    </>
  );
};

export default InformationDetailPage;
