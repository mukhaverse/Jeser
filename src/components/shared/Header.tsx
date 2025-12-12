import React from "react";

export const Header = (): JSX.Element => {
  const menuBars = [
    { className: "top-0" },
    { className: "top-4" },
    { className: "top-8" },
  ];

  return (
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
  );
};
