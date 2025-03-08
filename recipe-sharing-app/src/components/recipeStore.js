
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  favorites: [],  // Store for user favorite recipes
  recommendations: [],  // Store for personalized recommendations

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  setRecipes: (recipes) => set({ recipes }),

  
  // Action to add a recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to delete a recipe by ID
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate personalized recommendations
  generateRecommendations: () => set(state => {
    // Mock recommendation logic: Suggest recipes similar to favorites (randomized for now)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Randomly select recipes
    );
    return { recommendations: recommended };
  }),

  // Action to set the initial list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };






