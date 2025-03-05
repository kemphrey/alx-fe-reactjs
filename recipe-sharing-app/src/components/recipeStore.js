import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "", // Initialize searchTerm
  favorites: [],
  
  // Set a new search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Set multiple recipes (useful for initialization)
  setRecipes: (recipes) => set({ recipes }),

  // Filtered recipes based on search term
  filteredRecipes: (state) =>
    state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
}));

export default useRecipeStore;
