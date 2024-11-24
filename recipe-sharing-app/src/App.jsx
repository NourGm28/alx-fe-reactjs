import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import AddRecipeForm from './AddRecipeForm';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrapper for RecipeDetails to handle route parameters
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id, 10)} />;
};

export default App;
