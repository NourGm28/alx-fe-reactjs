import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Hook for navigation

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe from the store
    alert('Recipe deleted!');
    navigate('/'); // Navigate to the home page or another desired route
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
