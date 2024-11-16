import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  // Get the recommendations list
  const recommendations = useRecipeStore((state) => state.recommendations);
  // Get the generateRecommendations function from Zustand store
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // Generate recommendations when the component mounts
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add favorites to get personalized suggestions!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => useRecipeStore.getState().addFavorite(recipe.id)}>
              Add to Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
