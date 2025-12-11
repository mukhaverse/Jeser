import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const DateAmountSelection = (): JSX.Element => {
  const navigate = useNavigate();
  const [dateAmounts, setDateAmounts] = useState<Array<{ date: Date; amount: string }>>([]);
  const [recipientName, setRecipientName] = useState("احمد بن محمد");
  const [recipientId, setRecipientId] = useState("1234567890");

  // Fetch scheduled dates
  const { data: scheduledDates, isPending: isLoadingDates } = useQuery("Date", {
    where: { 
      status: "scheduled",
      isScheduled: true 
    },
    orderBy: { selectedDate: "asc" }
  });

  const { create, isPending: isSaving, error } = useMutation("DateAmount");

  // Initialize date amounts from scheduled dates
  useEffect(() => {
    if (scheduledDates && scheduledDates.length > 0) {
      const initialAmounts = scheduledDates.map(date => ({
        date: new Date(date.selectedDate),
        amount: date.amount.toString()
      }));
      setDateAmounts(initialAmounts);
    }
  }, [scheduledDates]);

  // Fetch amount options for quick selection
  const { data: amountOptions } = useQuery("AmountOption", {
    where: { isActive: true },
    orderBy: { displayOrder: "asc" },
    limit: 3
  });

  const handleAmountChange = (index: number, value: string) => {
    const numValue = parseFloat(value);
    if (value === "" || (!isNaN(numValue) && numValue >= 0 && numValue <= 2000)) {
      const newDateAmounts = [...dateAmounts];
      newDateAmounts[index].amount = value;
      setDateAmounts(newDateAmounts);
    }
  };

  const handleQuickAmountSelect = (index: number, amount: number) => {
    const newDateAmounts = [...dateAmounts];
    newDateAmounts[index].amount = amount.toString();
    setDateAmounts(newDateAmounts);
  };

  const getTotalAmount = () => {
    return dateAmounts.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      return sum + amount;
    }, 0);
  };

  const handleSaveAndContinue = async () => {
    try {
      // Create DateAmount records for each scheduled date
      for (const item of dateAmounts) {
        if (item.amount && parseFloat(item.amount) > 0) {
          await create({
            selectedDate: item.date,
            amount: parseFloat(item.amount),
            recipientName,
            recipientId,
            status: "pending",
            paymentMethod: "card", // Default, will be updated on payment page
            transactionId: "",
            notes: ""
          });
        }
      }

      navigate("/pay-page-1");
    } catch (err) {
      console.error("Failed to save date amounts:", err);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
                تحديد المبالغ للتواريخ المجدولة
              </h2>
            </div>

            <CardContent className="p-8">
              {isLoadingDates ? (
                <div className="text-center py-12">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                    جاري التحميل...
                  </p>
                </div>
              ) : (
                <>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl text-center mb-8 [direction:rtl]">
                    حدد المبلغ المراد إيداعه في كل تاريخ
                  </p>

                  <div className="bg-[#d9edf6] rounded-[10px] p-4 mb-6">
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
                        الحد الأقصى للإيداع الواحد هو 2000 ريال
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {dateAmounts.map((item, index) => (
                      <div key={index} className="bg-[#f7f7f7] rounded-[15px] p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg">
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 relative">
                            <Input
                              type="number"
                              min="0"
                              max="2000"
                              step="50"
                              value={item.amount}
                              onChange={(e) => handleAmountChange(index, e.target.value)}
                              placeholder="أدخل المبلغ"
                              className="h-14 text-xl text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px] pr-20"
                              disabled={isSaving}
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 [font-family:'Inter',Helvetica] font-normal text-[#676767] text-lg">
                              ريال
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {amountOptions?.map((option) => (
                              <button
                                key={option.id}
                                onClick={() => handleQuickAmountSelect(index, option.value)}
                                className="px-4 py-2 bg-[#00834d] text-white rounded-[8px] hover:bg-[#006b3f] transition-colors text-sm"
                                disabled={isSaving}
                              >
                                {option.value}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#00834d] text-3xl">
                        {getTotalAmount().toFixed(2)}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                        المبلغ الإجمالي
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                        {dateAmounts.length}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                        عدد الإيداعات المجدولة
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

                  <div className="flex flex-col gap-4">
                    <Button
                      onClick={handleSaveAndContinue}
                      disabled={isSaving || dateAmounts.every(item => !item.amount || parseFloat(item.amount) === 0)}
                      className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                        {isSaving ? "جاري الحفظ..." : "المتابعة للدفع"}
                      </span>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      disabled={isSaving}
                      className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                    >
                      <Link to="/overlay-calendar">
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-2xl [direction:rtl]">
                          السابق
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
