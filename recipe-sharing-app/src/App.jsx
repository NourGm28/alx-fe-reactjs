import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {

  return (
    <>
      <h1>RecipeStore</h1>
        <AddRecipeForm />
        <RecipeList />
    </>
  )
}

export default App;
