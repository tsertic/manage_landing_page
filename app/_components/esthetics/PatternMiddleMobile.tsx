import React from "react";
import Image from "next/image";
export const PatternMiddleMobile = () => {
  return (
    <div className="lg:hidden overflow-hidden absolute w-full h-[200%] top-[0] right-[0]  z-[-10] ">
      <Image
        src="/images/pattern-desktop-middle.svg"
        height={318}
        width={134}
        alt="decorative blob"
        className="rotate-180 absolute right-0 top-[440px]"
      />
    </div>
  );
};
