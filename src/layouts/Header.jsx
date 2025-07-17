import React, { useState } from "react";
import {
  Database,
  Terminal,
  Server,
  Code,
  Network,
  Menu,
  X,
} from "lucide-react";
import { navLinks } from "../constsnts/navLinks";

const iconMap = { Terminal, Server, Code, Network };

function HomeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4 bg-black/80 rounded-xl border border-cyan-500/20 shadow-lg mt-4">
        <a href="/">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Database className="w-8 h-8 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-cyan-400">API PRO</span>
          </div>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, href, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={label}
                href={href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{label}</span>
              </a>
            );
          })}
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold">
            Sign In
          </button>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <button
            className="text-cyan-400 focus:outline-none"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
          {mobileOpen && (
            <div className="absolute top-20 right-6 w-56 bg-black/95 rounded-xl shadow-xl border border-cyan-500/20 flex flex-col py-4 z-50 animate-fade-in">
              {navLinks.map(({ label, href, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center space-x-2 px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{label}</span>
                  </a>
                );
              })}
              <button className="mx-6 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 font-semibold">
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
