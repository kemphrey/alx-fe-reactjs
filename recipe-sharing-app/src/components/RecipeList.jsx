import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const { recipes, deleteRecipe, addFavorite } = useRecipeStore();

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <button onClick={() => addFavorite(recipe.id)}>❤️ Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
