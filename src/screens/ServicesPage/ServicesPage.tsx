import { SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

const serviceItems = [
  {
    text: "توصيل الوثائق بالبريد",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-7.png",
  },
  {
    text: "الأحوال المدنية",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-13.svg",
  },
  {
    text: "الجوازات",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-8.png",
  },
  {
    text: "المرور",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-11.svg",
  },
  {
    text: "الأمن العام",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-10.svg",
  },
  {
    text: "الخدمات العامة",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/la-telegram.svg",
  },
  {
    text: "رعاية أسر الشهداء والمصابين",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-9.png",
  },
  {
    text: "المديرية العامة للسجون",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-6.svg",
    link: "/sections",
  },
  {
    text: "خدمات النيابة العامة",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-10.png",
  },
  {
    text: "الامارات والمناطق",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-12.svg",
  },
];

export const ServicesPage = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[320px] min-h-screen flex flex-col opacity-0 translate-y-[-1rem] animate-fade-in"
      data-model-id="30:94"
    >
      <Header />

      <main className="flex-1 px-[35px] pb-8 flex flex-col gap-8">
        <div className="relative w-full max-w-[765px] mx-auto opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <Input
            type="text"
            placeholder="أكتب هنا للبحث"
            className="h-[90px] rounded-[10px] border-[#67676752] pr-16 text-right [font-family:'Fenix',Helvetica] font-normal text-[#6767677a] text-[32px] [direction:rtl]"
          />
          <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 w-[30px] h-[30px] text-gray-400" />
        </div>

        <div className="flex flex-col items-center gap-6 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
          <div className="flex items-center gap-2">
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#484848] text-[32px] [direction:rtl]">
              خدمات
            </span>
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-[32px] [direction:rtl]">
              خدماتي
            </span>
          </div>
          <img
            className="w-[15px] h-[32px]"
            alt="Vector"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-1.svg"
          />
        </div>

        <div className="flex justify-center gap-4 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
          <Button
            variant="ghost"
            className="w-[339px] h-[83px] bg-[#bebebe52] rounded-[20px] shadow-[0px_4px_4px_#00000040] hover:bg-[#bebebe70] transition-colors"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#464545] text-[32px] [direction:rtl]">
              إستعلامات
            </span>
          </Button>

          <Button
            variant="ghost"
            className="w-[339px] h-[84px] bg-[#cef1dd] rounded-[20px] shadow-[0px_4px_4px_#00000040] hover:bg-[#b8e6cc] transition-colors"
          >
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-4xl [direction:rtl]">
              خدمات
            </span>
          </Button>
        </div>

        <div className="flex justify-center opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1000ms]">
          <Card className="w-full max-w-[759px] rounded-[49px] border-[3px]">
            <CardContent className="p-0 py-36">
              <div className="flex flex-col">
                {serviceItems.map((item, index) => {
                  const content = (
                    <div className="flex items-center justify-between px-11 py-6 hover:bg-gray-50 transition-colors cursor-pointer">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[32px] [direction:rtl]">
                        {item.text}
                      </span>
                      <img
                        className="w-[50px] h-[50px] object-contain"
                        alt={item.text}
                        src={item.icon}
                      />
                    </div>
                  );

                  return item.link ? (
                    <Link key={index} to={item.link}>
                      {content}
                    </Link>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1200ms]">
          <img
            className="w-[70px] h-[70px]"
            alt="Material symbols"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/material-symbols-computer-outline-rounded.svg"
          />
        </div>
      </main>
    </div>
  );
};
