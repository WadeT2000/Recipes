import { useEffect, useState } from 'react';

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([])

  const submitRecipe = (event) => {
    event.preventDefault();
    let newRecipeName = document.getElementById('newRecipeName').value;
    let newRecipeInstructions = document.getElementById('newRecipeInstructions').value;

    setRecipes([...recipes, {
      name: newRecipeName,
      instructions: newRecipeInstructions
    }]);
    
    showRecipeForm(false); // Hide the form after submission
  };

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {recipes.length === 0 ? (
        <p>There are no recipes to list.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <strong>{recipe.name}</strong>: {recipe.instructions}
            </li>
          ))}
        </ul>
      )}
      {
        recipeFormShown ? 
          <>
            <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe}>
              <label htmlFor="newRecipeName">Recipe name: </label>
              <input type="text" id="newRecipeName" />
              <label htmlFor="newRecipeInstructions">Instructions:</label>
              <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." />
              <input type="submit" />
            </form>
          </>
          : 
            <button onClick={ () => showRecipeForm(!recipeFormShown) }>Add Recipe</button>
      }
    </div>
  );
}

export default App;