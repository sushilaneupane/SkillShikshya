import React from "react";
import clarity from "../assets/clarity.svg";
import { Card, CardContent } from "@/components/ui/card";

export const ClarityCard = () => {
  return (
    <Card className="card-hover relative overflow-visible 
            w-[592px] h-[341px] 
      bg-[#FF2D55] text-white rounded-[40px] border-none shadow-xl">

      <img
        src={clarity}
        alt="Start with Clarity Character"
        className="character-img absolute 
          -left-12 
          bottom-[-90px] 
          w-[280px] 
          drop-shadow-2xl z-20"
      />

      <CardContent className="h-full p-10 pr-12 flex flex-col justify-center items-end text-right">

        <h2 className="font-['Nohemi'] font-bold text-[32px] mb-3 leading-[100%] letter-spacing-0 text-center">
          Start with Clarity
        </h2>

        <p className="font-['Outfit'] font-semibold text-[18px] mb-4 opacity-95 leading-[100%] letter-spacing-0">
          Step into a better learning path.
        </p>

        <p className="font-['Outfit'] font-normal text-[18px] opacity-90 leading-[100%] letter-spacing-0 max-w-[280px] mb-6">
          Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, 
          we have a path tailored to your growth.
        </p>

        <button className="btn-hover bg-white text-[#FF2D55] px-8 py-2.5 rounded-full font-bold text-sm shadow-md">
          Get Started
        </button>

      </CardContent>
    </Card>
  );
};
