import { Link } from "react-router-dom";
import { AllCoursesCard } from "../components/courses/AllCoursesCard";
import { UpcomingCoursesCard } from "../components/courses/UpcomingCoursesCard";
import { OngoingCoursesCard } from "../components/courses/OngoingCoursesCard";

export default function CoursesPage() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen p-12">
      <div className="max-w-[1240px] mx-auto mb-16">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-gray-600 text-sm mb-3">Explore our classes and master trending skills!</p>
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-black">Dive Into </span>
              <span className="text-[#00B894]">What's Hot Right Now!</span>
              <span className="text-4xl ml-3">🔥</span>
            </h1>
            <p className="text-gray-500 text-xs">Note: Click the cards to view the animation</p>
          </div>
          <Link to="/" className="btn-hover bg-[#00B894] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
            Back
          </Link>
        </div>
      </div>

      <div className="mx-auto">
        <div className="flex gap-6 pb-24 justify-start">
          <AllCoursesCard />
          <UpcomingCoursesCard />
          <OngoingCoursesCard />
        </div>
      </div>
    </div>
  );
}
