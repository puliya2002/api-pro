import React from "react";

export function ApiSidebar({ sidebar, activeId, onSelect }) {
  return (
    <aside className="md:col-span-1 bg-black/80 border border-cyan-500/20 rounded-2xl p-6 shadow-lg h-fit mb-8 md:mb-0">
      {sidebar.map((cat) => (
        <div key={cat.category} className="mb-8 last:mb-0">
          <div className="text-xs font-bold text-cyan-400 mb-3 tracking-wider uppercase">
            {cat.category}
          </div>
          <nav className="flex flex-col gap-2">
            {cat.links.map((link) => (
              <button
                key={link.id}
                onClick={() => onSelect(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                  link.id === activeId
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 border border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}
