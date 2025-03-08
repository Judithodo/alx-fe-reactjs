
// import { useRecipeStore } from '../recipeStore';
// import { Link } from 'react-router-dom';

// const RecipeList = () => {
//   const recipes = useRecipeStore(state => state.recipes);

//   return (
//     <div>
//       {recipes.map(recipe => (
//         <div key={recipe.id}>
//           <h3>{recipe.title}</h3>
//           <p>{recipe.description}</p>
//           <Link to={`/recipe/${recipe.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;


// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  // Re-run the filter when the recipe list or search term changes
  useEffect(() => {
    useRecipeStore.getState().filterRecipes(); // Trigger filtering when recipes change
  }, [recipes]);

  const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <SearchBar /> {/* Search bar for filtering */}
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
