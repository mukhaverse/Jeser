import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const serviceCards = [
  {
    title: "الإيداع المالي",
    icon: "https://c.animaapp.com/mj1rsavtswSrO3/img/material-symbols-light-wallet.svg",
    alt: "Material symbols wallet",
  },
  {
    title: "التحقق من رقم فاتورة السداد",
    icon: "https://c.animaapp.com/mj1rsavtswSrO3/img/fluent-receipt-search-20-regular.svg",
    alt: "Fluent receipt",
  },
  {
    title: "تبرع",
    icon: "https://c.animaapp.com/mj1rsavtswSrO3/img/streamline-flex-blood-donate-drop.svg",
    alt: "Streamline flex",
  },
  {
    title: "تبرعاتي",
    icon: "https://c.animaapp.com/mj1rsavtswSrO3/img/frame-26667.svg",
    alt: "Frame",
  },
];

const breadcrumbItems = [
  { text: "المديرية العامة للسجون" },
  { text: "الخدمات الإلكترونية" },
  { text: "خدمات" },
];

export const Sections = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[844px] min-h-[2392px] relative">
      <div className="absolute top-[340px] -left-0.5 w-[844px] h-[1828px] bg-[#d2d2d24f] border border-solid border-transparent" />

      <header className="absolute top-[152px] left-10 w-[760px] h-[129px]">
        <img
          className="absolute top-[15px] left-[676px] w-px h-[90px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mj1rsavtswSrO3/img/line-1.svg"
        />

        <img
          className="absolute top-[18px] left-[538px] w-[124px] h-[83px] object-cover"
          alt="Saudi vision"
          src="https://c.animaapp.com/mj1rsavtswSrO3/img/saudi-vision-2030-logo-svg-1.png"
        />

        <Button
          variant="ghost"
          className="absolute top-9 left-0 w-[54px] h-[39px] p-0 hover:bg-transparent"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="w-[54px] h-[7px] bg-[#00834d] rounded-[10px]" />
            <div className="w-[54px] h-[7px] bg-[#00834d] rounded-[10px]" />
            <div className="w-[54px] h-[7px] bg-[#00834d] rounded-[10px]" />
          </div>
        </Button>

        <img
          className="absolute w-[7.77%] h-[66.34%] top-[13.18%] left-[92.23%]"
          alt="Group"
          src="https://c.animaapp.com/mj1rsavtswSrO3/img/group.png"
        />

        <div className="absolute top-0 left-[346px] w-32 h-[129px]">
          <Button
            variant="outline"
            className="absolute top-0 left-0 w-32 h-[129px] bg-white rounded-[10px] border border-solid border-[#676767] flex flex-col items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <div className="w-[25px] [font-family:'Inter',Helvetica] font-normal text-[#00834d] text-2xl">
                E
              </div>
              <img
                className="w-[34px] h-[38px]"
                alt="Group"
                src="https://c.animaapp.com/mj1rsavtswSrO3/img/group-5.png"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 [font-family:'Jaldi',Helvetica] font-normal text-[#00834d] text-2xl text-left [direction:rtl]">
                ع
              </div>
              <img
                className="w-[34px] h-[37px]"
                alt="Group"
                src="https://c.animaapp.com/mj1rsavtswSrO3/img/group-4.png"
              />
            </div>
            <div className="w-[87px] [font-family:'Inter',Helvetica] font-bold text-[#676767] text-2xl">
              English
            </div>
          </Button>
        </div>
      </header>

      <div className="absolute top-[397px] left-[39px] w-[765px] h-[90px]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-[765px] h-[90px] bg-white rounded-[10px] border border-solid border-[#67676752]" />

          <div className="absolute top-[31px] left-[520px] w-[227px] [font-family:'Fenix',Helvetica] font-normal text-[#6767677a] text-[32px] text-left whitespace-nowrap [direction:rtl] tracking-[0] leading-[normal]">
            أكتب هنا للبحث
          </div>

          <SearchIcon className="absolute w-[30px] h-[30px] top-[31px] left-[32px] text-gray-500" />
        </div>
      </div>

      <nav className="absolute top-[540px] left-[205px] w-[627px] h-11">
        <div className="flex items-center gap-2 [direction:rtl]">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <Button
                variant="link"
                className="h-auto p-0 [font-family:'Inter',Helvetica] font-medium text-[#484848] text-2xl hover:no-underline"
              >
                {item.text}
              </Button>
              {index < breadcrumbItems.length - 1 && (
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#c8c8c8] text-2xl">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <section className="absolute top-[655px] left-[88px] w-[676px]">
        <div className="flex flex-col gap-[82px]">
          {serviceCards.map((card, index) => (
            <Card
              key={index}
              className="w-[676px] h-[284px] bg-white rounded-[30px] border-0 shadow-none cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center h-full gap-[9px] p-4">
                <img
                  className="w-44 h-44 object-contain"
                  alt={card.alt}
                  src={card.icon}
                />
                <div className="w-44 h-11 [-webkit-text-stroke:0.5px_#494848] [font-family:'Inter',Helvetica] font-medium text-[#494848] text-3xl text-center [direction:rtl] tracking-[0] leading-[normal]">
                  {card.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
