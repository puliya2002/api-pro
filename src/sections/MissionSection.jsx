import React from "react";
import AboutImge from "../assets/aboutus.jpg"

export function MissionSection() {
  return (
    <section className="relative z-10 px-6 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left mb-16 gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutImge}
            alt="About Us"
            className="rounded-2xl shadow-lg object-cover w-full max-w-xs md:max-w-none h-56 md:h-72 bg-muted"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="my-2">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-full">
              <span>Our Mission</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </span>
          </div>

          <h3 className="heading-2 mb-4">
            We Empower Developers to Build The Future.
          </h3>
          <p className="paragraph text-lg max-w-2xl mx-auto md:mx-0">
            In today's digital world, APIs are the backbone of innovation. Yet,
            managing them has become increasingly complex. API PRO was founded
            on a simple principle: to give developers and businesses the tools
            they need to build, manage, and scale their APIs without the
            headache. We handle the complexity, so you can focus on creating
            amazing products.
          </p>
        </div>
      </div>
    </section>
  );
}
