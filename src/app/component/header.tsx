"use client";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
  const [activeResponsive, setActiveResponsive] = useState(false);
  const responsiveClassMap = {
    true: "border bg-slate-300",
    false: "",
  };
  const subMenuMap = {
    true: "visible",
    false: "hidden",
  };
  return (
    <header className="bg-gray-200 flex justify-between py-4 px-10 border-2 fixed top-0 left-0 right-0 z-10">
      <a className="flex items-center w-20 hover:cursor-pointer" href="/">
        <img src="logo.png" alt="Logo" />
      </a>
      <nav className="flex space-x-4 text-xl pt-2 items-center">
        <FontAwesomeIcon
          icon={faListUl}
          className={`p-4 sm:hidden relative max-sm:${responsiveClassMap[activeResponsive]}`}
          onClick={() => setActiveResponsive(!activeResponsive)}
        />
        <div
          className={`max-sm:${subMenuMap[activeResponsive]} flex flex-col lg:flex-row max-sm:absolute max-sm:top-20 max-sm:right-10`}
        >
          <a
            href="/direction-list"
            className={`text-black p-4 hover:text-gray-500 max-sm:${responsiveClassMap[activeResponsive]}`}
            onClick={() => setActiveResponsive(false)}
          >
            Điểm đến du lịch
          </a>
          <a
            href="/tips"
            className={`text-black p-4 hover:text-gray-500 max-sm:${responsiveClassMap[activeResponsive]}`}
            onClick={() => setActiveResponsive(false)}
          >
            Mẹo du lịch
          </a>
          <a
            href="/law"
            className={`text-black p-4 hover:text-gray-500 max-sm:${responsiveClassMap[activeResponsive]}`}
            onClick={() => setActiveResponsive(false)}
          >
            Luật du lịch
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
