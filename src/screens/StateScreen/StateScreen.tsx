import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/shared/Header";

export const StateScreen = (): JSX.Element => {
  const { data: scheduledDates, isPending, error } = useQuery("Date", {
    where: { 
      status: "scheduled",
      isScheduled: true 
    },
    orderBy: { selectedDate: "asc" }
  });

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white w-full min-w-[844px] min-h-screen relative flex flex-col">
      <Header />

      <main className="flex-1 px-8 pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="max-w-[800px] mx-auto">
          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                حالة الجدولة
              </h2>
            </div>
            
            <CardContent className="p-8">
              {isPending ? (
                <div className="text-center py-12">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                    جاري التحميل...
                  </p>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded [direction:rtl]">
                  <p className="[font-family:'Inter',Helvetica] font-normal">
                    حدث خطأ: {error.message}
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-[#00834d] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#00834d] text-2xl mb-2 [direction:rtl]">
                      تم إنشاء الجدولة بنجاح
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                      سيتم تنفيذ الإيداعات تلقائياً في التواريخ المحددة
                    </p>
                  </div>

                  <div className="bg-[#f7f7f7] rounded-[15px] p-6 mb-8">
                    <h4 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-xl mb-4 [direction:rtl]">
                      تفاصيل الجدولة:
                    </h4>
                    
                    {scheduledDates && scheduledDates.length > 0 ? (
                      <div className="space-y-4">
                        {scheduledDates.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-[10px] border border-[#e0e0e0]">
                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#00834d]/20 text-[#00834d]">
                                {item.status === "scheduled" ? "مجدول" : item.status}
                              </span>
                              <span className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                                {item.amount} ريال
                              </span>
                            </div>
                            <span className="[font-family:'Inter',Helvetica] font-medium text-[#494848] text-lg [direction:rtl]">
                              {formatDate(item.selectedDate)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg text-center [direction:rtl]">
                        لا توجد إيداعات مجدولة
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors"
                >
                  <Link to="/history">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                      عرض السجل
                    </span>
                  </Link>
                </Button>

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
