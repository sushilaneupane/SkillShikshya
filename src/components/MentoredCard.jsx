import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mentored from "../assets/mentored.svg";
import { Card, CardContent } from "@/components/ui/card";

export const MentoredCard = ({ onArrowClick }) => {
  return (
    <div className="relative inline-block">
      <Card 
        className="card-hover relative 
          w-[592px] h-[341px] 
          bg-[#704ba0] text-white rounded-[40px] border-none shadow-xl"
      >
        <img
          src={mentored}
          alt="Mentorship Illustration"
          className="character-img absolute 
            -left-12 
            bottom-[-50px] 
            w-[280px] 
            drop-shadow-2xl z-20"
        />

        <CardContent className="h-full p-10 pr-12 flex flex-col justify-center items-end text-right">

          <h2 className="text-[32px] font-bold mb-3 leading-[1.2]">
            Get Mentored & Supported
          </h2>

          <p className="text-[18px] font-semibold mb-4 opacity-95">
            You're not learning alone.
          </p>

          <p className="text-[14px] opacity-90 leading-relaxed max-w-[280px] mb-6">
            Stuck or need feedback? SkillShikshya's community of mentors and learners 
            has your back with live support and interactive discussions.
          </p>

          <button className="btn-hover bg-white text-[#704ba0] px-8 py-2.5 rounded-full font-bold text-sm shadow-md">
            Join Community
          </button>

        </CardContent>
      </Card>

      {onArrowClick && (
        <>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onArrowClick('left');
            }}
            className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-slate-800" />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onArrowClick('right');
            }}
            className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-slate-800" />
          </button>
        </>
      )}
    </div>
  );
};
