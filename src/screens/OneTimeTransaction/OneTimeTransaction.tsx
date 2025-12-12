import { InfoIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

export const OneTimeTransaction = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  // Fetch amount options from database
  const { data: amountOptions, isPending: isLoadingOptions } = useQuery("AmountOption", {
    where: { isActive: true },
    orderBy: { displayOrder: "asc" }
  });

  // Create mutation for saving the selected amount
  const { create: createDateAmount, isPending: isSaving, error } = useMutation("DateAmount");

  // Initialize default amount options if none exist
  const { create: createAmountOption } = useMutation("AmountOption");

  useEffect(() => {
    const initializeAmountOptions = async () => {
      if (!isLoadingOptions && (!amountOptions || amountOptions.length === 0)) {
        const defaultOptions = [
          { value: 100, label: "100 ريال", icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-3.png", isActive: true, displayOrder: 1 },
          { value: 500, label: "500 ريال", icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-4.png", isActive: true, displayOrder: 2 },
          { value: 1000, label: "1000 ريال", icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-7.png", isActive: true, displayOrder: 3 },
          { value: 1500, label: "1500 ريال", icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-6.png", isActive: true, displayOrder: 4 },
          { value: 2000, label: "2000 ريال", icon: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-5.png", isActive: true, displayOrder: 5 },
        ];

        for (const option of defaultOptions) {
          try {
            await createAmountOption(option);
          } catch (err) {
            console.error("Failed to create amount option:", err);
          }
        }
      }
    };

    initializeAmountOptions();
  }, [isLoadingOptions, amountOptions, createAmountOption]);

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseFloat(value);
    if (value === "" || (!isNaN(numValue) && numValue >= 0 && numValue <= 2000)) {
      setCustomAmount(value);
      if (value !== "") {
        setSelectedAmount(numValue);
      }
    }
  };

  const handleNext = async () => {
    if (!selectedAmount) return;

    try {
      // Create a one-time deposit record
      await createDateAmount({
        selectedDate: new Date(),
        amount: selectedAmount,
        recipientName: "احمد بن محمد",
        recipientId: "1234567890",
        status: "pending",
        paymentMethod: "card",
        transactionId: "",
        notes: "إيداع فوري"
      });

      navigate("/summary-page");
    } catch (err) {
      console.error("Failed to create deposit:", err);
    }
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
                  تحديد المبلغ
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

          <Card className="border-4 border-[#f7f7f7] rounded-[30px]">
            <CardContent className="p-0">
              <div className="bg-[#f7f7f7] h-[68px] flex items-center justify-center rounded-t-[30px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                  تحديد المبلغ
                </h1>
              </div>

              <div className="p-8">
                {isLoadingOptions ? (
                  <div className="text-center py-12">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                      جاري تحميل الخيارات...
                    </p>
                  </div>
                ) : (
                  <>
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
                  </>
                )}


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

          <div className="flex flex-col gap-4 mt-8">
            <Button
              onClick={handleNext}
              disabled={!selectedAmount || isSaving}
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
              <Link to="/slecet-detainess">السابق</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
