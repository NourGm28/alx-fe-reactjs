import { useState } from 'react';
import { useRecipeStore } from '../stores/ReciepeStore';

const AddRecipesForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDesceription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id:Date.now(), title, description });
        setTitle('');
        setDesceription('');
    };
    return (
        <form onSubmit= {handleSubmit}>
        <input
        type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        placeholder= "Title"
        />
        <textarea
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        placeholder= "Description"
        />
        <button type="submit">Add Recipe</button>
        </form>
    );
};
