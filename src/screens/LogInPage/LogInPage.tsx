import {
  GlobeIcon,
  LockIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const LogInPage = (): JSX.Element => {
  return (
    <div
      className="bg-[#f5f5f5] w-full flex flex-col overflow-x-hidden"
      data-model-id="195:695"
    >
      {/* Top Navigation Bar */}
      <div className="w-full bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <MenuIcon className="w-6 h-6 text-[#00834d]" />
            <GlobeIcon className="w-6 h-6 text-[#00834d]" />
            <SearchIcon className="w-6 h-6 text-[#00834d]" />
          </div>
          <img
            className="h-12"
            alt="Logo"
            src="https://c.animaapp.com/mj1mbbgnyvQ8i0/img/group-76.png"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center px-4 py-8">
        <div className="w-full max-w-[400px]">
          <Card className="w-full bg-white rounded-[10px] border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-[#484848] text-2xl [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] mb-8 [direction:rtl]">
                  تسجيل الدخول
                </h1>

                <div className="w-full flex flex-col gap-6">
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold text-[#231f20] text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] text-right [direction:rtl]">
                      اسم المستخدم أو رقم الهوية
                    </label>
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="اسم المستخدم أو رقم الهوية"
                        className="w-full h-12 bg-white rounded-[10px] border-2 border-[#e0e0e0] pr-12 pl-4 text-sm text-[#949494] [font-family:'Inter',Helvetica] [direction:rtl] placeholder:text-[#949494]"
                      />
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#676767]" />
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold text-[#231f20] text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] text-right [direction:rtl]">
                      كلمة المرور
                    </label>
                    <div className="relative w-full">
                      <Input
                        type="password"
                        placeholder="كلمة المرور"
                        className="w-full h-12 bg-white rounded-[10px] border-2 border-[#e0e0e0] pr-12 pl-4 text-sm text-[#949494] [font-family:'Inter',Helvetica] [direction:rtl] placeholder:text-[#949494]"
                      />
                      <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#676767]" />
                    </div>
                  </div>
                </div>

                <Link
                  to="#"
                  className="mt-4 font-semibold text-[#00834d] text-sm [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] [direction:rtl] transition-colors hover:text-[#006b3f]"
                >
                  نسيت كلمة المرور؟
                </Link>

                <div className="w-full flex flex-col items-center gap-4 mt-6">
                  <Button
                    asChild
                    className="w-full h-12 bg-[#00834d] hover:bg-[#006b3f] rounded-[10px] transition-colors"
                  >
                    <Link
                      to="/home-page"
                      className="font-bold text-white text-base [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] [direction:rtl]"
                    >
                      تسجيل الدخول
                    </Link>
                  </Button>

                  <div className="font-bold text-[#00834d] text-base [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] [direction:rtl]">
                    مستخدم جديد؟
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
