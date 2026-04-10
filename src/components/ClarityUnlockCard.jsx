import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clarityunlock from "../assets/clarityunlock.png";
import { Card, CardContent } from "@/components/ui/card";

export const ClarityUnlockCard = () => {
  return (
    <div className="relative flex items-center justify-center font-sans">
      <button className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100">
        <ChevronLeft className="w-5 h-5 text-slate-800" />
      </button>
      
      <button className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-slate-100">
        <ChevronRight className="w-5 h-5 text-slate-800" />
      </button>

      <Card 
        className="rcard-hover relative overflow-visible 
      w-[592px] h-[341px] bg-[#FF2D55] text-white rounded-[40px] shadow-2xl"
        style={{
          clipPath: "path('M 0 40 Q 0 0 40 0 L 552 0 Q 592 0 592 40 L 592 120 A 35 35 0 0 0 592 220 L 592 301 Q 592 341 552 341 L 40 341 Q 0 341 0 301 L 0 220 A 35 35 0 0 0 0 120 Z')"
        }}
      >
        <div className="absolute top-6 left-8 z-1 rotate-[-45deg]">
          <div className="bg-[#E6E7FF] px-1 py-4 rounded-full shadow-lg flex items-center justify-center">
            <span className="text-[#FF7A00] font-[799] text-4xl italic tracking-tighter uppercase leading-none">wow</span>
          </div>
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[22px] border-t-[#E6E7FF] border-r-[15px] border-r-transparent ml-6 -mt-1" />
        </div>

        <div className="absolute bottom-10 right-20 z-10 rotate-[15deg]">
          <div className="bg-[#E6E7FF] px-1 py-4 rounded-full shadow-lg flex items-center justify-center">
            <span className="text-[#FF7A00] font-[799] text-4xl italic tracking-tighter uppercase leading-none">wow</span>
          </div>
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[22px] border-t-[#E6E7FF] border-r-[15px] border-r-transparent ml-12 -mt-1" />
        </div>

        <CardContent className="h-full w-full p-0 flex items-start justify-end relative">
          <div className="absolute right-[185px] bottom-[-13px] z-30 pointer-events-none">
            <img
              src={clarityunlock}
              alt="Clarity Unlocked Character"
              className="w-[390px] h-auto rounded-b-[40px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="pt-10 pr-12">
            <h2 className="font-['Nohemi'] font-bold text-[20px] mb-3 leading-[100%] letter-spacing-0">
              Clarity unlocked— <br />
              stickers, sips, and skills <br />
              all in one go!
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
