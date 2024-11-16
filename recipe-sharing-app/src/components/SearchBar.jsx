// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterRecipes();  // Trigger the filtering action
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ marginBottom: '20px', padding: '10px' }}
    />
  );
};

export default SearchBar;
