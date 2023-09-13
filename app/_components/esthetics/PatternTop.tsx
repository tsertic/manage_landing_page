import React from "react";
import Image from "next/image";
export const PatternTop = () => {
  return (
    <div className="overflow-hidden absolute w-full h-full top-0 right-0 z-[-10] ">
      <Image
        src="/images/pattern-desktop.svg"
        height={970}
        width={655}
        alt="decorative blob"
        className="absolute right-[-50px] top-[-50px] lg:right-[0] lg:top-[0]   "
      />
    </div>
  );
};
