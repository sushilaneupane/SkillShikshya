import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import growth from "../assets/growth.png";
import { Card, CardContent } from "@/components/ui/card";

export const GrowthCard = ({ onArrowClick }) => {
  const handleLeftClick = () => {
    onArrowClick("left");
  };

  const handleRightClick = () => {
    onArrowClick("right");
  };

  return (
    <div className="relative inline-block">
      <Card
        className="relative border-none w-[592px] h-[341px] bg-[#008B8B] text-white rounded-[40px] shadow-2xl overflow-hidden"
        style={{
          clipPath:
            "path('M 0 40 Q 0 0 40 0 L 552 0 Q 592 0 592 40 L 592 120 A 35 35 0 0 0 592 220 L 592 301 Q 592 341 552 341 L 40 341 Q 0 341 0 301 L 0 220 A 35 35 0 0 0 0 120 Z')",
        }}
      >
        <CardContent className="h-full w-full p-0 relative">
          <h2 className="font-['Nohemi'] font-bold text-[32px] leading-[100%] letter-spacing-0 absolute w-[353px] top-[40px] left-[119px] text-center z-40">
            Laptops, lessons, and a whole lot of growth!
          </h2>

          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-[90%] z-20">
            <img
              src={growth}
              alt="Growth through learning"
              className="w-full h-auto object-contain block"
            />
          </div>
        </CardContent>
      </Card>

      <button 
        onClick={handleLeftClick}
        className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-gray-100 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-slate-800" />
      </button>
      
      <button 
        onClick={handleRightClick}
        className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-gray-100 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-slate-800" />
      </button>
    </div>
  );
};
