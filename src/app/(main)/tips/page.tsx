"use client";
import Header from "@/app/component/header";
import React, { use, useEffect, useState } from "react";
import Heading from "./components/heading";
import TipsList from "./components/tips-list";
import Pagination from "../direction-list/components/pagination";
import { getData, getLength } from "./components/data";
import Footer from "@/app/component/footer";

const TipsPage = () => {
  const [rawData, setRawData] = useState((): Array<object> => {
    fetch("http://localhost:8080/tip")
      .then((res) => res.json())
      .then((data) => setRawData(data));
    return [];
  });

  useEffect(() => {
    setList(getData(rawData, 1, 6));
    setLengthOfResult(getLength(rawData));
  }, [rawData]);

  const [page, setPage] = useState(1);
  const limit = 5;
  const [Lists, setList] = useState(getData(rawData, page, limit));
  const [lengthOfResult, setLengthOfResult] = useState(getLength(rawData));

  const handlePageChange = (value: number) => {
    const newData = getData(rawData, value, limit);
    setPage(value);
    setList(newData);
  };
  return (
    <>
      <Header></Header>
      <div className="mt-28 lg:w-4/5 mx-auto">
        <Heading count={getLength(rawData)}></Heading>
        <TipsList items={Lists}></TipsList>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          end={page * limit > lengthOfResult ? lengthOfResult : page * limit}
          length={lengthOfResult}
          numberOfPage={Math.ceil(lengthOfResult / limit)}
          type={"mẹo du lịch"}
        ></Pagination>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TipsPage;
