import { footer_social_icons } from "@/constants";
import React from "react";

export const FoterSocialIcons = () => {
  return (
    <ul className="flex justify-between w-full ">
      {footer_social_icons.map((si) => {
        return (
          <a href={si.url} aria-label={`link to ${si.type} page`} key={si._id}>
            {
              <si.icon className="fill-base-100 w-[32px] h-[32px] lg:w-[20px] lg:h-[20px]  hover-primary" />
            }
          </a>
        );
      })}
    </ul>
  );
};
