import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Recipe Sharing Platform</h1>

      <div className="text-center mt-4">
        <Link
          to="/add-recipe"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          + Add New Recipe
        </Link>
      </div>

      {/* Recipe List will go here */}
    </div>
  );
}
