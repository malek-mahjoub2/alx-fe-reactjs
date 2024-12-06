

import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
      return;
    }
    setError('');

    console.log('New Recipe:', { title, ingredients, steps });
    
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block text-lg font-medium" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block text-lg font-medium" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="5"
            placeholder="List the ingredients"
          ></textarea>
        </div>

        {/* Steps Field */}
        <div>
          <label className="block text-lg font-medium" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="6"
            placeholder="Describe the preparation steps"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
