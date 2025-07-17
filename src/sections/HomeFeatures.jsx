import React from "react";
import { BarChart3, Shield, Code, ArrowRight, Terminal } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";

function HomeFeatures() {
  return (
    <section
      id="features"
      className="relative z-10 px-6 py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="mb-4">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-full">
              <Code className="w-4 h-4" />
              <span>Platform Features</span>
            </span>
          </div>
          <h2 className="mb-6">Everything You Need in One Platform</h2>
          <p className="max-w-3xl mx-auto">
            Streamline your API workflow with powerful tools designed for modern
            development teams
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 - AI Analytics */}
          <FeatureCard
            icon={BarChart3}
            iconBg="bg-gradient-to-r from-cyan-500 to-blue-600"
            title="AI-Powered Analytics"
            pulseColor="bg-cyan-400"
            description="Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand."
            learnMoreColor="text-cyan-400"
            learnMoreIcon={ArrowRight}
            extra={
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-cyan-400 rounded animate-pulse"></div>
                <div
                  className="w-1 h-6 bg-cyan-400 rounded animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-3 bg-cyan-400 rounded animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            }
          />
          {/* Feature 2 - Security */}
          <FeatureCard
            icon={Shield}
            iconBg="bg-gradient-to-r from-green-500 to-emerald-600"
            title="Bank-Grade Security"
            pulseColor="bg-green-400"
            description="Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority."
            learnMoreColor="text-green-400"
            learnMoreIcon={ArrowRight}
            extra={
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 border-2 border-green-400 rounded-full animate-spin"></div>
                <span className="text-green-400 text-xs font-mono">SECURE</span>
              </div>
            }
          />
          {/* Feature 3 - Developer Experience */}
          <FeatureCard
            icon={Code}
            iconBg="bg-gradient-to-r from-purple-500 to-pink-600"
            title="Superior Developer Experience"
            pulseColor="bg-purple-400"
            description="With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half."
            learnMoreColor="text-purple-400"
            learnMoreIcon={ArrowRight}
            extra={
              <div className="flex items-center space-x-1">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-xs font-mono">CLI</span>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;
