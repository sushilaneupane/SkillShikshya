import React from "react";
import achieve from "../assets/achieve.svg";
import { Card, CardContent } from "@/components/ui/card";

export const AchieveCard = () => {
    return (
        <Card className="card-hover relative overflow-visible 
            w-[592px] h-[341px] 
            bg-[#b08d6a] text-white rounded-[40px] border-none shadow-xl">

            <img
                src={achieve}
                alt="Achieve and Showcase Illustration"
                className="character-img absolute 
                    right-[-60px] 
                    bottom-[-90px] 
                    w-[330px] 
                    z-20 
                    drop-shadow-2xl"
            />

            <CardContent className="h-full p-10 pl-12 flex flex-col justify-center items-start text-left">
    
                <h2 className="font-['Nohemi'] font-bold text-[32px] mb-3 leading-[100%] letter-spacing-0">
                    Achieve & Showcase
                </h2>

                <p className="font-['Outfit'] font-semibold text-[18px] mb-4 opacity-95 leading-[100%] letter-spacing-0">
                    Build your portfolio, get job-ready.
                </p>

                <p className="font-['Outfit'] font-normal text-[18px] opacity-90 leading-[100%] letter-spacing-0 max-w-[280px] mb-6">
                    Your journey ends with achievement. Each completed project builds a portfolio 
                    showcasing your skills and job readiness, bringing you closer to that dream job, 
                    promotion, or your own venture.
                </p>

                <button className="btn-hover bg-white text-[#b08d6a] px-8 py-2.5 rounded-full font-bold text-sm shadow-md">
                    Get Started
                </button>

            </CardContent>
        </Card>
    );
};
