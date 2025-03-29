import React, { useState } from "react";
import { fetchUsers } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchUsers(query);
      setUsers(data.items); // GitHub API returns `items` array
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-4 p-4 border">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
