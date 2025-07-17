import React from "react";

export function ApiDocContent({ endpoint, description, request, response }) {
  return (
    <main className="md:col-span-3 bg-black/80 border border-cyan-500/20 rounded-2xl p-8 shadow-lg">
      <h2 className="mb-4 text-cyan-400">API PRO Developer Documentation</h2>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{endpoint}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-cyan-400 mb-2">
          Example Request
        </h3>
        <pre className="bg-gray-900 rounded-lg p-4 text-sm text-cyan-200 overflow-x-auto mb-4">
          <code>{request}</code>
        </pre>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-cyan-400 mb-2">
          Example Response (200 OK)
        </h3>
        <pre className="bg-gray-900 rounded-lg p-4 text-sm text-green-200 overflow-x-auto">
          <code>{response}</code>
        </pre>
      </div>
    </main>
  );
}
