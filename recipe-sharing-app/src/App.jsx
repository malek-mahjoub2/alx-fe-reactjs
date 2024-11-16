// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary routing components
import RecipeList from './components/RecipeList';  // Import RecipeList component
import RecipeDetails from './components/RecipeDetails';  // Import RecipeDetails component
import AddRecipeForm from './components/AddRecipeForm';  // Import AddRecipeForm component
import EditRecipeForm from './components/EditRecipeForm';  // Import EditRecipeForm component

const App = () => {
  return (
    <Router>  {/* Wrap the entire application in a Router */}
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>  {/* Define all routes inside Routes */}
          {/* Define the home page route */}
          <Route path="/" element={<RecipeList />} />  {/* Route to list of recipes */}
          
          {/* Define route for adding a new recipe */}
          <Route path="/add" element={<AddRecipeForm />} />  {/* Route to add a new recipe */}
          
          {/* Define route for editing a recipe */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />  {/* Route to edit an existing recipe */}
          
          {/* Define route for viewing recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />  {/* Route to view a recipe's details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
