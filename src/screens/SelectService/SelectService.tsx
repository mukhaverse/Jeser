import { MenuIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const progressSteps = [
  { number: 5, active: false, completed: false },
  { number: 4, active: false, completed: false },
  { number: 3, active: false, completed: false },
  { number: 2, active: false, completed: true },
  { number: 1, active: true, completed: true },
];

export const SelectService = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[844px] min-h-screen relative flex flex-col"
      data-model-id="30:86"
    >
      <header className="w-full px-[42px] py-10 flex items-center justify-between">
        <MenuIcon className="w-[54px] h-[39px] text-[#00834d] cursor-pointer" />

        <div className="flex items-center gap-4">
          <img
            className="w-[124px] h-[83px] object-cover"
            alt="Saudi vision"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/saudi-vision-2030-logo-svg-1-8.png"
          />

          <div className="w-px h-[90px] bg-[#676767]" />

          <div className="relative w-32 h-[129px] bg-white rounded-[10px] border border-solid border-[#676767] flex flex-col items-center justify-center cursor-pointer">
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
              src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-4-6.png"
            />
            <img
              className="absolute top-[13px] left-[39px] w-[34px] h-[38px]"
              alt="Group"
              src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-5-6.png"
            />
          </div>
        </div>

        <img
          className="w-[59px] h-[92px]"
          alt="Group"
          src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-13.png"
        />
      </header>

      <div className="w-full px-[34px] mt-10">
        <div className="relative w-full max-w-[765px] mx-auto">
          <Input
            className="w-full h-[90px] bg-white rounded-[10px] border border-solid border-[#67676752] pr-16 text-right text-[32px] [font-family:'Fenix',Helvetica] font-normal text-[#6767677a] [direction:rtl]"
            placeholder="أكتب هنا للبحث"
          />
          <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 w-[30px] h-[30px] text-[#676767]" />
        </div>
      </div>

      <main className="w-full px-6 mt-10 pb-10 flex-1">
        <Card className="w-full max-w-[795px] mx-auto border-2 border-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <CardContent className="p-0">
            <div className="pt-[19px] px-[47px]">
              <div className="flex items-center justify-center gap-0 mb-6">
                {progressSteps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div
                      className={`inline-flex w-[50px] h-[50px] items-center justify-center p-[13px] rounded-[50px] border-[3px] border-solid ${
                        step.active
                          ? "bg-[#00834d] border-[#00834d]"
                          : step.completed
                            ? "bg-white border-[#00834d]"
                            : "bg-[#dadada] border-[#dadada]"
                      }`}
                    >
                      <div
                        className={`[font-family:'Inter',Helvetica] font-semibold text-lg ${
                          step.active ? "text-white" : "text-[#000000b2]"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>
                    {index < progressSteps.length - 1 && (
                      <img
                        className="w-[76px] h-1"
                        alt="Divider"
                        src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="text-center mb-8">
                <div className="h-6 [font-family:'Inter',Helvetica] font-light text-black text-xl [direction:rtl]">
                  تحديد الخدمة
                </div>
              </div>
            </div>

            <div className="px-[47px]">
              <div className="w-full h-[59px] flex items-center justify-end bg-[#d9edf6] mb-6">
                <div className="mr-[25px] [font-family:'Inter',Helvetica] font-normal text-[#386a7e] text-2xl [direction:rtl]">
                  يرجى اختيار الطريقة المراد الإيداع بها
                </div>
              </div>

              <div className="relative w-full bg-[#d9d9d93b] p-10 mb-8">
                <div className="absolute top-0 right-0 w-2 h-full bg-[#00834d]" />
                <div className="[font-family:'Inter',Helvetica] font-normal text-3xl [direction:rtl] text-[#494848]">
                  <span className="font-bold">الإيداع الفوري:</span>
                  <span> الإيداع والدفع مباشرة</span>
                  <br />
                  <br />
                  <br />
                  <span className="font-bold">جدولة الإيداعات :</span>
                  <span>
                    {" "}
                    تتم جدولة إيداعات شهرية للدعم المالي تلقائيا وفق الفترة
                    المحددة
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <Button
                  asChild
                  className="w-full h-20 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-white text-3xl [direction:rtl]"
                >
                  <Link to="/slecet-detainess">إيداع فوري</Link>
                </Button>

                <Button
                  asChild
                  className="w-full h-20 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-white text-3xl [direction:rtl]"
                >
                  <Link to="/months-advance">جدولة الإيداعات</Link>
                </Button>

                <Button
                  asChild
                  className="w-full h-20 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-white text-3xl [direction:rtl]"
                >
                  <Link to="/history">عرض الإيداعات السابقة</Link>
                </Button>
              </div>

              <Button
                variant="outline"
                asChild
                className="w-full h-20 bg-white hover:bg-gray-50 rounded-[5px] border-[5px] border-solid border-[#00834d] [font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-3xl [direction:rtl] mb-6"
              >
                <Link to="/sections">السابق</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
