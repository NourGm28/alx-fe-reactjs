import create from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [
        {
            title: 'Spaghetti Bolognese',
            description: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic'],
        }
    ],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes })
}));
export default useRecipeStore;