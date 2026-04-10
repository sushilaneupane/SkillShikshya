import { useState } from "react";
// import { Link } from "react-router-dom";
import { ClarityCard } from "./components/ClarityCard";
import { ClarityUnlockCard } from "./components/ClarityUnlockCard";
import { LearnedCardWrapper } from "./components/LearnedCardWrapper";
import { AchieveCard } from "./components/AchieveCard";
import "./App.css";
import { MentoredCard } from "./components/MentoredCard";

function ClarityCardWrapper() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <ClarityUnlockCard /> : <ClarityCard />}
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center"> 
    <div className="bg-[#F5F5F5] min-h-screen p-12">
      <div className="max-w-[1240px] mx-auto mb-10 ml-[89px]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-900 text-bold text-xl mb-2">Your SkillShikshya Journey</p>
            <h1 className="text-5xl font-bold">
              <span className="text-[#00B894]">Step In.</span>{" "}
              <span className="text-black">Skill Up.</span>{" "}
              <span className="text-[#00B894]">Stand</span>{" "}
              <span className="text-black">Out.</span>{" "}
              <span className="text-3xl">🚀</span>
            </h1>
          </div>
          {/* <Link to="/courses" className="btn-hover bg-[#E91E63] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
            Explore Courses
          </Link> */}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto ml-[89px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pb-2">
          <ClarityCardWrapper />
          <LearnedCardWrapper />
          <MentoredCard />
          <AchieveCard />
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default App;