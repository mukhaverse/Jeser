import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SearchIcon } from "lucide-react";
import { Header } from "../../components/shared/Header";

export const Confirmation = (): JSX.Element => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [transactionId, setTransactionId] = useState("");

  // Fetch the most recent completed date amount
  const { data: completedAmounts, isPending } = useQuery("DateAmount", {
    where: { status: "completed" },
    orderBy: { createdAt: "desc" },
    limit: 1
  });

  useEffect(() => {
    if (completedAmounts && completedAmounts.length > 0) {
      const latestDeposit = completedAmounts[0];
      setTotalAmount(latestDeposit.amount);
      setTransactionId(latestDeposit.transactionId || "");
    }
  }, [completedAmounts]);

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
        <div className="max-w-[800px] mx-auto">
          {/* Progress Indicator - All Steps Completed */}
          <div className="flex items-center justify-center gap-0 mb-8">
            <div className="flex items-center gap-0">
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#00834d] border-[#00834d]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-white">
                  5
                </span>
              </div>
              <img
                className="w-[76px] h-1"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#00834d] border-[#00834d]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-white">
                  4
                </span>
              </div>
              <img
                className="w-[76px] h-1"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
              <div className="inline-flex w-[50px] h-[50px] items-center justify-center rounded-[50px] border-[3px] border-solid bg-[#00834d] border-[#00834d]">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-lg text-white">
                  3
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

          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#d9edf6] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl whitespace-nowrap [direction:rtl]">
                تمت العملية بنجاح
              </h2>
            </div>

            <CardContent className="p-8">
              {isPending ? (
                <div className="text-center py-12">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                    جاري التحميل...
                  </p>
                </div>
              ) : (
                <>
                  {/* Transaction Details */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between py-4 border-b border-[#e0e0e0]">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl">
                        {transactionId || "0000000000"}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                        الفاتورة رقم
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-[#e0e0e0]">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl">
                        {totalAmount.toFixed(2)} ر.س
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                        المبلغ الإجمالي
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-[#e0e0e0]">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                        طريقة الإيداع
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                        فوري
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#00834d] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#00834d] text-xl [direction:rtl]">
                          مكتمل
                        </span>
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                        الحالة
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    <Button
                      asChild
                      className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors"
                    >
                      <Link to="/history">
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                          عرض العمليات السابقة
                        </span>
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                    >
                      <Link to="/home-page">
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-2xl [direction:rtl]">
                          الصفحة الرئيسية
                        </span>
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
