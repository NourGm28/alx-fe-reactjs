import { useRecipeStore } from '../stores/ReciepeStore';

const RecipeList = () => {
    const recieps = useRecipeStore(state => state.recieps);  
    return(
        <div>
            {recieps.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recieps.title}</h3>
                    <p>{recieps.description}</p>
                </div>
            ))},
        </div>
    );
};