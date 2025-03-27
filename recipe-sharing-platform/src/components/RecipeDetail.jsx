import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-600 mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md" />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-600">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>

        <Link to="/" className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
