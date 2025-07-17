import React from "react";
import { Network, Globe, Zap, Database, Cpu, Server } from "lucide-react";

function HomeSocialProof() {
  return (
    <section className="relative z-10 px-6 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="mb-4">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-full">
              <Network className="w-4 h-4" />
              <span>Trusted Worldwide</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by the World's Most Innovative Companies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of developers who trust API PRO to power their
            mission-critical applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Company Cards */}
          <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="relative mb-4">
              <Globe className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg mb-2">
              InnovateCorp
            </span>
            <span className="text-gray-400 text-sm text-center">
              Global Innovation Leader
            </span>
          </div>
          <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="relative mb-4">
              <Zap className="w-10 h-10 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg mb-2">
              QuantumLeap Tech
            </span>
            <span className="text-gray-400 text-sm text-center">
              Quantum Computing Pioneer
            </span>
          </div>
          <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="relative mb-4">
              <Database className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg mb-2">
              DataWeave Solutions
            </span>
            <span className="text-gray-400 text-sm text-center">
              Big Data Analytics
            </span>
          </div>
          <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="relative mb-4">
              <Cpu className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg mb-2">
              NextGen Systems
            </span>
            <span className="text-gray-400 text-sm text-center">
              AI & Machine Learning
            </span>
          </div>
          <div className="group flex flex-col items-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="relative mb-4">
              <Server className="w-10 h-10 text-red-400 group-hover:text-red-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg mb-2">
              Apex Digital
            </span>
            <span className="text-gray-400 text-sm text-center">
              Cloud Infrastructure
            </span>
          </div>
        </div>
        {/* Tech Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-cyan-500/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
            <div className="text-gray-400 text-sm">API Calls/Day</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-green-500/10">
            <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
            <div className="text-gray-400 text-sm">Uptime SLA</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-purple-500/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              &lt;50ms
            </div>
            <div className="text-gray-400 text-sm">Response Time</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-yellow-500/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSocialProof;
