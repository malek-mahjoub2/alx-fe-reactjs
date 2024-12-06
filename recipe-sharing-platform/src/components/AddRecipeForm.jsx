// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to store form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // State to store errors
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission if errors are found
    }
    
    // If validation passes, reset errors and log the data
    setErrors({});
    
    // For now, just log the new recipe data
    console.log('New Recipe:', { title, ingredients, steps });
    
    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  // Validation function
  const validate = () => {
    const errors = {};

    // Check for empty fields and add corresponding errors
    if (!title) {
      errors.title = 'Title is required';
    }
    if (!ingredients) {
      errors.ingredients = 'Ingredients are required';
    }
    if (!steps) {
      errors.steps = 'Preparation steps are required';
    }

    return errors;
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      
      {/* Display errors */}
      <div className="text-red-500 mb-4">
        {Object.keys(errors).map((key) => (
          <p key={key}>{errors[key]}</p>
        ))}
      </div>
      
      {/* Recipe Form */}
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
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none md:w-auto"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
