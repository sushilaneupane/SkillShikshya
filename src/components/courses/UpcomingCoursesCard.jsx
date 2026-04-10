import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const UpcomingCoursesCard = () => {
  return (
    <Card className="relative overflow-hidden border-none rounded-[34px] bg-[#FDE7EE] text-[#EC0B4D] w-[218px] h-[463px] shadow-none">
      <CardContent className="relative h-full p-0">
        {/* Rotated heading */}
        <div className="absolute left-[60px] top-[140px] rotate-[-90deg] origin-left">
          <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] whitespace-nowrap">
            Upcoming
          </h2>
          <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em] mt-[8px] whitespace-nowrap">
            Courses
          </h2>
        </div>

        {/* Rotated description */}
        <p className="absolute left-[140px] top-[120px] rotate-[-90deg] origin-left text-[12px] leading-[1.5] font-medium tracking-[-0.01em] max-w-[200px] text-[#EC0B4D] whitespace-normal">
          exciting new courses waiting to boost your skills.
        </p>

        {/* Bottom number */}
        <div className="absolute left-[24px] bottom-[20px] flex items-start">
          <div className="relative">
            <span className="block text-[145px] font-black leading-[0.85] tracking-[-0.08em] text-[#EC0B4D]">
              05
            </span>
            <span className="absolute right-[-18px] top-[3px] text-[54px] font-black leading-none text-[#EC0B4D]">
              +
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};