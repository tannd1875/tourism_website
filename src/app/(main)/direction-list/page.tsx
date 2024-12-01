"use client";
import Footer from "@/app/component/footer";
import Header from "@/app/component/header";
import React, { ChangeEvent, useEffect, useState } from "react";
import FilterBox from "./components/filer-box";
import Heading from "./components/heading";
import DirectionList from "./components/direction-list";
import { getData, getLength, getDataFiltered } from "./components/data";
import Pagination from "./components/pagination";
import { useSearchParams } from "next/navigation";

const DirectionListPage = () => {
  const searchParam = useSearchParams();
  const directionParam = searchParam.get("direction");
  const addressParam = searchParam.get("address");

  const [rawData, setRawData] = useState((): Array<object> => {
    if (addressParam && directionParam) {
      fetch(`http://localhost:8080/direction/${addressParam}/${directionParam}`)
        .then((response) => response.json())
        .then((data) => {
          setRawData(handleDirectionList(data));
        });
    } else if (!addressParam && directionParam) {
      fetch(`http://localhost:8080/direction/name/${directionParam}`)
        .then((response) => response.json())
        .then((data) => {
          setRawData(handleDirectionList(data));
        });
    } else {
      fetch(`http://localhost:8080/direction`)
        .then((response) => response.json())
        .then((data) => {
          setRawData(handleDirectionList(data));
        });
    }
    return [];
  });

  useEffect(() => {
    setList(getData(rawData, 1, 6));
    setLengthOfResult(getLength(rawData));
  }, [rawData]);

  const [page, setPage] = useState(1);
  const limit = 6;
  const [sort, setSort] = useState("");
  const [Lists, setList] = useState(getData(rawData, 1, 6));
  const [lengthOfResult, setLengthOfResult] = useState(getLength(rawData));
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

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    const sortedList = [...Lists];
    if (selectedSort === "Tên") {
      sortedList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
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
    setList(sortedList);
  };

  const handlePageChange = (value: number) => {
    const newData = getData(rawData, value, limit);
    setPage(value);
    setList(newData);
  };

  const handleFilter = (filteredList: Array<string>) => {
    if (filteredList[0] != "Reset") {
      if (!filteredList.length) setList(getData(rawData, 1, 6));
      const filterResult = getDataFiltered(rawData, filteredList);
      setList(filterResult);
      setLengthOfResult(filterResult.length);
    } else if (filteredList[0] == "NoAction") return;
    else {
      setList(getData(rawData, 1, 6));
      setLengthOfResult(getLength(rawData));
    }
  };
  return (
    <>
      <Header></Header>
      <div className="mt-28 lg:w-4/5 mx-auto w-full">
        <Heading
          count={lengthOfResult}
          sortValue={sort}
          handleSort={handleSort}
        ></Heading>
        <div className="lg:flex lg:justify-between lg:items-start lg:flex-1">
          <FilterBox onSubmitFilter={handleFilter}></FilterBox>
          <DirectionList items={Lists}></DirectionList>
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
      <Footer></Footer>
    </>
  );
};

export default DirectionListPage;
