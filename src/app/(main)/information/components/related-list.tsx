import React from "react";

interface Prop {
  title: string;
  type: string;
  relatedList: string[];
}

const RelatedList = ({ title, type, relatedList }: Prop) => {
  return (
    <div className="w-2/3">
      <p className="text-xl text-l font-bold mb-4">{title}</p>
      {relatedList.map((item, index) => (
        <a
          key={index}
          className="text-xl mb-2 text-justify hover:cursor-pointer hover:underline block"
          href={`/information?title=${item}&type=${type}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default RelatedList;
