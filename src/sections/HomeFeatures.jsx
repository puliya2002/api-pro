import React from "react";
import { BarChart3, Shield, Code, ArrowRight, Terminal } from "lucide-react";

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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your API workflow with powerful tools designed for modern
            development teams
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 - AI Analytics */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span>AI-Powered Analytics</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Go beyond basic metrics. Understand your API usage with
                intelligent, real-time insights and predictive analytics to stay
                ahead of demand.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
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
              </div>
            </div>
          </div>
          {/* Feature 2 - Security */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span>Bank-Grade Security</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Protect your endpoints with OAuth 2.0, API key management, and
                automated threat detection. Your data's integrity is our top
                priority.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 border-2 border-green-400 rounded-full animate-spin"></div>
                  <span className="text-green-400 text-xs font-mono">
                    SECURE
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Feature 3 - Developer Experience */}
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span>Superior Developer Experience</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With auto-generated documentation and a seamless CLI, we make
                building and integrating APIs a joy, not a chore. Cut your
                development time in half.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex items-center space-x-1">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-xs font-mono">CLI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;
