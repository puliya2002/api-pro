import React from "react";

export function FeatureCard({
  icon: Icon,
  iconBg,
  title,
  pulseColor,
  description,
  learnMoreColor,
  learnMoreLabel = "Learn more",
  learnMoreIcon: LearnMoreIcon,
  badge,
  badgeText,
  badgeColor,
  children,
  extra,
  titleClass = "heading-3 flex items-center space-x-2", // allow override
  paddingClass = "p-8", // allow override
}) {
  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900/80 to-black/80 ${paddingClass} rounded-2xl border ${
        badgeColor || "border-cyan-500/20 hover:border-cyan-400/50"
      } transition-all duration-300 transform hover:scale-105 backdrop-blur-sm`}
    >
      {badge && (
        <div
          className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${
            badgeColor || "bg-cyan-400 text-black"
          }`}
        >
          {badgeText}
        </div>
      )}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: iconBg }}
      ></div>
      <div className="relative z-10">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${iconBg}`}
        >
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </div>
        <h3 className={titleClass}>
          <span>{title}</span>
          {pulseColor && (
            <div
              className={`w-2 h-2 ${pulseColor} rounded-full animate-pulse`}
            ></div>
          )}
        </h3>
        <p className="text-lg mb-6 paragraph">{description}</p>
        {children}
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center ${learnMoreColor} group-hover:text-cyan-300 transition-colors`}
          >
            <span className="text-sm font-semibold">{learnMoreLabel}</span>
            {LearnMoreIcon && (
              <LearnMoreIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            )}
          </div>
          {extra}
        </div>
      </div>
    </div>
  );
}
