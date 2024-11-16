import { useEffect, useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';  // Import Zustand store to manage state
import { useParams, useNavigate } from 'react-router-dom';  // useParams to get the ID from the URL, useNavigate for redirection

const EditRecipeForm = () => {
  const { id } = useParams();  // Get the recipe ID from the URL using useParams
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))  // Find the recipe by ID
  );
  const [title, setTitle] = useState(recipe ? recipe.title : '');  // Set initial values
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const updateRecipe = useRecipeStore(state => state.updateRecipe);  // Action to update recipe in Zustand store
  const navigate = useNavigate();  // Hook to navigate to another route after submission

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);  // Prepopulate form fields with current recipe data
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the recipe in Zustand store
    if (recipe) {
      updateRecipe({ ...recipe, title, description });
    }
    // Redirect back to the recipe list (or any other page)
    navigate('/');
  };

  if (!recipe) {
    return <p>Recipe not found!</p>;  // Display message if recipe is not found
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe title"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe description"
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
