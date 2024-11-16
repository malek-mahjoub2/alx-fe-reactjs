import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />  {/* Component for adding recipes */}
      <RecipeList />  {/* Component for displaying the list of recipes */}
    </div>
  );
}

export default App;