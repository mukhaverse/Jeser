import { SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const serviceCards = [
  {
    title: "المركبات",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-9.svg",
    link: null,
  },
  {
    title: "خدماتي",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-91.png",
    link: "/services-page",
  },
];

const serviceCardsRow2 = [
  {
    title: "العمالة",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-11.png",
  },
  {
    title: "أفراد الأسرة",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-99.png",
  },
];

export const HomePage = (): JSX.Element => {
  const { user, isAnonymous, login, logout } = useAuth();

  return (
    <div
      className="bg-white w-full min-h-screen relative overflow-x-hidden"
      data-model-id="195:598"
    >
      <header className="relative w-full px-[67px] pt-[164px] pb-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <nav className="flex items-center justify-between max-w-[760px] mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto p-0 hover:bg-transparent"
            aria-label="Menu"
          >
            <div className="w-[54px] h-[39px] flex flex-col justify-between">
              <div className="w-full h-[7px] bg-[#00834d] rounded-[10px]" />
              <div className="w-full h-[7px] bg-[#00834d] rounded-[10px]" />
              <div className="w-full h-[7px] bg-[#00834d] rounded-[10px]" />
            </div>
          </Button>

          <div className="flex items-center gap-[27px]">
            <Card className="w-32 h-[129px] border-[#676767] rounded-[10px]">
              <CardContent className="p-0 h-full relative">
                <div className="absolute top-[17px] left-[83px] [font-family:'Inter',Helvetica] font-normal text-[#00834d] text-2xl">
                  E
                </div>
                <div className="absolute top-[38px] left-8 [font-family:'Jaldi',Helvetica] font-normal text-[#00834d] text-2xl [direction:rtl]">
                  ع
                </div>
                <div className="absolute top-[95px] left-[26px] [font-family:'Inter',Helvetica] font-bold text-[#676767] text-2xl">
                  English
                </div>
                <img
                  className="absolute top-[47px] left-[55px] w-[34px] h-[37px]"
                  alt="Group"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-4.png"
                />
                <img
                  className="absolute top-[13px] left-[39px] w-[34px] h-[38px]"
                  alt="Group"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-5.png"
                />
              </CardContent>
            </Card>

            <img
              className="w-[124px] h-[83px] object-cover"
              alt="Saudi vision"
              src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/saudi-vision-2030-logo-svg-1-8.png"
            />

            <img
              className="w-px h-[90px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-1.svg"
            />

            <div className="flex items-center gap-4">
              {isAnonymous ? (
                <Button
                  onClick={login}
                  className="bg-[#00834d] hover:bg-[#006b3f] text-white px-6 py-2 rounded-[10px]"
                >
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-lg [direction:rtl]">
                    تسجيل الدخول
                  </span>
                </Button>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                    {user?.name}
                  </span>
                  <Button
                    onClick={logout}
                    variant="outline"
                    className="border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10 px-6 py-2 rounded-[10px]"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-lg [direction:rtl]">
                      تسجيل الخروج
                    </span>
                  </Button>
                </div>
              )}
              <div className="w-[59px] h-[96px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  alt="UserIcon profile"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-15.png"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="relative w-full px-[55px] pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-[765px] mx-auto relative">
          <Input
            type="search"
            placeholder="أكتب هنا للبحث"
            className="h-[90px] rounded-[10px] border-[#67676752] pr-[70px] pl-6 text-[32px] [font-family:'Fenix',Helvetica] text-[#6767677a] [direction:rtl]"
          />
          <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 w-[30px] h-[30px] text-[#676767]" />
        </div>
      </section>

      <main className="relative w-full px-[34px] pb-16">
        <div className="max-w-[878px] mx-auto translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col gap-[27px] mb-[87px]">
            <div className="flex items-center justify-center gap-[27px]">
              {serviceCards.map((service, index) => {
                const CardWrapper = service.link ? Link : "div";
                const wrapperProps = service.link
                  ? { to: service.link, className: "block" }
                  : {};

                return (
                  <CardWrapper key={index} {...wrapperProps}>
                    <Card className="w-[404px] h-[239px] rounded-[20px] border-0 shadow-sm hover:shadow-md transition-[box-shadow] cursor-pointer">
                      <CardContent className="p-0 h-full relative flex flex-col items-center justify-center">
                        <img
                          className={
                            index === 0
                              ? "w-[100px] h-[60px] mb-8"
                              : "w-[100px] h-[100px] mb-4"
                          }
                          alt={service.title}
                          src={service.icon}
                        />
                        <div className="[font-family:'Inter',Helvetica] font-semibold text-[#484848] text-[32px] [direction:rtl]">
                          {service.title}
                        </div>
                        <img
                          className="absolute bottom-[30px] w-[301px] h-[3px]"
                          alt="Line"
                          src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-30.svg"
                        />
                      </CardContent>
                    </Card>
                  </CardWrapper>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-[27px]">
              {serviceCardsRow2.map((service, index) => (
                <Card
                  key={index}
                  className="w-[404px] h-[239px] rounded-[20px] border-0 shadow-sm hover:shadow-md transition-[box-shadow] cursor-pointer"
                >
                  <CardContent className="p-0 h-full relative flex flex-col items-center justify-center">
                    <img
                      className={
                        index === 0
                          ? "w-[75px] h-[75px] mb-6"
                          : "w-[100px] h-[100px] mb-4"
                      }
                      alt={service.title}
                      src={service.icon}
                    />
                    <div className="[font-family:'Inter',Helvetica] font-semibold text-[#484848] text-[32px] [direction:rtl]">
                      {service.title}
                    </div>
                    <img
                      className="absolute bottom-[30px] w-[301px] h-[3px]"
                      alt="Line"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-30.svg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center gap-[27px]">
              <Link to="/date-options-management">
                <Card className="w-[404px] h-[239px] rounded-[20px] border-0 shadow-sm hover:shadow-md transition-[box-shadow] cursor-pointer">
                  <CardContent className="p-0 h-full relative flex flex-col items-center justify-center">
                    <img
                      className="w-[100px] h-[100px] mb-4"
                      alt="إدارة التواريخ"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/uil-schedule-1.svg"
                    />
                    <div className="[font-family:'Inter',Helvetica] font-semibold text-[#484848] text-[32px] [direction:rtl]">
                      إدارة التواريخ
                    </div>
                    <img
                      className="absolute bottom-[30px] w-[301px] h-[3px]"
                      alt="Line"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-30.svg"
                    />
                  </CardContent>
                </Card>
              </Link>

              <Card className="w-[404px] h-[239px] rounded-[20px] border-0 shadow-sm hover:shadow-md transition-[box-shadow] cursor-pointer">
                <CardContent className="p-0 h-full relative flex flex-col items-center justify-center">
                  <img
                    className="w-[100px] h-[100px] mb-4"
                    alt="مواعيد"
                    src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/uil-schedule-1.svg"
                  />
                  <div className="[font-family:'Inter',Helvetica] font-semibold text-[#484848] text-[32px] [direction:rtl]">
                    مواعيد
                  </div>
                  <img
                    className="absolute bottom-[30px] w-[301px] h-[3px]"
                    alt="Line"
                    src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-30.svg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[19px] mb-[78px]">
            <div className="w-[228px] h-[3px] bg-gradient-to-r from-transparent to-[#989797]" />
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#989797] text-[32px] whitespace-nowrap [direction:rtl]">
              خدمات أخرى
            </h2>
            <div className="w-[228px] h-[3px] bg-gradient-to-l from-transparent to-[#989797]" />
          </div>

          <div className="flex items-center justify-center mb-16">
            <Card className="w-[404px] h-[239px] rounded-[20px] border-0 shadow-sm hover:shadow-md transition-[box-shadow] cursor-pointer">
              <CardContent className="p-0 h-full relative flex flex-col items-center justify-center">
                <img
                  className="w-[100px] h-[100px] mb-4"
                  alt="إيقاف الخدمات وقيود السفر"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/uil-schedule.svg"
                />
                <div className="[font-family:'Inter',Helvetica] font-semibold text-[#484848] text-2xl text-center px-4 [direction:rtl]">
                  إيقاف الخدمات وقيود السفر
                </div>
                <img
                  className="absolute bottom-[30px] w-[301px] h-[3px]"
                  alt="Line"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-30.svg"
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between px-[132px]">
            <Button
              variant="ghost"
              size="icon"
              className="h-auto p-0 hover:bg-transparent"
              aria-label="Previous"
            >
              <img
                className="w-[31px] h-[66px]"
                alt="Previous"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-8.svg"
              />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-auto p-0 hover:bg-transparent"
              aria-label="Next"
            >
              <img
                className="w-[31px] h-[66px]"
                alt="Next"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/vector-3.svg"
              />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
