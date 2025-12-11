import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Confirmation = (): JSX.Element => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [depositCount, setDepositCount] = useState(0);

  // Fetch completed date amounts
  const { data: completedAmounts, isPending } = useQuery("DateAmount", {
    where: { status: "completed" },
    orderBy: { createdAt: "desc" },
    limit: 10
  });

  useEffect(() => {
    if (completedAmounts && completedAmounts.length > 0) {
      const total = completedAmounts.reduce((sum, item) => sum + item.amount, 0);
      setTotalAmount(total);
      setDepositCount(completedAmounts.length);
    }
  }, [completedAmounts]);
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

      <main className="flex-1 flex flex-col items-center justify-center px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <Card className="w-full max-w-[600px] bg-white rounded-[30px] border-4 border-[#f7f7f7] shadow-lg">
          <CardContent className="flex flex-col items-center p-12">
            <div className="w-32 h-32 bg-[#00834d] rounded-full flex items-center justify-center mb-8">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#00834d] text-4xl text-center mb-4 [direction:rtl]">
              تم بنجاح
            </h1>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl text-center mb-8 [direction:rtl]">
              {isPending ? "جاري التحميل..." : `تم إيداع مبلغ ${totalAmount.toFixed(2)} ريال بنجاح`}
            </p>

            <div className="w-full bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl">
                  {isPending ? "..." : totalAmount.toFixed(2)}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                  المبلغ المودع
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl">
                  {completedAmounts?.[0]?.recipientName || "احمد بن محمد"}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                  اسم النزيل
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl">
                  {new Date().toLocaleDateString('ar-SA')}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                  تاريخ الإيداع
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl">
                  {depositCount}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                  عدد الإيداعات المجدولة
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <Button
                asChild
                className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors"
              >
                <Link to="/home-page">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                    العودة للرئيسية
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-2xl [direction:rtl]">
                  طباعة الإيصال
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
