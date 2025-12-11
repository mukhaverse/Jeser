import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const progressSteps = [
  { number: 5, active: true, completed: false },
  { number: 4, active: false, completed: true },
  { number: 3, active: false, completed: true },
  { number: 2, active: false, completed: true },
  { number: 1, active: false, completed: true },
];

export const PayPageApple = (): JSX.Element => {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch pending date amounts
  const { data: dateAmounts, isPending: isLoadingAmounts } = useQuery("DateAmount", {
    where: { status: "pending" },
    orderBy: { selectedDate: "asc" }
  });

  const { update, isPending: isProcessing, error } = useMutation("DateAmount");

  useEffect(() => {
    if (dateAmounts) {
      const total = dateAmounts.reduce((sum, item) => sum + item.amount, 0);
      setTotalAmount(total);
    }
  }, [dateAmounts]);

  const handleApplePayClick = async () => {
    try {
      // Update all pending date amounts with Apple Pay payment method
      for (const dateAmount of dateAmounts || []) {
        await update(dateAmount.id, {
          status: "completed",
          paymentMethod: "apple_pay",
          transactionId: `APPLE${Date.now()}${Math.random().toString(36).substr(2, 9)}`
        });
      }

      navigate("/confirmation");
    } catch (err) {
      console.error("Failed to process Apple Pay:", err);
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
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center justify-center gap-0 mb-8">
            {progressSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`inline-flex w-[50px] h-[50px] items-center justify-center p-[13px] rounded-[50px] border-[3px] border-solid ${
                      step.active
                        ? "bg-white border-[#00834d]"
                        : step.completed
                          ? "bg-[#00834d] border-[#00834d]"
                          : "bg-[#dadada] border-[#dadada]"
                    }`}
                  >
                    <div
                      className={`[font-family:'Inter',Helvetica] font-semibold text-lg ${
                        step.active ? "text-[#000000b2]" : step.completed ? "text-white" : "text-[#000000b2]"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>
                  {step.number === 5 && (
                    <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-center whitespace-nowrap [direction:rtl]">
                      الدفع
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

          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                الدفع عبر Apple Pay
              </h2>
            </div>

            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-32 h-32 bg-black rounded-[20px] flex items-center justify-center mb-8">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>

                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-3xl text-center mb-4 [direction:rtl]">
                  ادفع بأمان باستخدام Apple Pay
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl text-center mb-8 [direction:rtl] max-w-md">
                  استخدم بصمة الإصبع أو Face ID لإتمام عملية الدفع بشكل آمن وسريع
                </p>

                <div className="w-full bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl">
                      {isLoadingAmounts ? "..." : totalAmount.toFixed(2)}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                      المبلغ الإجمالي
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                      {dateAmounts?.[0]?.recipientName || "احمد بن محمد"}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg [direction:rtl]">
                      اسم النزيل
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                      {dateAmounts?.length || 0}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg [direction:rtl]">
                      عدد الإيداعات
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 [direction:rtl]">
                    <p className="[font-family:'Inter',Helvetica] font-normal">
                      حدث خطأ: {error.message}
                    </p>
                  </div>
                )}

                <div className="w-full space-y-4">
                  <Button
                    onClick={handleApplePayClick}
                    disabled={isProcessing || isLoadingAmounts}
                    className="w-full h-20 bg-black hover:bg-gray-800 rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl">
                      {isProcessing ? "جاري المعالجة..." : "ادفع باستخدام Apple Pay"}
                    </span>
                  </Button>

                  <div className="text-center">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#676767] text-sm [direction:rtl]">
                      معاملة آمنة ومشفرة
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8 pt-8 border-t-4 border-[#f7f7f7]">
                <Button
                  variant="outline"
                  asChild
                  disabled={isProcessing}
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/pay-page-1">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-2xl [direction:rtl]">
                      طرق دفع أخرى
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  disabled={isProcessing}
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/date-amount-selection">
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
