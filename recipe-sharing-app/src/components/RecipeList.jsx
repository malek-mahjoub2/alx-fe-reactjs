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

  // Whenever the filtered recipes change, we apply the filter
  useEffect(() => {
    filterRecipes();  // Trigger filtering whenever the search term or recipes list changes
  }, [filterRecipes]);

  return (
    <div>
      <SearchBar />  {/* Add SearchBar to allow searching */}
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available. Try adjusting your search!</p>
      )}
    </div>
  );
};

export default RecipeList;
