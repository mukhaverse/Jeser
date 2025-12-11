import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@animaapp/playground-react-sdk";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const History = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("الكل");

  // Fetch all date amounts (which contain the actual payment records)
  const { data: allDateAmounts, isPending, error } = useQuery("DateAmount", {
    orderBy: { selectedDate: "desc" }
  });

  const { update, isPending: isUpdating, error: updateError } = useMutation("DateAmount");

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
  };

  const getStatusLabel = (status: string) => {
    const statusMap: Record<string, string> = {
      "pending": "معلق",
      "completed": "مكتمل",
      "cancelled": "ملغي",
      "failed": "فشل"
    };
    return statusMap[status] || status;
  };

  const filteredHistory = allDateAmounts?.filter(item => {
    const matchesSearch = item.recipientName.includes(searchTerm) || 
                         item.id.includes(searchTerm) ||
                         item.amount.toString().includes(searchTerm) ||
                         item.transactionId?.includes(searchTerm);
    const matchesFilter = filterStatus === "الكل" || getStatusLabel(item.status) === filterStatus;
    return matchesSearch && matchesFilter;
  }) || [];

  const handleCancelDeposit = async (id: string) => {
    try {
      await update(id, {
        status: "cancelled"
      });
    } catch (err) {
      console.error("Failed to cancel deposit:", err);
    }
  };

  const getPaymentMethodLabel = (method: string) => {
    const methodMap: Record<string, string> = {
      "apple_pay": "Apple Pay",
      "card": "بطاقة بنكية",
      "bank_transfer": "تحويل بنكي"
    };
    return methodMap[method] || method;
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
        <div className="max-w-[1000px] mx-auto">
          <Card className="w-full bg-white rounded-[30px] border-4 border-[#f7f7f7]">
            <div className="w-full h-[68px] bg-[#f7f7f7] rounded-t-[30px] flex items-center justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-[26px] whitespace-nowrap [direction:rtl]">
                سجل الإيداعات
              </h2>
            </div>
            
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="البحث برقم المعاملة أو اسم النزيل..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px]"
                  />
                </div>
                <div className="w-full md:w-48">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full h-12 text-lg text-right [direction:rtl] border-2 border-[#00834d] rounded-[10px] bg-white px-4"
                  >
                    <option value="الكل">جميع الحالات</option>
                    <option value="مكتمل">مكتمل</option>
                    <option value="ملغي">ملغي</option>
                    <option value="مجدول">مجدول</option>
                  </select>
                </div>
              </div>

              {(error || updateError) && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 [direction:rtl]">
                  <p className="[font-family:'Inter',Helvetica] font-normal">
                    حدث خطأ: {error?.message || updateError?.message}
                  </p>
                </div>
              )}

              <div className="space-y-4 mb-8">
                {isPending ? (
                  <div className="text-center py-12">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                      جاري التحميل...
                    </p>
                  </div>
                ) : filteredHistory.length > 0 ? (
                  filteredHistory.map((item) => (
                    <div key={item.id} className="bg-[#f7f7f7] rounded-[15px] p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-right">
                          <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                            رقم المعاملة
                          </p>
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                            {item.transactionId || item.id.substring(0, 8)}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                            التاريخ
                          </p>
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                            {formatDate(item.selectedDate)}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                            المبلغ
                          </p>
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg">
                            {item.amount} ريال
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <p className="[font-family:'Inter',Helvetica] font-bold text-[#494848] text-sm mb-1 [direction:rtl]">
                            النزيل
                          </p>
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-lg [direction:rtl]">
                            {item.recipientName}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === "completed" 
                              ? "bg-green-100 text-green-800" 
                              : item.status === "cancelled"
                              ? "bg-red-100 text-red-800"
                              : item.status === "failed"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {getStatusLabel(item.status)}
                          </span>
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {getPaymentMethodLabel(item.paymentMethod)}
                          </span>
                        </div>
                        
                        <div className="flex gap-2">
                          {item.status === "pending" && (
                            <Button
                              onClick={() => handleCancelDeposit(item.id)}
                              disabled={isUpdating}
                              variant="outline"
                              size="sm"
                              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                            >
                              <span className="[font-family:'Inter',Helvetica] font-medium text-sm [direction:rtl]">
                                {isUpdating ? "جاري الإلغاء..." : "إلغاء"}
                              </span>
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#00834d] text-[#00834d] hover:bg-[#00834d] hover:text-white"
                          >
                            <span className="[font-family:'Inter',Helvetica] font-medium text-sm [direction:rtl]">
                              عرض التفاصيل
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#494848] text-xl [direction:rtl]">
                      لا توجد معاملات تطابق البحث
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  className="w-full h-16 bg-[#00834d] hover:bg-[#006b3f] rounded-[5px] transition-colors"
                >
                  <Link to="/select-service">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl [direction:rtl]">
                      إيداع جديد
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
