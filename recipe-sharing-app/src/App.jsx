// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';  // Assuming your Zustand store is in this directory
import SearchBar from './SearchBar';  // The SearchBar component for updating the search term
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import routing components
import RecipeList from './components/RecipeList';  // Import RecipeList component
import RecipeDetails from './components/RecipeDetails';  // Import RecipeDetails component
import AddRecipeForm from './components/AddRecipeForm';  // Import AddRecipeForm component
import EditRecipeForm from './components/EditRecipeForm'; 
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
       <Router>  {/* Wrap the entire application in a Router */}
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>  {/* Define all routes inside Routes */}
          <Route path="/" element={<RecipeList />} />  {/* Route to list of recipes */}
          
          <Route path="/add" element={<AddRecipeForm />} />  {/* Route to add a new recipe */}
          
          <Route path="/edit/:id" element={<EditRecipeForm />} />  {/* Route to edit an existing recipe */}
          
          <Route path="/recipe/:id" element={<RecipeDetails />} />  {/* Route to view a recipe's details */}
        </Routes>
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
