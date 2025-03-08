
// import React, { useEffect } from 'react';
// import { useRecipeStore } from '../recipeStore';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';

// const RecipeList = () => {
//   const recipes = useRecipeStore(state => state.recipes);
//   const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  
//   useEffect(() => {
//     useRecipeStore.getState().filterRecipes(); 
//   }, [recipes]);

//   const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;

//   return (
//     <div>
//       <SearchBar /> 
//       {recipesToDisplay.length === 0 ? (
//         <p>No recipes found</p>
//       ) : (
//         recipesToDisplay.map(recipe => (
//           <div key={recipe.id}>
//             <h3>{recipe.title}</h3>
//             <p>{recipe.description}</p>
//             <Link to={`/recipe/${recipe.id}`}>View Details</Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default RecipeList;


// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  const handleFavoriteClick = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleFavoriteClick(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}

      <FavoritesList /> {/* Show list of favorite recipes */}
      <RecommendationsList /> {/* Show personalized recommendations */}
    </div>
  );
};

export default RecipeList;
