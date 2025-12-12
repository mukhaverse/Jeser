import { InfoIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

export const OneTimeTransactionPart2 = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedMonths, setSelectedMonths] = useState<number>(1);

  // Get selected months from navigation state
  useEffect(() => {
    if (location.state?.selectedMonths) {
      setSelectedMonths(location.state.selectedMonths);
    }
  }, [location.state]);

  // Create mutation for saving the selected amounts and dates
  const { create: createDateAmount, isPending: isSaving, error } = useMutation("DateAmount");

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseFloat(value);
    if (value === "" || (!isNaN(numValue) && numValue >= 0 && numValue <= 2000)) {
      setCustomAmount(value);
      if (value !== "") {
        setSelectedAmount(numValue);
      }
    }
  };

  const handleDateSelect = (date: Date) => {
    setStartDate(date);
    
    // Calculate end date based on selected months
    const calculatedEndDate = new Date(date);
    calculatedEndDate.setMonth(calculatedEndDate.getMonth() + selectedMonths);
    setEndDate(calculatedEndDate);
    
    setShowCalendar(false);
  };

  const handleNext = async () => {
    if (!selectedAmount || !startDate || !endDate) return;

    try {
      // Generate all dates between start and end date (monthly)
      const dates: Date[] = [];
      const current = new Date(startDate);
      
      while (current <= endDate) {
        dates.push(new Date(current));
        current.setMonth(current.getMonth() + 1);
      }

      // Create a deposit record for each date
      for (const date of dates) {
        await createDateAmount({
          selectedDate: date,
          amount: selectedAmount,
          recipientName: "احمد بن محمد",
          recipientId: "1234567890",
          status: "pending",
          paymentMethod: "card",
          transactionId: "",
          notes: "إيداع مجدول"
        });
      }

      navigate("/summary-page-part2", {
        state: {
          startDate,
          endDate,
          monthlyAmount: selectedAmount,
          totalAmount: selectedAmount * dates.length,
          scheduleDuration: selectedMonths
        }
      });
    } catch (err) {
      console.error("Failed to create deposits:", err);
    }
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthName = currentMonth.toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' });

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[844px] min-h-screen relative"
      data-model-id="88:67"
    >
      <Header />

      <main className="relative w-full px-[27px] pb-[240px]">
        <div className="max-w-[795px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-0 mb-8">
            <div className="flex items-center gap-0">
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#dadada] border-[#dadada]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-[#000000b2]">
                  5
                </span>
              </div>
              <img
                className="w-[76px] h-1"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#dadada] border-[#dadada]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-[#000000b2]">
                  4
                </span>
              </div>
              <img
                className="w-[76px] h-1"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#00834d] border-[#00834d]">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-white">
                    3
                  </span>
                </div>
                <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-center whitespace-nowrap [direction:rtl]">
                  تحديد المبلغ والتواريخ
                </span>
              </div>
              <img
                className="w-[76px] h-1"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#00834d] border-[#00834d]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-white">
                  2
                </span>
              </div>
              <img
                className="w-[76px] h-1"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#00834d] border-[#00834d]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-white">
                  1
                </span>
              </div>
            </div>
          </div>

          <Alert className="mb-8 bg-[#d9edf6] border-0 rounded-[10px]">
            <AlertDescription className="flex items-center justify-end gap-4 text-[#386a7e] text-xl [font-family:'Inter',Helvetica] [direction:rtl] py-2">
              <span>الحد الاعلى للحوالات هو 2000</span>
              <InfoIcon className="w-5 h-5" />
            </AlertDescription>
          </Alert>

          {/* Amount Selection Card */}
          <Card className="border-4 border-[#f7f7f7] rounded-[30px] mb-8">
            <CardContent className="p-0">
              <div className="bg-[#f7f7f7] h-[68px] flex items-center justify-center rounded-t-[30px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                  تحديد المبلغ
                </h1>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button
                    onClick={() => {
                      setSelectedAmount(100);
                      setCustomAmount("");
                    }}
                    className={`h-16 rounded-[10px] border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                      selectedAmount === 100 && customAmount === ""
                        ? "border-[#00834d] bg-[#00834d] text-white"
                        : "border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <img
                      className="w-6 h-6"
                      alt="100 ريال"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-3.png"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xl">
                      100
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedAmount(500);
                      setCustomAmount("");
                    }}
                    className={`h-16 rounded-[10px] border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                      selectedAmount === 500 && customAmount === ""
                        ? "border-[#00834d] bg-[#00834d] text-white"
                        : "border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <img
                      className="w-6 h-6"
                      alt="500 ريال"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-4.png"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xl">
                      500
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <button
                    onClick={() => {
                      setSelectedAmount(1000);
                      setCustomAmount("");
                    }}
                    className={`h-16 rounded-[10px] border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                      selectedAmount === 1000 && customAmount === ""
                        ? "border-[#00834d] bg-[#00834d] text-white"
                        : "border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <img
                      className="w-6 h-6"
                      alt="1000 ريال"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-7.png"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xl">
                      1000
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedAmount(1500);
                      setCustomAmount("");
                    }}
                    className={`h-16 rounded-[10px] border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                      selectedAmount === 1500 && customAmount === ""
                        ? "border-[#00834d] bg-[#00834d] text-white"
                        : "border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <img
                      className="w-6 h-6"
                      alt="1500 ريال"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-6.png"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xl">
                      1500
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedAmount(2000);
                      setCustomAmount("");
                    }}
                    className={`h-16 rounded-[10px] border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                      selectedAmount === 2000 && customAmount === ""
                        ? "border-[#00834d] bg-[#00834d] text-white"
                        : "border-[#00834d] text-[#00834d] hover:bg-[#00834d]/10"
                    }`}
                  >
                    <img
                      className="w-6 h-6"
                      alt="2000 ريال"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-5.png"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xl">
                      2000
                    </span>
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-right [font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                    حدد مبلغا اخر :
                  </p>

                  <div className="relative">
                    <Input
                      type="number"
                      min="0"
                      max="2000"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="h-14 rounded-[10px] border-2 border-[#00834d] text-right text-lg [font-family:'Inter',Helvetica] font-medium pr-16 pl-4"
                      placeholder="ر.س"
                      disabled={isSaving}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 [font-family:'Inter',Helvetica] font-normal text-[#676767] text-lg">
                      ر.س
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 [direction:rtl]">
                    <p className="[font-family:'Inter',Helvetica] font-normal">
                      حدث خطأ: {error.message}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Date Selection Card */}
          <Card className="border-4 border-[#f7f7f7] rounded-[30px]">
            <CardContent className="p-0">
              <div className="bg-[#f7f7f7] h-[68px] flex items-center justify-center rounded-t-[30px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                  حدّد التاريخ
                </h1>
              </div>

              <div className="p-8">
                {/* Date Dropdown */}
                <div className="relative mb-6">
                  <button
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full h-14 rounded-[10px] border-2 border-[#00834d] bg-white text-right px-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#676767]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                      {startDate ? startDate.toLocaleDateString('ar-SA') : "اختر تاريخ البداية"}
                    </span>
                  </button>

                  {/* Calendar Popup */}
                  {showCalendar && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#00834d] rounded-[15px] shadow-lg z-50 p-6">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-6">
                        <button
                          onClick={goToNextMonth}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <svg className="w-6 h-6 text-[#00834d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                          {monthName}
                        </h2>

                        <button
                          onClick={goToPreviousMonth}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <svg className="w-6 h-6 text-[#00834d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day) => (
                          <div key={day} className="text-center [font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {calendarDays.map((day, index) => {
                          if (!day) {
                            return <div key={`empty-${index}`} className="aspect-square" />;
                          }

                          const dateString = day.toISOString().split('T')[0];
                          const isToday = new Date().toISOString().split('T')[0] === dateString;

                          return (
                            <button
                              key={dateString}
                              onClick={() => handleDateSelect(day)}
                              className={`aspect-square rounded-[10px] flex items-center justify-center transition-all duration-200 ${
                                isToday
                                  ? "border-2 border-[#00834d] text-[#00834d] hover:bg-[#00834d] hover:text-white"
                                  : "border border-gray-300 text-[#494848] hover:bg-[#00834d] hover:text-white"
                              }`}
                            >
                              <span className="[font-family:'Inter',Helvetica] font-medium text-lg">
                                {day.getDate()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Display Selected Date Range */}
                {startDate && endDate && (
                  <div className="bg-[#f7f7f7] rounded-[10px] p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                        {startDate.toLocaleDateString('ar-SA')}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg [direction:rtl]">
                        يبدأ
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                        {endDate.toLocaleDateString('ar-SA')}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg [direction:rtl]">
                        ينتهي
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                        {selectedMonths} {selectedMonths === 1 ? "شهر" : "أشهر"}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg [direction:rtl]">
                        مدة الجدولة
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 mt-8">
            <Button
              onClick={handleNext}
              disabled={!selectedAmount || !startDate || !endDate || isSaving}
              className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] text-white rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-2xl [direction:rtl] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? "جاري الحفظ..." : "التالي"}
            </Button>

            <Button
              variant="outline"
              asChild
              disabled={isSaving}
              className="w-full h-16 border-[3px] border-[#00834d] text-[#00834d] hover:bg-gray-50 rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-2xl [direction:rtl] transition-colors"
            >
              <Link to="/months-advance">السابق</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
