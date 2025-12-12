import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

const progressSteps = [
  { number: 5, active: true, completed: false },
  { number: 4, active: false, completed: true },
  { number: 3, active: false, completed: true },
  { number: 2, active: false, completed: true },
  { number: 1, active: false, completed: true },
];

export const PayPage1 = (): JSX.Element => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"apple" | "card" | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
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

  const handleConfirmPayment = async () => {
    if (!paymentMethod) return;

    try {
      // Update all pending date amounts with payment method and status
      for (const dateAmount of dateAmounts || []) {
        await update(dateAmount.id, {
          status: "completed",
          paymentMethod: paymentMethod === "apple" ? "apple_pay" : "card",
          transactionId: `TXN${Date.now()}${Math.random().toString(36).substr(2, 9)}`
        });
      }

      navigate("/confirmation");
    } catch (err) {
      console.error("Failed to process payment:", err);
    }
  };

  return (
    <div className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col">
      <Header />

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
                خيارات الدفع
              </h2>
            </div>

            <CardContent className="p-8">
              <div className="space-y-4 mb-6">
                <Link to="/pay-page-apple">
                  <button
                    onClick={() => setPaymentMethod("apple")}
                    className={`w-full flex items-center justify-between p-6 rounded-[10px] border-2 transition-all ${
                      paymentMethod === "apple"
                        ? "border-[#00834d] bg-[#00834d]/5"
                        : "border-[#e0e0e0] hover:border-[#00834d]/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-[8px] flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl [direction:rtl]">
                        الدفع عبر Apple Pay
                      </span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      paymentMethod === "apple" ? "border-[#00834d] bg-[#00834d]" : "border-gray-300"
                    } flex items-center justify-center`}>
                      {paymentMethod === "apple" && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                  </button>
                </Link>

                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full flex items-center justify-between p-6 rounded-[10px] border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-[#00834d] bg-[#00834d]/5"
                      : "border-[#e0e0e0] hover:border-[#00834d]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00834d] rounded-[8px] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl [direction:rtl]">
                      الدفع عبر البطاقة البنكية
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    paymentMethod === "card" ? "border-[#00834d] bg-[#00834d]" : "border-gray-300"
                  } flex items-center justify-center`}>
                    {paymentMethod === "card" && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-6 pt-6 border-t-2 border-[#f7f7f7] animate-fade-in">
                  <div className="space-y-2">
                    <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                      رقم البطاقة
                      <span className="text-[#cd0000] text-2xl mr-1">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="الـ 16 رقما المدونة على بطاقتك"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="h-16 text-xl text-right [direction:rtl] border-2 border-[#f7f7f7] rounded-[10px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                      الاسم على البطاقة
                      <span className="text-[#cd0000] text-2xl mr-1">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="اسمك المدون على بطاقتك"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="h-16 text-xl text-right [direction:rtl] border-2 border-[#f7f7f7] rounded-[10px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                        تاريخ الإنتهاء
                        <span className="text-[#cd0000] text-2xl mr-1">*</span>
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="YY"
                          maxLength={2}
                          value={expiryYear}
                          onChange={(e) => setExpiryYear(e.target.value)}
                          className="flex-1 h-16 text-xl text-center border-2 border-[#f7f7f7] rounded-[10px]"
                        />
                        <Input
                          type="text"
                          placeholder="MM"
                          maxLength={2}
                          value={expiryMonth}
                          onChange={(e) => setExpiryMonth(e.target.value)}
                          className="flex-1 h-16 text-xl text-center border-2 border-[#f7f7f7] rounded-[10px]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl block text-right [direction:rtl]">
                        رمز الأمان
                        <span className="text-[#cd0000] text-2xl mr-1">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="الـ 3 ارقام خلف بطاقتك"
                        maxLength={3}
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                        className="h-16 text-xl text-right [direction:rtl] border-2 border-[#f7f7f7] rounded-[10px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 mt-6 border-t-4 border-[#f7f7f7]">
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl">
                    {isLoadingAmounts ? "..." : totalAmount.toFixed(2)}
                  </span>
                  <img
                    className="w-[19px] h-[21px]"
                    alt="Currency"
                    src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-2.png"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                  المبلغ الإجمالي
                </span>
              </div>

              {dateAmounts && dateAmounts.length > 0 && (
                <div className="mt-4 text-center">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#676767] text-sm [direction:rtl]">
                    {dateAmounts.length} إيداع مجدول
                  </p>
                </div>
              )}

              <div className="flex items-center justify-center gap-4 mt-6">
                <img
                  className="h-[60px] object-contain"
                  alt="Visa"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/frame-26676.svg"
                />
                <img
                  className="h-[60px] object-contain"
                  alt="Mastercard"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/whatsapp-image-2025-11-26-at-03-10-57-0b53edec-1.png"
                />
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 [direction:rtl]">
                  <p className="[font-family:'Inter',Helvetica] font-normal">
                    حدث خطأ: {error.message}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-4 mt-8">
                <Button
                  onClick={handleConfirmPayment}
                  disabled={!paymentMethod || (paymentMethod === "card" && (!cardNumber || !cardName || !securityCode || !expiryMonth || !expiryYear)) || isProcessing}
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                    {isProcessing ? "جاري المعالجة..." : "تأكيد الدفع"}
                  </span>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  disabled={isProcessing}
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/summary-page">
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
