import React from "react";
import Image from "next/image";

export const PatternBannerMobile = () => {
  return (
    <div className=" lg:hidden overflow-hidden absolute w-full h-full top-[0] left-[0] z-[10]   ">
      <Image
        src="/images/pattern-baner-top.svg"
        height={94}
        width={364}
        alt="decorative blob"
        className=" absolute top-[100px] left-[-200px] rotate-[240deg]"
      />
    </div>
  );
};
