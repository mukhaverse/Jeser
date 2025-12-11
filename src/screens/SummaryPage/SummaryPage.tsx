import React from "react";
import { FormSection } from "./sections/FormSection";
import { SearchSection } from "./sections/SearchSection";

export const SummaryPage = (): JSX.Element => {
  return (
    <main
      className="bg-white w-full min-w-[844px] flex flex-col"
      data-model-id="85:6"
    >
      <section className="w-full px-[39px] pt-[35px] pb-[35px] translate-y-[-1rem] animate-fade-in opacity-0">
        <SearchSection />
      </section>

      <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <FormSection />
      </section>
    </main>
  );
};
