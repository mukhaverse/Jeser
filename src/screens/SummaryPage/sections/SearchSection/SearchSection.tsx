import React from "react";
import { Card } from "../../../../components/ui/card";

export const SearchSection = (): JSX.Element => {
  return (
    <header className="w-full max-w-[760px] mx-auto px-4 py-6 translate-y-[-1rem] animate-fade-in opacity-0">
      <nav className="flex items-center justify-between gap-4">
        <button
          className="flex flex-col gap-4 w-[54px] h-[39px] transition-opacity hover:opacity-70"
          aria-label="Menu"
        >
          <div className="w-full h-[7px] bg-[#00834d] rounded-[10px]" />
          <div className="w-full h-[7px] bg-[#00834d] rounded-[10px]" />
          <div className="w-full h-[7px] bg-[#00834d] rounded-[10px]" />
        </button>

        <div className="flex items-center gap-6 flex-1 justify-center">
          <Card className="relative w-32 h-[129px] bg-white rounded-[10px] border border-[#676767] transition-transform hover:scale-105 cursor-pointer">
            <div className="absolute top-[13px] left-[39px] w-[34px] h-[38px]">
              <img
                alt="English flag"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-5-8.png"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute top-[17px] left-[83px] font-normal text-[#00834d] text-2xl leading-normal">
              E
            </div>

            <div className="absolute top-[47px] left-[55px] w-[34px] h-[37px]">
              <img
                alt="Arabic flag"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-4-8.png"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute top-[38px] left-8 w-8 [font-family:'Jaldi',Helvetica] font-normal text-[#00834d] text-2xl text-left [direction:rtl] leading-normal">
              ع
            </div>

            <div className="absolute top-[95px] left-[26px] w-[87px] [font-family:'Inter',Helvetica] font-bold text-[#676767] text-2xl leading-normal">
              English
            </div>
          </Card>

          <div className="w-px h-[90px] bg-[#676767]" />

          <img
            className="w-[124px] h-[83px] object-cover"
            alt="Saudi vision 2030 logo"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/saudi-vision-2030-logo-svg-1-8.png"
          />
        </div>

        <div className="w-[59px] h-[96px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            alt="UserIcon profile"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-15.png"
          />
        </div>
      </nav>
    </header>
  );
};
