import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const progressSteps = [
  { number: 1, label: "ابدأ", active: true },
  { number: 2, label: "", active: false },
  { number: 3, label: "", active: false },
  { number: 4, label: "", active: false },
];

const paymentMethodIcons = [
  {
    src: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/frame-26676.svg",
    alt: "Mastercard",
  },
  {
    src: "https://c.animaapp.com/mj1mbbgnyvQ8i0/img/whatsapp-image-2025-11-26-at-03-10-57-0b53edec-1.png",
    alt: "Payment methods",
  },
];

export const PaymentOptionsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white p-6 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="max-w-[795px] mx-auto space-y-6">
        <div className="flex items-center justify-center gap-4 mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {progressSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    step.active
                      ? "bg-[#00834d] border-[#00834d] text-white"
                      : "bg-white border-[#00834d] text-[#00834d]"
                  }`}
                >
                  {step.number}
                </div>
                {step.label && (
                  <span className="text-sm text-[#2c2c2c] [font-family:'Inter',Helvetica]">
                    {step.label}
                  </span>
                )}
              </div>
              {index < progressSteps.length - 1 && (
                <div
                  className={`h-0.5 w-12 ${
                    step.active ? "bg-[#00834d]" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <Card className="rounded-[30px] border-4 border-[#f7f7f7] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="bg-[#f7f7f7] px-6 py-4 rounded-t-[30px]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#2c2c2c] text-[26px] text-right [direction:rtl]">
              خيارات الدفع
            </h2>
          </div>

          <CardContent className="p-6 space-y-4">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between py-4 border-b border-gray-200 transition-colors hover:bg-gray-50">
                <img
                  className="w-8 h-[27px]"
                  alt="Apple Pay"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/frame-26676.svg"
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-[26px] [direction:rtl]">
                  الدفع عبر Apple Pay
                </span>
                <ChevronDownIcon className="w-6 h-6 text-[#494848]" />
              </button>

              <button className="w-full flex items-center justify-between py-4 transition-colors hover:bg-gray-50">
                <img
                  className="w-8 h-[27px]"
                  alt="Card"
                  src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/frame-26676.svg"
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#2c2c2c] text-[26px] [direction:rtl]">
                  الدفع عبر البطاقة البنكية
                </span>
                <ChevronDownIcon className="w-6 h-6 text-[#2c2c2c]" />
              </button>
            </div>

            <div className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#2c2c2c] text-[26px] [direction:rtl]">
                    رقم البطاقة
                    <span className="text-[#cd0000] text-[28px] mr-1">*</span>
                  </span>
                </div>
                <Input
                  className="w-full h-[65px] bg-white border-4 border-[#f7f7f7] text-[#676767] text-2xl [direction:rtl] px-4"
                  placeholder="الـ 16 رقما المدونة على بطاقتك"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#2c2c2c] text-[26px] [direction:rtl]">
                    الاسم على البطاقة
                    <span className="text-[#cd0000] text-[28px] mr-1">*</span>
                  </span>
                </div>
                <Input
                  className="w-full h-[65px] bg-white border-4 border-[#f7f7f7] text-[#676767] text-2xl [direction:rtl] px-4"
                  placeholder="اسمك المدون على بطاقتك"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2c2c2c] text-[26px] [direction:rtl]">
                      رمز الأمان
                      <span className="text-[#cd0000] text-[28px] mr-1">*</span>
                    </span>
                  </div>
                  <Input
                    className="w-full h-[65px] bg-white border-4 border-[#f7f7f7] text-[#676767] text-2xl text-right px-4"
                    placeholder="الـ 3 ارقام خلف بطاقتك"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2c2c2c] text-[26px] [direction:rtl]">
                      تاريخ الإنتهاء
                      <span className="text-[#cd0000] text-[28px] mr-1">*</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      className="flex-1 h-[65px] bg-white border-4 border-[#f7f7f7] text-[#676767] text-2xl text-right px-4"
                      placeholder="YY"
                    />
                    <Input
                      className="flex-1 h-[65px] bg-white border-4 border-[#f7f7f7] text-[#676767] text-2xl text-right px-4"
                      placeholder="MM"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-4 border-[#f7f7f7]">
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#2c2c2c] text-[26px] text-right">
                    3000.00
                  </span>
                  <img
                    className="w-[19px] h-[21px]"
                    alt="Currency"
                    src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-26-2.png"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#2c2c2c] text-[26px] [direction:rtl]">
                  المبلغ الإجمالي
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6">
              <img
                className="h-[79px] object-contain"
                alt="Payment methods"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/whatsapp-image-2025-11-26-at-03-10-57-0b53edec-1.png"
              />
            </div>
          </CardContent>
        </Card>

        <Link
          to="/select-service"
          className="block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        >
          <Button
            variant="outline"
            className="w-full h-20 rounded-[5px] border-[5px] border-[#00834d] bg-white hover:bg-[#00834d]/5 transition-colors"
          >
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-[32px] [direction:rtl]">
              السابق
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};
