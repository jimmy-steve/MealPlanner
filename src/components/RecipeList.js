import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);

  const fetchRecipeListByUser = () => {
    var userId = 1;
    axios
      .get("http://localhost:8000/api/Recipes/getRecipesForCurrentWeek/" + userId)
      .then((response) => {
        console.log(response.data);
        setRecipeList(response.data);
      });
  };

  useEffect(() => {
    fetchRecipeListByUser();
  }, []);

  return (
    <div>
      {recipeList.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.pictureUrl} alt="Recipe" />
          <p>{recipe.instructions}</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
