import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const months = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

export const ChooseMonths = (): JSX.Element => {
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleMonth = (month: string) => {
    setSelectedMonths(prev => 
      prev.includes(month) 
        ? prev.filter(m => m !== month)
        : [...prev, month]
    );
  };

  return (
    <div className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col">
      <header className="w-full px-[42px] pt-[62px] pb-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <nav className="flex items-center justify-between max-w-[760px]">
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

      <main className="flex-1 px-8 pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-[800px] mx-auto">
          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                اختيار الأشهر للجدولة
              </h2>
            </div>
            
            <CardContent className="p-8">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl text-center mb-8 [direction:rtl]">
                اختر الأشهر التي تريد جدولة الإيداعات فيها
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {months.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => toggleMonth(month)}
                    className={`h-16 rounded-[10px] border-2 transition-all duration-200 ${
                      selectedMonths.includes(month)
                        ? "bg-[#00834d] border-[#00834d] text-white"
                        : "bg-white border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xl [direction:rtl]">
                      {month}
                    </span>
                  </button>
                ))}
              </div>

              {selectedMonths.length > 0 && (
                <div className="bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl mb-4 [direction:rtl]">
                    الأشهر المختارة:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMonths.map((month) => (
                      <span
                        key={month}
                        className="bg-[#00834d] text-white px-4 py-2 rounded-[10px] [font-family:'Inter',Helvetica] font-normal text-lg [direction:rtl]"
                      >
                        {month}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  disabled={selectedMonths.length === 0}
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Link to="/date-selection">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                      التالي
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/months-advance">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-2xl [direction:rtl]">
                      السابق
                    </span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
