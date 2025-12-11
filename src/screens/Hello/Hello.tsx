import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Hello = (): JSX.Element => {
  const menuBars = [
    { className: "top-0" },
    { className: "top-4" },
    { className: "top-8" },
  ];

  return (
    <div
      className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col"
      data-model-id="48:104"
    >
      <header className="relative w-full px-[42px] pt-[62px] pb-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <nav className="relative w-full max-w-[760px] h-[129px]">
          <button
            className="absolute top-9 left-0 w-[54px] h-[39px] transition-opacity hover:opacity-70"
            aria-label="Menu"
          >
            <div className="relative w-full h-full">
              {menuBars.map((bar, index) => (
                <div
                  key={`menu-bar-${index}`}
                  className={`absolute ${bar.className} left-0 w-[54px] h-[7px] bg-[#0e9346] rounded-[10px]`}
                />
              ))}
            </div>
          </button>

          <div className="absolute top-0 left-[346px] w-32 h-[129px]">
            <div className="relative w-[134px] h-[129px]">
              <div className="absolute top-0 left-0 w-32 h-[129px] bg-white rounded-[10px] border border-solid border-[#676767] transition-colors hover:border-[#0e9346]" />

              <div className="absolute top-[17px] left-[83px] w-[25px] [font-family:'Inter',Helvetica] font-normal text-[#0b8051] text-2xl tracking-[0] leading-[normal]">
                E
              </div>

              <div className="absolute top-[38px] left-8 w-8 [font-family:'Jaldi',Helvetica] font-normal text-[#00834d] text-2xl text-left tracking-[0] leading-[normal] [direction:rtl]">
                ع
              </div>

              <div className="absolute top-[95px] left-[26px] w-[87px] [font-family:'Inter',Helvetica] font-bold text-[#676767] text-2xl tracking-[0] leading-[normal]">
                English
              </div>

              <img
                className="absolute top-[47px] left-[55px] w-[34px] h-[37px]"
                alt="Group"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-4-1.png"
              />

              <img
                className="absolute top-[13px] left-[39px] w-[34px] h-[38px]"
                alt="Group"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-5-1.png"
              />
            </div>
          </div>

          <img
            className="absolute top-[18px] left-[538px] w-[124px] h-[83px] object-cover"
            alt="Saudi vision"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/saudi-vision-2030-logo-svg-1-8.png"
          />

          <img
            className="absolute top-[15px] left-[676px] w-px h-[90px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/line-1.svg"
          />

          <img
            className="absolute w-[7.77%] h-[59.89%] top-[13.95%] left-[92.23%]"
            alt="Group"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-1.png"
          />
        </nav>
      </header>

      <main className="flex-1 flex items-start justify-center px-[5px] pt-[29px] pb-8 bg-[#d2d2d24f]">
        <Card className="w-full max-w-[760px] bg-white border-2 border-[#ffffff80] shadow-lg translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <CardContent className="flex flex-col items-center p-0">
            <img
              className="w-[398px] h-[388.74px] mt-[79px] object-contain"
              alt="Government Seal"
              src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/------------------.png"
            />

            <h1 className="w-[499px] mt-[79.3px] [font-family:'Inter',Helvetica] font-medium text-[#0e9346] text-[32px] text-center tracking-[0] leading-[normal] [direction:rtl]">
              مرحبا بك في خدمة الدعم المادي للنزلاء
            </h1>

            <p className="w-[464px] mt-2.5 mr-[30px] self-end [font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl tracking-[0] leading-[normal] [direction:rtl]">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-2xl tracking-[0]">
                تمكنك هذه الخدمة من ايداع المال لنزلاء السجون <br />
                من الإقارب الدرجة الأولى و المصرح لهم
              </span>
              <span className="italic text-[32px]">.</span>
            </p>

            <div className="w-[687px] mt-[59px] mr-[27px] self-end [font-family:'Inter',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-[normal] [direction:rtl]">
              <span className="font-semibold text-[#494848]">
                {" "}
                ملاحظات هامة:
                <br />
              </span>
              <span className="text-[#494848]">
                لايمكن استرجاع المبلغ بعد التحويل <br />
                يمكن للإقارب جدولة الدعم المالي بشرط عدم تجاوز المبلغ المسموح به
                <br />
                لمزيد من الاستفسارات يمكن التواصل عن طريق الرقم <br />
                الموحد 920005999
              </span>
            </div>

            <Button
              className="w-[702px] h-20 mt-[162px] mb-[79px] bg-[#0d8f44] hover:bg-[#0b7a3a] rounded-[5px] transition-colors"
              size="lg"
            >
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[normal] [direction:rtl]">
                اذهب لخدمة الدعم المالي
              </span>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
