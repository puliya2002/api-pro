import React, { useEffect, useState } from "react";

export function TeamSection() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load team data.");
        setLoading(false);
      });
  }, []);

  // Helper to get initials from name
  function getInitials(name) {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }

  return (
    <section className="relative z-10 px-6 py-14">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="heading-1 mb-4 pt-10">The Team Behind API PRO</h2>
        
      </div>
      {loading ? (
        <div className="text-center text-gray-400">Loading team...</div>
      ) : error ? (
        <div className="text-center text-red-400">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-cyan-500/20 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center"
            >
              {/* Profile image placeholder */}
              <div className="w-16 h-16 rounded-full bg-cyan-800 flex items-center justify-center mb-4 text-2xl font-bold text-cyan-100">
                {getInitials(user.name)}
              </div>
              <div className="text-xl font-bold text-cyan-400 mb-2">
                {user.name}
              </div>
              <div className="text-gray-300 mb-1">
                <span className="font-semibold">Email:</span> {user.email}
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href={`http://${user.website}`}
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
