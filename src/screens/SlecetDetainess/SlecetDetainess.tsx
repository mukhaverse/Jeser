import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const progressSteps = [
  { number: 5, active: false, completed: false },
  { number: 4, active: false, completed: false },
  { number: 3, active: false, completed: false },
  { number: 2, active: true, completed: false },
  { number: 1, active: false, completed: true },
];

export const SlecetDetainess = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDetainee, setSelectedDetainee] = useState<string | null>(null);

  // Fetch detainees from database
  const { data: detainees, isPending: isLoadingDetainees, error } = useQuery("Detainee", {
    where: { status: "active" },
    orderBy: { name: "asc" }
  });

  // Initialize default detainees if none exist
  const { create: createDetainee } = useMutation("Detainee");

  useEffect(() => {
    const initializeDetainees = async () => {
      if (!isLoadingDetainees && (!detainees || detainees.length === 0)) {
        const defaultDetainees = [
          {
            name: "احمد بن محمد",
            nationalId: "1234567890",
            prisonName: "إصلاحية مكة",
            city: "مكة المكرمة",
            region: "منطقة مكة المكرمة",
            status: "active",
            admissionDate: new Date("2024-01-15"),
            notes: "نزيل نموذجي"
          },
          {
            name: "محمد بن علي",
            nationalId: "0987654321",
            prisonName: "إصلاحية الرياض",
            city: "الرياض",
            region: "منطقة الرياض",
            status: "active",
            admissionDate: new Date("2024-02-20"),
            notes: ""
          },
          {
            name: "علي بن سعد",
            nationalId: "1122334455",
            prisonName: "إصلاحية جدة",
            city: "جدة",
            region: "منطقة مكة المكرمة",
            status: "active",
            admissionDate: new Date("2024-03-10"),
            notes: ""
          },
          {
            name: "سعد بن خالد",
            nationalId: "5566778899",
            prisonName: "إصلاحية الدمام",
            city: "الدمام",
            region: "المنطقة الشرقية",
            status: "active",
            admissionDate: new Date("2024-04-05"),
            notes: ""
          }
        ];

        for (const detainee of defaultDetainees) {
          try {
            await createDetainee(detainee);
          } catch (err) {
            console.error("Failed to create detainee:", err);
          }
        }
      }
    };

    initializeDetainees();
  }, [isLoadingDetainees, detainees, createDetainee]);

  const filteredDetainees = detainees?.filter(detainee =>
    detainee.name.includes(searchTerm) ||
    detainee.nationalId.includes(searchTerm) ||
    detainee.prisonName.includes(searchTerm) ||
    detainee.city.includes(searchTerm)
  ) || [];

  const getStatusLabel = (status: string) => {
    const statusMap: Record<string, string> = {
      "active": "نشط",
      "inactive": "غير نشط",
      "transferred": "محول"
    };
    return statusMap[status] || status;
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
          {/* Progress Indicator */}
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
                  {step.number === 2 && (
                    <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl text-center whitespace-nowrap [direction:rtl]">
                      اختيار النزيل
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
                اختيار النزيل
              </h2>
            </div>

            <CardContent className="p-8">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Input
                  type="text"
                  placeholder="ابحث باسم النزيل أو رقم الهوية..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-16 text-xl text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px] pr-16"
                />
                <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#676767]" />
              </div>

              {/* Loading State */}
              {isLoadingDetainees ? (
                <div className="text-center py-12">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                    جاري تحميل بيانات النزلاء...
                  </p>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 [direction:rtl]">
                  <p className="[font-family:'Inter',Helvetica] font-normal">
                    حدث خطأ: {error.message}
                  </p>
                </div>
              ) : (
                <>
                  {/* Detainees List */}
                  <div className="space-y-4 mb-8 max-h-[600px] overflow-y-auto">
                    {filteredDetainees.length > 0 ? (
                      filteredDetainees.map((detainee) => (
                        <div
                          key={detainee.id}
                          onClick={() => setSelectedDetainee(detainee.id)}
                          className={`p-6 rounded-[15px] border-2 cursor-pointer transition-all duration-200 ${
                            selectedDetainee === detainee.id
                              ? "border-[#00834d] bg-[#00834d]/5"
                              : "border-[#e0e0e0] hover:border-[#00834d]/50 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-6 h-6 rounded-full border-2 ${
                                selectedDetainee === detainee.id 
                                  ? "border-[#00834d] bg-[#00834d]" 
                                  : "border-gray-300"
                              } flex items-center justify-center`}>
                                {selectedDetainee === detainee.id && (
                                  <div className="w-3 h-3 bg-white rounded-full" />
                                )}
                              </div>
                              <div className="text-right">
                                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-2xl [direction:rtl]">
                                  {detainee.name}
                                </h3>
                                <p className="[font-family:'Inter',Helvetica] font-normal text-[#676767] text-lg [direction:rtl]">
                                  رقم الهوية: {detainee.nationalId}
                                </p>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                              detainee.status === "active" 
                                ? "bg-green-100 text-green-800" 
                                : detainee.status === "transferred"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {getStatusLabel(detainee.status)}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
                            <div>
                              <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                                المؤسسة الإصلاحية
                              </p>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                                {detainee.prisonName}
                              </p>
                            </div>
                            
                            <div>
                              <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                                المدينة
                              </p>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                                {detainee.city}
                              </p>
                            </div>
                            
                            <div>
                              <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                                المنطقة
                              </p>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                                {detainee.region}
                              </p>
                            </div>
                          </div>

                          {detainee.notes && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#676767] text-sm [direction:rtl]">
                                ملاحظات: {detainee.notes}
                              </p>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 bg-[#f7f7f7] rounded-[15px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                          لا توجد نتائج تطابق البحث
                        </p>
                      </div>
                    )}
                  </div>

                  {selectedDetainee && (
                    <div className="bg-[#d9edf6] rounded-[15px] p-6 mb-8">
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
                        <div className="text-right">
                          <p className="[font-family:'Inter',Helvetica] font-bold text-[#386a7e] text-lg [direction:rtl] mb-2">
                            النزيل المختار:
                          </p>
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#386a7e] text-lg [direction:rtl]">
                            {detainees?.find(d => d.id === selectedDetainee)?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  disabled={!selectedDetainee || isLoadingDetainees}
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Link to="/one-time-transaction">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                      التالي
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/select-service">
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
