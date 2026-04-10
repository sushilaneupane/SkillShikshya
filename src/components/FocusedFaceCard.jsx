import React from "react";
import arrowright from "../assets/arrowright.png";
import arrowleft from "../assets/arrowleft.png";
import focusedface from "../assets/focusedface.png";
import { Card, CardContent } from "@/components/ui/card";

export const FocusedFaceCard = ({ onArrowClick }) => {
  const handleLeftClick = () => {
    onArrowClick("left");
  };

  const handleRightClick = () => {
    onArrowClick("right");
  };

  return (
    <div className="relative inline-block">
      <Card
        className="relative border-none w-[592px] h-[341px] bg-[#008B8B] text-white rounded-[40px] shadow-2xl"
        style={{
          clipPath:
            "path('M 0 40 Q 0 0 40 0 L 552 0 Q 592 0 592 40 L 592 120 A 45 45 0 0 0 592 220 L 592 301 Q 592 341 552 341 L 40 341 Q 0 341 0 301 L 0 220 A 45 45 0 0 0 0 120 Z')",
        }}
      >
        <CardContent className="h-full w-full p-0 relative flex flex-col justify-between">
          <div className="pt-[10px] pl-[70px] z-40">
            <h2 className="font-['Nohemi'] font-bold text-[32px] leading-[100%] letter-spacing-0">
              Focused faces—learning <br />
              mode: ON!
            </h2>
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none">
            <img
              src={focusedface}
              alt="Focused Learning"
              className="absolute bottom-[-40px] right-[-78px] w-[100%] h-auto object-contain"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
            />
          </div>
        </CardContent>
      </Card>

      <button 
        onClick={handleLeftClick}
        className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-gray-100 cursor-pointer"
      >
       <img
                     src={arrowleft}
                     alt="Arrow Unlocked Character"
                     className="w-5 h-5 text-slate-800"/>
             </button>
             
      
      <button 
        onClick={handleRightClick}
        className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-gray-100 cursor-pointer"
      >
        <img
                     src={arrowright}
                     alt="Arrow Unlocked Character"
                     className="w-5 h-5 text-slate-800"/>
      </button>
    </div>
  );
};
