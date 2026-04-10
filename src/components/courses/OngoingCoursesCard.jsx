import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OngoingCoursesCard = () => {
  return (
    <Card className="card-hover relative overflow-hidden 
      w-[200px] h-[340px] 
      bg-[#FCE4EC] text-[#E91E63] rounded-[40px] border-none shadow-xl">

      <CardContent className="h-full p-8 flex flex-col justify-between items-center text-center">
        <div className="flex flex-col items-center gap-1">
          <p className="font-bold text-[13px] leading-[140%] tracking-wide">
            Ongoing
          </p>
          <p className="font-bold text-[13px] leading-[140%] tracking-wide">
            Courses
          </p>
          <p className="font-normal text-[10px] opacity-75 leading-[130%] mt-2 max-w-[140px]">
            currently preparing—don't miss out!
          </p>
        </div>

        <div className="text-center">
          <p className="font-bold text-[90px] leading-[100%] -my-2">10</p>
          <div className="w-8 h-8 bg-[#E91E63] rounded-lg flex items-center justify-center text-white text-lg font-bold mx-auto mt-3">
            +
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
