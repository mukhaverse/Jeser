import { SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

const serviceCards = [
  {
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/material-symbols-light-wallet.svg",
    title: "الإيداع المالي",
    delay: "0ms",
    link: "/hello",
  },
  {
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/fluent-receipt-search-20-regular.svg",
    title: "التحقق من رقم فاتورة السداد",
    delay: "200ms",
    link: null,
  },
  {
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/streamline-flex-blood-donate-drop.svg",
    title: "تبرع",
    delay: "400ms",
    link: null,
  },
  {
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/frame-26667.svg",
    title: "تبرعاتي",
    delay: "600ms",
    link: null,
  },
];

const breadcrumbItems = [
  { text: "المديرية العامة للسجون" },
  { text: "الخدمات الإلكترونية" },
  { text: "خدمات" },
];

export const Sections = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col"
      data-model-id="159:517"
    >
      <Header />

      <main className="flex-1 flex flex-col items-center px-10 pb-10 bg-[#d2d2d24f]">
        <nav
          className="w-full max-w-[627px] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center justify-center gap-2 [direction:rtl]">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                <li className="[font-family:'Inter',Helvetica] font-medium text-[#484848] text-2xl">
                  {item.text}
                </li>
                {index < breadcrumbItems.length - 1 && (
                  <li
                    className="[font-family:'Inter',Helvetica] font-medium text-[#c8c8c8] text-2xl"
                    aria-hidden="true"
                  >
                    /
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav>

        <div className="w-full max-w-[765px] mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative">
            <Input
              type="search"
              placeholder="أكتب هنا للبحث"
              className="h-[90px] rounded-[10px] border-[#67676752] bg-white pr-16 text-right text-[32px] [font-family:'Fenix',Helvetica] font-normal text-[#6767677a] [direction:rtl] placeholder:text-[#6767677a]"
            />
            <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 w-[30px] h-[30px] text-gray-600" />
          </div>
        </div>

        <div className="w-full max-w-[676px] grid grid-cols-1 gap-8">
          {serviceCards.map((card, index) => {
            const CardWrapper = card.link ? Link : "div";
            const wrapperProps = card.link
              ? { to: card.link, className: "block" }
              : {};

            return (
              <CardWrapper key={index} {...wrapperProps}>
                <Card
                  className="rounded-[30px] border-0 shadow-sm hover:shadow-md transition-shadow translate-y-[-1rem] animate-fade-in opacity-0 cursor-pointer"
                  style={{ "--animation-delay": card.delay } as React.CSSProperties}
                >
                  <CardContent className="flex flex-col items-center justify-center p-8 min-h-[284px]">
                    <img
                      className="w-44 h-44 mb-2"
                      alt={card.title}
                      src={card.icon}
                    />
                    <h2 className="[-webkit-text-stroke:0.5px_#494848] [font-family:'Inter',Helvetica] font-medium text-[#494848] text-3xl text-center [direction:rtl]">
                      {card.title}
                    </h2>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </main>
    </div>
  );
};
