import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return {recommendations: recommended};
  }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (upstate) => set(state => ({recipes:state.recipes.map((upstate) => 
  upstate.id=== updateRecipe.id ? {...upstate,...updateRecipe}: upstate
),
})),
deleteRecipe: (id) =>
  set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
})),
}));
export { useRecipeStore };
