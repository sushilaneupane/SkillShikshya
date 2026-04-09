import { useState } from "react";
import { LearnedCard } from "./LearnedCard";
import { FocusedFaceCard } from "./FocusedFaceCard";
import { GrowthCard } from "./GrowthCard";

export const LearnedCardWrapper = () => {
  const [currentCard, setCurrentCard] = useState("learned");

  const handleArrowClick = (direction) => {
    if (currentCard === "focused") {
      if (direction === "right") {
        setCurrentCard("growth");
      }
    } else if (currentCard === "growth") {
      if (direction === "left") {
        setCurrentCard("focused");
      }
    }
  };

  return (
    <div
      onMouseEnter={() => {
        if (currentCard === "learned") {
          setCurrentCard("focused");
        }
      }}
      onMouseLeave={() => {
        setCurrentCard("learned");
      }}
      className="w-fit"
    >
      {currentCard === "learned" && <LearnedCard />}
      {currentCard === "focused" && (
        <FocusedFaceCard onArrowClick={handleArrowClick} />
      )}
      {currentCard === "growth" && (
        <GrowthCard onArrowClick={handleArrowClick} />
      )}
    </div>
  );
};
