import React from "react";
import { Database } from "lucide-react";
import { navLinks } from "../constsnts/navLinks";

function Footer() {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/20 py-10 px-6 ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Database className="w-7 h-7 text-cyan-400" />
          <span className="text-xl font-bold text-cyan-400">API PRO</span>
        </a>
        {/* Menu */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
        {/* Copyright */}
        <div className="text-gray-500 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} API PRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
