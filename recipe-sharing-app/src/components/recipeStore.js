import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // initial state, an empty array of recipes
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })  // action to initialize or set recipes
}));

export { useRecipeStore };