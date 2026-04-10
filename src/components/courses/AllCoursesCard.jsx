import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import reactImg from "@/assets/react.png";
import vueImg from "@/assets/vue.png";
import likeImg from "@/assets/likeImage.png";
import rocketImg from "@/assets/rocket.png";
import "./AllCoursesCard.css";

const ReactMark = () => (
  <div className="w-[86px] h-[86px] flex items-center justify-center rotate-[-15deg]">
    <img
      src={reactImg}
      alt="React"
      className="w-full h-full object-contain"
    />
  </div>
);

const SocialMark = () => (
  <div className="w-[96px] h-[82px] flex items-center justify-center">
    <img
      src={likeImg}
      alt="Like"
      className="w-full h-full object-contain"
    />
  </div>
);

const VueMark = () => (
  <div className="w-[78px] h-[78px] flex items-center justify-center">
    <img
      src={vueImg}
      alt="Vue"
      className="w-full h-full object-contain"
    />
  </div>
);

const BrushMark = () => (
  <div className="w-[86px] h-[86px] flex items-center justify-center">
    <img
      src={rocketImg}
      alt="Rocket"
      className="w-full h-full object-contain"
    />
  </div>
);

export const AllCoursesCard = () => {
  return (
    <Card className="relative overflow-hidden border-0 bg-[#F20753] text-white shadow-[0_18px_45px_rgba(0,0,0,0.12)] rounded-[34px] w-full max-w-[596px] aspect-[596/465]">
      <CardContent className="relative h-full">
        
        {/* Top Button */}
        <button className="absolute right-[36px] top-[38px] flex items-center gap-2 text-[18px] font-semibold text-white">
          <span>View all Courses</span>
          <ArrowRight className="h-5 w-5 arrow-bounce" strokeWidth={2.6} />
        </button>

        {/* Icons */}
        <div className="absolute left-1/2 top-[149px] -translate-x-1/2 flex items-end gap-[42px]">
          <ReactMark />
          <SocialMark />
          <VueMark />
          <BrushMark />
        </div>

      <div className="absolute left-[62px] bottom-[10px] flex items-end gap-[28px]">
  
  {/* 23+ */}
  <div className="relative">
    <h2 className="text-[142px] font-black leading-[0.85] tracking-[-0.08em]">
      23
    </h2>

    {/* moved slightly right to create space */}
    <span className="absolute top-[-30px] right-[-40px] text-[64px] font-black leading-none">
      +
    </span>
  </div>

  {/* Text */}
  <div className="pb-[20px] ml-[10px]">
    <div className="text-[31px] font-bold leading-none tracking-[-0.03em]">
      All Courses
    </div>
    <p className="mt-[14px] max-w-[230px] text-[16px] leading-[1.35]">
      courses you're powering through right now.
    </p>
  </div>

</div>
      </CardContent>
    </Card>
  );
};