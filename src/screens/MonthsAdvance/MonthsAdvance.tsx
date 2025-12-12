import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/shared/Header";

const scheduleOptions = [
  { 
    value: 1, 
    label: "جدولة الإيداع للشهر القادم",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/uil-schedule-1.svg"
  },
  { 
    value: 3, 
    label: "جدولة الإيداع لـ 3 أشهر قادمة",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/uil-schedule-1.svg"
  },
  { 
    value: 6, 
    label: "جدولة الإيداع لـ 6 أشهر قادمة",
    icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/uil-schedule-1.svg"
  },
];

const progressSteps = [
  { number: 6, active: false, completed: false },
  { number: 5, active: false, completed: false },
  { number: 4, active: false, completed: false },
  { number: 3, active: false, completed: false },
  { number: 2, active: true, completed: false },
  { number: 1, active: false, completed: true },
];

export const MonthsAdvance = (): JSX.Element => {
  const [selectedMonths, setSelectedMonths] = useState<number | null>(null);

  return (
    <div className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col">
      <Header />

      {/* Search Bar */}
      <div className="w-full px-8 mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-[800px] mx-auto relative">
          <input
            type="text"
            placeholder="أكتب هنا للبحث"
            className="w-full h-16 rounded-[10px] border border-[#67676752] text-right [direction:rtl] pr-16 pl-16 text-xl [font-family:'Inter',Helvetica] text-[#6767677a]"
          />
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#676767]" />
        </div>
      </div>

      <main className="flex-1 px-8 pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="max-w-[700px] mx-auto">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-0 mb-8">
            {progressSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid ${
                      step.active
                        ? "bg-white border-[#00834d]"
                        : step.completed
                          ? "bg-[#00834d] border-[#00834d]"
                          : "bg-[#dadada] border-[#dadada]"
                    }`}
                  >
                    <span
                      className={`[font-family:'Inter',Helvetica] font-semibold text-lg ${
                        step.active ? "text-[#000000b2]" : step.completed ? "text-white" : "text-[#000000b2]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  {step.number === 2 && (
                    <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-center whitespace-nowrap [direction:rtl]">
                      جدولة الإيداع
                    </span>
                  )}
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

          {/* Info Alert */}
          <div className="bg-[#d9edf6] rounded-[10px] p-4 mb-8">
            <div className="flex items-center justify-end gap-3">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#386a7e] text-lg [direction:rtl]">
                يرجى تحديد عدد الأشهر المراد جدولة الإيداع لها
              </span>
              <svg
                className="w-5 h-5 text-[#386a7e] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Second Info Alert */}
          <div className="bg-[#d9edf6] rounded-[10px] p-4 mb-8">
            <div className="flex items-center justify-end gap-3">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#386a7e] text-lg [direction:rtl]">
                الحد الاعلى للحوالات هو 2000 ر.س
              </span>
              <svg
                className="w-5 h-5 text-[#386a7e] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl whitespace-nowrap [direction:rtl]">
                الخيارات
              </h2>
            </div>

            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {scheduleOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedMonths(option.value)}
                    className={`w-full flex items-center justify-between p-6 rounded-[10px] border-2 transition-all duration-200 ${
                      selectedMonths === option.value
                        ? "border-[#00834d] bg-[#00834d]/5"
                        : "border-[#e0e0e0] hover:border-[#00834d]/50 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-4 h-full bg-[#00834d] rounded-l-[10px] absolute left-0 top-0" />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl] pr-6">
                      {option.label}
                    </span>
                    <img
                      className="w-12 h-12"
                      alt="Calendar icon"
                      src={option.icon}
                    />
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  disabled={!selectedMonths}
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Link 
                    to="/one-time-transaction-part2"
                    state={{ selectedMonths }}
                  >
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
