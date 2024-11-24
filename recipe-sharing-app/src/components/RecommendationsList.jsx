import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const Recommendations = useRecipeStore(state => state.Recommendations.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>My RecommendationsList</h2>
      {Recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};