import React from "react";
import { Button } from "../UI/Button";
import {
  PatternBannerLeft,
  PatternBannerMobile,
  PatternBannerRight,
} from "../esthetics";

export const SimplifyBanner = () => {
  return (
    <section className="bg-primary w-full py-[91px] lg:py-[62px] px-[31px] xl:px-0 relative h-full">
      <PatternBannerRight />
      <PatternBannerMobile />
      <div className="container-wide flex justify-between flex-col lg:flex-row items-center gap-[30px] relative z-20">
        <PatternBannerLeft />
        <p className="text-headingL text-primary-content leading-[-1px] max-lg:text-center lg:max-w-[445px] relative z-20">
          Simplify how your team works today.
        </p>
        <Button dark={true} href="/" ariaLabel="get started link">
          Get Started
        </Button>
      </div>
    </section>
  );
};
