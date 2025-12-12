import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/shared/Header";

const progressSteps = [
  { number: 5, completed: false, active: false },
  { number: 4, completed: false, active: true },
  { number: 3, completed: true, active: false },
  { number: 2, completed: true, active: false },
  { number: 1, completed: true, active: false },
];

const depositorInfo = [
  { label: "اسم المودع", value: "احمد بن محمد" },
  { label: "رقم هوية المودع", value: "000000000000" },
];

const inmateInfo = [
  { label: "اسم النزيل", value: "احمد بن محمد" },
  { label: "رقم النزيل", value: "000000000000" },
];

export const SummaryPagePart2 = (): JSX.Element => {
  const location = useLocation();
  const {
    startDate,
    endDate,
    monthlyAmount = 1000,
    totalAmount = 3000,
    scheduleDuration = 3
  } = location.state || {};

  const depositInfo = [
    { label: "العنوان", value: "إصلاحيه مكة" },
    { label: "المدينة", value: "مكة المكرمة" },
    { label: "المنطقة", value: "منطقة مكة المكرمة" },
    { label: "اليوم", value: "الثلاثاء" },
    { 
      label: "التاريخ بالميلادي", 
      value: startDate ? new Date(startDate).toLocaleDateString('ar-SA') : "16/12/2025" 
    },
    { label: "التاريخ بالهجري", value: "25/06/1447" },
    { label: "طريقة الإيداع", value: "مجدول" },
  ];

  return (
    <main
      className="bg-white w-full min-w-[844px] flex flex-col"
      data-model-id="85:6"
    >
      <Header />

      <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="w-full flex flex-col bg-white">
          <div className="w-full max-w-[599px] mx-auto mt-7 flex items-center justify-center">
            <div className="flex items-center gap-0">
              <div className="inline-flex items-center justify-center gap-2.5 p-[13px] bg-[#dadada] rounded-[50px] border-[3px] border-solid border-[#dadada]">
                <div className="w-6 h-6 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-[#000000b2] text-lg">
                  5
                </div>
              </div>

              <img
                className="w-[76px] h-px"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />

              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center justify-center gap-2.5 p-[13px] bg-white border-[#00834d] rounded-[50px] border-[3px] border-solid">
                  <div className="w-6 h-6 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-[#000000b2] text-lg">
                    4
                  </div>
                </div>
                <div className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-center whitespace-nowrap [direction:rtl]">
                  تاكيد المعلومات
                </div>
              </div>

              <img
                className="w-[76px] h-px"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />

              <div className="inline-flex items-center justify-center gap-2.5 p-[13px] bg-[#00834d] rounded-[50px] border-[3px] border-solid border-[#00834d]">
                <div className="w-6 h-6 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-white text-lg">
                  3
                </div>
              </div>

              <img
                className="w-[76px] h-px"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />

              <div className="inline-flex items-center justify-center gap-2.5 p-[13px] bg-[#00834d] rounded-[50px] border-[3px] border-solid border-[#00834d]">
                <div className="w-6 h-6 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-white text-lg">
                  2
                </div>
              </div>

              <img
                className="w-[76px] h-px"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />

              <div className="inline-flex items-center justify-center gap-2.5 p-[13px] bg-[#00834d] rounded-[50px] border-[3px] border-solid border-[#00834d]">
                <div className="w-6 h-6 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-white text-lg">
                  1
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[732px] mx-auto mt-14 px-[30px]">
            <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
              <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                  بيانات المودع
                </h2>
              </div>
              <CardContent className="p-6 space-y-6">
                {depositorInfo.map((item, index) => (
                  <div key={index} className="flex flex-col items-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.label}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-[732px] mx-auto mt-7 px-[30px]">
            <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
              <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                  بيانات النزيل
                </h2>
              </div>
              <CardContent className="p-6 space-y-6">
                {inmateInfo.map((item, index) => (
                  <div key={index} className="flex flex-col items-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.label}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-[732px] mx-auto mt-8 px-[30px]">
            <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
              <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                  بيانات الإيداع
                </h2>
              </div>
              <CardContent className="p-6 space-y-6">
                {depositInfo.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex flex-col items-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.label}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="w-full h-px bg-gray-300" />

                {depositInfo.slice(3, 6).map((item, index) => (
                  <div key={index} className="flex flex-col items-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.label}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="w-full h-px bg-gray-300" />

                {depositInfo.slice(6, 7).map((item, index) => (
                  <div key={index} className="flex flex-col items-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.label}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="w-full h-px bg-gray-300" />

                {/* Schedule Duration */}
                <div className="flex flex-col items-end gap-2">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                    مدة الجدولة
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                    {scheduleDuration} {scheduleDuration === 1 ? "شهر" : "أشهر"}
                  </div>
                </div>

                {/* Monthly Amount */}
                <div className="flex flex-col items-end gap-2">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                    المبلغ كل شهر
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap">
                      {monthlyAmount.toFixed(2)}
                    </div>
                    <img
                      className="w-[19px] h-[21px]"
                      alt="Currency"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26.png"
                    />
                  </div>
                </div>

                {/* Total Amount */}
                <div className="flex flex-col items-end gap-2">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                    المبلغ الإجمالي
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] whitespace-nowrap">
                      {totalAmount.toFixed(2)}
                    </div>
                    <img
                      className="w-[19px] h-[21px]"
                      alt="Currency"
                      src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26.png"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-[732px] mx-auto mt-10 px-[30px] flex flex-col gap-8 pb-10">
            <Button
              asChild
              className="w-full h-20 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors"
            >
              <Link to="/pay-page-1">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-3xl whitespace-nowrap [direction:rtl]">
                  تأكيد المعلومات والذهاب للدفع
                </span>
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="w-full h-20 rounded-[5px] border-[5px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
            >
              <Link to="/one-time-transaction-part2">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-3xl whitespace-nowrap [direction:rtl]">
                  السابق
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
