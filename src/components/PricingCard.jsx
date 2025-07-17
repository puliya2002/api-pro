import React from "react";

export function PricingCard({
  name,
  price,
  priceNote,
  features,
  button,
  highlight,
}) {
  return (
    <div
      className={`relative flex flex-col bg-gradient-to-br from-gray-900/80 to-black/80 border rounded-2xl p-8 shadow-lg ${
        highlight
          ? "border-2 border-cyan-400 bg-gradient-to-br from-cyan-900/90 to-blue-900/90 scale-105 z-10 shadow-2xl"
          : "border-cyan-500/20"
      }`}
    >
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">
          Most Popular
        </span>
      )}
      <h3 className="heading-2 text-2xl mb-2 {highlight ? 'text-black' : ''}">
        {name}
      </h3>
      <div
        className={`text-4xl font-bold ${
          highlight ? "text-cyan-100" : "text-cyan-400"
        } mb-4`}
      >
        {price}{" "}
        {priceNote && (
          <span className="text-base font-medium text-gray-400">
            {priceNote}
          </span>
        )}
      </div>
      <ul className="text-left mb-8 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className={highlight ? "text-cyan-100" : "text-gray-300"}>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`font-semibold py-2 rounded-lg transition-all ${
          highlight
            ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-black hover:bg-cyan-300"
            : "bg-cyan-400 text-black hover:bg-cyan-300"
        }`}
      >
        {button}
      </button>
    </div>
  );
}
