import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const DateSelection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  
  const { create, isPending, error } = useMutation("Date");

  const convertToHijri = (gregorianDate: string): string => {
    const date = new Date(gregorianDate);
    const hijriYear = date.getFullYear() - 579;
    const hijriMonth = date.getMonth() + 1;
    const hijriDay = date.getDate();
    return `${hijriDay}/${hijriMonth}/${hijriYear}`;
  };

  const getArabicMonthName = (gregorianDate: string): string => {
    const months = [
      "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    const date = new Date(gregorianDate);
    return months[date.getMonth()];
  };

  const handleSaveAndContinue = async () => {
    if (!selectedDate) return;

    try {
      await create({
        selectedDate: new Date(selectedDate),
        hijriDate: convertToHijri(selectedDate),
        monthName: getArabicMonthName(selectedDate),
        isScheduled: true,
        amount: 1000,
        recipientName: "احمد بن محمد",
        status: "scheduled"
      });

      navigate("/overlay-calendar");
    } catch (err) {
      console.error("Failed to save date:", err);
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
        <div className="max-w-[600px] mx-auto">
          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                اختيار تاريخ البداية
              </h2>
            </div>
            
            <CardContent className="p-8">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl text-center mb-8 [direction:rtl]">
                اختر التاريخ الذي تريد بدء الجدولة منه
              </p>

              <div className="space-y-6 mb-8">
                <div className="space-y-2">
                  <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                    التاريخ بالميلادي
                  </label>
                  <div className="relative">
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="h-16 text-xl text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                      disabled={isPending}
                    />
                    <button
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00834d] hover:text-[#006b3f] transition-colors"
                      disabled={isPending}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                    التاريخ بالهجري
                  </label>
                  <Input
                    type="text"
                    value={selectedDate ? convertToHijri(selectedDate) : ""}
                    placeholder="25/06/1447"
                    className="h-16 text-xl text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                    readOnly
                  />
                </div>
              </div>

              {selectedDate && (
                <div className="bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl mb-2 [direction:rtl]">
                    التاريخ المختار:
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                    {new Date(selectedDate).toLocaleDateString('ar-SA')}
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl] mt-2">
                    الشهر: {getArabicMonthName(selectedDate)}
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 [direction:rtl]">
                  <p className="[font-family:'Inter',Helvetica] font-normal">
                    حدث خطأ: {error.message}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <Button
                  onClick={handleSaveAndContinue}
                  disabled={!selectedDate || isPending}
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                    {isPending ? "جاري الحفظ..." : "حفظ والمتابعة"}
                  </span>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                  disabled={isPending}
                >
                  <Link to="/choose-months">
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
