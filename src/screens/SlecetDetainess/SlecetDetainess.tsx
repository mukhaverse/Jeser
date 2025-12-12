import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

const progressSteps = [
  { number: 5, active: false, completed: false },
  { number: 4, active: false, completed: false },
  { number: 3, active: false, completed: false },
  { number: 2, active: false, completed: false },
  { number: 1, active: true, completed: false },
];

export const SlecetDetainess = (): JSX.Element => {
  const navigate = useNavigate();
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
            nationalId: "0000000000",
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

  const filteredDetainee = detainees?.find(detainee => {
    return detainee.name.includes(searchTerm) ||
           detainee.nationalId.includes(searchTerm) ||
           detainee.prisonName.includes(searchTerm) ||
           detainee.city.includes(searchTerm);
  });

  const handleSelectDetainee = (detaineeId: string) => {
    setSelectedDetainee(detaineeId);
    navigate("/select-service");
  };

  return (
    <div className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col">
      <Header />

      <main className="flex-1 px-8 pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-[800px] mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="أكتب هنا للبحث"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-16 text-xl text-right [direction:rtl] border border-[#67676752] rounded-[10px] pr-16 pl-16"
            />
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#676767]" />
          </div>

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
                  {step.number === 1 && (
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
                بحث سريع :
              </h2>
            </div>

            <CardContent className="p-8">
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
                  {/* Detainee Box - Single Record */}
                  {filteredDetainee ? (
                    <div className="mb-8">
                      <div
                        className="bg-white border-2 border-[#e0e0e0] rounded-[15px] p-6 hover:border-[#00834d] transition-colors cursor-pointer"
                        onClick={() => setSelectedDetainee(filteredDetainee.id)}
                      >
                        <div className="space-y-4">
                          <div className="text-right">
                            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                              <span className="font-bold">اسم النزيل:</span> {filteredDetainee.name}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                              <span className="font-bold">رقم النزيل:</span> {filteredDetainee.nationalId}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                              <span className="font-bold">اسم السجن:</span> {filteredDetainee.prisonName}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                              <span className="font-bold">المنطقة:</span> {filteredDetainee.region}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                              <span className="font-bold">المهام:</span>{" "}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSelectDetainee(filteredDetainee.id);
                                }}
                                className="text-[#00834d] hover:underline font-medium"
                              >
                                اختيار
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-[#f7f7f7] rounded-[15px]">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                        لا توجد نتائج تطابق البحث
                      </p>
                    </div>
                  )}

                  {/* Pagination */}
                  <div className="flex items-center justify-between mb-8 px-4">
                    <button className="text-[#494848] hover:text-[#00834d] transition-colors">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-lg">
                        التالي
                      </span>
                    </button>
                    <div className="flex items-center gap-4">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                        السجلات الظاهرة: 1 إلى 1 من الإجمالي 1
                      </span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value="1"
                          className="w-16 h-10 text-center border border-[#e0e0e0] rounded-[5px] [font-family:'Inter',Helvetica] font-normal text-[#494848]"
                          readOnly
                        />
                      </div>
                    </div>
                    <button className="text-[#494848] hover:text-[#00834d] transition-colors">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-lg">
                        السابق
                      </span>
                    </button>
                  </div>
                </>
              )}

              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  asChild
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/hello">
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
