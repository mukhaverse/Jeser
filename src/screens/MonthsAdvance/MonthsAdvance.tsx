import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const monthOptions = [
  { value: 1, label: "شهر واحد" },
  { value: 2, label: "شهرين" },
  { value: 3, label: "3 أشهر" },
  { value: 6, label: "6 أشهر" },
  { value: 12, label: "سنة كاملة" },
];

export const MonthsAdvance = (): JSX.Element => {
  const [selectedMonths, setSelectedMonths] = useState<number | null>(null);
  const [customMonths, setCustomMonths] = useState("");

  const handleCustomMonthsChange = (value: string) => {
    const numValue = parseInt(value);
    if (value === "" || (numValue >= 1 && numValue <= 24)) {
      setCustomMonths(value);
      if (value !== "") {
        setSelectedMonths(numValue);
      }
    }
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
        <div className="max-w-[700px] mx-auto">
          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                كم شهر مقدماً؟
              </h2>
            </div>

            <CardContent className="p-8">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl text-center mb-8 [direction:rtl]">
                حدد عدد الأشهر التي تريد جدولة الإيداعات لها مقدماً
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {monthOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedMonths(option.value);
                      setCustomMonths("");
                    }}
                    className={`h-20 rounded-[10px] border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                      selectedMonths === option.value && customMonths === ""
                        ? "bg-[#00834d] border-[#00834d] text-white"
                        : "bg-white border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <span className="[font-family:'Inter',Helvetica] font-bold text-3xl">
                      {option.value}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-lg [direction:rtl]">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="w-full h-px bg-gray-300 my-8" />

              <div className="space-y-4 mb-8">
                <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                  أو حدد عدد مخصص (حتى 24 شهر)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="24"
                    value={customMonths}
                    onChange={(e) => handleCustomMonthsChange(e.target.value)}
                    placeholder="أدخل عدد الأشهر"
                    className="w-full h-16 text-xl text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px] px-4 focus:outline-none focus:ring-2 focus:ring-[#00834d]"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 [font-family:'Inter',Helvetica] font-normal text-[#676767] text-lg">
                    شهر
                  </span>
                </div>
              </div>

              {selectedMonths && (
                <div className="bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="[font-family:'Inter',Helvetica] font-bold text-[#00834d] text-4xl mb-2">
                        {selectedMonths}
                      </p>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                        شهر
                      </p>
                    </div>
                    <div className="flex-1 text-right pr-8">
                      <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl mb-2 [direction:rtl]">
                        المدة المختارة:
                      </p>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                        سيتم جدولة {selectedMonths} إيداع شهري
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-[#d9edf6] rounded-[10px] p-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#386a7e] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#386a7e] text-lg [direction:rtl]">
                    سيتم خصم المبلغ تلقائياً في نفس اليوم من كل شهر حسب المدة المحددة
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  disabled={!selectedMonths}
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Link to="/choose-months">
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
                  <Link to="/select-service">
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
