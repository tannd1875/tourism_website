"use client";
import React from "react";
import HeadingInfo from "./heading-info";
import HeadingSort from "./heading-sort";

const Heading = () => {
  return (
    <div className="pt-8 pb-6 flex justify-between items-center flex-col lg:flex-row">
      <HeadingInfo></HeadingInfo>
      <HeadingSort></HeadingSort>
    </div>
  );
};

export default Heading;
