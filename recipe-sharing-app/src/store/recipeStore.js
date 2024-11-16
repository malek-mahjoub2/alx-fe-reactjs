// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate personalized recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Mock implementation for recommendations based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Randomize recommendations
    );
    return { recommendations: recommended };
  }),

  // Action to fetch all recipes (you can replace this with actual API calls)
  fetchRecipes: () => set({ recipes: mockRecipes }),

  // Search term and filtered recipes
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

// Mock recipe data for demonstration
const mockRecipes = [
  { id: 1, title: 'Pasta', description: 'Delicious pasta with tomato sauce' },
  { id: 2, title: 'Pizza', description: 'Cheesy pizza with pepperoni' },
  { id: 3, title: 'Salad', description: 'Healthy mixed vegetable salad' },
  { id: 4, title: 'Burger', description: 'Juicy beef burger with lettuce and tomato' },
];

export { useRecipeStore };
