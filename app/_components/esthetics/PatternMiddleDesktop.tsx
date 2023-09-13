import React from "react";
import Image from "next/image";
export const PatternMiddleDesktop = () => {
  return (
    <div className=" hidden lg:block overflow-hidden absolute w-full h-full bottom-[-300px] left-0 z-[-10] ">
      <Image
        src="/images/pattern-desktop-middle.svg"
        height={833}
        width={291}
        alt="decorative blob"
      />
    </div>
  );
};
