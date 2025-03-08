// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleDelete = () => {
    // Delete the recipe from the store
    deleteRecipe(recipeId);

    // Navigate back to the recipe list or homepage after deletion
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;

