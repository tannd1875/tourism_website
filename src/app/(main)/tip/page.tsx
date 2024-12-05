"use client";
import React, { useEffect, useState } from "react";
import Heading from "./components/heading";
import TipsList from "./components/tips-list";
import Pagination from "../direction-list/components/pagination";
import { getData } from "./components/data";
import { tipType } from "@/lib/type";

const TipsPage = () => {
  //handle full data
  const [rawData, setRawData] = useState<Array<tipType>>([]);
  //handle data base on pagination
  const [tipLists, setTipLists] = useState<Array<tipType>>([]);

  // 5 tips per page
  const limit = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTipData = async () => {
      try {
        const response = await fetch("http://localhost:5001/tip");
        if (!response.ok) {
          throw new Error("Fail to get Data");
        }
        const data: Array<tipType> = await response.json();
        setRawData(data);
      } catch (error) {}
    };
    getTipData();
    setTipLists(getData(rawData, 1, 5));
  }, [rawData, page]);

  const handlePageChange = (value: number) => {
    const newData = getData(rawData, value, limit);
    setPage(value);
    setTipLists(newData);
  };
  return (
    <>
      <div className="mt-28 lg:w-4/5 mx-auto">
        <Heading count={rawData.length}></Heading>
        <TipsList items={tipLists}></TipsList>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          end={page * limit > rawData.length ? rawData.length : page * limit}
          length={rawData.length}
          numberOfPage={Math.ceil(rawData.length / limit)}
          type={"mẹo du lịch"}
        ></Pagination>
      </div>
    </>
  );
};

export default TipsPage;
