import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';
import AddRecipeForm from '../components/AddRecipeForm';
import EditRecipeForm from '../components/EditRecipeForm';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<AddRecipeForm />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/edit/:id" element={<EditRecipeForm />} />
    </Routes>
  </Router>
);

export default AppRouter;
