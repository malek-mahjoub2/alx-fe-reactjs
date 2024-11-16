import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);  // Access the recipes from Zustand store

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available. Add a new recipe!</p>
      )}
    </div>
  );
};

export default RecipeList;