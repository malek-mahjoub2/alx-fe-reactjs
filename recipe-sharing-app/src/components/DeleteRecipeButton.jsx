import { useRecipeStore } from '../store/recipeStore';  // Import Zustand store to manage state
import { useParams } from 'react-router-dom';  // useParams to get the recipe ID from the URL

const DeleteRecipeButton = () => {
  const { id } = useParams();  // Get the recipe ID from the URL using useParams
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);  // Action to delete recipe from Zustand store

  const handleDelete = () => {
    deleteRecipe(parseInt(id));  // Call the delete action from Zustand and pass the recipe ID
    // After deletion, navigate back to the recipe list or any other page
    window.location.href = '/';  // A simple way to navigate, could also use `useNavigate` from react-router
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
