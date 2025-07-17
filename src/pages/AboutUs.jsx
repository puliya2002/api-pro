import React from "react";
import { MissionSection } from "../sections/MissionSection";
import { TeamSection } from "../sections/TeamSection";

function AboutUs() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </div>
      {/* Mission Section */}
      <MissionSection />
      {/* Team Section */}
      <TeamSection />
    </div>
  );
}

export default AboutUs;
