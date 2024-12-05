import React from "react";

type SubMenuProps = {
  body: string;
  href: string;
  responsive: string;
  setResponsive(arg: string): void;
};

const responsiveClassMap: { [index: string]: string } = {
  mobile: "border bg-slate-300",
  window: "",
};

const SubMenu = ({ body, href, responsive, setResponsive }: SubMenuProps) => {
  return (
    <>
      <a
        href={href}
        className={`text-black p-4 hover:bg-zinc-400 hover:shadow-sm rounded hover:text-white hover:font-semibold max-sm:${responsiveClassMap[responsive]}`}
        onClick={() => setResponsive("window")}
      >
        {body}
      </a>
    </>
  );
};

export default SubMenu;
