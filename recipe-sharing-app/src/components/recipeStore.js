
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',

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

  // Action to set the list of recipes (optional for initializing)
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };



// import create from 'zustand';

// const useRecipeStore = create(set => ({
//   recipes: [],
//   searchTerm: '',

//   // Set search term
//   setSearchTerm: (term) => set({ searchTerm: term }),

//   // Filter recipes based on the search term
//   filterRecipes: () => set(state => ({
//     filteredRecipes: state.recipes.filter(recipe =>
//       recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//     )
//   })),

//   // Initialize recipes
//   setRecipes: (recipes) => set({ recipes }),
// }));

// export { useRecipeStore };

