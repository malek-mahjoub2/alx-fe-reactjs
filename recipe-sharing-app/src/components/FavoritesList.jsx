// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  // Fetch favorite recipe IDs and match them with recipes in the store
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  ).filter(Boolean); // Filtering out undefined recipes if no match is found

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
