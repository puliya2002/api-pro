import React, { useState } from "react";
import { ApiSidebar } from "../sections/ApiSidebar";
import { ApiDocContent } from "../sections/ApiDocContent";

const sidebar = [
  {
    category: "GETTING STARTED",
    links: [{ label: "Authentication", id: "authentication" }],
  },
  {
    category: "CORE RESOURCES",
    links: [
      { label: "GET /users", id: "get-users" },
      { label: "POST /users", id: "post-users" },
      { label: "GET /analytics", id: "get-analytics" },
      { label: "GET /logs", id: "get-logs" },
    ],
  },
];

const docs = {
  "get-users": {
    endpoint: "GET /v1/users",
    description: "Retrieves a list of all users associated with your project.",
    request: `fetch('https://api.apipro.com/v1/users', {\n  method: 'GET',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json'\n  }\n})\n  .then(res => res.json())\n  .then(data => console.log(data));`,
    response: `[{\n  \"id\": \"user_123\",\n  \"name\": \"Jane Doe\",\n  \"email\": \"jane@example.com\",\n  \"created_at\": \"2024-06-01T12:34:56Z\"\n},\n{\n  \"id\": \"user_456\",\n  \"name\": \"John Smith\",\n  \"email\": \"john@example.com\",\n  \"created_at\": \"2024-06-02T09:12:34Z\"\n}]`,
  },
  // Add more endpoints here as needed


};

function APIDocumentation() {
  const [activeId, setActiveId] = useState("get-users");

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <ApiSidebar
            sidebar={sidebar}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <ApiDocContent {...docs[activeId]} />
        </div>
      </section>
    </div>
  );
}

export default APIDocumentation;
