import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;

