import { InfoIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

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

      navigate("/pay-page-1");
    } catch (err) {
      console.error("Failed to create deposit:", err);
    }
  };

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[844px] min-h-screen relative"
      data-model-id="88:67"
    >
      <header className="relative w-full px-[42px] pt-[62px] pb-8">
        <div className="flex items-center justify-between max-w-[760px]">
          <button
            className="flex flex-col gap-4 w-[54px] h-[39px]"
            aria-label="Menu"
          >
            <div className="w-full h-[7px] bg-[#00854c] rounded-[10px]" />
            <div className="w-full h-[7px] bg-[#00854c] rounded-[10px]" />
            <div className="w-full h-[7px] bg-[#00854c] rounded-[10px]" />
          </button>

          <Card className="w-32 h-[129px] border-[#676767] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <CardContent className="p-0 relative h-full">
              <div className="absolute top-[13px] left-[39px] w-[34px] h-[38px]">
                <img
                  alt="English icon"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-5-3.png"
                />
              </div>
              <div className="absolute top-[17px] left-[83px] [font-family:'Inter',Helvetica] font-normal text-[#0b8051] text-2xl">
                E
              </div>
              <div className="absolute top-[47px] left-[55px] w-[34px] h-[37px]">
                <img
                  alt="Arabic icon"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-4-3.png"
                />
              </div>
              <div className="absolute top-[38px] left-8 [font-family:'Jaldi',Helvetica] font-normal text-[#00834d] text-2xl [direction:rtl]">
                ع
              </div>
              <div className="absolute top-[95px] left-[26px] [font-family:'Inter',Helvetica] font-bold text-[#676767] text-2xl">
                English
              </div>
            </CardContent>
          </Card>

          <img
            className="w-[124px] h-[83px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
            alt="Saudi vision 2030 logo"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/saudi-vision-2030-logo-svg-1-8.png"
          />

          <div className="w-px h-[90px] bg-[#676767] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]" />

          <img
            className="w-[59px] h-[77px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
            alt="Logo"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-3.png"
          />
        </div>
      </header>

      <main className="relative w-full px-[27px] pb-[240px]">
        <div className="max-w-[795px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <Alert className="mb-[68px] bg-[#d9edf6] border-0">
            <AlertDescription className="flex items-center justify-end gap-4 text-[#386a7e] text-2xl [font-family:'Inter',Helvetica] [direction:rtl]">
              <span>الحد الاعلى للحوالات هو 2000</span>
              <InfoIcon className="w-5 h-5" />
            </AlertDescription>
          </Alert>

          <Card className="border-4 border-[#f1f1f1]">
            <CardContent className="p-0">
              <div className="bg-[#f7f7f7] h-[68px] flex items-center justify-end px-[51px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-3xl [direction:rtl]">
                  تحديد المبلغ
                </h1>
              </div>

              <div className="p-[22px_37px_26px]">
                {isLoadingOptions ? (
                  <div className="text-center py-12">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                      جاري تحميل الخيارات...
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-3 gap-x-[60px] gap-y-[40px] mb-[22px]">
                      {amountOptions?.map((option) => (
                        <Button
                          key={option.id}
                          onClick={() => {
                            setSelectedAmount(option.value);
                            setCustomAmount("");
                          }}
                          variant="outline"
                          className={`h-[62px] rounded-[30px] border-[3px] transition-colors flex items-center justify-center gap-[21px] px-[25px] py-2 ${
                            selectedAmount === option.value && customAmount === ""
                              ? "border-[#0e9346] bg-[#0e9346] text-white"
                              : "border-[#0e9346] hover:bg-[#0e9346] hover:text-white"
                          }`}
                        >
                          <img
                            className="w-[25px] h-7"
                            alt={option.label}
                            src={option.icon}
                          />
                          <span className="[font-family:'Inter',Helvetica] font-medium text-[25px]">
                            {option.value}
                          </span>
                        </Button>
                      ))}
                    </div>

                    <div className="w-full h-[5px] bg-[#e0e0e0] my-[37px]" />

                    <div className="space-y-[22px]">
                      <p className="text-right [font-family:'Inter',Helvetica] font-normal text-[#494848] text-3xl [direction:rtl]">
                        حدد مبلغا اخر :
                      </p>

                      <div className="relative">
                        <Input
                          type="number"
                          min="0"
                          max="2000"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="h-[62px] rounded-[15px] border-2 border-[#619b88] text-right text-[25px] [font-family:'Inter',Helvetica] font-medium pr-[60px]"
                          placeholder="أدخل المبلغ"
                          disabled={isSaving}
                        />
                        <img
                          className="absolute left-[25px] top-1/2 -translate-y-1/2 w-[30px] h-[33.6px]"
                          alt="Currency icon"
                          src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-8.png"
                        />
                      </div>
                    </div>
                  </>
                )}

                {selectedAmount && (
                  <div className="bg-[#f7f7f7] rounded-[15px] p-6 mt-8">
                    <div className="flex items-center justify-between">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#00834d] text-3xl">
                        {selectedAmount.toFixed(2)}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                        المبلغ المختار
                      </span>
                    </div>
                  </div>
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

          <div className="flex flex-col gap-5 mt-[159px]">
            <Button
              onClick={handleNext}
              disabled={!selectedAmount || isSaving}
              className="w-full h-20 bg-[#0d8f44] hover:bg-[#0b7a39] text-white rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-[32px] [direction:rtl] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? "جاري الحفظ..." : "التالي"}
            </Button>

            <Button
              variant="outline"
              asChild
              disabled={isSaving}
              className="w-full h-20 border-[5px] border-[#0d8f44] text-[#0d8f44] hover:bg-[#0d8f44] hover:text-white rounded-[5px] [font-family:'Inter',Helvetica] font-semibold text-[32px] [direction:rtl] transition-colors"
            >
              <Link to="/slecet-detainess">السابق</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
