import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filterRecipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filterRecipes.length === 0 ? (
      filterRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))
      ):(
      <p>No recipes found</p>
    )}
      <Link to="/add">
        <button>Add New Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeList;
