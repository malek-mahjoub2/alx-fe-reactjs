// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe id from the URL parameters
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // For navigation if you need to go back

  // Fetch recipe data based on the id
  useEffect(() => {
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <button
        className="text-blue-500 mb-4"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <p className="text-gray-700 mt-2">{recipe.summary}</p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Ingredients:</h2>
            <ul className="list-disc ml-6 mt-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Instructions:</h2>
            <ol className="list-decimal ml-6 mt-2">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
