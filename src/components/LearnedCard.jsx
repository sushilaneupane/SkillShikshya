import React from "react";
import learned from "../assets/learned.svg";
import { Card, CardContent } from "@/components/ui/card";

export const LearnedCard = () => {
    return (
        <Card className="card-hover relative overflow-visible 
          w-[592px] h-[341px] 
          bg-[#009797] text-white rounded-[40px] shadow-xl">

            <img
              src={learned}
              alt="Character Learning"
              className="character-img absolute 
                right-[-20px] 
                top-[30px] 
                w-[240px] 
                drop-shadow-2xl 
                z-20"
            />

            <CardContent className="h-full p-10 pl-12 flex flex-col justify-center items-start text-left">

                <h2 className="font-['Nohemi'] font-bold text-[32px] mb-3 leading-[100%] letter-spacing-0">
                    Learn by Doing
                </h2>

                <p className="font-['Outfit'] font-semibold text-[18px] mb-4 opacity-95 leading-[100%] letter-spacing-0">
                    Practical skills, real projects.
                </p>

                <p className="ffont-['Outfit'] font-normal text-[18px] opacity-90 leading-[100%] letter-spacing-0 max-w-[280px] mb-6">
                    Theory is great, but action is better. At SkillShikshya, you learn by doing.
                    Hands-on projects and real-world scenarios help you build, break,
                    and create—leading to true mastery.
                </p>

                <button className="btn-hover bg-white text-[#009797] px-8 py-2.5 rounded-full font-bold text-sm shadow-md">
                    Get Started
                </button>

            </CardContent>
        </Card>
    );
};
