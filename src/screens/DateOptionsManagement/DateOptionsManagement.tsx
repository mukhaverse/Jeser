import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/shared/Header";

export const DateOptionsManagement = (): JSX.Element => {
  const [optionType, setOptionType] = useState<"start_date" | "end_date" | "recurring_day">("recurring_day");
  const [dateValue, setDateValue] = useState("");
  const [dayOfMonth, setDayOfMonth] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");

  // Fetch existing date options
  const { data: dateOptions, isPending: isLoadingOptions, error: loadError } = useQuery("DateOption", {
    orderBy: { createdAt: "desc" }
  });

  const { create, update, remove, isPending: isSaving, error: mutationError } = useMutation("DateOption");

  const handleCreateOption = async () => {
    if (!label) return;

    try {
      await create({
        optionType,
        dateValue: dateValue ? new Date(dateValue) : new Date(),
        dayOfMonth: dayOfMonth ? parseInt(dayOfMonth) : 1,
        isDefault: false,
        label,
        description
      });

      // Reset form
      setDateValue("");
      setDayOfMonth("");
      setLabel("");
      setDescription("");
    } catch (err) {
      console.error("Failed to create date option:", err);
    }
  };

  const handleToggleDefault = async (id: string, currentDefault: boolean) => {
    try {
      await update(id, { isDefault: !currentDefault });
    } catch (err) {
      console.error("Failed to toggle default:", err);
    }
  };

  const handleDeleteOption = async (id: string) => {
    try {
      await remove(id);
    } catch (err) {
      console.error("Failed to delete option:", err);
    }
  };

  const getOptionTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      "start_date": "تاريخ البداية",
      "end_date": "تاريخ النهاية",
      "recurring_day": "يوم متكرر شهرياً"
    };
    return typeMap[type] || type;
  };

  return (
    <div className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col">
      <Header />

      <main className="flex-1 px-8 pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-[1000px] mx-auto">
          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                إدارة خيارات التواريخ
              </h2>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Create New Option Form */}
                <div className="space-y-6">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                    إضافة خيار جديد
                  </h3>

                  <div className="space-y-2">
                    <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg block text-right [direction:rtl]">
                      نوع الخيار
                    </label>
                    <select
                      value={optionType}
                      onChange={(e) => setOptionType(e.target.value as any)}
                      className="w-full h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px] bg-white px-4"
                      disabled={isSaving}
                    >
                      <option value="start_date">تاريخ البداية</option>
                      <option value="end_date">تاريخ النهاية</option>
                      <option value="recurring_day">يوم متكرر شهرياً</option>
                    </select>
                  </div>

                  {optionType === "recurring_day" ? (
                    <div className="space-y-2">
                      <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg block text-right [direction:rtl]">
                        اليوم من الشهر (1-31)
                      </label>
                      <Input
                        type="number"
                        min="1"
                        max="31"
                        value={dayOfMonth}
                        onChange={(e) => setDayOfMonth(e.target.value)}
                        placeholder="مثال: 15"
                        className="h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                        disabled={isSaving}
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg block text-right [direction:rtl]">
                        التاريخ
                      </label>
                      <Input
                        type="date"
                        value={dateValue}
                        onChange={(e) => setDateValue(e.target.value)}
                        className="h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                        disabled={isSaving}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg block text-right [direction:rtl]">
                      التسمية
                    </label>
                    <Input
                      type="text"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      placeholder="مثال: منتصف الشهر"
                      className="h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                      disabled={isSaving}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg block text-right [direction:rtl]">
                      الوصف (اختياري)
                    </label>
                    <Input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="وصف إضافي"
                      className="h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                      disabled={isSaving}
                    />
                  </div>

                  <Button
                    onClick={handleCreateOption}
                    disabled={!label || isSaving}
                    className="w-full h-12 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg [direction:rtl]">
                      {isSaving ? "جاري الإضافة..." : "إضافة خيار"}
                    </span>
                  </Button>
                </div>

                {/* Existing Options List */}
                <div className="space-y-4">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl [direction:rtl]">
                    الخيارات الحالية
                  </h3>

                  {isLoadingOptions ? (
                    <div className="text-center py-12">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                        جاري التحميل...
                      </p>
                    </div>
                  ) : loadError ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded [direction:rtl]">
                      <p className="[font-family:'Inter',Helvetica] font-normal">
                        حدث خطأ: {loadError.message}
                      </p>
                    </div>
                  ) : dateOptions && dateOptions.length > 0 ? (
                    <div className="space-y-3 max-h-[600px] overflow-y-auto">
                      {dateOptions.map((option) => (
                        <div key={option.id} className="bg-[#f7f7f7] rounded-[10px] p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 text-right">
                              <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-lg [direction:rtl]">
                                {option.label}
                              </h4>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#676767] text-sm [direction:rtl]">
                                {getOptionTypeLabel(option.optionType)}
                              </p>
                              {option.description && (
                                <p className="[font-family:'Inter',Helvetica] font-normal text-[#676767] text-sm mt-1 [direction:rtl]">
                                  {option.description}
                                </p>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleToggleDefault(option.id, option.isDefault)}
                                disabled={isSaving}
                                className={`px-3 py-1 rounded-[8px] text-sm font-medium transition-colors ${
                                  option.isDefault
                                    ? "bg-[#00834d] text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                              >
                                {option.isDefault ? "افتراضي" : "جعله افتراضي"}
                              </button>
                              <button
                                onClick={() => handleDeleteOption(option.id)}
                                disabled={isSaving}
                                className="px-3 py-1 bg-red-500 text-white rounded-[8px] text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                              >
                                حذف
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            {option.optionType === "recurring_day" ? (
                              <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848]">
                                اليوم: {option.dayOfMonth}
                              </span>
                            ) : (
                              <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848]">
                                {new Date(option.dateValue).toLocaleDateString('ar-SA')}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-[#f7f7f7] rounded-[10px]">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                        لا توجد خيارات محفوظة
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {mutationError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 [direction:rtl]">
                  <p className="[font-family:'Inter',Helvetica] font-normal">
                    حدث خطأ: {mutationError.message}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-4 mt-8 pt-8 border-t-4 border-[#f7f7f7]">
                <Button
                  variant="outline"
                  asChild
                  className="w-full h-16 rounded-[5px] border-[3px] border-[#00834d] bg-white hover:bg-gray-50 transition-colors"
                >
                  <Link to="/home-page">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-[#00834d] text-2xl [direction:rtl]">
                      العودة للرئيسية
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
