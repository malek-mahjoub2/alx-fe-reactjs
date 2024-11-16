// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';  // Assuming your Zustand store is in this directory
import SearchBar from './SearchBar'; 
import { Link } from 'react-router-dom';
const RecipeList = () => {
  // Access filtered recipes from Zustand store
  const recipes = useRecipeStore((state) => state.filteredRecipes);  
  // Access the function to filter recipes from Zustand store
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite)
  // Whenever the filtered recipes change, we apply the filter
  useEffect(() => {
    filterRecipes();  // Trigger filtering whenever the search term or recipes list changes
  }, [filterRecipes]);
  const handleFavorite = (recipeId) => {
    addFavorite(recipeId); // Add the recipe to favorites
  };

  const handleRemoveFavorite = (recipeId) => {
    removeFavorite(recipeId); // Remove the recipe from favorites
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar /> {/* Render search bar */}
      <div>
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleFavorite(recipe.id)}>Add to Favorites</button>
              <button onClick={() => handleRemoveFavorite(recipe.id)}>Remove from Favorites</button>
            </div>
          ))
        ) : (
          <p>No recipes found. Try adjusting your search!</p>
        )}
      </div>

      {/* Display favorites and recommendations */}
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default RecipeList;
