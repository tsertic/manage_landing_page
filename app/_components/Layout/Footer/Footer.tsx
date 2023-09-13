import React from "react";
import { Logo } from "../../UI/Logo";
import { EmailForm } from "../../shared/EmailForm/EmailForm";
import { FoterSocialIcons } from "./FoterSocialIcons";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="bg-secondary-200 pt-[51px] pb-[30px] lg:py-[62px]">
      <div className="container-wide flex flex-col-reverse lg:flex-row h-full ">
        <p className="text-center text-secondary-content/50 text-[13px] xl:hidden">
          Copyright 2020. All Rights Reserved
        </p>
        <div className=" flex flex-col-reverse lg:flex-col justify-between max-lg:gap-[50px] max-lg:mb-[50px] max-lg:items-center px-[40px] lg:px-0 lg:mr-[132px]">
          <Logo dark={false} />
          <FoterSocialIcons />
        </div>
        <FooterLinks />
        <div className=" ml-auto flex flex-col items-end justify-between max-xl:w-full max-xl:px-[24px] max-xl:mb-[64px]">
          <EmailForm />

          <p className="text-right text-secondary-content/50 text-[13px] max-xl:hidden">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
