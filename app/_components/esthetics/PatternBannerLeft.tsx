import React from "react";
import Image from "next/image";
export const PatternBannerLeft = () => {
  return (
    <div className=" hidden lg:block  absolute w-full h-full bottom-[-60px] left-[-35px] z-[10]   ">
      <Image
        src="/images/pattern-baner.svg"
        height={708}
        width={311}
        alt="decorative blob"
        className="bottom-0 absolute w-[600px]"
      />
    </div>
  );
};
