import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const progressBars = [
  { className: "top-0" },
  { className: "top-0" },
  { className: "top-4" },
  { className: "top-8" },
];

export const ProgressIndicatorSection = (): JSX.Element => {
  return (
    <header className="w-full px-4 py-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <nav className="flex items-center justify-between gap-4 max-w-full">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto p-0 hover:bg-transparent"
            aria-label="Menu"
          >
            <div className="relative w-[54px] h-[39px]">
              {progressBars.map((bar, index) => (
                <div
                  key={index}
                  className={`absolute left-0 w-[54px] h-[7px] bg-[#00834d] rounded-[10px] ${bar.className}`}
                />
              ))}
            </div>
          </Button>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <Button
            variant="outline"
            className="h-auto min-w-[128px] px-4 py-4 rounded-[10px] border-[#676767] bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="relative">
                  <img
                    className="w-[34px] h-[38px]"
                    alt="English icon"
                    src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-5-7.png"
                  />
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#00834d80] text-2xl">
                  E
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="relative">
                  <img
                    className="w-[34px] h-[37px]"
                    alt="Arabic icon"
                    src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-4-7.png"
                  />
                </div>
                <div className="[font-family:'Jaldi',Helvetica] font-normal text-[#00834d] text-2xl [direction:rtl]">
                  ع
                </div>
              </div>
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#676767] text-2xl">
                English
              </div>
            </div>
          </Button>

          <Separator orientation="vertical" className="h-[90px] bg-gray-300" />

          <img
            className="w-[124px] h-[83px] object-cover"
            alt="Saudi vision 2030 logo"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/saudi-vision-2030-logo-svg-1-8.png"
          />

          <Separator orientation="vertical" className="h-[90px] bg-gray-300" />

          <img
            className="w-[59px] h-[90px]"
            alt="Logo"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-14.png"
          />
        </div>
      </nav>
    </header>
  );
};
