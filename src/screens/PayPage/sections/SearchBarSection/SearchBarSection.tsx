import React from "react";

const steps = [
  { number: 5, active: false, label: "الدفع" },
  { number: 4, active: true, label: null },
  { number: 3, active: true, label: null },
  { number: 2, active: true, label: null },
  { number: 1, active: true, label: null },
];

export const SearchBarSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-8">
      <nav className="flex items-start gap-0" aria-label="Progress stepper">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-start">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`inline-flex items-center justify-center w-[50px] h-[50px] rounded-[50px] border-[3px] border-solid ${
                  step.active
                    ? "bg-[#00834d] border-[#00834d]"
                    : "border-[#00834d] bg-transparent"
                }`}
              >
                <span
                  className={`[font-family:'Inter',Helvetica] font-semibold text-lg ${
                    step.active ? "text-white" : "text-[#000000b2]"
                  }`}
                >
                  {step.number}
                </span>
              </div>
              {step.label && (
                <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-center whitespace-nowrap [direction:rtl]">
                  {step.label}
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              <img
                className="w-[76px] h-px mt-[25px] mx-0"
                alt="Divider"
                src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/divider-2.svg"
              />
            )}
          </div>
        ))}
      </nav>
    </section>
  );
};
