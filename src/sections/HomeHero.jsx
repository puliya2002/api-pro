import React from "react";
import { Cpu, Terminal, ArrowRight, Network } from "lucide-react";
import GradientButton from "../components/GradientButton";
import BgVideo from "../assets/bgvideo.mp4";

function HomeHero() {
  return (
    <section className="relative z-10 px-6 py-24 text-center overflow-hidden">
      {/* Background Video with 65% opacity */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-65 pointer-events-none"
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto pt-12 relative z-10">
        {/* Status Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-full">
            <Cpu className="w-4 h-4" />
            <span>Next Generation API Platform</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </span>
        </div>
        <h1 className=" mb-6">
          Effortless API Management.
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Powerful Results.
          </span>
        </h1>
        <p className="  max-w-4xl mx-auto mb-8">
          API PRO is the all-in-one platform designed to take your APIs from
          development to production with unparalleled speed, security, and
          AI-driven insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <GradientButton>
            <Terminal className="w-5 h-5" />
            <span>Get Started for Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
