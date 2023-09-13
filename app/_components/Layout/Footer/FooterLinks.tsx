import { footer_links } from "@/constants";
import Link from "next/link";
import React from "react";

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[76px] lg:gap-x-[30px] gap-y-[13px] text-secondary-content capitalize text-footerLink max-lg:mb-[50px] pl-[60px] lg:px-0">
      {footer_links.map((link) => {
        return (
          <Link
            href={link.path}
            className="w-fit lg:w-[255px] hover-primary"
            key={link._id}
            aria-label={`link to page ${link.text}`}
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
};
