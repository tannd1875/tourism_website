import Footer from "@/app/component/footer";
import Header from "@/app/component/header";
import React from "react";

const Law = () => {
  return (
    <>
      <Header></Header>
      <embed
        src="Law.pdf"
        type=""
        height={1000}
        className="mx-auto mt-32 mb-10 lg:w-4/5 z-20"
      />
      <Footer></Footer>
    </>
  );
};

export default Law;
