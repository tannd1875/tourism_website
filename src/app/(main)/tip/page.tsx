"use client";
import React, { useEffect, useState } from "react";
import Heading from "./components/heading";
import TipsList from "./components/tips-list";
import Pagination from "../direction-list/components/pagination";
import { manageDataOnTipPage } from "@/lib/helpers";
import { tipType } from "@/lib/type";
import { fetchTipList } from "@/lib/api";

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
      const data = await fetchTipList();
      setRawData(data);
      setTipLists(manageDataOnTipPage(data, 1, limit));
    };
    getTipData();
  }, [rawData, page]);

  const handlePageChange = (value: number) => {
    const dataOnPage = manageDataOnTipPage(rawData, value, limit);
    setPage(value);
    setTipLists(dataOnPage);
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
