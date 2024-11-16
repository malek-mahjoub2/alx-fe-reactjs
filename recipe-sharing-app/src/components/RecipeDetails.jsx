import { useRecipeStore } from '../store/recipeStore';  // Correct path to Zustand store
import { useParams } from 'react-router-dom';  // To access the recipe ID from the URL

const RecipeDetails = () => {
  const { id } = useParams();  // Extract recipe ID from the URL using useParams
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))  // Find the recipe by ID
  );

  // If no recipe is found, display a "Recipe not found" message
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Optionally, add buttons for editing or deleting */}
    </div>
  );
};

export default RecipeDetails;
