import React from "react";
import { Database, Terminal, Server, Code, Network } from "lucide-react";

function HomeNav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4 bg-black/80 rounded-xl border border-cyan-500/20 shadow-lg mt-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Database className="w-8 h-8 text-cyan-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            API PRO
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
          >
            <Terminal className="w-4 h-4" />
            <span>Features</span>
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
          >
            <Server className="w-4 h-4" />
            <span>Pricing</span>
          </a>
          <a
            href="#docs"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
          >
            <Code className="w-4 h-4" />
            <span>Docs</span>
          </a>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
