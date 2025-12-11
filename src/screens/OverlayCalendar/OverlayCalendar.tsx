import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const daysOfWeek = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const months = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

export const OverlayCalendar = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<number[]>([]);

  // Fetch existing scheduled dates
  const { data: scheduledDates, isPending: isLoadingDates } = useQuery("Date", {
    where: { 
      status: "scheduled",
      isScheduled: true 
    },
    orderBy: { selectedDate: "asc" }
  });

  const { create, update, isPending: isSaving, error } = useMutation("Date");

  // Extract day numbers from scheduled dates for the current month
  useEffect(() => {
    if (scheduledDates) {
      const daysInCurrentMonth = scheduledDates
        .filter(date => {
          const d = new Date(date.selectedDate);
          return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
        })
        .map(date => new Date(date.selectedDate).getDate());
      
      setSelectedDates(daysInCurrentMonth);
    }
  }, [scheduledDates, currentMonth, currentYear]);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const convertToHijri = (date: Date): string => {
    const hijriYear = date.getFullYear() - 579;
    const hijriMonth = date.getMonth() + 1;
    const hijriDay = date.getDate();
    return `${hijriDay}/${hijriMonth}/${hijriYear}`;
  };

  const handleDateToggle = async (day: number) => {
    const dateToToggle = new Date(currentYear, currentMonth, day);
    const existingDate = scheduledDates?.find(d => {
      const schedDate = new Date(d.selectedDate);
      return schedDate.getDate() === day && 
             schedDate.getMonth() === currentMonth && 
             schedDate.getFullYear() === currentYear;
    });

    try {
      if (existingDate) {
        // Toggle the scheduled status
        await update(existingDate.id, {
          isScheduled: !existingDate.isScheduled,
          status: existingDate.isScheduled ? "cancelled" : "scheduled"
        });
      } else {
        // Create new scheduled date
        await create({
          selectedDate: dateToToggle,
          hijriDate: convertToHijri(dateToToggle),
          monthName: months[currentMonth],
          isScheduled: true,
          amount: 1000,
          recipientName: "احمد بن محمد",
          status: "scheduled"
        });
      }
    } catch (err) {
      console.error("Failed to toggle date:", err);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDates.includes(day);
      const isToday = day === new Date().getDate() && 
                     currentMonth === new Date().getMonth() && 
                     currentYear === new Date().getFullYear();

      days.push(
        <button
          key={day}
          disabled={isSaving}
          className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-200 disabled:opacity-50 ${
            isSelected
              ? "bg-[#00834d] text-white"
              : isToday
              ? "bg-[#00834d]/20 text-[#00834d] border-2 border-[#00834d]"
              : "text-[#494848] hover:bg-[#00834d]/10"
          }`}
          onClick={() => handleDateToggle(day)}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  if (isLoadingDates) {
    return (
      <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-[600px] bg-white rounded-[20px] border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
              جاري التحميل...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-[600px] bg-white rounded-[20px] border-0 shadow-2xl animate-fade-in">
        <div className="bg-[#00834d] rounded-t-[20px] p-6">
          <div className="flex items-center justify-between text-white">
            <button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else {
                  setCurrentMonth(currentMonth - 1);
                }
              }}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              disabled={isSaving}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <h2 className="[font-family:'Inter',Helvetica] font-bold text-2xl [direction:rtl]">
              {months[currentMonth]} {currentYear}
            </h2>

            <button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                } else {
                  setCurrentMonth(currentMonth + 1);
                }
              }}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              disabled={isSaving}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="h-12 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm [direction:rtl]"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {renderCalendarDays()}
          </div>

          {selectedDates.length > 0 && (
            <div className="bg-[#f7f7f7] rounded-[15px] p-4 mb-6">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg mb-2 [direction:rtl]">
                التواريخ المجدولة:
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedDates.sort((a, b) => a - b).map((date) => (
                  <span
                    key={date}
                    className="bg-[#00834d] text-white px-3 py-1 rounded-[8px] [font-family:'Inter',Helvetica] font-normal text-sm"
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 [direction:rtl]">
              <p className="[font-family:'Inter',Helvetica] font-normal">
                حدث خطأ: {error.message}
              </p>
            </div>
          )}

          <div className="flex gap-4">
            <Button
              asChild
              disabled={isSaving || selectedDates.length === 0}
              className="flex-1 h-12 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Link to="/date-amount-selection">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg [direction:rtl]">
                  {isSaving ? "جاري الحفظ..." : "تحديد المبالغ"}
                </span>
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              disabled={isSaving}
              className="flex-1 h-12 rounded-[5px] border-2 border-[#00834d] bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Link to="/date-selection">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-lg [direction:rtl]">
                  إلغاء
                </span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
