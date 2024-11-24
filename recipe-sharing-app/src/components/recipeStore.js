import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  ["setSearchTerm","searchTerm"]
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
