import React from "react";
import Image from "next/image";

export const PatternBannerRight = () => {
  return (
    <div className=" hidden lg:block  absolute w-full h-full top-[0] right-[0] z-[10]   ">
      <Image
        src="/images/pattern-baner-top.svg"
        height={144}
        width={228}
        alt="decorative blob"
        className=" absolute top-0 right-0"
      />
    </div>
  );
};
