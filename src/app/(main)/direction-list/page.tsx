"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import FilterBox from "./components/filer-box";
import Heading from "./components/heading";
import DirectionList from "./components/direction-list";
import { getData, getLength, getDataFiltered } from "./components/data";
import Pagination from "./components/pagination";
import { useSearchParams } from "next/navigation";
import { directionType } from "@/lib/type";

const DirectionListPage = () => {
  const searchParam = useSearchParams();
  const directionParam = searchParam.get("direction");
  const addressParam = searchParam.get("address");

  // all direction => context
  const [rawData, setRawData] = useState<Array<directionType>>([]);

  //handle page, limit of page is 5
  const [page, setPage] = useState(1);
  const limit = 5;

  // sort state
  const [sort, setSort] = useState("");

  //handle direction list on page
  const [directionList, setDirectionList] = useState<directionType[]>([]);
  const [lengthOfResult, setLengthOfResult] = useState(0);

  useEffect(() => {
    let URL = "";
    if (addressParam && directionParam) {
      URL = `http://localhost:5001/direction/address_title/?address=${addressParam}&title=${directionParam}`;
    } else if (!addressParam && directionParam) {
      URL = `http://localhost:5001/direction/title/?title=${directionParam}`;
    } else URL = `http://localhost:5001/direction`;

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Fail to get Data");
        }
        const data: Array<directionType> = await response.json();
        setRawData(data);
        setDirectionList(getData(data, 1, limit));
        setLengthOfResult(getLength(data));
      } catch (error) {
        throw new Error("Fail to get Data");
      }
    };
    fetchData();
  }, [addressParam, directionParam]);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    const sortedList = [...directionList];
    if (selectedSort === "Tên") {
      sortedList.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    if (selectedSort === "Giá tiền") {
      sortedList.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    setDirectionList(sortedList);
  };

  const handlePageChange = (value: number) => {
    const newData = getData(rawData, value, limit);
    setPage(value);
    setDirectionList(newData);
  };

  const handleFilter = (filteredList: Array<string>) => {
    if (filteredList[0] != "Reset") {
      // reset filter
      if (!filteredList.length) {
        setDirectionList(getData(rawData, 1, limit));
      }

      const filterResult = getDataFiltered(rawData, filteredList);
      setDirectionList(filterResult);
      setLengthOfResult(filterResult.length);
    }

    // } else if (filteredList[0] == "NoAction") return;
    else {
      // no use filter
      setDirectionList(getData(rawData, 1, limit));
      setLengthOfResult(getLength(rawData));
    }
  };
  return (
    <>
      <div className="mt-28 lg:w-4/5 mx-auto w-full">
        <Heading
          count={lengthOfResult}
          sortValue={sort}
          handleSort={handleSort}
        ></Heading>
        <div className="lg:flex lg:justify-between lg:items-start lg:flex-1">
          <FilterBox onSubmitFilter={handleFilter}></FilterBox>
          <DirectionList items={directionList}></DirectionList>
        </div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          end={page * limit > lengthOfResult ? lengthOfResult : page * limit}
          length={lengthOfResult}
          numberOfPage={Math.ceil(lengthOfResult / limit)}
          type={"địa điểm"}
        ></Pagination>
      </div>
    </>
  );
};

export default DirectionListPage;
