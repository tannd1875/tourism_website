"use client";
import React, { useState, useEffect } from "react";
import Heading from "./components/heading";
import InfoDetail from "./components/info";
import RelatedList from "./components/related-list";

import { useSearchParams } from "next/navigation";
import { directionType, tipType } from "@/lib/type";

const InformationDetailPage = () => {
  const searchParam = useSearchParams();
  const idParam = searchParam.get("id");
  const typeParam = searchParam.get("type");
  const [data, setData] = useState<directionType | tipType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/${typeParam}/${idParam}`
        );
        if (!response.ok) {
          throw new Error("Fail to get Data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        throw new Error("Fail to get Data");
      }
    };

    getData();
  }, [idParam, typeParam]);

  if (!data) return <Heading title="No information found!"></Heading>;
  return (
    <>
      <div className="mt-28 w-4/5 mx-auto">
        <Heading title={data.title}></Heading>
        <div className="lg:w-2/3 mx-auto">
          {data.images ? (
            <InfoDetail
              images={data.images}
              description={data.description}
            ></InfoDetail>
          ) : null}
          <p className="my-8 text-2xl font-bold">Thông tin liên quan</p>
        </div>
        <div className="lg:w-1/2 max-sm:gap-8 mx-auto flex justify-evenly items-start my-10">
          <RelatedList
            currInfo={data.title}
            title={"Địa điểm du lịch"}
            type={"direction"}
          ></RelatedList>

          <RelatedList
            currInfo={data.title}
            title={"Các mẹo du lịch"}
            type={"tip"}
          ></RelatedList>
        </div>
      </div>
    </>
  );
};

export default InformationDetailPage;
