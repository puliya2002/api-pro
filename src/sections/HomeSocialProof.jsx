import React from "react";
import { Network, Globe, Zap, Database, Cpu, Server } from "lucide-react";

const companies = [
  {
    name: "InnovateCorp",
    subtitle: "Global Innovation Leader",
    icon: Globe,
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
  },
  {
    name: "QuantumLeap Tech",
    subtitle: "Quantum Computing Pioneer",
    icon: Zap,
    iconColor: "text-yellow-400 group-hover:text-yellow-300",
    border: "border-yellow-500/20 hover:border-yellow-400/50",
  },
  {
    name: "DataWeave Solutions",
    subtitle: "Big Data Analytics",
    icon: Database,
    iconColor: "text-green-400 group-hover:text-green-300",
    border: "border-green-500/20 hover:border-green-400/50",
  },
  {
    name: "NextGen Systems",
    subtitle: "AI & Machine Learning",
    icon: Cpu,
    iconColor: "text-purple-400 group-hover:text-purple-300",
    border: "border-purple-500/20 hover:border-purple-400/50",
  },
  {
    name: "Apex Digital",
    subtitle: "Cloud Infrastructure",
    icon: Server,
    iconColor: "text-red-400 group-hover:text-red-300",
    border: "border-red-500/20 hover:border-red-400/50",
  },
];

function CompanyCard({ name, subtitle, icon: Icon, iconColor, border }) {
  return (
    <div
      className={`group flex flex-col items-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border ${border} transition-all duration-300 transform hover:scale-105 backdrop-blur-sm`}
    >
      <div className="relative mb-4">
        <Icon className={`w-10 h-10 ${iconColor} transition-colors`} />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      <span className="text-white font-bold text-lg mb-2 text-center block">
        {name}
      </span>
      <span className="text-gray-400 text-sm text-center">{subtitle}</span>
    </div>
  );
}

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
          <h2 className="mb-6 heading-2">
            Trusted by the World's Most Innovative Companies
          </h2>
         
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>
        {/* Tech Metrics */}
      </div>
    </section>
  );
}

export default HomeSocialProof;
