import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OngoingCoursesCard = () => {
  return (
    <Card className="relative overflow-hidden border-none rounded-[34px] bg-[#FDE7EE] text-[#EC0B4D] w-[300px] h-[463px] shadow-none">
      <CardContent className="relative h-full p-0">

        {/* Rotated heading */}
        <div className="absolute left-1/2 top-1/2 rotate-[-90deg] origin-left">
          <h2 className="text-[34px] font-bold leading-none tracking-[-0.04em]">
            Ongoing <br/>Courses
          </h2>
        </div>

        {/* Rotated description */}
      <p className="absolute top-1/5 left-1/3 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] origin-right text-[20px] leading-[1.5] font-medium tracking-[-0.01em] text-[#EC0B4D] whitespace-nowrap">
              currently happening—don't <br/>miss out on the action!
           </p>

        {/* Bottom number */}
        <div className="absolute left-[24px] bottom-[20px] flex items-start">
          <div className="relative">
            <span className="block text-[190px] font-black leading-[0.85] tracking-[-0.08em] text-[#EC0B4D]">
              10
            </span>
            <span className="absolute right-[-40px] top-[1px] text-[54px] font-black leading-none text-[#EC0B4D]">
              +
            </span>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};