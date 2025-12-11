import React from "react";
import { PaymentOptionsSection } from "./sections/PaymentOptionsSection";
import { ProgressIndicatorSection } from "./sections/ProgressIndicatorSection";
import { SearchBarSection } from "./sections/SearchBarSection";

export const PayPage = (): JSX.Element => {
  return (
    <main
      className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col"
      data-model-id="78:2"
    >
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <ProgressIndicatorSection />
      </div>

      <div className="flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <PaymentOptionsSection />
      </div>

      <div className="absolute top-[27%] left-[15%] w-[71%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <SearchBarSection />
      </div>
    </main>
  );
};
