import useRecipeStore from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const [isEditing, setIsEditing] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
  
    const handleEdit = (recipe) => {
      setIsEditing(recipe.id);
      setUpdatedTitle(recipe.title);
      setUpdatedDescription(recipe.description);
    };
  
    const handleUpdate = (id) => {
      updateRecipe({ id, title: updatedTitle, description: updatedDescription });
      setIsEditing(null);
    };
    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <textarea
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                />
                <button onClick={() => handleUpdate(recipe.id)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
                <button onClick={() => handleEdit(recipe)}>Edit</button>
                <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </div>
        ))}
      </div>
    );
  };
  export {RecipeList};